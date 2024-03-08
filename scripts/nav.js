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