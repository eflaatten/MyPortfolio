scrollToTop = () => {
  const aboutContainer = document.querySelector('.about-me')
  aboutContainer.scrollIntoView({behavior: "smooth"})
}

responsiveNav = () => {
  var x = document.getElementById("nav-bar");
  if (x.className === "nav-container") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}

window.addEventListener('scroll', function() {
  let h2 = document.querySelector('.about-me-container h2');
  let p = document.querySelector('.about-me-container p');
  let scrollPosition = window.scrollY;

  // Adjust the position of h2 and p elements based on the scroll position
  h2.style.transform = `translateY(-${scrollPosition * 0.3}px)`;
  p.style.transform = `translateY(-${scrollPosition * 0.7}px)`; // Adjust the speed as needed
});



let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Hide/show nav bar when scrolling
  let navBar = document.querySelector('nav');
  if (currentScroll > lastScrollTop) {
    // Downscroll code
    navBar.classList.add("hide");
  } else {
    // Upscroll code
    navBar.classList.remove("hide");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

