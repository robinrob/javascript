$.dribbble.getShot('2096772', function(data){
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

$.dribbble.getShot('2096772', function(datas){
    var data
    for (var i = 0; i < datas.shots.length; ++i){
    data = datas.shots[i]
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
  }
})
