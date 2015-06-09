$.dribbble.getShot({
  id: '2096772',
  callback: function(data) {
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

    $("body").append(wrapperDiv)
  }
})

$.dribbble.getShots({
  per_page: 3,
  page: 1,
  callback: function(data){
    data.shots.forEach(function(data) {
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
  }
}
                   )
