const NavMenu = () => {
  const openMenu = () => {
    const menu = document.getElementById('menu')
    menu?.classList.toggle('hidden')
  }
  return (
    <button
      id='nav-menu'
      className='block lg:hidden'
      onClick={openMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default NavMenu
