==================================
NULLの使用
==================================

NULLのカラムは煩わしく、見通しの悪いコードにつながります。可能であれば避けてください。そうでない場合は、``database/sql`` パッケージの特定の型を用いて実装するか、独自の型を定義する必要があります。

ブール値、文字列、整数、および浮動小数点数にはNULLを許可する型があります。使用方法は次のとおりです。

.. code-block:: go

   for rows.Next() {
       var s sql.NullString
       err := rows.Scan(s)
       // check err
       if s.Valid {
          // use s.String
       } else {
          // NULL value
       }
   }

Nullableな型の制限やNullableなカラムを避ける理由を示します。

#. ``sql.NullUint64`` または ``sql.NullYourFavoriteType`` はありません。このために独自に定義する必要があります。
#. Nullを許容する場合は注意が必要になる場合があり、将来に渡って使うことができません。何かの値が NULL でないと思いますが、間違っているとプログラムがクラッシュします。出荷する前に捕捉できないほど、たまにしか発生しないでしょう。
#. Goの良い点の1つは、すべての変数に便利なデフォルトのゼロ値を持つことです。これはnull値を許可するものの動作方法ではありません。

NULLを処理するために独自の型を定義する必要がある場合は、``sql.NullString`` の設計をコピーして実現できます。

データベースにNULL値が含まれることを避けられない場合は、ほとんどのデータベースシステムがサポートしている ``COALESCE()`` の回避策があります。 次のようなものは、無数の ``sql.Null*``  型を導入することなく使用できるものです。

.. literalinclude:: progs/nullable.go
    :language: go

| 前に戻る: `Handling Errors <errors.html>`_
| 次に進む: `Working with Unknown Columns <varcols.html>`_
