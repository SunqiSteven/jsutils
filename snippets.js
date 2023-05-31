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
//分页
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
//大屏整体缩放
 <script>
       
      function setSize(){
          var designWidth = 1080
          var designHeight = 1920
          var designRatio = designWidth / designHeight
          var scale = 1
          var currentScreenRatio = window.innerWidth / window.innerHeight
        
          var chartContainerNode = document.getElementById('root')
          console.log(currentScreenRatio,designRatio,'999999')
          if (currentScreenRatio > designRatio) {
              scale = window.innerHeight / designHeight
              chartContainerNode.style.position = 'absolute'
              chartContainerNode.style.left = '50%'
              chartContainerNode.style.top = '0'
              chartContainerNode.style.transform = "scale(" + scale + ")" + " translate(-50%)"
          } else  {
              console.log(window.innerWidth,designWidth)
              scale = window.innerWidth / designWidth
              console.log(scale,'scale')
              chartContainerNode.style.position = 'absolute'
              chartContainerNode.style.top = '50%'
              chartContainerNode.style.left = '0'
              chartContainerNode.style.transform = "scale(" + scale + ")" + " translateY(-50%)"
          }
         
         
          
      }
      window.addEventListener('resize',setSize)
      setSize()
  </script>
