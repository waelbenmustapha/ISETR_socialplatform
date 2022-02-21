function ConvertMinutes(num) {
    var d = Math.floor(num / 1440); // 60*24
    var h = Math.floor((num - d * 1440) / 60);
    var m = Math.round(num % 60);

    if (d > 0) {
      return d + " days, " + h + " hours, " + m + " minutes";
    } else if (h > 0) {
      return h + " hours, " + m + " minutes";
    } else {
      return m + " minutes";
    }
  }

  export default ConvertMinutes;