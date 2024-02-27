responsiveNav = () => {
  var burger = document.getElementsByClassName('nav-container')
  if (burger.className === "nav") {
    burger.className += " responsive";
  } else {
    burger.className = "nav";
  }
}


activeTab = (clickedLink) => {
  const navLinks = document.querySelectorAll('.navLink')

  navLinks.forEach(link => {
    link.classList.remove('active')
  })

  clickedLink.classList.add('active')
}
