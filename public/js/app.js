//password field show and hide
// $(".toggle-password").click(function() {

//     $(this).toggleClass("svg-icon");
//     var input = $($(this).attr("toggle"));
//     if (input.attr("type") == "password") {
//       input.attr("type", "text");
//     } else {
//       input.attr("type", "password");
//     }
//   });


//   const togglePassword = document.querySelector('#togglePassword');
//   const password = document.querySelector('#id_password');

//   togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye slash icon
//     this.classList.toggle('svg-icon');
// });

//password field show and hide

function PasswordIcon(){
    var x = document.getElementById("myInput");
    if(x.type === "password"){
        x.type = "text";
        document.getElementById('icon_hide').style.display = "inline-block";
        document.getElementById('icon_show').style.display = "none";

    }

    else{
        x.type = "password";
        document.getElementById('icon_hide').style.display = "none";
        document.getElementById('icon_show').style.display = "inline-block";
    }
}

function CreatePasswordIcon(){
    var x = document.getElementById("CreatePasswordInput");
    if(x.type === "password"){
        x.type = "text";
        document.getElementById('create_icon_hide').style.display = "inline-block";
        document.getElementById('create_icon_show').style.display = "none";

    }

    else{
        x.type = "password";
        document.getElementById('create_icon_hide').style.display = "none";
        document.getElementById('create_icon_show').style.display = "inline-block";
    }
}


//   const togglePassword = document.querySelector("#togglePassword");
//         const password = document.querySelector("#password");

//         togglePassword.addEventListener("click", function () {
//             // toggle the type attribute
//             const type = password.getAttribute("type") === "password" ? "text" : "password";
//             password.setAttribute("type", type);
            
//             // toggle the icon
//             this.classList.toggle("bi-eye");
//         });

//         // prevent form submit
//         const form = document.querySelector("form");
//         form.addEventListener('submit', function (e) {
//             e.preventDefault();
//         });
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

$(".user-profile").on('click', function() {
    $(".profile-content ul").slideToggle();
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
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', onTabClick, false);
}