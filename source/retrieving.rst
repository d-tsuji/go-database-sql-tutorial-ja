==================================
Retrieving Result Sets
==================================

----------------------------------

データストアから結果を取得する慣用的な方法がいくつかあります。

#. 行を返すクエリを発行します。
#. 繰り返し用いるステートメントを準備し、複数回の実行と破棄をします。
#. 繰り返し使用するための準備をせずに、一度だけのステートメントを実行します。
#. 単一の行を返すクエリを発行します。この場合はショートカットがあります。

Goの ``database/sql`` の関数名は重要です。関数名に ``Query`` という文字を含んでいれば、データベースにクエリを発行し、空行も可能な行の集合を返すために設計されているとわかります。行を返さないステートメントの場合、 ``Query`` 関数名を使うべきではなく、 ``Exec()`` を用いるべきです。

データベースからのデータの取得
===================================

データベースにクエリを発行して、結果を取得する方法の例を見てみましょう。``user`` テーブルから ``id`` が1であるユーザを取得し、``id`` と ``name`` を表示します。``rows.Scan()`` を使用して1度に1行ずつ、変数に結果を割り当てます。

.. code-block:: go

   var (
       id int
       name string
   )
   rows, err := db.Query("select id, name from users where id = ?", 1)
   if err != nil {
       log.Fatal(err)
   }
   defer rows.Close()
   for rows.Next() {
       err := rows.Scan(id, name)
       if err != nil {
           log.Fatal(err)
       }
       log.Println(id, name)
   }
   err = rows.Err()
   if err != nil {
       log.Fatal(err)
   }

上記のコードで行われていることは次のとおりです。

#. ``db.Query()`` を用いてデータベースにクエリを発行します。そしてエラーをチェックします。
#. ``defer rows.Close()`` とします。これはとても重要です。
#. ``rows.Next()`` を用いて行を繰り返し処理します。
#. ``rows.Scan()`` を用いて、それぞれの行のカラムを結果を変数に読み込みます。
#. 行の反復処理が完了したら、エラーをチェックします。

これはGoで行う唯一の方法です。たとえば行をmapとして取得することはできません。なぜならすべてが強く型付けされているためです。次に示すように、適切な型の変数を宣言し、ポインタとして渡す必要があります。

上記の処理は間違えやすく、悪い結果になる可能性があります。

- ``for rows.Next()`` のループの最後に必ずエラーをチェックする必要があります。ループ中にエラーが発生した場合、エラーについて知る必要があります。すべての行を処理するまで、ループが繰り返されるわけではありません。

-  You should always check for an error at the end of the
   ``for rows.Next()`` loop. If there's an error during the loop, you
   need to know about it. Don't just assume that the loop iterates until
   you've processed all the rows.
-  Second, as long as there's an open result set (represented by
   ``rows``), the underlying connection is busy and can't be used for
   any other query. That means it's not available in the connection
   pool. If you iterate over all of the rows with ``rows.Next()``,
   eventually you'll read the last row, and ``rows.Next()`` will
   encounter an internal EOF error and call ``rows.Close()`` for you.
   But if for some reason you exit that loop -- an early return, or so
   on -- then the ``rows`` doesn't get closed, and the connection
   remains open. (It is auto-closed if ``rows.Next()`` returns false due
   to an error, though). This is an easy way to run out of resources.
-  ``rows.Close()`` is a harmless no-op if it's already closed, so you
   can call it multiple times. Notice, however, that we check the error
   first, and only call ``rows.Close()`` if there isn't an error, in
   order to avoid a runtime panic.
-  You should **always ``defer rows.Close()``**, even if you also call
   ``rows.Close()`` explicitly at the end of the loop, which isn't a bad
   idea.
-  Don't ``defer`` within a loop. A deferred statement doesn't get
   executed until the function exits, so a long-running function
   shouldn't use it. If you do, you will slowly accumulate memory. If
   you are repeatedly querying and consuming result sets within a loop,
   you should explicitly call ``rows.Close()`` when you're done with
   each result, and not use ``defer``.

How Scan() Works
================

When you iterate over rows and scan them into destination variables, Go
performs data type conversions work for you, behind the scenes. It is
based on the type of the destination variable. Being aware of this can
clean up your code and help avoid repetitive work.

For example, suppose you select some rows from a table that is defined
with string columns, such as ``VARCHAR(45)`` or similar. You happen to
know, however, that the table always contains numbers. If you pass a
pointer to a string, Go will copy the bytes into the string. Now you can
use ``strconv.ParseInt()`` or similar to convert the value to a number.
You'll have to check for errors in the SQL operations, as well as errors
parsing the integer. This is messy and tedious.

Or, you can just pass ``Scan()`` a pointer to an integer. Go will detect
that and call ``strconv.ParseInt()`` for you. If there's an error in
conversion, the call to ``Scan()`` will return it. Your code is neater
and smaller now. This is the recommended way to use ``database/sql``.

Preparing Queries
=================

You should, in general, always prepare queries to be used multiple
times. The result of preparing the query is a prepared statement, which
can have placeholders (a.k.a. bind values) for parameters that you'll
provide when you execute the statement. This is much better than
concatenating strings, for all the usual reasons (avoiding SQL injection
attacks, for example).

In MySQL, the parameter placeholder is ``?``, and in PostgreSQL it is
``$N``, where N is a number. SQLite accepts either of these. In Oracle
placeholders begin with a colon and are named, like ``:param1``. We'll
use ``?`` because we're using MySQL as our example.

.. raw:: html

   <pre class="prettyprint lang-go">
   stmt, err := db.Prepare("select id, name from users where id = ?")
   if err != nil {
       log.Fatal(err)
   }
   defer stmt.Close()
   rows, err := stmt.Query(1)
   if err != nil {
       log.Fatal(err)
   }
   defer rows.Close()
   for rows.Next() {
       // ...
   }
   if err = rows.Err(); err != nil {
       log.Fatal(err)
   }
   </pre>

Under the hood, ``db.Query()`` actually prepares, executes, and closes a
prepared statement. That's three round-trips to the database. If you're
not careful, you can triple the number of database interactions your
application makes! Some drivers can avoid this in specific cases, but
not all drivers do. See `prepared statements <prepared.html>`__ for
more.

単一の行のクエリ
==================

クエリが高々1行しか返さない場合、長々とした定型的なコードの代わりにショートカットを使うことができます。

.. code-block:: go

   var name string
   err = db.QueryRow("select name from users where id = ?", 1).Scan(name)
   if err != nil {
       log.Fatal(err)
   }
   fmt.Println(name)

クエリからのエラーは ``Scan()`` が呼ばれるまで遅延され、呼び出されると返ってきます。プリペアステートメントとして ``QueryRow()`` を呼ぶこともできます。

.. code-block:: go

   stmt, err := db.Prepare("select name from users where id = ?")
   if err != nil {
       log.Fatal(err)
   }
   defer stmt.Close()
   var name string
   err = stmt.QueryRow(1).Scan(name)
   if err != nil {
       log.Fatal(err)
   }
   fmt.Println(name)

| 前に戻る: `Accessing the Database <accessing.html>`_
| 次に進む:`Modifying Data and Using Transactions <modifying.html>`_
