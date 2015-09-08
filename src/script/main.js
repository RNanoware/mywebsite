$(window).scroll(function() {
    var diff = $("#splash").height() - $(window).scrollTop();
    var headerHeight = $(".headerdiv").outerHeight();
    if (diff <= headerHeight && diff >= 0) {
        var percentChange = 100 * (1 - diff / headerHeight);
    } else if (diff < 0) {
        var percentChange = 100;
    } else {
        var percentChange = 0;
    }
    console.log(percentChange);
    $(".headerdiv").css("transform", "translateY(-" + percentChange + "%" + ")");
    $(".headerdivinner.dark").css("transform", "translateY(" + percentChange + "%" + ")");
    $(".headerdivinner.light").css("transform", "translateY(" + (percentChange - 100) + "%" + ")");
});
