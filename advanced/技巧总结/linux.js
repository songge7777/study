/*
  linux 
  后台运行 nohup node app.js &

  连接 ssh rent@t.anystreaming.cn
              password:r1e2n3t4 

  ps -ef | grep node 查看node进程
  kill -9 进程号
  关掉进程 killall  node
  保存的缓冲 怎么删除
  rm -rf 当前目录/xxx.swp 

  mkdir ‘mingzi’ 创建文件夹
  rm -rf ‘mingzi’删除
  git clone -b b1 https://github.com/...  克隆某个分支
  git branch -D <branch_name>  删除分支

  hostname z 将名字修改为z

  linux 后台开启 
    nohup 开头  & 结尾  中间写命令
    nohup node app.js &

  
	 	       ps -e 找进程所有
		       ps -e | grep node 找node进程

    杀死进程 kill -9 进程ID
    
  telnet 测试端口 通不通
  例子  telnet localhost 8080

  su - 切换 root用户(输入密码)

 * 1、查看端口号
 *   netstat -nap | grep 进程
 * 2、杀死进行
 *   killall node 
 
  开启管理员 su - 加密码

  盒子 换无线网 用这个命令刷新(无线网切换)
sudo /etc/init.d/networking restart 
=> 出现OK 就刷新好了

  文件复制命令cp
  cp [-adfilprsu] 源文件(source) 目标文件(destination)
  cp [option] source1 source2 source3 ...  directory

  Linux本地仓库怎么向远程仓库（GitHub）提交代码
    1、生成密钥
      ssh-keygen -t rsa
    2、进入 /root/.ssh
      cat id_rsa.pub
      复制里面代码 到github上即可

  查看浏览器 缓存的密码
  打开浏览器 -> 设置 -> 密码和表单(管理密码)  ==查找对应的密码(显示密码的时候 需要输入开机密码)




    / 根目录
    /boot 启动目录，启动相关文件
    /dev 设备文件
    /etc 配置文件
    /home 普通用户的家目录,可以操作
    /lib 系统库保存目录
    /mnt 移动设备挂载目录
    /media 光盘挂载目录
    /misc 磁带机挂载目录
    /root 超级用户的家目录,可以操作
    /tmp 临时目录,可以操作
    /proc 不能直接操作，保存的是内存的挂载点
    /sys 不能直接操作，保存的是内存的挂载点
    /var 变量
    /bin 普通命令
    /sbin 命令保存目录，级用户才可以执行的命令
    /usr/bin 系统软件资源目录 面向普通用户的系统命令
    /usr/sbin 系统软件资源目录 面向超级用户的系统命令




    ifconfig 查看网络情况
    cat 查看文件
    pwd 查看当前目录位子
    ls 查看当前文件
    touch 1.txt 创建文件
    mkdir a 创建目录
    mkdir -p a/a 创建目录(-p 保留所属 属性)
    rm -f a 删除目录(加-f 强制)
    rm -rf b 删除文件(-r 递归所有)
    cp b a 拷贝文件
    mv 1.text b 将1.text 移动到b目录
    mv 1.txt 11.txt(重匿名)
    
    链接(ln 一般用软链接)
        ln -s [源文件][目标文件](-s创建软链接)
        类似windows快捷方式
    


    chmod 766 1.txt 修改文件的权限
    chmod g+x 给所属组增加执行权限

    locate 文件 查找文件
    updatedb 更新索引数据库

    whoami 查看用户信息
    id root 查看具体信息
    group root 查看组的信息

    用法操作
      添加组 groupadd name
      添加指定id groupadd -g id name
      修改名字 groupmod -n student stu
      修改组的id groupmod -g id name
      删除组 groupdel name

      useradd -g zf z3 指定组名

      | grep xx 查找
      查找sg用户 cat /etc/passwd | grep sg
      增加用户 useradd sg
      切换用户 su sg
      用户设置密码 passwd sg
      删除用户 userdel -d z3 (加-d就是删除文件)

      创建新的文件的时候 不可执行的  太危险

  chmod 777 xx.txt 修改文件的权限
  */


  /*
  shell
    基础
      第一行默认加这个 test.sh文件名字
      #!/bin/bash 
      执行 sh test.sh
      alias 查看别名
      history 查看历史记录 命令
      history -c 是清除
      输出重定向
      echo 123 > 1.txt 写入123 
      echo www >> 1.txt 追加写入www 
      cat 1.txt | wc -l 统计行数
      输入重定向
      wc -l < 1.txt  //显示行数
      多个命令 同时执行
      date;ls;date;ls
      
      直接声明变量
      name=zd
      获取
      echo $name

      '$name'  "$name" 单引号不能识别$name变量  双引号就可以

    编程 
      set 查看定义的所有变量
      set | grep xx 也可以搜索
      PARH 就是环境变量  设置好路径 其他地方都可以访问到

      name=1 name是局部
      export name=1 加export全局变量
    

    */