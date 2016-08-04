
/* base64　Base64编码可用于在HTTP环境下传递较长的标识信息 */

window.base64 = {
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
  decode: function(s) {
    return decodeURIComponent(escape(window.atob(s)));
  },
  encode: function(s) {
    return window.btoa(unescape(encodeURIComponent(s)));
  }
}

/*popup window only including text for tip*/
function popup(){
  var left = ($("body").width() - 200)/2
  var successBox = $('<div>推送成功</div>').css({
    width:"200px",
    paddingTop:"30px",
    paddingBottom:"30px",
    background:"#555",
    position:"absolute",
    left:left+"px",
    top:"-500px",
    color:"#fff",
    fontSize:"22px",
    textAlign:"center",
    zIndex:9999999
  }).animate({top:"30%"},1000)
  $('body').append(successBox);
  setTimeout(function(){
    window.location.reload();
  },2000);
}