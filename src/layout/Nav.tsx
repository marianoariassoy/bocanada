import { Link } from 'wouter'
import { menu } from '../components/data'
import useHome from '../utils/useHome'

const Nav = () => {
  const ishome = useHome()

  return (
    <nav>
      <ul className='flex gap-x-12 font-medium'>
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              href={ishome ? item.path : '/' + item.path.slice(1)}
              className='hover-underline-animation scroll'
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
