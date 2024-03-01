activeTab = (clickedLink) => {
  const navLinks = document.querySelectorAll('.navLink')

  navLinks.forEach(link => {
    link.classList.remove('active')
  })

  clickedLink.classList.add('active')

}
