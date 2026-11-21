

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(function(element) {

        const elementPosition =
            element.getBoundingClientRect().top;

        const screenPosition =
            window.innerHeight - 100;

        if (elementPosition < screenPosition) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

// Display visible content immediately
revealOnScroll();


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {

        formMessage.style.color = "red";
        formMessage.textContent =
            "Please complete all fields.";

        return;

    }

    if (!emailPattern.test(email)) {

        formMessage.style.color = "red";
        formMessage.textContent =
            "Please enter a valid email address.";

        return;

    }

    // DEMONSTRATION ONLY
    // No actual email is sent without a backend service.

    formMessage.style.color = "#286b3c";

    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been received in this demo.";

    contactForm.reset();

});


// FOOTER YEAR

const currentYear = new Date().getFullYear();

document.querySelector(".copyright").innerHTML =
    "© " + currentYear +
    " GREEN ROOTS. All Rights Reserved. Made with care for nature.";
