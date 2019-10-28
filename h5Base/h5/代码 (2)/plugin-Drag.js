function Drag(){
	//这里的this指向构造函数创建的空对象
	this.obj=null;
	this.distanceX=0;
	this.distanceY=0;
	this.setting={
		id:'',
		downCB:function(){},
		moveCB:function(){},
		upCB:function(){},
	};//默认配置参数
	
};

Drag.prototype.init=function(setting){
	//在初始化函数里面，拿用户传入进来的参数去覆盖默认的参数，并且这个代码要放在init函数的最上面
	for(var attr in setting){
		this.setting[attr]=setting[attr];
	}
	//新增的
	if(setting.obj){
		this.obj=setting.obj;
	}
	if(!setting.obj&&!this.setting.id){
		console.error('id参数必须传入！')
		return;
	}
	//setting是用户传入的自定义配置参数
	//这里的this指向构造函数创建的空对象
	if(!setting.obj){
		this.obj=document.getElementById(this.setting.id);
	}
	var _this=this;
	this.obj.addEventListener('mousedown',function(e){
		//这里的this指向鼠标按下去的div，所以用下划线this
		//_this指的是指向构造函数创建的空对象
		_this.down(e);
	});
};

//鼠标按下去
Drag.prototype.down=function(e){
	//这里的this指向构造函数创建的空对象
	this.distanceX=e.clientX-this.obj.offsetLeft;
	this.distanceY=e.clientY-this.obj.offsetTop;
	var _this=this;
	
	//鼠标按下去的时候执行的回调函数
	this.setting.downCB.call(this);
	
	document.onmousemove=function(e){
		//这里的this指向document
		//_this指的是指向构造函数创建的空对象
		_this.setting.moveCB.call(_this);//这行代码是让传入进来的回掉函数里面的this改成_this
		//_this.setting.moveCB();//这样写的话就是_this.setting调的
		_this.move(e);
	};
	document.addEventListener('mouseup',function(){
		//这里的this指向document
		//_this指的是指向构造函数创建的空对象
		_this.setting.upCB.call(_this);//这行代码是让传入进来的回掉函数里面的this改成_this
		_this.up();
	});
}

Drag.prototype.move=function(e){
	//this指的是指向构造函数创建的空对象
	this.obj.style.left=e.clientX-this.distanceX+'px';
	this.obj.style.top=e.clientY-this.distanceY+'px';
};

Drag.prototype.up=function(){
	document.onmousemove=null;
};
 

document.addEventListener('DOMContentLoaded',function(){
	//获取到页面中需要拖拽的元素对象
	var objs=document.querySelectorAll('[data-drag=true]');
	for(var i=0;i<objs.length;i++){
		var obj=objs[i];
		var setting={
			//islimite:obj.dataset.islimite||false
		};
		setting.obj=obj;
		new Drag().init(setting);
	}
});


