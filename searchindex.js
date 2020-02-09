Search.setIndex({docnames:["accessing","connection-pool","errors","importing","index","modifying","nulls","overview","prepared","references","retrieving","surprises","varcols"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":2,sphinx:56},filenames:["accessing.rst","connection-pool.rst","errors.rst","importing.rst","index.rst","modifying.rst","nulls.rst","overview.rst","prepared.rst","references.rst","retrieving.rst","surprises.rst","varcols.rst"],objects:{},objnames:{},objtypes:{},terms:{"$n":10,"%d":5,"''":6,"':":2,"'@":2,"'d":[6,11],"'ll":[6,11,12],"'re":[4,5,6,11],"'s":[1,2,3,4,6,11,12],"'t":[1,2,4,5,6,11,12],"'ve":11,"($":8,"(&":[6,11],"()":[0,4,5,6,8,11,12],"(:":8,"(?":[5,8],"([":12,"(\"":[0,2,5,8,10,11],"(`":6,"(cols":12,"(dest":12,"(duration":1,"(err":[0,2,5,8,10],"(i":8,"(id":[10,11],"(n":[1,10],"(name":[2,5,10],"(other":6,"(result":11,"(s":6,"(sql":[8,12],"(string":12,"(uint":12,"(vals":12,"))":12,"),":12,").":[1,2,10],")/":0,"):":[2,11],");":2,")\"":5,")\u3001":[0,5],"**":0,"*sql":0,"++":8,", ?":8,", \"":2,", err":[5,8,11],", len":12,"-case":[2,4],"-database":[4,9],"-denied":2,"-driver":[0,3],"-go":[6,11,12],"-in":9,"-interfaces":9,"-ja":4,"-like":4,"-ness":12,"-oriented":11,"-pool":[11,12],"-proof":6,"-sql":[0,3,4,9],"-sqlite":0,"-statement":11,"-trips":11,"-tutorial":[4,9],"-use":11,"-value":6,".(":2,"..":6,"...":[2,10,12],".\"":1,".begin":[5,8,11],".close":[0,2,4,8,10,11],".columns":12,".com":[0,3,9],".commit":8,".conn":5,".contains":2,".db":[0,7],".e":1,".er":2,".err":[2,10],".errnorows":2,".error":2,".exec":[5,8,11],".fatal":[0,2,5,8,10],".g":9,".go":2,".html":[1,6,11,12],".is":2,".lastinsertid":5,".maxuint":11,".myprocedure":11,".mysqlerror":2,".net":9,".next":[2,6,10,11,12],".null":6,".nullstring":6,".nulluint":6,".nullyourfavoritetype":6,".number":2,".open":0,".org":9,".parseint":10,".ping":0,".prepare":[5,8,10],".printf":5,".println":[2,10],".query":[2,5,6,8,10,11],".queryrow":[2,8,10,11],".rawbytes":12,".result":5,".rollback":8,".rows":[2,5],".rowsaffected":5,".rst":4,".scan":[6,10,11,12],".setconnmaxlifetime":1,".setmaxidleconns":1,".setmaxopenconns":1,".sprint":8,".stmt":8,".string":6,".tx":8,".valid":6,"//":[2,5,6,8,11,12],"/blog":9,"/built":9,"/database":[5,9],"/errors":4,"/go":[0,3,4,9],"/gos":9,"/lib":0,"/mattn":0,"/modifying":4,"/mysql":[0,3],"/or":11,"/pkg":9,"/pq":0,"/runner":4,"/source":4,"/sql":[0,1,2,3,6,8,9,10,11],"/unpredictable":11,"/vividcortex":9,"/work":4,"11":12,"1\u3064":[0,2,5],"1\u5bfe":5,"1\u5ea6":10,"1\u884c":10,"2\u3064":5,":/":9,":=":12,":param":10,":password":0,"</":[6,11,12],"<pre":[6,11,12],"= [":12,"==":[8,12],"=\"":[6,11,12],">`":[1,6,11,12],"?)":8,"@tcp":0,"[i":12,"\" [":2,"\")":[0,2,5,8,10,11],"\",":[0,2,5,10,11],"\">":[6,11,12],"\\n":5,"\u2019s":[2,4],"\u3001\"":8,"\u3002(":3,"\u3002)":3,"\u3002\u3044\u304f\u3064\u304b":[0,10],"\u3002\u3057\u304b\u3057":8,"\u3002\u3059\u3079\u3066":10,"\u3002\u307e\u305f":[0,3,7,8],"\u3002\u884c":10,"\u3002go":[5,10],"\u3002oracle":10,"\u3002postgresql":10,"\u3002sql":10,"\u3002sqlite":10,"\u3002vividcortex":2,"\u3042\u3052":9,"\u3042\u3063":[5,10],"\u3042\u308a":[2,3,4,5,7,8,10],"\u3042\u308b":[0,2,4,5,10],"\u3042\u308b\u3044":[2,4],"\u3042\u308c":3,"\u3044\u304f\u3064\u304b":[0,2,4,5,7,8,10],"\u3044\u3066":10,"\u3044\u307e\u305b":7,"\u3044\u308b":[0,2,3,5,7,8,10],"\u3044\u308c":10,"\u304a\u304d":[0,9],"\u304a\u304f":[2,4,7],"\u304a\u3059\u3059\u3081\u3057":2,"\u304a\u305d\u3089\u304f":0,"\u304a\u5f79":9,"\u304b\u3048\u308b":2,"\u304b\u304b\u308b":5,"\u304b\u304b\u308f\u3089":2,"\u304b\u3069":2,"\u304b\u3069\u3046":2,"\u304b\u306b":10,"\u304b\u3082":[2,5,8],"\u304b\u3089":[0,3,4,5,8],"\u304c\u3042\u308a":2,"\u304c\u3061\u3087\u3063":[4,5],"\u304d\u308c\u3044":10,"\u304f\u3060":[0,3,10],"\u304f\u308c":4,"\u3053\u3053":2,"\u3053\u3053\u3067":2,"\u3053\u3061\u3089":4,"\u3053\u3068":[0,2,3,4,5,7,8,10],"\u3053\u306e":[0,2,3,4,5,7,8,9,10],"\u3053\u308c":[0,2,3,5,7,8,10],"\u3053\u308c\u3089":[5,8],"\u3055\u3041":[0,3],"\u3055\u3044":[0,3,10],"\u3055\u3048":8,"\u3055\u3089\u306b":5,"\u3055\u3093":8,"\u3057\u304b":10,"\u3057\u304b\u3057":8,"\u3057\u307e\u3059":10,"\u3057\u307e\u305b":[0,3],"\u3057\u308c":[2,5,8],"\u3059\u3050":0,"\u3059\u3063\u304d\u308a":10,"\u3059\u3070\u3089\u3057\u3044":3,"\u3059\u3079":10,"\u3059\u3079\u3066":[2,4,10],"\u3059\u308b":[0,2,3,4,7,8,10],"\u3059\u308c":5,"\u305a\u3064":10,"\u305a\u308c":5,"\u305b\u305a":10,"\u305d\u3046":2,"\u305d\u3057\u3066":[0,8,10],"\u305d\u306e":[2,3,5,8,10],"\u305d\u308c":[2,4,5,8],"\u305d\u308c\u305e\u308c":10,"\u305d\u308c\u3089":8,"\u305f\u3044":[3,4,5],"\u305f\u304b":2,"\u305f\u304f":[2,8],"\u305f\u3059":10,"\u305f\u3059\u3079\u3066":5,"\u305f\u3060\u304f":9,"\u305f\u3060\u3057":[2,3,8,10],"\u305f\u3061":3,"\u305f\u3073":8,"\u305f\u307b\u3046":9,"\u305f\u307e\u307e":[5,10],"\u305f\u3081":[0,2,3,5,7,8,10],"\u305f\u3089":[0,2,7,10],"\u305f\u308a":[0,7],"\u3060\u3051":[0,5,10],"\u3060\u3055\u3044":[0,2,3,4,5,8,9,10],"\u3064\u307e\u308a":10,"\u3066\u304f":[5,9],"\u3067\u304d":[2,3,5,7,8,10],"\u3067\u304d\u308b":[2,3,4,5,10],"\u3067\u304d\u308c":5,"\u3067\u304f":[0,2,3,10],"\u3067\u3057\u3087":[2,5],"\u3067\u3059":[0,2,3,4,5,7,8,9,10],"\u3067\u3059\u3079\u3066":10,"\u3067\u3082":[2,10],"\u3068\u3044\u3046":[0,2,4,5,8,10],"\u3068\u3044\u3063":[5,7,10],"\u3068\u3048":[0,10],"\u3068\u304a\u308a":[8,10],"\u3068\u304d":[0,3,5,7,10],"\u3068\u3057":[0,10],"\u3068\u3057\u3066":[0,2,3,4,5,7,8,10],"\u3068\u3059\u308b":0,"\u3068\u3066":10,"\u3068\u308a":10,"\u3068\u308f":[4,5],"\u3068\u308f\u304b\u308a":10,"\u3069\u3046":[2,5],"\u3069\u3061\u3089":10,"\u3069\u306e":[4,8],"\u306a\u3044":[0,2,3,4,5,7,8,10],"\u306a\u304b\u3063":2,"\u306a\u304c\u308a":8,"\u306a\u304f":[2,4,7,8,10],"\u306a\u3055":2,"\u306a\u305c":[2,4,10],"\u306a\u3063":[0,5,7,8],"\u306a\u3069":[2,5,7,8,10],"\u306a\u3082\u306e":5,"\u306a\u3089":10,"\u306a\u308a":[2,4,5,7,10],"\u306a\u308b":[2,3,4,5,8,10],"\u306a\u3093\u3089\u304b":10,"\u306b\u304f\u3044":8,"\u306b\u3059\u3079\u3066":8,"\u306b\u3064":8,"\u306b\u3064\u3044\u3066":[2,7,8,10],"\u306b\u3064\u304d":0,"\u306b\u3068\u3063\u3066":5,"\u306b\u3088\u3063":[2,4,8],"\u306b\u3088\u3063\u3066":2,"\u306b\u3088\u308a":[5,8],"\u306b\u3088\u308b":[0,8],"\u306b\u5bfe\u3057":0,"\u306b\u95a2\u3057":8,"\u306b\u95a2\u3059\u308b":[5,8],"\u306e\u3044":5,"\u306e\u3067":[2,4],"\u306e\u3067\u3057\u3087":4,"\u306e\u307f":[2,3,5,8,10],"\u306e\u3084\u308a":10,"\u306f\u3059":10,"\u306f\u3059\u3079":8,"\u306f\u308b":10,"\u3078\u306e":0,"\u3079\u304d":[0,2,3,5,7,10],"\u307b\u3046":2,"\u307b\u3068\u3093\u3069":2,"\u307b\u307c":[0,2],"\u307e\u3057":[0,3,5,8,10],"\u307e\u3057\u3087":0,"\u307e\u3059":[0,2,3,4,5,7,8,9,10],"\u307e\u305a":7,"\u307e\u305b":[0,2,3,4,5,7,8,10],"\u307e\u305f":[2,10],"\u307e\u3060":2,"\u307e\u3067":[0,2,5,10],"\u307e\u307e":8,"\u307e\u308c":0,"\u307f\u307e\u3057\u3087":[2,8,10],"\u3082\u3057":[2,8],"\u3082\u305f\u3089\u3057":7,"\u3082\u305f\u3089\u3059":8,"\u3082\u306e":[3,8],"\u3084\u3059\u304f":10,"\u3084\u305d\u306e":5,"\u3084\u305d\u308c":5,"\u3084\u3081":5,"\u3084\u308a":8,"\u3088\u3044":5,"\u3088\u3046":[0,2,3,4,5,7,8,10],"\u3088\u304f":[4,8],"\u3088\u308a":[8,10],"\u3089\u3057\u3044":0,"\u3089\u308c":[0,2,5,8],"\u3089\u308c\u308b":[5,8],"\u308c\u307e\u305b":[8,10],"\u308c\u308b":[0,2,4,5,7,8,10],"\u308f\u304b\u308a":8,"\u308f\u3051":[2,10],"\u30a2\u30af\u30bb\u30b9":[3,5,7,8],"\u30a2\u30c9\u30db\u30c3\u30af":3,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3":[2,10],"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a8\u30e9\u30fc":2,"\u30a2\u30f3\u30c1\u30d1\u30bf\u30fc\u30f3":5,"\u30a4\u30f3\u30b8\u30a7\u30af\u30b7\u30e7":10,"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9":0,"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9":[4,7,8],"\u30a4\u30f3\u30e1\u30e2\u30ea":7,"\u30a8\u30e9\u30fc":[0,4,5,10],"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8":2,"\u30a8\u30f3\u30c8\u30ea":4,"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8":[0,5,8],"\u30aa\u30d7\u30b7\u30e7\u30f3":5,"\u30ab\u30e9\u30e0":10,"\u30ac\u30d9\u30fc\u30b8\u30b3\u30ec\u30af\u30bf":5,"\u30ad\u30e3\u30f3\u30bb\u30eb":2,"\u30af\u30a4\u30c3\u30af\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9":4,"\u30af\u30a8\u30ea":[2,5,7],"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8":8,"\u30b0\u30ed\u30fc\u30d0\u30eb":0,"\u30b1\u30fc\u30b9":2,"\u30b3\u30cd\u30af\u30b7\u30e7\u30f3":[0,2,5,7,10],"\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u30d7\u30fc\u30ea\u30f3\u30b0":7,"\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u30d7\u30fc\u30eb":[2,10],"\u30b3\u30d4\u30fc":10,"\u30b3\u30df\u30c3\u30c8":8,"\u30b3\u30ed\u30f3":10,"\u30b3\u30f3\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3":4,"\u30b3\u30fc\u30c9":[2,3,5,8,10],"\u30b5\u30a4\u30c8":[4,9],"\u30b5\u30dd\u30fc\u30c8":8,"\u30b5\u30fc\u30d0":2,"\u30b5\u30fc\u30d0\u30fc":8,"\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8":10,"\u30b9\u30ad\u30e3\u30f3":10,"\u30b9\u30ad\u30fc\u30de":7,"\u30b9\u30b3\u30fc\u30d7":[0,5],"\u30b9\u30c6\u30fc\u30bf\u30b9":0,"\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8":[2,7,8,10],"\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8id":8,"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3":8,"\u30bb\u30c3\u30c8":2,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9":8,"\u30bf\u30a4\u30d7":2,"\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8":5,"\u30bf\u30b9\u30af":7,"\u30c1\u30a7\u30c3\u30af":[2,4,5,10],"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb":2,"\u30c6\u30ad\u30b9\u30c8\u30af\u30a8\u30ea":8,"\u30c6\u30fc\u30d6\u30eb":[5,10],"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2":[0,5,10],"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9":[3,4,5,7,8],"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30a2\u30af\u30bb\u30b9":0,"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8":0,"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2":7,"\u30c8\u30d4\u30c3\u30af":2,"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3":7,"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8":3,"\u30c9\u30e9\u30a4\u30d0\u30fc":[0,2,3,7,8,10],"\u30c9\u30e9\u30a4\u30d0\u30fc\u30d1\u30c3\u30b1\u30fc\u30b8":0,"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af":[0,7],"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30dd\u30fc\u30c8":7,"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30ea\u30bd\u30fc\u30b9":0,"\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0":[0,10],"\u30d0\u30a4\u30c8":10,"\u30d0\u30a4\u30ca\u30ea":8,"\u30d0\u30a4\u30f3\u30c9":10,"\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9":[7,8,10],"\u30d0\u30fc\u30b8\u30e7\u30f3":8,"\u30d1\u30c3\u30b1\u30fc\u30b8":[0,2,3,4,5,8],"\u30d1\u30c3\u30b1\u30fc\u30b8\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8":4,"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9":8,"\u30d1\u30e9\u30e1\u30fc\u30bf":[0,8,10],"\u30d3\u30b8\u30fc":[8,10],"\u30d5\u30a1\u30a4\u30eb\u30cf\u30f3\u30c9\u30e9":7,"\u30d5\u30a3\u30fc\u30eb\u30c9":2,"\u30d5\u30a7\u30c3\u30c1":[2,5,7],"\u30d7\u30ea\u30da\u30a2\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8":10,"\u30d7\u30ea\u30da\u30a2\u30fc\u30c9\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8":[5,10],"\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8":[4,9],"\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0":10,"\u30d7\u30ed\u30b0\u30e9\u30e0":0,"\u30d7\u30ed\u30bb\u30b9":7,"\u30d7\u30ed\u30c8\u30b3\u30eb":8,"\u30d7\u30fc\u30eb":[5,7,8],"\u30dd\u30a4\u30f3\u30bf":10,"\u30de\u30b8\u30c3\u30af\u30ca\u30f3\u30d0\u30fc":2,"\u30de\u30c3\u30d4\u30f3\u30b0":8,"\u30de\u30fc\u30af":7,"\u30e1\u30bd\u30c3\u30c9":[2,5],"\u30e1\u30bf\u30c7\u30fc":5,"\u30e1\u30bf\u30c7\u30fc\u30bf":5,"\u30e1\u30e2\u30ea":10,"\u30e6\u30fc\u30b6":[2,5,10],"\u30e6\u30fc\u30b6\u30fc":8,"\u30ea\u30b9\u30c8":2,"\u30ea\u30bd\u30fc\u30b9":[5,7,10],"\u30ea\u30c8\u30e9\u30a4":[2,8],"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9":4,"\u30ea\u30da\u30a2\u30fc\u30c9\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8":5,"\u30ea\u30f3\u30af":9,"\u30ea\u30fc\u30af":8,"\u30eb\u30fc\u30d7":[2,10],"\u30ec\u30a4\u30e4":8,"\u30ec\u30a4\u30e4\u30fc":8,"\u30ec\u30b9\u30dd\u30f3\u30b9":8,"\u30ec\u30b9\u30dd\u30f3\u30b9id":8,"\u30ed\u30ae\u30f3\u30b0":2,"\u30ed\u30b0\u30a4\u30f3":0,"\u30ed\u30b8\u30c3\u30af":2,"\u30ed\u30fc\u30ab\u30eb":0,"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb":7,"\u30ed\u30fc\u30eb\u30d0\u30c3\u30af":8,"\u4e00\u3064":5,"\u4e00\u5ea6":10,"\u4e00\u6642":5,"\u4e00\u7684":4,"\u4e00\u822c":[2,3,4,10],"\u4e00\u89a7":[2,4],"\u4e00\u8cab\u6027":8,"\u4e00\u90e8":[2,3,5],"\u4e0a\u8a18":[0,2,5,10],"\u4e0d\u6574\u5408":5,"\u4e0d\u660e":2,"\u4e0d\u81ea\u7136":[2,4,5],"\u4e0d\u8db3":[0,5,7],"\u4e26\u5217":8,"\u4e88\u60f3":8,"\u4e88\u671f":2,"\u4e8b\u9805":[2,4,8],"\u4eba\u70ba":5,"\u4eca\u56de":10,"\u4ecb\u3057":7,"\u4ed5\u7d44\u307f":8,"\u4ed8\u304d":8,"\u4ee3\u308f\u308a":[0,3,10],"\u4ee5\u4e0b":[2,3,5,8],"\u4ee5\u524d":[2,8],"\u4ee5\u5916":2,"\u4f1d\u3048":4,"\u4f3c\u305f":5,"\u4f3c\u633f":5,"\u4f55\u304b":8,"\u4f55\u3089\u304b":0,"\u4f55\u5ea6":10,"\u4f5c\u6210":[0,4,5,8],"\u4f5c\u696d":[5,10],"\u4f7f\u3044":[0,3,4,5,7,10],"\u4f7f\u3044\u65b9":0,"\u4f7f\u3046":[2,3,4,5,8,10],"\u4f7f\u3063":[2,8],"\u4f7f\u308f":[0,2,8],"\u4f7f\u7528":[0,2,3,5,7,8,10],"\u4f8b\u3048":[0,2,5,8,10],"\u4f8b\u3068\u3057\u3066":3,"\u4f8b\u5916":[2,4],"\u4f9d\u5b58":[2,3],"\u4fa1\u5024":8,"\u4fbf\u5229":8,"\u4fdd\u6301":[0,5],"\u4fdd\u8a3c":5,"\u4fe1\u3058\u308b":5,"\u4fee\u6b63":[2,4,8],"\u4fee\u98fe\u5b50":3,"\u5024\u3068\u3057\u3066":2,"\u512a\u308c":10,"\u5148\u982d":3,"\u516c\u958b":[3,8],"\u5171\u6709":0,"\u5178\u578b":8,"\u5185\u5bb9":0,"\u5185\u90e8":[3,5,8,10],"\u518d\u5229":[0,5,8],"\u518d\u5ea6":2,"\u518d\u6e96":8,"\u518d\u8a66\u884c":2,"\u51e6\u7406":[2,10],"\u5206\u96e2":8,"\u5207\u65ad":2,"\u5224\u5b9a":2,"\u5225\u540d":10,"\u5229\u4fbf":8,"\u5229\u70b9":8,"\u5229\u7528":0,"\u5236\u9650":8,"\u5272\u308a":10,"\u52b9\u7387":8,"\u52d5\u4f5c":[2,4,8],"\u533a\u5225":[2,5],"\u5358\u4e00":[2,5,8],"\u53c2\u7167":[5,10],"\u53c2\u7167\u304f":[5,8],"\u53ca\u307c":3,"\u53cd\u3057":0,"\u53cd\u5fa9":10,"\u53d6\u308a":8,"\u53d6\u5f97":[2,5,8],"\u53d7\u3051\u53d6\u3063":8,"\u53ef\u80fd":[0,2,3,5,7,8,10],"\u540c\u3058":[0,5],"\u540c\u6642":[7,8],"\u540c\u69d8":[5,8],"\u540d\u524d":[0,10],"\u542b\u307e":2,"\u542b\u3080":8,"\u542b\u3081\u308b":10,"\u542b\u3093":10,"\u547c\u3070":[2,10],"\u547c\u3073\u51fa\u3055":[5,10],"\u547c\u3073\u51fa\u3057":[5,8,10],"\u547c\u3073\u51fa\u3057\u5143":[2,10],"\u547c\u3073\u51fa\u3059":[5,10],"\u547c\u3076":10,"\u552f\u4e00":[2,4,5,8,10],"\u554f\u984c":[0,8],"\u56de\u8aad":2,"\u56de\u907f":10,"\u56fa\u6709":[0,8],"\u578b\u4ed8\u3051":10,"\u57fa\u3065\u3044":10,"\u57fa\u672c":5,"\u57fa\u70b9":5,"\u57fa\u76e4":3,"\u5834\u5408":[0,2,4,5,8,9,10],"\u5834\u9762":[2,8],"\u5897\u3048":10,"\u5897\u3048\u308b":5,"\u5909\u63db":10,"\u5909\u6570":[2,5,10],"\u5909\u66f4":3,"\u5916\u90e8":[2,9],"\u591a\u304f":[0,2],"\u591a\u3059\u304e":[5,7],"\u591a\u6570":8,"\u5927\u6b53\u8fce":4,"\u5927\u91cf":7,"\u5931\u6557":[2,7,8],"\u59cb\u307e\u308b":10,"\u5b58\u5728":[2,5,7,8],"\u5b8c\u4e86":[0,10],"\u5b9a\u578b":10,"\u5b9a\u7fa9":[2,3,10],"\u5b9f\u65bd":5,"\u5b9f\u884c":[2,3,5,7,8,10],"\u5b9f\u88c5":[2,3,8,10],"\u5b9f\u8df5":10,"\u5b9f\u969b":[0,2,5,7,10],"\u5ba3\u8a00":10,"\u5bfe\u5fdc":[5,7],"\u5bfe\u8c61":2,"\u5c02\u7528":5,"\u5c0f\u3055\u304f":10,"\u5c11\u3057":10,"\u5c11\u3057\u7570":8,"\u5e78\u3044":9,"\u5f15\u304d\u8d77\u3053\u3057":[0,2],"\u5f15\u304d\u8d77\u3053\u3059":5,"\u5f15\u6570":[0,8],"\u5f37\u304f":10,"\u5f37\u5236":2,"\u5f53\u3066":10,"\u5f71\u97ff":[2,3,5],"\u5f80\u5fa9":10,"\u5f8c\u307b\u3069":7,"\u5f93\u3063":0,"\u5fc3\u914d":7,"\u5fc5\u305a":10,"\u5fc5\u8981":[0,2,3,4,5,7,8,10],"\u5fd8\u308c":0,"\u5fdc\u3058":[0,7,8],"\u601d\u3046":[2,5],"\u6020\u308b":10,"\u60aa\u3044":[2,5,10],"\u610f\u5473":8,"\u610f\u56f3":[0,2],"\u610f\u898b":3,"\u6163\u308c":5,"\u6163\u4f8b":[0,3],"\u6163\u7528":[0,10],"\u623b\u3057":[5,8],"\u623b\u3059":7,"\u623b\u308a":7,"\u623b\u308b":[0,2,3,5,8,9,10],"\u6271\u3046":2,"\u6271\u308f":[0,8],"\u628a\u63e1":8,"\u62bd\u8c61":[0,7],"\u6307\u5b9a":10,"\u632f\u308b":5,"\u6355\u6349":[2,4],"\u63a5\u7d9a":[0,2,7,8],"\u63a8\u5968":[3,8,10],"\u63d0\u4f9b":[2,3,4],"\u64cd\u4f5c":[0,2,4,5,8,10],"\u6539\u5584":[2,8,9],"\u653b\u6483":10,"\u6559\u3048":4,"\u6570\u5024":[2,10],"\u6574\u3044":[0,3,5],"\u6574\u6570":10,"\u6587\u5b57":[0,5,10],"\u6587\u5b57\u5217":[2,10],"\u6587\u66f8":4,"\u65b0\u3057\u3044":2,"\u65b9\u6cd5":[2,3,4,5,7,8],"\u65e2\u5b58":8,"\u65e5\u672c":4,"\u65e9\u671f":10,"\u660e\u793a":[2,10],"\u6642\u70b9":5,"\u6642\u9593":5,"\u66f4\u65b0":5,"\u66f8\u304d":2,"\u66f8\u304d\u65b9":3,"\u6700\u521d":[0,7],"\u6700\u5584":[2,4],"\u6700\u5927":2,"\u6700\u5c0f\u9650":3,"\u6700\u5f8c":[2,5,10],"\u6700\u7d42":5,"\u671b\u307e\u3057\u304f":[2,8],"\u6728\u306b":5,"\u672a\u8aad":5,"\u683c\u7d0d":10,"\u691c\u51fa":10,"\u691c\u67fb":5,"\u691c\u8a3c":0,"\u6982\u5ff5":7,"\u69cb\u6587":[0,5],"\u69d8\u3005":[2,7],"\u6a5f\u80fd":[4,8],"\u6b63\u5e38":2,"\u6b8b\u308a":10,"\u6b8b\u5b58":0,"\u6bd4\u8f03":[2,8],"\u6c17\u3065\u304b":2,"\u6c5a\u3044":2,"\u6ce8\u610f":[3,5,8,10],"\u6d41\u308c":8,"\u6df7\u305c\u308b":5,"\u6df7\u4e71":0,"\u6e21\u3057":0,"\u6e21\u3059":[8,10],"\u6e96\u5099":[0,3,5,8],"\u7121\u540d":3,"\u7121\u5bb3":10,"\u7121\u8996":[2,5],"\u7279\u306b":8,"\u7279\u5225":2,"\u7279\u5b9a":[3,7,10],"\u7279\u6b8a":[2,4],"\u72b6\u614b":[2,5,8],"\u7406\u7531":[2,5,8,10],"\u751f\u3058\u308b":2,"\u751f\u5b58":0,"\u751f\u6210":[0,5,7],"\u7528\u3044":[0,3,5,7,8,10],"\u7528\u3044\u308b":[2,8,10],"\u756a\u53f7":2,"\u756a\u76ee":0,"\u7570\u5e38":2,"\u7591\u554f":2,"\u767a\u751f":[2,8,10],"\u767a\u884c":[7,10],"\u767b\u9332":[0,3],"\u76f4\u611f":0,"\u76f4\u63a5":[3,8],"\u76f4\u8a33":[2,4],"\u77e5\u3063":[2,4,7],"\u77e5\u3089":[4,8],"\u77e5\u308b":10,"\u7834\u68c4":10,"\u78ba\u4fdd":5,"\u78ba\u7acb":0,"\u78ba\u8a8d":[0,2,8],"\u793a\u3057":[0,5,9],"\u793a\u3059":[0,5,10],"\u79c1\u9054":4,"\u7a7a\u3044":7,"\u7a7a\u884c":10,"\u7acb\u3064":9,"\u7acb\u3066":9,"\u7b54\u3048":5,"\u7ba1\u7406":[2,7],"\u7bc4\u56f2":2,"\u7c21\u5358":[8,10],"\u7d10\u4ed8":8,"\u7d10\u4ed8\u3051":[5,8],"\u7d42\u308f\u3063":0,"\u7d42\u4e86":[2,10],"\u7d44\u307f\u7acb\u3066\u308b":8,"\u7d44\u307f\u8fbc\u307e":2,"\u7d50\u5408":10,"\u7d50\u679c":[2,5,7,10],"\u7d9a\u3051":5,"\u7e70\u308a\u8fd4\u3055":10,"\u7e70\u308a\u8fd4\u3057":10,"\u8003\u3048":[2,4,8,10],"\u81ea\u4f53":[2,5],"\u81ea\u52d5":[2,8,10],"\u821e\u3046":5,"\u826f\u3044":[2,9],"\u826f\u304f":3,"\u884c\u3044":10,"\u884c\u3046":[2,5,10],"\u884c\u308f":10,"\u884c\u5fd7":4,"\u884c\u6570":5,"\u884c\u76ee":4,"\u8868\u308c":8,"\u8868\u793a":10,"\u8907\u6570":[2,5,10],"\u898b\u3048":5,"\u898b\u3064\u3051":[2,9],"\u898b\u3066":10,"\u898b\u306a\u3055":2,"\u898b\u308b":8,"\u898f\u5247":[2,4],"\u89b3\u70b9":8,"\u89e3\u6790":10,"\u8a00\u8a9e":[2,5],"\u8a18\u8ff0":2,"\u8a2d\u5b9a":[5,8],"\u8a2d\u8a08":[0,7,10],"\u8a33\u6ce8":2,"\u8a66\u884c":[2,8],"\u8a73\u3057\u304f":[5,7],"\u8a73\u7d30":[8,10],"\u8a9e\u8a33":4,"\u8aa4\u3063":2,"\u8aac\u660e":[2,7],"\u8aad\u307f\u8fbc\u307f":[2,10],"\u8aad\u307f\u8fbc\u3080":10,"\u8aad\u307f\u8fbc\u3093":[0,3],"\u8b58\u5225\u5b50":2,"\u8ce2\u660e":2,"\u8d77\u3053\u3059":2,"\u8d77\u3053\u308b":[2,5],"\u8d85\u3048":0,"\u8efd\u91cf":4,"\u8fd4\u3055":[2,4,5,10],"\u8fd4\u3057":[0,2,5],"\u8fd4\u3059":[2,10],"\u8fd4\u3063":[0,8,10],"\u8ffd\u52a0":[2,3,4,8],"\u8ffd\u8de1":5,"\u9000\u5c48":10,"\u9001\u3063":[4,9],"\u9001\u4fe1":[2,8],"\u9014\u4e2d":[2,10],"\u901a\u3058":7,"\u901a\u5e38":[0,3],"\u9032\u307f":[4,7],"\u9032\u3080":[0,2,3,5,8,10],"\u9045\u5ef6":[0,2,8,10],"\u9069\u5207":[0,10],"\u9069\u7528":8,"\u907f\u3051\u308b":[0,10],"\u91cd\u8981":[5,7,10],"\u9577\u3005":10,"\u9577\u6642":[0,10],"\u9577\u6642\u9593":2,"\u9577\u671f":0,"\u9589\u3058":[2,5,8],"\u9589\u3058\u308b":5,"\u958b\u3044":[5,7],"\u958b\u59cb":5,"\u958b\u653e":[5,8],"\u9593\u5b9f\u884c":10,"\u9593\u751f":0,"\u9593\u9055":10,"\u9593\u9055\u3063":2,"\u95a2\u6570":[0,3,5,10],"\u95a2\u9023":5,"\u9632\u304e":3,"\u9650\u308a":10,"\u9664\u3044":3,"\u969c\u5bb3":[0,2],"\u96c6\u5408":10,"\u9762\u5012":10,"\u9805\u76ee":9,"\u983b\u7e41":[0,8],"\u9ad8\u3005":10,"\u9ad8\u3044":8,"]..":2,"]interface":12,"_ \"":3,"break":2,"case":[6,12],"catch":6,"class":[6,11,12],"default":[1,6],"delete":[5,11],"do":[0,1,2,8,11,12],"else":[2,6,12],"false":10,"for":[1,2,4,5,6,8,10,11,12],"function":12,"if":[0,1,2,5,6,8,10,11,12],"import":3,"in":[1,2,4,5,6,8,11,12],"int":10,"interface":12,"long":1,"new":[11,12],"null":6,"package":[1,3,4,6],"re?]":2,"return":[1,5,10,11,12],"this":[1,2,6,11,12],"throw":11,"try":1,"var":[2,5,6,10],"with":[1,2,5,11],"{}":12,__:[1,6,11,12],_access:2,_denied:2,_error:2,_field:6,_wait:0,ability:1,able:11,about:[5,6,8],abstraction:11,access:2,accessible:2,accessing:[3,10],accomplish:5,accustomed:11,achieve:6,activity:11,actually:11,additional:[2,4],additionally:11,affect:11,affected:5,after:11,afterwards:12,all:[2,4,11],allowed:11,already:11,also:[1,11],although:11,always:2,among:11,amount:1,an:[1,2,5,6,11,12],and:[1,2,4,5,6,8,9,10,12],annoying:6,another:[5,6,11],antipatterns:[1,9],any:11,api:11,apply:8,arbitrary:1,are:[1,2,4,6,8,11,12],aren:[4,5],arnehormann:3,around:[1,6],as:[1,6,11],assertions:12,assuming:11,at:[1,11],attempt:11,avoid:6,aware:11,azure:1,backend:11,bad:5,basic:1,batch:11,be:[1,2,6,11,12],because:[1,2,11],before:[6,11],begin:[5,11],behavior:[2,4,11],being:[1,11],believe:[4,5],best:[2,4],between:2,big:11,bit:11,block:1,blog:[8,9],booleans:6,both:11,bound:[8,11],bug:1,bulk:11,busy:11,but:[1,2,6,11],by:[1,2,4,11],call:11,can:[1,2,6,11,12],capture:[2,4],careful:11,cases:11,cause:[1,11,12],cautions:8,certainly:11,change:11,changed:11,changes:11,check:[2,4,6,12],churn:1,cleaned:11,close:[0,2,7,8,10],closed:[2,11],closes:1,closing:[1,11],coalesce:6,code:[1,2,6,11],col:8,cols:12,column:12,columns:[1,6],command:12,commands:11,commit:[5,11],common:[1,11],confused:1,connection:[2,4,5,12],connections:[1,4,5,11],consecutive:1,consuming:11,contains:2,context:11,control:1,convincing:6,copy:[6,11],core:11,correct:12,correctly:11,corrupted:11,could:[2,4,5],cr:8,crash:6,create:1,created:[1,4,5,8],current:11,currently:11,danger:8,data:[6,8,10],database:[0,1,2,3,6,7,8,10],databases:11,db:[0,1,2,5,6,8,10,11,12],deadlock:1,defer:[0,8,10],deferred:1,define:6,denied:2,dependent:11,design:6,dest:12,destination:12,differ:11,different:[11,12],differs:11,directly:[2,11],documented:8,does:1,doesn:[1,5,11],dolly:5,don:[11,12],done:11,driver:[0,2,7,11],drivererr:2,drivers:[2,9,11],each:[11,12],earlier:8,effectively:11,effects:11,element:12,empty:6,encryption:9,enough:6,eof:10,err:[0,2,5,6,8,10,11,12],error:[1,2,4,11,12],errors:[2,4,6,8,11],even:11,every:6,exactly:12,examine:12,example:[1,5,11,12],exception:[2,4],exclusively:8,exec:[5,10],execer:8,execute:[1,11],executed:11,executing:[1,4,5,11],expects:11,expired:1,explicitly:11,extra:11,fact:11,failing:11,fairly:1,fast:1,feature:11,fetch:12,few:[2,4],find:[1,12],first:11,fix:1,floats:6,fmt:[2,8,10],focuses:2,followed:1,following:[2,5,6,11],foo:[2,8],forks:12,free:[1,11],from:[1,2,5,6,9,10,11],func:0,future:6,general:[2,4],get:[1,11],getting:4,github:[0,3,9],given:11,go1:2,go:[0,1,2,3,5,6,7,8,10,11],goh:2,golang:9,gotten:11,gt:12,handle:[2,6,12],handled:11,handling:[6,8],happen:11,has:[4,5,11],have:[11,12],having:6,hello:0,help:1,here:[0,1,2,6,8,11,12],high:[1,11],hold:1,home:4,host:12,how:[5,6,11,12],however:[2,11],http:9,https:9,id:[2,5,6,10,11,12],idle:1,importing:[0,7],include:11,increment:11,info:12,init:3,insert:[1,5,8,11],inside:[4,5],inspect:[1,5],instead:11,integers:[6,11],intended:11,interpret:11,into:[5,8,11,12],introducing:6,introspection:12,invisibly:[4,5],is:[1,2,4,6,11],isn:[1,2,6,11],issue:[1,9,11],issues:1,it:[1,2,4,8,11,12],its:11,itself:[2,11],jmoiron:9,julienschmidt:3,just:11,keep:1,keeping:1,kill:2,know:[1,2,4,12],lang:[6,11,12],lastid:5,lazily:1,lead:[6,11],leak:2,len:12,length:12,libraries:11,like:[1,2,6,11],limit:1,limitations:[1,6,9],line:11,list:12,lived:1,lock:1,log:[0,2,5,8,10],loop:11,lot:[1,6,11],main:0,make:[11,12],many:[1,11,12],map:10,math:11,maximum:1,may:[1,11],means:[1,11],mechanism:2,memory:2,memsql:8,mentioned:11,metadata:5,microsoft:1,might:[1,2,4,6,11],misbehaves:1,mode:11,modifying:[8,10],more:6,most:6,multi:11,must:11,mydb:11,myriad:6,mysql:[0,1,2,5,8,10,11,12],mysqldrivers:3,mysqlerr:2,mysqlerror:2,myvariable:11,name:[2,6,10],namely:6,names:12,need:[2,4,6],needed:1,net:5,network:[1,11],never:11,newer:1,next:[1,6,11,12],nice:6,nil:[0,2,5,8,10,12],no:[1,2,5,6,11],not:[1,2,6,8,11],now:[2,6,12],nullability:6,nullable:6,nulls:[2,12],number:[1,2,12],occurred:2,of:[1,2,3,4,5,6,9,11,12],ok:[2,5,10],omitted:2,on:[1,2,4,5,11],once:[1,11],one:[6,11,12],only:[2,4,11],open:[0,1,2,7,10],opening:11,operation:5,operations:[2,4,11],or:[1,2,4,5,6,8,11,12],oracle:8,other:[6,11],otherfield:6,others:12,otherwise:2,out:11,over:11,overview:[3,4,9],own:6,panic:[2,10],param:8,parameters:11,part:[2,4,5],pass:[11,12],password:2,people:11,percona:12,perfectly:11,perform:11,perhaps:6,permission:2,placeholders:11,places:[2,4],plan:11,pollute:11,pool:[11,12],pooling:[1,2],possible:11,postgres:[0,2],postgresql:8,potentially:11,pq:2,pre:[6,11,12],preferably:5,prepared:[2,5,8,10,11,12],present:11,prettyprint:[6,11,12],preventing:11,prevents:1,previous:[1,6,11,12],problems:[1,11],procedure:11,processlist:12,program:6,programmers:1,provides:11,queries:[4,5,11],query:[5,10,11,12],queryer:8,queryrow:10,range:12,rarely:6,rather:1,read:11,reading:11,reality:[4,5],reason:11,reasons:[6,11],recycled:1,reduce:1,references:11,related:11,released:11,remember:12,repreparing:8,request:11,requires:12,res:5,reserve:11,reserves:11,resources:11,result:[0,5],results:11,retrieving:[0,5],returned:[2,4],returning:11,returns:11,reuse:1,reused:[1,11],reusing:1,right:12,rollback:5,round:11,row:[5,11],rowcnt:5,rows:[2,4,5,6,10,11,12],rule:[2,4],run:11,runs:8,safe:2,safely:1,scan:[2,11,12],scanned:11,scenario:11,see:[11,12],seem:11,select:[2,6,10,11],separate:11,separately:1,serially:11,server:[11,12],set:[5,11],sets:[0,5],setting:[1,11],several:[4,5],ship:6,should:[2,11,12],show:12,shows:5,similarly:11,simple:11,since:1,single:[1,4,5,11],site:11,size:1,slice:12,small:11,so:[8,11,12],some:[1,4,5,11,12],sometable:2,something:[0,2,4,6,11],someval:2,somevalue:5,special:[2,4,6],specific:11,specify:1,sphinx:8,sql:[0,2,4,5,6,7,8,9,10,11,12],sqlite:0,standard:12,start:11,started:4,state:12,statement:5,statements:[1,2,4,5,8,10,11],stmt:[5,8,10],stop:11,strconv:10,string:[2,6,10],strings:[2,6],subtlety:11,such:[1,11],support:6,supporting:11,supports:11,surprised:11,surprises:[1,9],surprising:11,systems:6,table:1,tables:1,tbl:11,tcp:0,tempting:2,that:[1,2,4,5,6,8,11,12],the:[2,3,4,5,6,8,9,10,11,12],their:[1,11,12],them:[1,6,11],then:6,there:[1,2,4,6,11,12],they:11,thing:11,things:[1,6,11],think:[6,11],though:[1,11],through:11,throughout:11,throwing:11,time:[0,1,11,12],timeouts:1,to:[1,2,4,5,6,8,11,12],todo:8,too:[1,11],total:1,transaction:[4,5,11],transactions:[8,10,11],transparent:9,tricky:6,trouble:11,trying:11,tutorial:2,two:[1,11],tx:[5,8,11],type:12,typed:12,types:[6,11,12],typical:11,ugly:6,underlying:11,unfortunately:1,unknown:[1,6],unless:11,unsigned:11,unused:1,up:11,update:5,use:[1,5,6,11,12],used:1,useful:[1,6],user:[0,2,10,12],users:[2,5,10,11],uses:11,using:[2,5,8,10,11],usual:[2,11],usually:11,val:8,vals:12,value:6,values:[5,6,8,12],varchar:10,varcols:[1,6],variable:[6,12],variables:12,varies:2,vividcortex:[4,8,9],wants:11,was:6,way:[6,11,12],we:2,web:4,well:6,were:2,what:[2,12],when:[1,4,5,11],where:[2,4,6,8,10,11],whether:11,which:11,whoops:2,why:[1,11],will:[6,11,12],wind:11,wire:8,within:11,without:[6,11],won:[6,11],work:[6,11,12],working:[1,2,11],works:6,write:2,wrong:6,you:[1,2,4,5,6,11,12],your:[6,11],yourself:11,zero:6},titles:["\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9","The Connection Pool","\u30a8\u30e9\u30fc\u306e\u6271\u3044","\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30c9\u30e9\u30a4\u30d0\u306e\u30a4\u30f3\u30dd\u30fc\u30c8","Go database/sql tutorial","\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u3063\u305f\u30c7\u30fc\u30bf\u306e\u5909\u66f4","Working with NULLs","\u6982\u8981","\u30d7\u30ea\u30da\u30a2\u30fc\u30c9\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u306e\u6271\u3044","\u95a2\u9023\u8cc7\u6599","\u30ea\u30b6\u30eb\u30c8\u30bb\u30c3\u30c8\u306e\u53d6\u5f97","Surprises, Antipatterns and Limitations","Working with Unknown Columns"],titleterms:{"()":[2,10],"-specific":11,"/sql":4,"\u304b\u3089":[2,10],"\u3059\u308b":5,"\u3068\u304d":2,"\u30a2\u30af\u30bb\u30b9":0,"\u30a4\u30f3\u30dd\u30fc\u30c8":3,"\u30a8\u30e9\u30fc":2,"\u30af\u30a8\u30ea":10,"\u30b3\u30cd\u30af\u30b7\u30e7\u30f3":8,"\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u30a8\u30e9\u30fc":2,"\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8":5,"\u30c7\u30fc\u30bf":[5,10],"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9":[0,2,10],"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30c9\u30e9\u30a4\u30d0":3,"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3":[5,8],"\u30d7\u30ea\u30da\u30a2\u30fc\u30c9\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8":8,"\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0":8,"\u30ea\u30b6\u30eb\u30c8\u30bb\u30c3\u30c8":[2,10],"\u4f7f\u3063":5,"\u52d5\u4f5c":[5,10],"\u5358\u4e00":10,"\u53d6\u5f97":10,"\u56de\u907f":8,"\u56fa\u6709":2,"\u5909\u66f4":5,"\u6271\u3044":[2,8],"\u65b9\u6cd5":10,"\u6982\u8981":7,"\u69cb\u6587":8,"\u6e96\u5099":10,"\u7279\u5b9a":2,"\u7e70\u308a\u8fd4\u3057":2,"\u8ab2\u984c":[2,4,5],"\u8cc7\u6599":9,"\u9589\u3058\u308b":2,"\u95a2\u9023":9,"with":[6,12],and:11,antipatterns:11,columns:12,connection:[1,11],database:[4,11],exhaustion:11,go:4,invoking:11,large:11,limitations:11,mismatch:11,multiple:11,nulls:6,pool:1,procedures:11,queryrow:2,resource:11,result:11,scan:10,sets:11,state:11,statement:11,stored:11,support:11,surprises:11,syntax:11,the:1,tutorial:4,uint:11,unknown:12,values:11,working:[6,12]}})