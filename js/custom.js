// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*Easing Scroll Start Here*/
$(function () {
    $(".navbar a, .arrow a").bind("click", function (event) {
        var $anchor = $(this);
        $("html,body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }
        , 1500, "easeInOutExpo");
        event.preventDefault();

    });
});
/*Easing Scroll End Here*/


// Place any jQuery/helper plugins in here.
$('.carousel').carousel({
    interval: 2000
});




//baguetteBox intregration
$(function () {
    baguetteBox.run('#work', {
        animation: 'fadeIn'
    });
});



/*-------Team member slide start-----------*/
$(function () {
    $("#Team-member .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        smartSpeed: 400,
        margin: 10,
        center: false,
        dotsEach: true,
        items: 4,
        nav: false,

        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true

            },
            600: {
                items: 2,
                loop: true,
                autoplay: true,
                center: false
            },
            767: {
                items: 3

            },
            1000: {
                items: 3

            },
            1200: {
                items: 4

            }
        }

    });
}); /*-------Team member slide En-----------*/

