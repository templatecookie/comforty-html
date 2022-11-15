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
