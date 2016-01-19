if( window.apisClasses == undefined ){window.apisClasses = {};}
window.apisClasses.section= function(){
	this.funcName= "secion module";

}
window.apisClasses.section.constants = {
	"version":2
};
Object.defineProperty(window.apisClasses.section.constants,"MODE",{
	 value:"array"

});
window.apisClasses.section.prototype.getCurSection = function(){
	return {"section":"","session":""};
};
window.apisClasses.section.prototype.getRankInfo   = function(){
	return {"data":[{}]}
};