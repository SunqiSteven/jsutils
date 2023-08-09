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
//防抖
function debounce(fn,delay){
  let timer = null
  return function(){
    const args = arguments
    const ctx = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(ctx,args)
      timer = null
    },delay)
  }
}

function getBounds(map) {
  let bd = new BMapGL.Boundary();
  const centerPoint = new window.BMapGL.Point(112.8, 30.7);
  bd.get('湖北省', function(rs) {
    var count = rs.boundaries.length; //行政区域的点有多少个
    var pointArray = rs.boundaries[2].split(';').map(item => {
      let _p = item.split(', ');
      return new BMapGL.Point(parseFloat(_p[0]), parseFloat(_p[1]));
    });
    let _lngSet = [];
    let _latSet = [];
    pointArray.forEach(item => {
      _lngSet.push(item.lng);
      _latSet.push(item.lat);
    });
    let maxLng = Math.max(..._lngSet).toString();
    let minLng = Math.min(..._lngSet).toString();
    let maxLat = Math.max(..._latSet).toString();
    let minLat = Math.min(..._latSet).toString();

    var _max_lng_po = pointArray.filter(item => {
      return item.lng === maxLng;
    });

    var _min_lat_po = pointArray.filter(item => {
      return item.lat === minLat;
    });

    var EN_JW = `${maxLng}, ${maxLat}`; //东北角
    var NW_JW = `${minLng}, ${maxLat}`; //西北角
    var WS_JW = `${minLng}, ${minLat}`; //西南角
    var SE_JW = `${maxLng}, ${minLat}`; //东南角

    var EN_JW = new BMapGL.Point(maxLng, maxLat); //行政区 东北角
    var NW_JW = new BMapGL.Point(minLng, maxLat); //西北角
    var WS_JW = new BMapGL.Point(minLng, minLat);
    var SE_JW = new BMapGL.Point(maxLng, minLat);

    var WY_EN = new BMapGL.Point(180, 90);
    var WY_NW = new BMapGL.Point(-180, 90);
    var WY_WS = new BMapGL.Point(-180, -90);
    var WY_SE = new BMapGL.Point(180, -90);
    //这里取一个中心点附近点
    let _p_point = new BMapGL.Point(112.9, 30.6);
    let nw_p = pointArray.filter(item => {
      return item.lng <= _p_point.lng && item.lat >= _p_point.lat;
    });
    let arr2 = [WY_NW];
    arr2 = arr2.concat(nw_p);
    arr2.push(WY_EN);
    let poly5 = new BMapGL.Polygon(arr2, {
      strokeColor: '#000',
      strokeOpacity: 0,
      fillColor: '#000',
      fillOpacity: 1,
    });
    map.addOverlay(poly5);
    let ws_p = pointArray.filter(item => {
      return item.lng <= centerPoint.lng && item.lat <= centerPoint.lat;
    });
    let arr3 = [WY_SE];
    arr3 = arr3.concat(ws_p);
    arr3.push(WY_NW);
    let poly6 = new BMapGL.Polygon(arr3, {
      strokeColor: '#000',
      fillColor: '#000',
      strokeOpacity: 0,
      fillOpacity: 1,
    });
    map.addOverlay(poly6);
    let es_p = pointArray.filter(item => {
      return item.lng >= centerPoint.lng && item.lat <= centerPoint.lat;
    });
    let arr4 = [];
    arr4 = arr4.concat(es_p);
    let special_pt = new BMapGL.Point(180, centerPoint.lat);
    arr4 = arr4.concat(WY_WS, WY_SE, special_pt);
    let poly7 = new BMapGL.Polygon(arr4, {
      strokeColor: '#000',
      strokeOpacity: 0,
      fillColor: '#000',
      fillOpacity: 1,
    });
    map.addOverlay(poly7);
    let en_p = pointArray.filter(item => {
      return item.lng >= centerPoint.lng && item.lat >= centerPoint.lat;
    });

    let special_pt_2 = new BMapGL.Point(centerPoint.lng, 90);
    let arr5 = [];
    arr5 = arr5.concat(en_p);
    arr5 = arr5.concat(WY_EN, special_pt_2);
    let poly8 = new BMapGL.Polygon(arr5, {
      strokeColor: '#000',
      strokeOpacity: 0,
      fillColor: '#000',
      fillOpacity: 1,
    });
    map.addOverlay(poly8);
    let arr6 = [es_p[0], en_p[0], WY_EN, special_pt];
    let poly9 = new BMapGL.Polygon(arr6, {
      strokeColor: '#000',
      strokeOpacity: 0,
      fillColor: '#000',
      fillOpacity: 1,
    });
    map.addOverlay(poly9);
    const { mapvgl } = window;
    var view = new mapvgl.View({
      map: map,
    });
    var layer = new mapvgl.WallLayer({
      texture: TIETU,
      opacity: 0.5,
      enablePreciseMap: true,
      height: -30000,
    });
    view.addLayer(layer);
    var data = [
      {
        geometry: {
          type: 'LineString',
          coordinates: rs.boundaries[2]
            .split(';')
            .map(item => item.split(', ')),
        },
      },
    ];
    layer.setData(data);
  });
}
