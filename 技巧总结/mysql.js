/*
    mysql 启动和停止 
    net start MySQL
    net stop MySQL

    启动客户端 
    进入 C:\Program Files\MySQL\MySQL Server 5.5\bin
    输入 cmd
    执行 mysql 就可以了

    查看数据库 show databases;
    切换数据库 use test;
    查看表     show tables;
    查看当前所在的数据库 select database();
    查看表结构 desc user;

    表的数据 
        先建主表数据 在建子表数据
        先删子标数据 在删主表数据

    SQL语言
    关键字用大写  自己定义的用小写

    SQL语句建表 联系
        CREATE TABLE `student` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `name` varchar(50) NOT NULL,
        `idcard` varchar(18) DEFAULT NULL,
        `age` int(11) DEFAULT NULL,
        `city` varchar(50) DEFAULT '',
        PRIMARY KEY (`id`)
        );

        CREATE TABLE `course` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `name` varchar(50) DEFAULT NULL,
        PRIMARY KEY (`id`)
        );

        CREATE TABLE `score` (
        `student_id` int(11) NOT NULL DEFAULT '0',
        `course_id` int(11) NOT NULL DEFAULT '0',
        `grade` float DEFAULT NULL,
        PRIMARY KEY (`student_id`,`course_id`),
        KEY `fk_courseid` (`course_id`),
        CONSTRAINT `fk_courseid` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`),
        CONSTRAINT `fk_stuid` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

        ALTER TABLE `student`
        ADD COLUMN `province`  varchar(50) NULL AFTER `city`,
        ADD COLUMN `birthday`  date NULL AFTER `province`,
        ADD COLUMN `gender`   int(11) NULL AFTER `birthday`,
        ADD COLUMN `email`  varchar(50) NULL AFTER `gender`;

        INSERT INTO `student` VALUES ('1', '郭靖', '1', '1', '济南', '山东省', '1982-09-03', 1, '1@qq.com');
        INSERT INTO `student` VALUES ('2', '黄蓉', '2', '2', '济南', '山东省', '1982-09-03', 0, '2@qq.com');
        INSERT INTO `student` VALUES ('3', '杨过', '3', '3', '终南山', '陕西省', '1979-09-03', 1, '3@qq.com');
        INSERT INTO `student` VALUES ('4', '小龙女', '4', '4', '终南山', '陕西省', '1970-09-03', 0, '4@qq.com');
        INSERT INTO `student` VALUES ('5', '欧阳锋', '5', '5', '白驼山', '新疆', '1989-09-09', 1, '5@qq.com');


        INSERT INTO `course` VALUES ('1', '语文');
        INSERT INTO `course` VALUES ('2', '数学');
        INSERT INTO `course` VALUES ('3', '英语');

        INSERT INTO `score` VALUES ('1', '1', '100');
        INSERT INTO `score` VALUES ('1', '2', '90');
        INSERT INTO `score` VALUES ('1', '3', '70');
        INSERT INTO `score` VALUES ('2', '1', '100');
        INSERT INTO `score` VALUES ('2', '2', '90');
        INSERT INTO `score` VALUES ('2', '3', '80');
        INSERT INTO `score` VALUES ('3', '1', '100');
        INSERT INTO `score` VALUES ('3', '2', '90');
        INSERT INTO `score` VALUES ('3', '3', '80');

    数据查询 语法:
        SELECT    <列名> 
        FROM      <表名> 
        [WHERE    <查询条件表达式>] 
        [ORDER BY <排序的列名>[ASC或DESC]] 

        连接数据库
        let mysql = require('mysql');
        const connection = mysql.createConnection({
            host:'localhost',
            post:3306,
            user:'root',
            password:'root',
            database:'xxx'
        })
        connection.connect();
        connection.query('SELECT 1+1',(err,result,fields)=>{
            console.log(reslut)
        })
        //开启事务
        connection.beginTransaction(()=>{
            connection.query('UPADTE xxxxxxxxxxxxx')
        })

                 每秒的并发            特点 
        mysql    1000左右            安全性高,数据基本不会出错,性能差一点
        mongdb   16000左右           性能很高,容易丢数据
        redis    读11W 写8.1W        性能特别高,可靠,功能特别弱 只有key-value

 */

 /*
    redis 
    
    数据类型
    1、字符串
        设置字符串 SET age 1
        获取字符串 SET age
        自增      INCR age
        自减      DECR age
        删除      DEL  age
        是否存在  EXISTS name (0表示不存在 1表示存在)
        设置过期  EXPIRE age 10 (设置 10s后过期)
        返回有效时间 TTL age
        查看类型  type age
        
    2、哈希值 存对象
        HSET person name xx 设置单个值
        HGET person name 获取person下的 name值
        HGETALL person 获取所有的key value
        HDEL person age   删除age值
        HKEYS person 获取所有的key值
    
    3、列表
        LPUSH ids 2 在ids左端 添加2
        RPUSH ids 2 在ids右端 添加2(多个用空格 隔开)
        LRANGE ids 0 2 查找 ids 0到2的数据
        LRANGE ids 0 -1 查找 ids 全部数据
        LRANGE ids 0 索引为0的元素

        LPOP ids 删除左边的一个元素
        RPOP ids 删除右边的一个元素
        
        LREM key count value 删除元素
    
    集合 是字符串类型的 
        
        4、无序集合(没有顺序)
            SADD  A 1 2 3 添加
            SADD  B 2 3 4 添加
            SMEMBERS A  查看集合
            SCARD A 查看集合的个数
            SREM A 1 删除 1
            SINTER A B  交集
            SDIFF A B  差集
            SUNION A B 并集
        5、有序集合
            有序集合和集合一样也是字符串的集合，而且不能重复 不同之外是每个集合都会关联一个double类型的分数，
            redis可以通过这个分类来为集合中的元素进行从小到大排序,元素不能重复，但分数可以重复
            ZADD level1s 1 one   添加元素 level1s级别 1是分数 one是值 
            ZADD level1s 2 two
            ZADD level1s 3 three
            ZRANGE levels 0 -1 查看所有元素
            ZRANGE level1s 0 -1 WITHSCORES 携带分数

            ZREM levels one 删除元素
        
        在nodejs中使用redis
        默认断开号 6379

 */