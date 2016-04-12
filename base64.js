
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