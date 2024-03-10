const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// Get the scroll button element
var scrollButton = document.querySelector(".scroll-up");

// Add scroll event listener to window
window.addEventListener("scroll", function() {
  // If user scrolled down, show the scroll button
  if (window.scrollY > 0) {
    scrollButton.style.display = "block";
  } else { // Otherwise, hide it
    scrollButton.style.display = "none";
  }
});

// Function to scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


