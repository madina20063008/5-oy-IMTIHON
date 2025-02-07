// let login = document.getElementById("login");
// let password = document.getElementById("password");
// let form = document.getElementById("form");
// let Btn = document.getElementById("button");

// form.addEventListener("input", () => {
//     if (login.value.length > 0 && password.value.length > 0) {
//         Btn.removeAttribute('disabled');
//         Btn.classList.remove('opacity-50', 'cursor-not-allowed');
//     } else {
//         Btn.setAttribute('disabled', 'disabled');
//         Btn.classList.add('opacity-50', 'cursor-not-allowed');
//     }
// });




































let login = document.getElementById("login");
let password = document.getElementById("password");
let form = document.getElementById("form");
let Btn = document.getElementById("button");




form.addEventListener("input", () => {
    if (login.value.length > 0 && password.value.length > 0) {
        Btn.removeAttribute('disabled');
        Btn.classList.remove('opacity-50', 'cursor-not-allowed');
        localStorage.setItem("login", login.value);
        localStorage.setItem("password", password.value);
    } else {
        Btn.setAttribute('disabled', 'disabled');
        Btn.classList.add('opacity-50', 'cursor-not-allowed');
    }
});



window.addEventListener("load", () => {
    if (localStorage.getItem("login")) {
        login.value = localStorage.getItem("login");
    }
    if (localStorage.getItem("password")) {
        password.value = localStorage.getItem("password");
    }
});

window.addEventListener("load", () => {
    if (localStorage.getItem("login1")) {
        login.value = localStorage.getItem("login1");
    }
    if (localStorage.getItem("password1")) {
        password.value = localStorage.getItem("password1");
    }
});






// let login = document.getElementById("login");
//         let password = document.getElementById("password");
//         let form = document.getElementById("form");
//         let Btn = document.getElementById("button");
//         let signIN = document.getElementById("signIN");
//         let form1 = document.getElementById("form1");
//         let login1 = document.getElementById("login1");
//         let password1 = document.getElementById("password1");

//         form.addEventListener("input", () => {
//             if (login.value.length > 0 && password.value.length > 0) {
//                 Btn.removeAttribute('disabled');
//                 Btn.classList.remove('opacity-50', 'cursor-not-allowed');
//                 localStorage.setItem("login", login.value);
//                 localStorage.setItem("password", password.value);
//             } else {
//                 Btn.setAttribute('disabled', 'disabled');
//                 Btn.classList.add('opacity-50', 'cursor-not-allowed');
//             }
//         });

//         form1.addEventListener("input", () => {
//             if (login1.value.length > 0 && password1.value.length > 0) {
//                 signIN.removeAttribute('disabled');
//                 signIN.classList.remove('opacity-50', 'cursor-not-allowed');
//             } else {
//                 signIN.setAttribute('disabled', 'disabled');
//                 signIN.classList.add('opacity-50', 'cursor-not-allowed');
//             }
//         });

//         signIN.addEventListener("click", () => {
//             let storedLogin = localStorage.getItem("login");
//             let storedPassword = localStorage.getItem("password");
            
//             if (login1.value === storedLogin && password1.value === storedPassword) {
//                 window.location.href = "dashboard.html"; // Redirect to another page
//             } else {
//                 alert("There is no user like this");
//             }
//         });

//         window.addEventListener("load", () => {
//             if (localStorage.getItem("login")) {
//                 login.value = localStorage.getItem("login");
//             }
//             if (localStorage.getItem("password")) {
//                 password.value = localStorage.getItem("password");
//             }
//         });