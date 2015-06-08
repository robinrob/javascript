$(function() {
  console.log("logId:")
  $("div").logId()

  console.log("logAttr:")
  $("div").logAttr({
    id: "id",
    backup: "N/A",
    useAlert: false
  })

  $(".accordion").accordion({
    heading: "h2",
    paragraph: "p"
  })
})
