$(document).ready(function () {
    $(".button-collapse").sideNav();

    $('.slider').slider({
        height: 400,
        indicators: false
    });
    $('.carousel').carousel({
        time_constant: 5000,
        indicators: true
    });

    // $('#nav-menu').pushpin({
    //     top: $('#nav-logo').height()
    // });

    setInterval("$('.carousel').carousel('next');", 5000);


});
