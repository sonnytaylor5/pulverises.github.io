$(document).ready(function () {
    setTimeout(function(){
        $('.loading-spinner-container').fadeOut("fast");
        $('body').removeClass('noscroll');
    }, 4500);

    $('.sidebar__openbutton').click(function () {
        if ($('#sidebar__btn').hasClass("fa-arrow-right")) {
            $(".container").animate({ "right": "-=170px" }, 1000, function () { });
            $(".sidebar").animate({ "right": "-=340px" }, 1000, function () {
                $('.sidebar__btn').removeClass("fa-arrow-right").addClass("fa-arrow-left");
            });
        } else {
            $(".container").animate({ "right": "+=170px" }, 1000, function () { });
            $(".sidebar").animate({ "right": "+=340px" }, 1000, function () {
                $('.sidebar__btn').removeClass("fa-arrow-left").addClass("fa-arrow-right");
            });
        }
    });

    window.setInterval(function () {
        $('.sidebar__btncontainer').animate({ "left": "-=38px" }, 1000, function () {
            $('.sidebar__btncontainer').animate({ "left": "-=38px" }, 1000, function () {
                $('.sidebar__btncontainer').animate({ "left": "-=38px" }, 1000, function () {
                    $('.sidebar__btncontainer').css("left", "6px");
                });
            });
        });
    }, 3000);
});