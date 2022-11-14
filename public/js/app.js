var swiper = new Swiper(".bannerSwiper", {
    speed: 600,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//dropdown on  click //
$(".custom-dropdown").on('click', function() {
    $(".dropdown-content ul").slideToggle();
});

