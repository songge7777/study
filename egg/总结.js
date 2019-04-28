/*
    egg.js 流程
      client => controller => server => mysql 
      mysql => server => controller => cliect

    安装
      cnpm i egg --save 上线用
      cnpm i egg-bin --save-dev  开发用
    
    配置启动脚本
      "dev":"egg-bin dev"
    
    跑通路由(目录结构)
      ├─app
      │  │─router.js
      │  ├─controller
      │  │      news.js
      ├─config
      │      config.default.js
      |─package.json

      配置路由
      app/router.js
        module.exports = app => {
            const { router, controller } = app;
            router.get('/news', controller.news.index);
        }

      编写控制器
      app\controller\news.js
      const { Controller } = require('egg');
      class NewsController extends Controller {
          async index() {
              this.ctx.body = 'hello world';
              // ctx.body 是响应体的对象
              // ctx.text 是响应体的文本
              
          }
      }
      module.exports = NewsController;

      编写配置文件
      exports.keys = 'zfpx';
    
    访问
      文件	      app       ctx     	service	        config	    logger	  helper
    Controller	this.app	this.ctx	this.service	this.config	this.logger	this.app.helper
    Service	    this.app	this.ctx	this.service	this.config	this.logger	this.app.helper


    静态文件中间件
      Egg 内置了 static 插件
      static 插件默认映射 /public/ -> app/public/ 目录
      把静态资源都放到 app/public 目录即可

    使用模板引擎
      ├─app
      │  │─router.js
      │  ├─controller
      │  │      news.js   
      │  ├─public
      │  │  ├─css
      │  │  │      bootstrap.css  
      │  │  └─js
      │  │          bootstrap.js         
      │  └─view
      │          news.html       
      ├─config
      │   config.default.js
      │   plugin.js

      
      // egg-view-nunjucks 模板引擎
      cnpm install egg-view-nunjucks --save

        启用插件
        {ROOT}\config\plugin.js
          exports.nunjucks = {
              enable: true,
              package: 'egg-view-nunjucks'
          }
        
        配置模板
          {ROOT}\config\config.default.js
          module.exports=app => {
            let config={};
            config.keys='zfpx';
            config.view={
                defaultExtension: '.html',
                defaultViewEngine: 'nunjucks',
                mapping: {
                    '.html':'nunjucks'
                }
            }
            return config;
          }
        编写模板
        app\view\index.html
        <div class="container">
          <div class="row">
              <div class="col-md-8 col-md-offset-2">
                {% for item in list%}
                      <div class="panel panel-default">
                          <div class="panel-heading">
                            <h3 class="text-center">{{item.title}}</h3>
                          </div>
                          <div class="panel-body">
                              <img src="{{item.image}}" class="img-responsive center-block">
                          </div>
                          <div class="panel-footer">
                              <h3>{{item.createAt}}</h3>
                          </div>
                      </div>
                  {% endfor %}
              </div>
          </div>
        编写控制器
        app\controller\news.js
        const {Controller}=require('egg');
        class NewsController extends Controller{
            async index() {
                const {ctx}=this;
                const list=[
                    {
                        id: '45154322_0',
                        title: '世界首富早晚是这个人，坐拥7家独角兽公司，估值破数万！',
                        url: 'http://tech.ifeng.com/a/20180904/45154322_0.shtml',
                        image:'http://p0.ifengimg.com/pmop/2018/0905/CFFF918B94D561D2A61FB434ADA81589E8972025_size41_w640_h479.jpeg'
                    },
                    {
                        id: '16491630_0',
                        title: '支付宝们来了！将来人民币会消失吗？',
                        url: 'http://finance.ifeng.com/a/20180907/16491630_0.shtml',
                        image:'http://p0.ifengimg.com/pmop/2018/0907/2AF684C2EC49B7E3C17FCB13D6DEEF08401D4567_size27_w530_h369.jpeg'
                    },
                    {
                        id: '2451982',
                        title: '《福布斯》专访贝索斯：无业务边界的亚马逊 令对手生畏的CEO',
                        url: 'https://www.jiemian.com/article/2451982.html',
                        image:'https://img1.jiemian.com/101/original/20180907/153628523948814900_a580x330.jpg'
                    }
                ];
                await ctx.render('index',{list});
            }
        }
        module.exports=NewsController;

      读取远程接口服务
      在实际应用中，Controller 一般不会自己产出数据，也不会包含复杂的逻辑，复杂的过程应抽象为业务逻辑层 Service
      添加配置
      config.default.js
      config.news={
              newsListUrl: 'https://www.easy-mock.com/mock/5b923eb2321f1076a4fc13f4/api/news',
      }

      编写Service 
      app/service/news.js
      const {Service}=require('egg');
      class NewsService extends Service {
          async list(pageNum,pageSize) {
              const {ctx}=this;
              const {newsListUrl}=this.config.news;
              const result=await ctx.curl(newsListUrl,{
                  method: 'GET',
                  dataType:'json'
              });
              return result.data.data;
          }
      }
      module.exports=NewsService;

      编写控制层
      app/controller/news.js
      const {Controller}=require('egg');
      class NewsController extends Controller{
          async index() {
              const {ctx,service}=this;
              let {pageNum=1,pageSize=this.config.news.pageSize}=ctx.query;
              const list=await service.news.list(pageNum,pageSize);
              await ctx.render('index',{list});
          }
      }
      module.exports=NewsController;

      扩展工具方法
      框架提供了一种快速扩展的方式，只需在app/extend目录下提供扩展脚本即可
      Helper 函数用来提供一些实用的 utility 函数。
      访问方式 通过 ctx.helper 访问到 helper 对象

      app\extend\helper.js
      const moment=require('moment');
      moment.locale('zh-cn');
      exports.fromNow=dateTime => moment(new Date(dateTime)).fromNow();

      app\controller\news.js
      list.forEach(item => {
          item.createAt=ctx.helper.fromNow(item.createAt);
          return item;
      });

      app\view\index.html
      时间: {{helper.fromNow(news.createAt)}}

    中间件
      app/middleware/robot.js
      module.exports=(options,app) => {
          return async function(ctx,next) {
            // user-agent 获取浏览器的信息
              const source=ctx.get('user-agent')||'';
              const matched=options.ua.some(ua => ua.test(source));
              if (matched) {
                  ctx.status=403;
                  ctx.body='你没有访问权限';
              } else {
                  await next();
              }
          }
      }

      config.default.js
      config.middleware=[
            'robot'
        ]
        config.robot={
            ua: [
                /Chrome/
            ]
        }
      
    单元测试(下面模块内置了)
      power-assert 断言
      mochajs 测试
    测试目录
        约定test 目录为存放目录

      在egg内部 默认是支持放csrf
      在客户端请求服务器的时候,服务器会向客户端发送一个csrfToken
      下次客户端再次访问服务器 的时候,服务器会校验token
    

*/