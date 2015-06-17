$(function () {
    $("#box").focusin(function() {
        console.log("box")
        $("#box").css("background","red");
    });
    $("#box").focusout(function() {
        $("#box").css("background","white");
    });
})