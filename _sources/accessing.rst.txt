==================================
データベースへのアクセス
==================================

----------------------------------

ドライバーパッケージを読み込んだので、 ``sql.DB`` のデータベースオブジェクトを作成する準備が整いました。

``sql.DB`` を作成するためには ``sql.Open()`` を使います。これは ``*sql.DB`` を返します。

.. code-block:: go

   func main() {
       db, err := sql.Open("mysql", "user:password@tcp(127.0.0.1:3306)/hello")
       if err != nil {
           log.Fatal(err)
       }
       defer db.Close()
   }

.. note::

   [訳注] 本サイトのコード全体に言えることですが、示されているコードはサンプルなので、実際には ``log.Fatal(err)`` などとはせず、適切に ``return err`` などして呼び元にエラーを返すことになるでしょう。

例では、いくつかの内容を示しています。

#. ``sql.Open`` への最初の引数はドライバー名です。``database/sql`` にドライバーを登録するときに使われる文字列で、混乱を避けるために通常はパッケージ名と同じ名前が用いられます。例えば ``mysql`` は `github.com/go-sql-driver/mysql <https://github.com/go-sql-driver/mysql>`_ のドライバーというようにです。いくつかのドライバーは慣例に従っていないため、データベース名を用います。例えば ``sqlite3`` は `github.com/mattn/go-sqlite3 <https://github.com/mattn/go-sqlite3>`_ として、 ``postgres`` は `github.com/lib/pq <https://github.com/lib/pq>`_ として使われます。
#. 2番目の引数はデータベースへアクセスするためにドライバーに示すドライバー固有の構文の文字列です。上記の例ではローカルのMySQLインスタンスの "hello" データベースに接続しています。
#. ``database/sql`` への操作から返ってきたエラーはほぼ常に確認し、適切にハンドリングすべきです。
#. ``sql.DB`` が関数のスコープを超えて生存するべきではない場合、 ``defer db.Close()`` とするのが Go らしいです。

おそらく直感に反して、 ``sql.Open()`` は **データベースへのコネクションは確立しません** 。またドライバーの接続パラメータを検証しません。代わりに、後で接続するためにデータベースへの抽象化を準備するだけです。データベースへの実際のコネクションは、必要になった最初のときに遅延して、確立します。データベースがアクセス可能であることをすぐに確認する場合(たとえばネットワーク接続を確立してログインする場合)、 ``db.Ping()`` を用います。エラーを確認することを忘れないでください。

.. code-block:: go

   err = db.Ping()
   if err != nil {
       // do something here
   }

データベースの使用が終わったら、 ``Close()`` することが慣用的ですが、 **sql.DB オブジェクトは長期間生存するように設計されています** 。データベースに対して頻繁に ``Open()`` や ``Close()`` しないでください。代わりにアクセスする必要があるデータストア1つにつき、 ``sql.DB`` を **1つ** 生成してください。そして、プログラムがデータストアへのアクセスが完了するまでオブジェクトを保持してください。必要に応じてデータベースオブジェクトを渡したり、何らかの形でグローバルに利用可能にしておきます。データベースアクセスする関数から ``Open()`` や ``Close()`` としないでください。代わりに ``sql.DB`` を引数として関数に渡してください。

``sql.DB`` を長時間生存するオブジェクトとして扱わないと、コネクションの再利用や共有の不足、利用可能なネットワークリソースの不足、 多くのTCPコネクションが ``TIME_WAIT`` ステータスとして残存することによる、まれな障害を引き起こします。このような問題は意図した設計ではないような ``database/sql`` の使い方をしていることを示しています。

.. todo:: 

    "running out of available network resources, or sporadic failures" の訳が微妙

    If you don’t treat the sql.DB as a long-lived object, you could experience problems such as poor reuse and sharing of connections, running out of available network resources, or sporadic failures due to a lot of TCP connections remaining in TIME_WAIT status. Such problems are signs that you’re not using database/sql as it was designed.

さぁ、``sql.DB`` オブジェクトを使いましょう。

| 前に戻る: `Importing a Database Driver <importing.html>`_
| 次に進む: `Retrieving Result Sets <retrieving.html>`_
