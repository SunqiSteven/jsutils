/*
==================================================================

 js时间操作,window.time对象 
 now()  获取当前的时间戳




===================================================================
 */












window.time = {
  //获取当前的时间戳
  now: function() {
    return parseInt((new Date()).getTime() / 1000);
  },
  //格式化 2015/22/12 22:22:22  yyyy/mm/dd hh:ii
  format: function(t) {
    if (!t) {
      var t = time.now();
    }
    var d = new Date();
    d.setTime(parseInt(t) * 1000);

    var month;
    var day;
    var hours;
    var minutes;
    var seconds;
    var year;
    month = d.getMonth() + 1; // Note: January is 0, February is 1, and so on.
    day = d.getDate();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    year = d.getFullYear();
    if (month.toString().length < 2) {
      month = "0" + month.toString();
    }
    if (day.toString().length < 2) {
      day = "0" + day.toString();
    }
    if (hours.toString().length < 2) {
      hours = "0" + hours.toString();
    }
    if (minutes.toString().length < 2) {
      minutes = "0" + minutes.toString();
    }
    if (seconds.toString().length < 2) {
      seconds = "0" + seconds.toString();
    }
    return year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
  },
  //格式化一段时间(用于计时)
  duration: function(t) {
    // t: sec
    t = parseInt(t);
    var result = {

      "hours": 0,
      "minutes": 0,
      "seconds": t
    };
    if (t < 60) {
      return result;
    }

    while ((result.seconds - 60) >= 0) {
      result.seconds -= 60;
      result.minutes += 1;
    }
    while ((result.minutes - 60) >= 0) {
      result.minutes -= 60;
      result.hours += 1;
    }
    while ((result.hours - 24) >= 0) {
      result.hours -= 24;
      result.day += 1;
    }
    if (result.hours != 0) {
      return result.hours + "小时" + result.minutes + "分" + result.seconds + "秒";
    }
    if (result.minutes != 0) {
      return result.minutes + "分" + result.seconds + "秒";
    } else {
      return result.seconds + "秒";
    }

  }
}

<<<<<<< HEAD
=======
window.base64 = {
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
  decode: function(s) {
    return decodeURIComponent(escape(window.atob(s)));
  },
  encode: function(s) {
    return window.btoa(unescape(encodeURIComponent(s)));
  }
}
>>>>>>> de9b9f0b2cf68fcff96fda32afbdc8683b7e14b9
