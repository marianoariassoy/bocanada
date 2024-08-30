import { Link } from 'wouter'
import Image from '../../components/Image'
import { useInView } from 'react-intersection-observer'

interface Props {
  data: {
    id: number
    title: string
    shortext: string
    image: string
    date: string
  }
  index: number
}

const NovedadesItem = ({ data, index }: Props) => {
  const slug = data.title.toLowerCase().replace(/ /g, '-')
  const url = `/novedades/${data.id}/${slug}`

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <article
      className={`border-2 border-primary rounded-2xl flex flex-col gap-y-4  
      ${inView ? (index % 2 === 0 ? 'animate-fade-right' : 'animate-fade-left') : 'opacity-0'}
      `}
      ref={ref}
    >
      <div className='flex justify-between gap-x-6 items-end px-6 py-4 border-b-2 border-primary font-medium'>
        <div className='flex-1'>
          <h1 className='text-xl'>{data.title}</h1>
        </div>
        <div>{data.date}</div>
      </div>
      <div className='px-6 flex aspect-video'>
        <div className='border-2 border-primary rounded-2xl overflow-hidden'>
          <Link
            to={url}
            className='[&:hover>img]:scale-105 [&>img]:transition-all'
          >
            <Image
              src={data.image}
              alt={data.title}
            />
          </Link>
        </div>
      </div>
      <div className='text-black/70 text-sm px-6'>
        <p>{data.shortext}</p>
      </div>
      <div className='flex justify-end px-6 pb-6'>
        <Link
          to={url}
          className='py-2 px-12 text-white rounded-lg border-2 border-primary hover:text-white 
          text-primary transition-colors font-medium bg-primary-hover'
        >
          Leer más
        </Link>
      </div>
    </article>
  )
}

export default NovedadesItem
