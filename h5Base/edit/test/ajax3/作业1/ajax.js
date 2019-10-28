

function ajax(setting){
	
	if(!setting||!setting.url){
		console.log('参数错误！')
		return;
	}
	
	//默认参数
	var defaultSetting={
		url:'',
		method:'get',//请求方式
		dataType:'json',//服务端返回给前端的数据格式
		data:{},//前端传给后端的参数 
		success:function(data){},//ajax结束后并且后端成功返回了数据给前端  调用的回调函数
		error:function(status){}//ajax结束后但是报错了  调用的回调函数
	};
	
	//用户传入的参数覆盖默认参数
	for(var attr in setting){
		defaultSetting[attr]=setting[attr];
	}
	
	
	//把数据处理成正确的格式
	/*
	{
		'user':'张三',
		'age':30
	}
	 * */
	//efaultSetting.data
	
	var arr=[];
	for(var attr in defaultSetting.data){
		//console.log(attr+'='+defaultSetting.data[attr])
		//编码  ：http://www.cnblogs.com/tylerdonet/p/3483836.html
		arr.push(attr+'='+ encodeURIComponent(defaultSetting.data[attr]));
	}
	
	defaultSetting.data=arr.join('&');//"user=张三&age=30"
	
	
	//声明一个ajax对象
	var xhr=new XMLHttpRequest();
	//get请求
	if(defaultSetting.method.toLowerCase()==='get'){
		//url已经有？了
		if(defaultSetting.url.indexOf('?')!=-1){
			defaultSetting.url=defaultSetting.url+defaultSetting.data;
		}else{
			defaultSetting.url=defaultSetting.url+'?'+defaultSetting.data;
		}
		xhr.open('get',defaultSetting.url+'&_='+new Date().getTime(),true);
		xhr.send();
	}else{
		xhr.open('post',defaultSetting.url,true);
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(defaultSetting.data);
	}
	
	
	//处理事件完成
	
	xhr.onload=function(){
		if(xhr.status===200){
			//xhr.responseText   服务器返回字符串格式
			//xhr.responseXML   服务器返回XML格式
			switch (defaultSetting.dataType){
				case 'string':
					defaultSetting.success(xhr.responseText);
					break;
				case 'json':
					defaultSetting.success(JSON.parse(xhr.responseText));
					break;
				case 'xml':
					defaultSetting.success(xhr.responseXML);
					break;
			}
			
		}else{
			defaultSetting.error(xhr.status);
		}
		
	}
}




