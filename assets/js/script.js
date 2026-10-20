document.addEventListener("DOMContentLoaded", function () {

// =================================
// Hamburger Menu
// =================================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        hamburger.setAttribute("aria-expanded", isOpen);

        hamburger.setAttribute(
            "aria-label",
            isOpen ? "إغلاق قائمة التنقل" : "فتح قائمة التنقل"
        );

    });

}


// =================================
// Registration Form
// =================================

const registerForm = document.getElementById("registerForm");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

if (registerForm && password && confirmPassword) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (password.value !== confirmPassword.value) {

            alert("كلمة المرور وتأكيد كلمة المرور غير متطابقتين!");

            return;

        }

        alert("كلمتا المرور متطابقتان!");

    });

}

});
