var checkLogin = function() {
		var uId = appcan.localStorage.getVal('userId');

		if(uId == null || uId == "") {
			if(arguments.length == 1) {
				mui.openWindow({
					url: arguments[0],
					id: 'login',
					preload: true,
					show: {
						aniShow: 'pop-in'
					},
					styles: {
						popGesture: 'hide'
					},
					waiting: {
						autoShow: false
					}
				});

			} else if(arguments.length == 0) {
				mui.openWindow({
					url: "login.html",
					id: 'login',
					preload: true,
					show: {
						aniShow: 'pop-in'
					},
					styles: {
						popGesture: 'hide'
					},
					waiting: {
						autoShow: false
					}
				});

			}

			localStorage.setItem('yemian', '');
			return false;
		} else {
			return true;
		}
	}
	//获取用户名
var SetUserName = function(userName) {
	localStorage.setItem('userName', userName);
}

var GetUserName = function() {
	return localStorage.getItem('userName');
}

//获取部门id
var SetUnitId = function(unitId) {
	localStorage.setItem('unitId', unitId);
}

var GetUnitId = function() {
		return localStorage.getItem('unitId');
	}
	//获取登录密码
var SetCheckCode = function(checkcode) {
	localStorage.setItem('checkcode', checkcode);
}

var GetCheckCode = function() {
		return localStorage.getItem('checkcode');
	}
	//获取登录状态
var SetIsLog = function(islog) {
	localStorage.setItem('islog', islog);
}

var GetIsLog = function() {
		return localStorage.getItem('islog');
	}
	//获取用户id
var SetUserId = function(userId) {
	localStorage.setItem('userId', userId);
}

var GetUserId = function() {
		return localStorage.getItem('userId');
	}
	//获取部门名称
var SetUnitname = function(unitname) {
	localStorage.setItem('unitname', unitname);
}

var GetUnitname = function() {
		return localStorage.getItem('unitname');
	}
	//获取部门编号
var SetUnitbh = function(Unitbh) {
	localStorage.setItem('Unitbh', Unitbh);
}

var GetUnitbh = function() {
		return localStorage.getItem('Unitbh');
	}
	//获取用户手机号码
var Setsjhm = function(sjhm) {
	localStorage.setItem('sjhm', sjhm);
}

var Getsjhm = function() {
		return localStorage.getItem('Getsjhm');
	}
	//获取用户姓名
var Setxm = function(xm) {
	localStorage.setItem('xm', xm);
}

var Getxm = function() {
		return localStorage.getItem('xm');
	}
	//获取用户证件号码
var Setzjhm = function(zjhm) {
	localStorage.setItem('zjhm', zjhm);
}

var Getzjhm = function() {
		return localStorage.getItem('zjhm');
	}
	//获取用户证件类型
var Setzjlx = function(zjlx) {
	localStorage.setItem('zjlx', zjlx);
}

var Getzjlx = function() {
		return localStorage.getItem('zjlx');
	}
	/*
	     appcan.ready(function() {
	           
	           var Uname= "15030029718";                    // appcan.localStorage.getVal('userName');
	           var code= "868EA9BB74CCA8681430F04068F2ADA3";//           appcan.localStorage.getVal('checkcode');        
	           var id= 28;                                  //           appcan.localStorage.getVal('userId'); 
	           
	            if(id==null){
	                 alert('璇峰厛鐧诲綍');
	                 appcan.window.open("login"+Math.random(),"login.html");
	                 appcan.localStorage.setVal('yemian', '');
	             }
	  */
	//是否为空或null或undefined
var isDefine = function(para) {
		if(typeof para == 'undefined' || para == "" || para == null || para == undefined || para == 'undefined')
			return false;
		else
			return true;
	}
	//是否有空格
var isNull = function(str) {
	if(str == "") return true;
	var regu = "^[ ]+$";
	var re = new RegExp(regu);
	return re.test(str);
}

var UnicodeConverter = {
	ToUnicode: function(str) {
		return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
	},
	ToGB2312: function(str) {
		return unescape(str.replace(/\\u/gi, '%u'));
	}
};

//接口地址
var GetPostUrl = {
	gUrl: function() {
		    //http://180.76.235.249:8090/shiro=衡水
		    //http://180.76.235.249:8080/shiro=邢台
		    //http://192.168.137.68:8090/shiro
		    //192.168.125.115:8080
		    //192.168.253.6:8080
		    //192.168.137.68
		    //192.168.22.190:8090/test"
		    //http://192.168.22.228:8090/shiro
		  
		    	return "http://192.168.1.105:8082/xtds";
		    
			
		}
		//***********jcy js也需要修改接口
};




Date.prototype.format = function(format) {
	var o = {
		"M+": this.getMonth() + 1, //month 
		"d+": this.getDate(), //day 
		"h+": this.getHours(), //hour 
		"m+": this.getMinutes(), //minute 
		"s+": this.getSeconds(), //second 
		"q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
		"S": this.getMilliseconds() //millisecond 
	}

	if(/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	for(var k in o) {
		if(new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}

//截取长度
function cutString(str, len) {
	//length属性读出来的汉字长度为1
	if(str.length * 2 <= len) {
		return str;
	}
	var strlen = 0;
	var s = "";
	for(var i = 0; i < str.length; i++) {
		s = s + str.charAt(i);
		if(str.charCodeAt(i) > 128) {
			strlen = strlen + 2;
			if(strlen >= len) {
				return s.substring(0, s.length - 1) + "...";
			}
		} else {
			strlen = strlen + 1;
			if(strlen >= len) {
				return s.substring(0, s.length - 2) + "...";
			}
		}

	}
	return s;
}

function zclogin(username, password, clientid) {

	var strcs = '{"userName":"' + username + '","passWord":"' + password + '","ClientId":"' + clientid + '"}';
	var jmstrcs = strEnc(strcs);
	var strurl = GetPostUrl.gUrl() + '/maump/users/postlogin?param=' + jmstrcs;
	mui.ajax(strurl, {
		data: {

		},
		async: true,
		type: 'post', //HTTP请求类Setsjhm型
		timeout: 10000, //超时时间设置为10秒
		crossDomain: true, //强制使用5+跨域
		headers: {
			'Content-Type': 'application/json'
		},
		success: function(data) {

			//服务器返回响应，根据响应结果，分析是否登录成功；
			data = strDec(data);
			data = JSON.parse(data);
		},
		error: function(xhr, type, errorThrown) {
			//异常处理；   
		}
	});

}
function isfw() {

	var strurl = GetPostUrl.gUrl() + '/maump/uploadAPP/update.json';
	mui.ajax(strurl, {
		data: {

		},
		async: true,
		type: 'post', //HTTP请求类Setsjhm型
		timeout: 10000, //超时时间设置为10秒
		crossDomain: true, //强制使用5+跨域
		headers: {
			'Content-Type': 'application/json'
		},
		success: function(data) {
		},
		error: function(xhr, type, errorThrown) {
		}
	});

}