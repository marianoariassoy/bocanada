const scroll = () => {
  const menuLinks = document.querySelectorAll('.scroll')

  menuLinks.forEach(link => {
    link.addEventListener('click', smoothScroll)
  })

  function smoothScroll(this: HTMLAnchorElement, e: Event) {
    e.preventDefault()
    const targetId = this.getAttribute('href')
    const targetElement = document.querySelector(targetId!)
    window.scrollTo({
      top: targetElement!.getBoundingClientRect().top + window.scrollY - 115,
      behavior: 'smooth'
    })
  }
}

export default scroll
