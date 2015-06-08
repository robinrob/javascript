var settings = {
  url: "package.json",
  type: "GET",
  dataType: "json",
  success: function(data) {
    console.log("asynchronous :(")
    console.log(JSON.stringify(data))
  },
  error: function(jqXhr, status, errorThrown) {
    console.log("jqXhr: " + jqXhr)
    console.log("status" + status)
    console.log("errorThrown" + errorThrown)
  }
}
$.ajax(settings)
console.log("synchronous :)")

settings.url = "fjisofjs"
$.ajax(settings)
