$(window).scroll(function() {
    var diff = $("#splash").height() - $(window).scrollTop();
    if (diff <= $("body > header").outerHeight() && diff >= 0) {
        console.log(diff);
    }
});
