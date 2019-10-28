/*
  git 操作
    查看本地 提交地址
    git remote -v
    添加 提交地址
    git remote add origin 地址
    删除本地 提交地址
    git remote rm origin
    删除远程分支
    git push origin --delete '分支名字'

  撤销 修改的文件 *为所有
    git checkout -- readme.txt
  
  拉取分支	
	  get fetch origin 分支:qimingzi
	合并分支 
	  git merge dev
  返回到指定的分支
    git log
    git reset --hard d22f3b7de65383a3f277237a79af27b854e94f67
  提交 加-f是强制
    git push -u origin master -f 

  mkdir ‘mingzi’ 创建文件夹
  rm -rf ‘mingzi’删除
  在主分支拉取分支
  git fetch origin 分子:起名字


  git clone -b b1 https://github.com/...  克隆某个分支

  git命令：全局设置用户名邮箱配置

  查看git用户名
  git config user.name

  查看邮箱配置
  git config user.email

  全局配置用户名
  git config --global user.name "nameVal"

  全局配置邮箱
  git config --global user.email "eamil@qq.com"


*/