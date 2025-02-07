document.addEventListener("DOMContentLoaded", () => {
    let signIN = document.getElementById("signIN");
    let form1 = document.getElementById("form1");
    let login1 = document.getElementById("login1");
    let password1 = document.getElementById("password1");

    let errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "14px";
    errorMessage.style.marginTop = "5px";
    errorMessage.style.display = "none";
    errorMessage.id = "error-message";
    signIN.insertAdjacentElement("afterend", errorMessage);

    form1.addEventListener("input", () => {
        if (login1.value.length > 0 && password1.value.length > 0) {
            signIN.removeAttribute('disabled');
            signIN.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            signIN.setAttribute('disabled', 'disabled');
            signIN.classList.add('opacity-50', 'cursor-not-allowed');
        }
    });
    form1.addEventListener("submit", (event) => {
        event.preventDefault();

        let storedLogin = localStorage.getItem("login");
        let storedPassword = localStorage.getItem("password");

        if (storedLogin && storedPassword) {
            if (login1.value === storedLogin && password1.value === storedPassword) {
                errorMessage.style.display = "none";
                window.location.href = "./Admin.html"; 
            } else {
                errorMessage.textContent = "❌ There is no user like this!";
                errorMessage.style.display = "block";
            }
        } else {
            errorMessage.textContent = "❌ No user found! Please sign up first.";
            errorMessage.style.display = "block";
        }
    });
   
});







    





