==================================
エラーハンドリング
==================================

----------------------------------

``database/sql`` を使ったほぼ全ての操作で、最後の値としてエラーを返します。常にエラーをチェックし、無視しないでください。

エラーの動作が特殊な場合、あるいは知っておく必要のある追加事項がある場合がいくつかあります。

.. todo::

    直訳なので修正する

    There are a few places where error behavior is special-case, or there’s something additional you might need to know.
    エラーの動作が特殊な場合、あるいは知っておく必要のある追加事項がある場合がいくつかあります。

繰り返しのリザルトセットからのエラー
======================================

以下のコードについて考えてみましょう。

.. code-block:: go

   for rows.Next() {
       // ...
   }
   if err = rows.Err(); err != nil {
       // handle the error here
   }

``rows.Err()`` からのエラーは ``rows.Next()`` のループ内での様々なエラーの結果である可能性があります。ループは、正常終了する以外に、様々な理由で終了する可能性があります。そのためループが正常終了したかどうかにかかわらず、常にエラーをチェックする必要があります。異常終了すると自動的に ``rows.Close()`` が呼ばれますが、これは複数回読んでも悪い影響はありません。

リザルトセットを閉じるときのエラー
======================================

以前に説明したように、ループを途中で終了する場合は、明示的に ``sql.Rows`` を閉じる必要があります。ループが正常終了した場合や、エラーが発生した場合は自動的に閉じられますが、誤って以下のように行う場合があります。

.. code-block:: go

   for rows.Next() {
       // ...
       break; // whoops, rows is not closed! memory leak...
   }
   // do the usual "if err = rows.Err()" [omitted here]...
   // it's always safe to [re?]close here:
   if err = rows.Close(); err != nil {
       // but what should we do if there's an error?
       log.Println(err)
   }

``rows.Close()`` で返されるエラーは、エラーを捕捉してチェックするのが最善であるというよく知られた規則の、唯一の例外です。``rows.Close()`` がエラーを返す場合、何をするべきであるかは不明です。エラーメッセージのロギングやpanicを起こすのが唯一できる賢明なことかもしれません。そうでない場合、エラーを無視する必要があるかもしれません。

QueryRow() からのエラー
===========================

単一の行をフェッチする以下のコードについて考えてみましょう。

.. code-block:: go

   var name string
   err = db.QueryRow("select name from users where id = ?", 1).Scan(name)
   if err != nil {
       log.Fatal(err)
   }
   fmt.Println(name)

もし ``id = 1`` であるユーザが存在しない場合はどうなりますか？その場合は結果の行がなく、 ``Scan()`` は ``name`` に何も読み込みません。何が起こるでしょうか。

Gohは結果が空のときに ``QueryRow()`` から返される ``sql.ErrNoRows`` と呼ばれる特別なエラーを定義しています。ほとんどの場合、これは特別なケースとして扱う必要があります。空の結果はアプリケーションのエラーとして見なされないことが多く、エラーがこの特別なエラーであるかどうかを確認しないと、予期しないアプリケーションエラーを引き起こします。

クエリからのエラーは ``Scan()`` が呼ばれるまで遅延され、呼ばれたら返されます。上記のコードは以下のように書きかえるほうが良いです。

.. code-block:: go

   var name string
   err = db.QueryRow("select name from users where id = ?", 1).Scan(name)
   if err != nil {
       if err == sql.ErrNoRows {
           // there were no rows, but otherwise no error occurred
       } else {
           log.Fatal(err)
       }
   }
   fmt.Println(name)

.. note::

    [訳注] Go1.13から ``errors.Is`` のメソッドが追加されているので、エラーが ``sql.ErrNoRows`` であるかどうかの判定は以下のように実装するのが良いでしょう。

    .. code-block:: go

        if err != nil {
            if errors.Is(err, sql.ErrNoRows) {
                // there were no rows, but otherwise no error occurred
            } else {
                log.Fatal(err)
            }
        }

なぜ空のリザルトセットをエラーと見なすのか疑問に思うかもしれません。空のセットについてエラーはありません。その理由は、``QueryRow()`` メソッドは呼び出し元が ``QueryRow()`` が実際に行を見つけたか区別する必要があるため、この特殊なケースを使う必要があるためです。これがないと、``Scan()`` は何も実行せず、変数がデータベースから値を取得できなかったことも気づかないかもしれません。

``QueryRow()`` を使用している場合のみこのエラーが発生するでしょう。それ以外の場面でこのエラーが発生した場合、何が間違っていることをしているでしょう。

データベース固有のエラーの特定
====================================

次のようなコードを書きたくなるかもしれません。

.. code-block:: go

   rows, err := db.Query("SELECT someval FROM sometable")
   // err contains:
   // ERROR 1045 (28000): Access denied for user 'foo'@'::1' (using password: NO)
   if strings.Contains(err.Error(), "Access denied") {
       // Handle the permission-denied error
   }

ただしこれは最善の方法ではありません。例えば、文字列はエラーメッセージを送信するときに使われるサーバの言語に依存します。エラー番号を比較して、特定のエラーが何であるか特定することをおすすめします。

ただし、これは ``database/sql`` パッケージそれ自体に含まれているわけではなく、ドライバーによって異なります。このチュートリアルが対象とするMySQLドライバーでは、次のコードを記述できます。

.. code-block:: go

   if driverErr, ok := err.(*mysql.MySQLError); ok { // Now the error number is accessible directly
       if driverErr.Number == 1045 {
           // Handle the permission-denied error
       }
   }

繰り返しますが、ここでの ``MySQLError`` 型は特定のドライバーによって提供され、``.Number`` フィールドはドライバーによって異なる場合があります。ただし、数値の値はMySQLのエラーメッセージから取得されるため、ドライバー固有ではなくデータベース固有です。

このコードはまだ汚いです。1045 というマジックナンバーと比較しているためです。一部のドライバー(ここではトピックの範囲外であるため、MySQLのドライバーではありません)はエラーを区別する識別子のリストを提供しています。例えば Postgres の ``pq`` ドライバーでは `error.go <https://github.com/lib/pq/blob/master/error.go>`_ にエラーのリストがあります。VividCortexによって管理されているMySQLのエラー番号の一覧である `外部パッケージ <https://github.com/VividCortex/mysqlerr>`_ があります。このようなリストを用いると、上記のコードは次のように改善できます。

.. code-block:: go

   if driverErr, ok := err.(*mysql.MySQLError); ok {
       if driverErr.Number == mysqlerr.ER_ACCESS_DENIED_ERROR {
           // Handle the permission-denied error
       }
   }

コネクションエラーの扱い
==========================

データベースへの接続が切断、強制終了、またはエラーが発生した場合はどうなりますか？

これが発生した場合は失敗したステートメントをリトライするロジックを実装する必要はありません。``database/sql`` にある `connection pooling <connection-pool.html>`_ の一部として、失敗した接続の処理が組み込まれています。クエリや他のステートメントを実行し、コネクションに障害がある場合、Goは新しいコネクションを再度Openします。あるいはコネクションプールから別のコネクションを取得します。最大10回再試行します。

ただし、意図しない結果が生じる可能性があります。 他のエラー状態が発生すると、一部のタイプのエラーが再試行される場合があります。 これはドライバー固有の場合もあります。 MySQLドライバーで発生した1つの例は、 ``KILL`` を使用して望ましくないステートメント(長時間実行されるクエリなど)をキャンセルすると、ステートメントが最大10回再試行されることです。

| 前に戻る: `Using Prepared Statements <prepared.html>`_
| 次に進む: `Working with NULLs <nulls.html>`_
