import { social } from '../components/data'

const Social = () => {
  return (
    <div className='flex items-center gap-x-4'>
      {social.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target='_blank'
          className='hover:text-black/50 transition-colors'
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default Social
