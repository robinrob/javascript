$(function() {
  $("div").on("click", function() {
    alert("You clicked the div!")
  })

  $("h1").on("click", function(event) {
    alert("You clicked the heading!")
    // Prevent the event from propagating up to the parent div
    // after this call has finished. It's good to call this at
    // the end of the handler in case your code breaks - in this
    // case, at least the browser's default behaviour would happen
    // if yours failed.
    event.stopPropagation()

    // Returning false does same as stopPropagation or preventDefault
    return false
  })

  $("a").on("click", function(event) {
    alert("Only joking!!")
    event.preventDefault()

    // Returning false does same as stopPropagation or preventDefault
    // return false
  })
})
