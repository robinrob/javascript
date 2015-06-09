(function($) {
  $.dribbble = {
    getShot: function(id, callback) {
      // This should not work without specifying dataType as "jsonp". For some
      // reason this does work in Safari browesr without it, but it does not work
      // by default in e.g. Chrome or Firefox.
      //
      // There is one major caveat to JSONP that’s worth mentioning, and that is
      // that error callbacks will not run if something goes wrong. It is an
      // unfortunate trade-off that you have to work around.
      var req = $.ajax({
        // url: "https://api.dribbble.com/v1/users/simplebits",
        url: "https://api.dribbble.com/shots/" + id,
        dataType: "JSONP",
        jsonpCallback: 'callback',
        type: 'GET'
      })
      req.done(callback)

    },
    getShots: function(limit, callback) {
      if ($.isFunction(limit)) {
        callback = limit
        limit = 10
      }

      var req = $.ajax({
        url: "http://api.dribbble.com/shots/everyone",
        data: {
          page: 1,
          per_page: limit
        },
        dataType: "jsonp"
      });
      req.done(callback)
    }
  }
})(jQuery)
