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

let totalPages = Math.ceil(total/(pageParams.pageSize))
  let pagesArr = []
  if (pageParams.current >= 5) {
    let base = pageParams.current - 2
    if (pageParams.current + 2 > totalPages) {
      base = totalPages - 4
    }
    pagesArr = (new Array(5)).fill(0).map((t,i) => i+ base)
  } else {
    pagesArr = (new Array(5)).fill(0).map((t,i) => i+ 1)
  }
  if (pagesArr[0] !== 1) {
    pagesArr.unshift(1)
  }
  
  if (pagesArr[pagesArr.length - 1] !== totalPages) {
    pagesArr.push(totalPages)
  }
  if (pagesArr[0] && pagesArr[1] && pagesArr[1] - pagesArr[0] > 1) {
    pagesArr.splice(1,0,'...')
  }
  const pagesArrLen = pagesArr.length
  if (pagesArr[pagesArrLen - 1] && pagesArr[pagesArrLen - 2] && pagesArr[pagesArrLen - 1] - pagesArr[pagesArrLen - 2] > 1) {
    pagesArr.splice(pagesArrLen - 1,0,'...')
  }
