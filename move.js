function startMove(obj, json,callback){
	var speed,tar,key;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		key = true;
		for(var attr in json){
			if(attr == 'opacity'){
				tar = parseFloat(getComputedStyle(obj,false).opacity)*100;
				speed = (json[attr] - tar)/8;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				obj.style.opacity = (speed + tar)/100;
			}else{
				tar = parseInt(getComputedStyle(obj,false)[attr]);
				speed = (json[attr] - tar)/8;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				obj.style[attr] = speed + tar +'px';
				// console.log(tar);
			}
            if(json[attr] != tar){
              key = false;
          }         
		}
		if(key){
          	clearInterval(obj.timer);
          	typeof callback =='function' ? callback() : "";
          }   
	},30);

}

//拖拽运动
// var move = (function(){ 
// var LXspeed = div.offsetLeft,
// 		   LYspeed = div.offsetTop;
// 		   console.log(LXspeed, LYspeed)
// div.onmousedown = function (e) {
//     clearInterval(this.timer);
// 	var ele = e || window.event;
// 	var x = ele.pageX - this.offsetLeft;
// 	var y = ele.pageY - this.offsetTop;
// 	var that = this;
// 	var Xspeed = 0;
// 	var Yspeed = 0;
// 	document.onmousemove = function (e){
// 		var ele = e || window.event;
// 		var NXspeed = ele.pageX - x, 
// 		    NYspeed = ele.pageY - y; 
//         Xspeed = NXspeed - LXspeed;
//         Yspeed = NYspeed - LYspeed;
//         LXspeed = NXspeed;
//         LYspeed = NYspeed;
//         console.log(Xspeed, Yspeed);
//         that.style.left =  NXspeed + 'px';
//         that.style.top = NYspeed + 'px';
// 	}
// 	document.onmouseup = function (e){
// 		document.onmousemove = null;
// 		document.onmouseup = null;
// 		startMove(that, Xspeed, Yspeed);
// 		console.log(Xspeed, Yspeed);
// 	}

// }

//  }())
	   
 
//碰撞运动
// function startMove(obj, x, y) {
//    clearInterval(obj.timer);
//    var Xspeed = x,
//        Yspeed = y,
//        g = 6,
//        Cheight = document.documentElement.clientHeight,
//        Cwidth = document.documentElement.clientWidth,
//        Oheight = obj.offsetHeight,
//        Owidth = obj.offsetWidth;

//      if(obj.offsetLeft == 0){
//      	obj.style.left = 2 + 'px';
//      }else if( obj.offsetTop == 0){
//      	obj.style.top = 2 + 'px';
//      }
//    obj.timer = setInterval(function(){
//    	Yspeed += g;
//    	var newTop = obj.offsetTop + Yspeed;
//    	var newLeft = obj.offsetLeft + Xspeed;
//    	if(Cheight - (newTop + Oheight) < 1){
//    		Yspeed *= -1;
//    		Yspeed *= 0.6;
//    		Xspeed *= 0.6;
//    		newTop = Cheight - Oheight;
//    	}
//    	if(Cwidth - (newLeft + Owidth) < 1){
//    		Xspeed *= -1;
//    		newLeft = Cwidth - Owidth;
//    	}
//    	if(obj.offsetTop < 0){
//    		Yspeed *= -1;
//    		newTop = 0;
//    	}
//    	if(obj.offsetLeft < 0){
//    		Xspeed *= -1;
//    		newLeft = 0;
//    	}
//    	obj.style.top = newTop +'px';
//    	obj.style.left = newLeft +'px';
//    	// console.log(Yspeed,Xspeed);
//    	if(Math.abs(Yspeed) <= 1 && Math.abs(Xspeed) <= 1 && Cheight - (newTop + Oheight) < 1){
//       clearInterval(obj.timer);
//       console.log('over');
//    	}
//    },20)

// }

//弹性运动
// function startMove(obj,target) {
//   clearInterval(obj.timer);
//   var speed = 5, a, ica ,t = 0.8;
//   obj.timer = setInterval(function(){
//   	 a = (target - obj.offsetLeft)/8;
//   	 speed = (speed + a)*t;
//   	 obj.style.left = speed + obj.offsetLeft + 'px';
//   	 if(Math.abs(speed) <= 1 && Math.abs(target - obj.offsetLeft) <=1){
//   	 	clearInterval(obj.timer);
//   	 	obj.style.left = target + 'px';
//   	 }
//   	 console.log(speed)
//   },30)

// }

//传入对象链式操作类运动类型

// function startMove(obj, json,callback){
// 	var speed,tar,key;;
// 	clearInterval(obj.timer);
// 	obj.timer = setInterval(function(){
// 		key = true;
// 		for(var attr in json){
// 			if(attr == 'opacity'){
// 				tar = parseFloat(getComputedStyle(obj,false).opacity)*100;
// 				speed = (json[attr] - tar)/7;
// 				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
// 				obj.style.opacity = (speed + tar)/100;
// 			}else{
// 				tar = parseInt(getComputedStyle(obj,false)[attr]);
// 				speed = (json[attr] - tar)/7;
// 				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
// 				obj.style[attr] = speed + tar +'px';
// 				console.log(tar);
// 			}
//             if(json[attr] != tar){
//               key = false;
//           }         
// 		}
// 		if(key){
//           	clearInterval(obj.timer);
//           	typeof callback =='function' ? callback() : "";
//           }   
// 	},50);

// }

//opacity类型运动
// function startMove(obj, target) {
// 	clearInterval(obj.timer)
// obj.timer = setInterval(function(){
//    var speed;
//    var  ipc = parseFloat(getComputedStyle(obj,false).opacity)*100
//    speed =  (target - ipc)/7;
//    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//    if(target === ipc){
//    	clearInterval(obj.timer)
//    }
//    obj.style.opacity = (speed + ipc)/100
//    console.log(obj.style.opacity)
// },50)
// }
//left width 类型运动
// function startMove(obj,target) {
//   clearInterval(obj.timer)
//   var speed;
//   // if(obj.offsetLeft < 700){
//   //   speed = 8;
//   // }else{
//   // 	speed = -8;
//   // }
  
//   obj.timer= setInterval(function(){
//   	speed = (target - obj.offsetLeft)/5;
//     speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//   	if(obj.offsetLeft === target){
//   		clearInterval(obj.timer)
//   	}else{
//     obj.style.left = obj.offsetLeft + speed + 'px';
//   	}
//   	console.log(speed)
//   },50) 

// }

//匀速运动
// function startMove(obj) {
//   clearInterval(obj.timer)
//   var speed;
//   if(obj.offsetLeft < 700){
//     speed = 8;
//   }else{
//   	speed = -8;
//   }
  
//   obj.timer= setInterval(function(){
//   	if(Math.abs(700-obj.offsetLeft) < Math.abs(speed)){
//   		clearInterval(obj.timer);
//   		obj.style.left = 700 + 'px';
//   	}else{
//    	obj.style.left = obj.offsetLeft + speed +'px'; 		
//   	}

//   },50) 

// }