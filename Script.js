document.addEventListener("DOMContentLoaded", function () {

const registerForm = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (password.value !== confirmPassword.value) {
        alert("كلمة المرور وتأكيد كلمة المرور غير متطابقتين!");
        return;
    }

    alert("كلمتا المرور متطابقتان!");

});

});