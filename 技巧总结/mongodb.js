/*  
    MongoDB 
        MongoDB是一个基于分布式文件存储的开源数据库系统
        MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。
        MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。
    
    启动 (默认端口号 27017)
        打开安装的bin目录(mongod.exe 是开启服务的) cmd
        mongod --dbpath=./data   ./data 就是存储数据的 可以随便指定
        客户端开启 mongo
    添加环境变量就能在任何目录下 输入命令了
        在环境变量的 path 里添加 bin 的目录

    基本概念
        数据库:mongoDB的单个实例可以容纳多个独立的数据库
        集合:数据库是由集合组成,一个集合用来表示一个实体
        文档:集合是由文档组成的,一个文档表示一条记录      
    
    显示当前数据库:show dbs
    切换数据库: use xxx
    查看集合 : show collections
    
    插入数据:db.stu.insert({name:'xxx'})
    save 和 insert 区别(_id相同的时候)
        save用相同的就更新
        insert有相同的会报错  
    查看数据库所有字段 db.stu.find()
    创建空集合 db.createCollection('name')
    删除数据库 db.dropDtabase()
    删除集合 db.name.drop() 

    更新文档(id不变,其他整体更换)
    db.stu.update({_id:1},{name:1})
    部分更换
    db.stu.update({_id:1},{$set:{name:1}})
    累加 第一个参数没有给就给所有的文档 name都加1
    db.stu.update({},{$inc:{name:1})    
    更新插入
    db.stu.update({},{name:'xx'},{upsert:true})
    默认更新匹配到的第一条
    db.stu.update({},{${set:name:'xx'}})
    若是要更新所有 加第三个参数
    db.stu.update({},{${set:name:'xx'}},{multi:true})
    删除文档的指定字段
    db.stu.update({_id:1},{$unset:{age:xx}})
    
    往数组添加内容(重复执行 就添加2条一样的)
    db.stu.update({_id:1},{$push:{hobbies:'smokeing'}})
    // 不会添加重复的    
    db.stu.update({id:1},{$addToSet:{hobbies:'drinking'}})
    将数组放置 数组内 而且平铺
    var arr = ['1','2']
    db.stu.update({_id:1},{$addToSet:{hobbies:{$each:arr}}})
    删除数组内的
    db.stu.update({_id:1},{$pop:{hobbies:0}})

    删除 删除所有匹配的记录
    db.stu.remove({_id:1})
    db.stu.remove({age:1})
    删除匹配的第一条
    db.stu.remove({age:1},{justOne:true})

    查询 默认查询所有
    db.stu.find({});
    只返回 有name的 也只返回name和_id  name后面的0表示不出现  1表示出现
    db.stu.find({},{name:1})
    这样就是除了name列 其他都出现
    db.stu.find({},{name:0})
    但是第二个参数 除了_id 不能即出现0又出现1  一般 只要1或少数字段 就用1,要多数字段就用0
    db.stu.find({},{name:0,age:1})
    
    条件查询  
        查询age 2到4之间 的数
        db.stu.find({age:{$nin:[2,4]}})    
        3到5之间的(包括3和5) 
            $lte 小于等于   $gte 是大于等于
            $lt 小于   $gte 是大于
        db.stu.find({age:{$gte:3,$lte:5}})
        小于3大于5
        db.stu.find({age:{$not:{$gte:3,$lte5}}})
    对数组查询
        先插入
        db.stu.insert({_id:1,age:7,hobbies:['a','b','c','d']})
        全完匹配
        db.stu.find({hobbies:['a','b','c','d']})
        部分匹配  
            只要包含a都能找到
        db.stu.find({hobiies:'a'})
            包含 a 和 b(都要包含)
        db.stu.find({hobiies:{$all:['a','b']}})
            包含 a 或 b(都要包含)
        db.stu.find({hobbies:{$in:['a','b']}})
            根据长度进行过滤 4是一个数字
        db.stu.find({hobbies:{$size:4}})
            单个id 截取一部分 从0开取 2个
        db.stu.find({_id:1},{hobbies:{$slice:[0,2]}})
            取age>5  (age自己插入数据)
        db.stu.find({$where:"this.age>5"})
            取小于3 大于5
        db.stu.find({$or:[{name:{$lt:3}},{name:{$gt:5}}]})

            取age>5&&age<8
        db.stu.find({$where:"this.age>5&&this.age<8"})

        cursor 游标
        var cursor = db.stu.find()
            cursor.hasNext()//返回false就说明没有下一条了
            cursor.next()// 可以执行多次,执行一次返回一条数据
            用法: (查询所有内容)
                while(cursor.hasNext()){
                    printJson(cursor.next())
                }

        写正则
        db.stu.insert({name:'123566'})
        查找都可以
        db.stu.find({name:/^123/})
        db.stu.find({name:/23/})
    
        分页
            skip 跳过指定的条数
            limt 限制返回的条数
            exec 开始执行
            sort age代表里面的字段 1代表升序 -1代表降序 (默认是按照_id排序)
            有sort的情况 先排序 在算skip limt(因为 查询是异步)  sort放前放后都可以
        db.stu.find().skip(3).limt(3).sort({age:1}).exec()
                
        备份 
            将school数据备份到./bk文件里面
            mongodump --out ./bk --collection stu --db school
        导入 将备份的文件还原到数据库
            mongorestore ./bk
    
    连接node使用
        ORM
        orm object relation mappding 对象关系工具
        把数据库的操作映射对代码对象的操作

        优点:
        屏蔽数据库操作的细点
        可以跨数据库
        waterline等工具 一套代码对应多套数据库

        mongoose 是mongodb的一个对象模型工具
        
        Schema 数据库集合的模型骨架
        NodeJs中基本数据类型都属于Schema.Type 另外Mongoose还定义了自己的类型
        定义Schema
        var personSchema = new Schema({
            name:String, //姓名
            binary:Buffer,//二进制
            living:Boolean,//是否活着
            birthday:Date,//生日
            age:Number,//年龄
            _id:Schema.Types.ObjectId,  //主键
            _fk:Schema.Types.ObjectId,  //外键
            array:[],//数组
            arrOfString:[String],//字符串数组
            arrOfNumber:[Number],//数字数组
            arrOfDate:[Date],//日期数组
            arrOfBuffer:[Buffer],//Buffer数组
            arrOfBoolean:[Boolean],//布尔值数组
            arrOfObjectId:[Schema.Types.ObjectId]//对象ID数组
            nested:{ //内嵌文档
                name:String,
            }
            });

                







        */