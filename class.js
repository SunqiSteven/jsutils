/* Simple JavaScript Inheritance
* By John Resig http://ejohn.org/
* MIT Licensed.
*/
// Inspired by base2 and Prototype
// (function(){
// var initializing = false, 
//     /* 突然发现test() 的参数可以是函数*/
//     fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
// 　　　　this.Class = function(){};
// 	Class.extend = function(prop) {
// 		var _super = this.prototype;
// 		initializing = true;
// 		var prototype = new this();
// 		initializing = false;
// 		for (var name in prop) {
// 		    alert(prop[name]);
// 			prototype[name] = typeof prop[name] == "function" &&
// 			typeof _super[name] == "function" && fnTest.test(prop[name]) ?
// 			(function(name, fn){
// 			   return function() {
// 			      this._super = _super[name];
// 				  var ret = fn.apply(this, arguments);
// 			      return ret;
// 			};
// 			})(name, prop[name]) :
// 			prop[name];
// 		}
// 		function Class() {
// 			if ( !initializing && this.init )
// 			this.init.apply(this, arguments);
// 		}
// 		Class.prototype = prototype;
// 		Class.prototype.constructor = Class;
// 		Class.extend = arguments.callee;
// 		return Class;
// 	};

// })();
    
			 
			













(function(window){
	
	 window.Class = function() {};
	 Class.extend = function(props) {
	 	  var prototype = new this();
	 	  var _super = this.prototype;
	 	  var FN_TEST_REGEXP = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
	 	  for( name in props) {
               prototype[name] = typeof props[name] === "function" && 
                                 typeof _super[name] === "function" && FN_TEST_REGEXP.test(props[name]) ? 
                                 (function(name,fn){
                                 	 return function(){
                                 	   this._super = _super[name];

                                       var ret = fn.apply(this,arguments);
                                       return ret;
                                 	 }
                                      
                                 })(name,props[name]): props[name];
	 	  }
	 	  function Class(){
	 	      if (this.init) {
	 	      	   this.init.apply(this,arguments);
	 	      }	
	 	  }
	 	  Class.prototype = prototype;
	 	  Class.prototype.constructor = Class;
	 	  Class.extend = arguments.callee;
	 	  return Class;
	 }

})(window);




