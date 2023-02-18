$(document).ready(function () {
    $(".heart").click(function () {
        $(".heart").removeClass("active")
        $(this).addClass("active")
    })

    $(".burger").click(function(){
        $(".burger").toggleClass("active")
        $(".nav").toggleClass("open")
    })
});