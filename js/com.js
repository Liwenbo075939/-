document.write('<link rel="stylesheet" href="../../css/mui.css">'+
               '<link rel="stylesheet" href="../../css/mui.min.css">'+
               '<link rel="stylesheet" type="text/css" href="../../css/app.css"/>'+
	           '<script src="../../js/mui.min.js"></script>'+
               '<script src="../../js/artTemplate.js" ></script>'+
               '<script src="../../js/mui.zoom.js"></script>'+
               '<script src="../../js/mui.previewimage.js"></script>'+
               '<script src="../../js/ty.js"></script>');
               
//控制台输出
function con(json){
	console.log(JSON.stringify(json));
}
//生成标准时间年月日
function time(time){
	if(time!=null){
		return time.substr(0,4)+"年"+time.substr(5,2)+"月"+time.substr(8,2)+"日";
	}
	
}
//取得图片的路径

function path(path){
	return GetPostUrl.gUrl()+"/files/"+path;
}

//获得通过模板传递参数
function getValue(name){
	var curr=plus.webview.currentWebview();
	return curr.extras[name];
	
}

//ajax请求同步

function ajaxL(url,data){
	    var json="";
	  	mui.ajax(url, {
					data: data,
					type: 'post',
					dataType: 'json',
					//将此处设置为同步否则取不到值
					async: false,
					success: function(data) {
                    if(data.success){
					    json=data;
					    
					}
                   }
				});
	    
       return json;
}
//template模板加载
//模板id
//插入html的id
//上拉加载和下拉刷新的标识
//要加载的数据
function templateL(id,data,domid,type){
	                   
	                    	
	                    
	                    var flag=data.length>0?false:true;
                    	        //2.创建数据json
								var data1 = {"items": data};
								//3.关联模板第一个参数是模板id
								var html = template(id, data1);
								
                    	if(type==1){
                    		mui('#pullrefresh').pullRefresh().refresh(true);
                    		mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
                    	}
                    	if(type==2){
                    		mui('#pullrefresh').pullRefresh().endPullupToRefresh(flag);
                    		html=document.getElementById(domid).innerHTML+html;
                    	}
                    	
                    		//4. 插入html
						   document.querySelector("#"+domid).innerHTML = html;
                    	
                    	
	                    
}
