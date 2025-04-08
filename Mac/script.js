$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000 // Set autoplay speed in milliseconds (3 seconds)
    });

    $('.scroll-down-link').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('section.services').offset().top
        }, 800); // Adjust the duration (800ms) as needed
    });
});
