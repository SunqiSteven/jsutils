window.mixin = function(){};
window.mixin.prototype={
	   serialize:function(){

	   }
}
if(window.utils === undefined){ window.utils = {}}
window.utils.augment(recevingClass,givingClass){
	if(arguments[2]){
    	for(var i=2,len=arguments.length;i<len;i++){
        	recevingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    	}
	}else{
	    for( method in givingClass){
	    	if(!recevingClass.prototype[method]){
	    		  recevingClass.prototype[method]=givingClass.prototype[method];
	    	}
	    }
	}
}