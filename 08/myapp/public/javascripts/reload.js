;(function refresh () {
  var RLD_TIMEOUT = 900;
  var sock = new SockJS(window.location.origin + '/sockreload');

  sock.onclose = function() {
    setTimeout(function() {
      window.location.reload();
    },RLD_TIMEOUT);
  };
})();
