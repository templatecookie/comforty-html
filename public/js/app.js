//password field show and hide


function currentPasswordIcon(){

    var x = document.getElementById("CurrentPasswordInput");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('current-icon-hide').style.display = "inline-block";
        document.getElementById('current-icon-show').style.display = "none";

    } else {
        x.type = "password";
        document.getElementById('current-icon-hide').style.display = "none";
        document.getElementById('current-icon-show').style.display = "inline-block";
    }
}

function PasswordIcon() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('icon-hide').style.display = "inline-block";
        document.getElementById('icon-show').style.display = "none";

    } else {
        x.type = "password";
        document.getElementById('icon-hide').style.display = "none";
        document.getElementById('icon-show').style.display = "inline-block";
    }
}



function CreatePasswordIcon() {
    var x = document.getElementById("CreatePasswordInput");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('create-icon-hide').style.display = "inline-block";
        document.getElementById('create-icon-show').style.display = "none";

    } else {
        x.type = "password";
        document.getElementById('create-icon-hide').style.display = "none";
        document.getElementById('create-icon-show').style.display = "inline-block";
    }
}


var swiper = new Swiper(".bannerSwiper", {
    cssMode: true,
    loop: true,
    speed: 1000,
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

var swiper2 = new Swiper(".brandSwiper", {
    slidesPerView: 2,
    spaceBetween: 12,
    loop: true,
    mousewheel: true,
    breakpoints: {
        375:{
            slidesPerView: 3,
            spaceBetween: 12,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 18,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
        1500: {
            slidesPerView: 6,
            spaceBetween: 106,
        }
    },
});

var swiper3 = new Swiper(".topCategoriesSwiper", {
    slidesPerView: 1,
    spaceBetween: 12,
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
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});

var swiper4 = new Swiper(".featureSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".featureSwiper-button-next",
        prevEl: ".featureSwiper-button-prev",
    },
    breakpoints: {
        480: {
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

var swiper5 = new Swiper(".recentSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".recentSwiper-button-next",
        prevEl: ".recentSwiper-button-prev",
    },
    breakpoints: {
        480: {
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

var swiper6 = new Swiper(".testimonialSwiper", {
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


var galleryThumbs = new Swiper(".gallery-thumbs", {
    freeMode: true,
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
    },
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical'
});

var galleryMain = new Swiper(".gallery-main", {
    mousewheel: true,
    loop: true,
    navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

galleryMain.on('slideChangeTransitionStart', function() {
    galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on('transitionStart', function() {
    galleryMain.slideTo(galleryThumbs.activeIndex);
});


//dropdown on  click //
$(".custom-dropdown").on('click', function() {
    $(".dropdown-content ul").slideToggle();
});

$("#addToCart").on('click', function() {
    $(".cart-content ul").slideToggle();
});

// $("#addToCart").on('mouseleave', function() {
//     $(".cart-content ul").slideUp();
// });

// $("#addToCart").on('click', function() {
//     $(".cart-content ul").slideUp();
// });

// $(".cart-content ul").on('mouseleave', function() {
//     $(".cart-content ul").slideUp();
// });

$(".user-profile").on('click', function() {
    $(".profile-content ul").slideToggle();
});

// $(".profile-content").on('mouseleave', function() {
//     $(".profile-content ul").slideUp();
// });

// $(".dropdown-content").on('mouseleave', function() {
//     $(".dropdown-content ul").slideUp();
// });



$(".main-menu li").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
        $(this).children("ul").stop().slideDown(300);
    } else {
        $(this).children("ul").stop().slideUp(300);
    }
});

$(document).ready(function() {
    $('.custom-select').select2({
        minimumResultsForSearch: 8,
        dropdownParent: $('.language')
    });
});
$(document).ready(function() {
    $('.custom-select2').select2({
        minimumResultsForSearch: 8,
        dropdownParent: $('.category')
    });
});
$(document).ready(function() {
    $('.custom-select3').select2({
        minimumResultsForSearch: 8,
        dropdownParent: $('.price')
    });
});
$(document).ready(function() {
    $('.custom-select4').select2({
        minimumResultsForSearch: 8,
        dropdownParent: $('.color')
    });
});
$(document).ready(function() {
    $('.custom-select5').select2({
        minimumResultsForSearch: 8,
        dropdownParent: $('.material')
    });
});
$(document).ready(function() {
    $('.custom-select6').select2({
        minimumResultsForSearch: 8,
        dropdownParent: $('.latest')
    });
});

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 500) {
        $("#header-sticky").removeClass("header-sticky");
    } else {
        $("#header-sticky").addClass("header-sticky");
    }
});

var menuBtn = document.getElementById('hamburger-btn');
var menuBtnClose = document.getElementById('hamburger-btn-close');
var navMenu = document.getElementById('nav-menu')
var overlay = document.getElementById('overlay')

menuBtn.addEventListener('click', () => {
    navMenu.classList.add('open')
    overlay.classList.add('open')
})
menuBtnClose.addEventListener('click', () => {
    navMenu.classList.remove('open')
    overlay.classList.remove('open')
})
overlay.addEventListener('click', () => {
    navMenu.classList.remove('open')
    overlay.classList.remove('open')
})


// tab js
const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".tab-content");

function onTabClick(event) {

    // deactivate existing active tabs and panel

    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
    }

    for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove("active");
    }


    // activate new tabs and panel
    event.target.classList.add('active');
    let classString = event.target.getAttribute('data-target');
    console.log(classString);
    if(classString === 'panel-1' || classString === 'panel-2'){
        document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active");
    }
    if (classString === 'tab-1' || classString === 'tab-2') {
        document.getElementById('accTabs').getElementsByClassName(classString)[0].classList.add("active");
    }
}

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', onTabClick, false);
}

var containerEl = document.querySelector("#portfoliolist");

var mixer = mixitup(containerEl, {
    animation: {
        animateResizeContainer: true,
    },
    load: {
        filter: '.all'
    }
});

