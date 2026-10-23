
/* =====================================
   1. MOBILE NAVIGATION
===================================== */

// Find the menu button in our HTML
const menuToggle = document.getElementById("menuToggle");

// Find the navigation menu
const navLinks = document.getElementById("navLinks");

// Open or close the menu when the button is clicked
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    // Check whether the menu is open
    const isOpen = navLinks.classList.contains("active");

    // Update the accessibility state
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change the button symbol
    menuToggle.textContent = isOpen ? "✕" : "☰";

    // Update its accessible label
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


// Close the mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    });

});


/* =====================================
   2. AUTOMATIC COPYRIGHT YEAR
===================================== */

// Find the year element
const yearElement = document.getElementById("currentYear");

// Display the current year automatically
yearElement.textContent = new Date().getFullYear();
