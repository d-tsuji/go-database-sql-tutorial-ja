==================================
不明な列の操作
==================================

----------------------------------

``Scan()`` 関数では、正確な数の結果を保持する変数を渡す必要があります。クエリが何を返すかわからない場合はどうしますか？

クエリが返す列の数がわからない場合は、 ``Columns()`` を使用して列名のリストを検索できます。このリストの長さを調べて列の数を確認し、正しい数の値でスライスを ``Scan()`` に渡すことができます。 たとえば、MySQLからフォークした一部 [#]_ は ``SHOW PROCESSLIST`` コマンドに対して異なる列を返すため、そのために準備する必要があります。そうしないと、エラーが発生します。 これを行う1つの方法は次のとおりです。 他にもあります：

.. code-block:: go

   cols, err := rows.Columns()
   if err != nil {
       // handle the error
   } else {
       dest := []interface{}{ // Standard MySQL columns
           new(uint64), // id
           new(string), // host
           new(string), // user
           new(string), // db
           new(string), // command
           new(uint32), // time
           new(string), // state
           new(string), // info
       }
       if len(cols) == 11 {
           // Percona Server
       } else if len(cols) &gt; 8 {
           // Handle this case
       }
       err = rows.Scan(dest...)
       // Work with the values in dest
   }

列またはその型がわからない場合は、``sql.RawBytes`` を使用する必要があります。

.. code-block:: go

   cols, err := rows.Columns() // Remember to check err afterwards
   vals := make([]interface{}, len(cols))
   for i, _ := range cols {
       vals[i] = new(sql.RawBytes)
   }
   for rows.Next() {
       err = rows.Scan(vals...)
       // Now you can check each element of vals for nil-ness,
       // and you can use type introspection and type assertions
       // to fetch the column into a typed variable.
   }

| 前に戻る: `Working with NULLs <nulls.html>`_
| 次に進む: `The Connection Pool <connection-pool.html>`_

.. [#] MariaDBなど
