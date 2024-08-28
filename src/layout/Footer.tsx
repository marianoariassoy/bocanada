import { Link } from 'wouter'
import { Logo } from '../components/icons'
import { menu, social } from '../components/data'
import useHome from '../utils/useHome'

const Footer = () => {
  const ishome = useHome()

  return (
    <footer className='bg-primary py-12 flex justify-between lg:items-center gap-x-3 px-6 lg:px-12 text-white transition-colors'>
      <div className='flex flex-col gap-y-6'>
        <nav className='flex flex-col gap-y-3 text-sm font-medium'>
          {menu.map((item, index) => (
            <Link
              key={index}
              href={ishome ? item.path : '/' + item.path.slice(1)}
              className='hover:text-white/50 scroll'
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <nav className='flex gap-x-3'>
          {social.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className='hover:text-white/50 transition-colors'
            >
              {item.icon}
            </a>
          ))}
        </nav>
      </div>
      <div className=''>
        <Logo />
      </div>
    </footer>
  )
}

export default Footer
