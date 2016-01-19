if( window.controller=== undefined ){ window.controller = {};}
window.controller.User = function(){
     // window.controller.common.apply(this); //构造函数绑定实现继承
		this.username = "";
		this.speed    =123;
}

<<<<<<< HEAD
//子类的prototype指向父类的一个实例实现继承
=======
// prototype 子类的prototype指向父类的一个实例实现继承
>>>>>>> de9b9f0b2cf68fcff96fda32afbdc8683b7e14b9

// window.controller.user.prototype = new window.controller.common();
// window.controller.user.prototype.constructor = window.controller.user;


// window.controller.user.prototype._initialize = function(){
// 	    alert("initialize");
// }

//利用空对象作中介实现继承
window.extend = function(child,parent){
	    var E = function(){};
	    E.prototype = parent.prototype;
	    child.prototype = new E();
	    child.prototype.constructor = child;
}
window.extend(window.controller.user,window.controller.common);
