// Run whenever document is ready
$(function() {
    // Smooth scrolling for any intra-document links (href="#id")
    $('a[href*=#]:not([href=#])').click(function() {
        if (this.hash.length) {
            $('body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000);
        }
    });

    // Header shadow transition (between light and dark)
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
        $(".headerdiv").css("transform", "translateY(-" + percentChange + "%" + ")");
        $(".headerdivinner.dark").css("transform", "translateY(" + percentChange + "%" + ")");
        $(".headerdivinner.light").css("transform", "translateY(" + (percentChange - 100) + "%" + ")");
    });
});
