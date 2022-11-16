var swiper = new Swiper(".bannerSwiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


var swiper = new Swiper(".topCategoriesSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".categoriesSwiper-button-next",
        prevEl: ".categoriesSwiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});

var swiper = new Swiper(".featureSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".featureSwiper-button-next",
        prevEl: ".featureSwiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});

var swiper = new Swiper(".recentSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".recentSwiper-button-next",
        prevEl: ".recentSwiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});


//testimonials Slider

var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".testimonials-button-next",
        prevEl: ".testimonials-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
    },
});


//dropdown on  click //
$(".custom-dropdown").on('click', function() {
    $(".dropdown-content ul").slideToggle();
});



$(document).ready(function() {
    $('.custom-select').select2({
        minimumResultsForSearch: 5,
    });
});
$(document).ready(function() {
    $('.custom-select2').select2({
        minimumResultsForSearch: 5,
    });
});
$(document).ready(function() {
    $('.custom-select3').select2({
        minimumResultsForSearch: 5,
    });
});

// filter js

