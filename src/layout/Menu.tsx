import { Link } from 'wouter'
import { menu } from '../components/data'
import { Logo } from '../components/icons'
import Social from './Social'
import { Close } from '../components/icons'
import useHome from '../utils/useHome'

const Menu = () => {
  const ishome = useHome()

  const closeMenu = () => {
    const menu = document.getElementById('menu')
    menu?.classList.toggle('hidden')
  }

  return (
    <div
      className='hidden fade-in fixed top-0 left-0 w-screen h-screen bg-gray-100 p-12 z-50 text-primary'
      id='menu'
    >
      <button
        className='absolute top-6 right-6 z-50'
        onClick={closeMenu}
      >
        <Close />
      </button>
      <div className='flex flex-col items-center justify-between gap-y-6 h-full'>
        <Logo />
        <nav>
          <ul className='flex flex-col items-center gap-y-10 font-bold'>
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  href={ishome ? item.path : '/' + item.path.slice(1)}
                  className='scroll'
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Social />
      </div>
    </div>
  )
}

export default Menu
