import { Logo } from '../components/icons'
import Social from './Social'
import Bars from './Bars'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='sticky top-0 z-50'>
      <div className='bg-gray-100 text-black/50 text-center px-6 py-4 text-sm'>
        <a
          href='tel:+5493872165670'
          className='hover:underline'
        >
          +54 9 3872 16-5670
        </a>
        {' - '}
        <a
          href='mailto:contacto@bocanavalores.com'
          className='hover:underline'
        >
          contacto@bocanavalores.com
        </a>
      </div>
      <div
        className='py-4 transition-all w-full bg-white px-6 lg:px-12 text-primary flex justify-between items-center z-50'
        id='header'
      >
        <div className='basis-0'>
          <a
            href='#servicios'
            className='hover:text-black/50 transition-colors logo scroll'
          >
            <Logo />
          </a>
        </div>
        <div className='flex-1 justify-center hidden lg:flex'>
          <Nav />
        </div>
        <div className='basis-0 flex gap-x-6 items-center'>
          <Social />
          <Bars />
        </div>
      </div>
    </header>
  )
}

export default Header
