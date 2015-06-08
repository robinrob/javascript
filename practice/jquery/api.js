function writePara(str) {
  $("body").append(str + "<br><br>")
}

function writeLine(str) {
  $("body").append(str + "<br>")
}

function write(str) {
  $("body").append(str)
}

function writeObj(obj) {
  writePara(JSON.stringify(obj))
}

function writeHeading(str) {
  $("body").append("<h1>" + str + "</h1>")
}


$(function() {
  // This should not work without specifying dataType as "jsonp". For some
  // reason this does work in Safari browesr without it, but it does not work
  // by default in e.g. Chrome or Firefox.
  //
  // There is one major caveat to JSONP that’s worth mentioning, and that is
  // that error callbacks will not run if something goes wrong. It is an
  // unfortunate trade-off that you have to work around.
  var req = $.ajax({
    // url: "https://api.dribbble.com/v1/users/simplebits",
    url: "https://api.dribbble.com/shots/2096772",
    dataType: "JSONP",
    jsonpCallback: 'callback',
    type: 'GET'
  })

  req.done(function(data){
    // console.log(data)
    // writeObj(data)

    var wrapperDiv = $("<div />", {
      "class" : "wrapper"
    });

    var title = $("<h2 />", {
      text: data.title
    });

    var img = $("<img />", {
      alt: data.title,
      src: data.image_url
    });

    var user = $('<a />', {
      text: data.player.name,
      href: data.player.url,
      target: "_blank"
    });

    wrapperDiv
    .append(title)
    .append(img)
    .append("<br>")
    .append(user);

    $("body").append(wrapperDiv);
  })
})
