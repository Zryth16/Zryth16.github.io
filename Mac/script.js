$(document).ready(function () {
    $('.scroll-down-link').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('section.services').offset().top
        }, 800); // Adjust the duration (800ms) as needed
    });
});
