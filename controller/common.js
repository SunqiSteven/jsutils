if( window.controller=== undefined ){ window.controller = {};}
window.controller.common = function(){

    // if(typeof this._initialize == "function"){ this._initialize();}
    // this.version="1.0.0";
}
window.controller.common.prototype.getSpeed = function(){
	alert(this.speed);
}
