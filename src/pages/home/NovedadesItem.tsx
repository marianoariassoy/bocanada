import { Link } from 'wouter'
import Image from '../../components/Image'

interface Props {
  data: {
    id: number
    title: string
    shortext: string
    image: string
    date: string
  }
}

const NovedadesItem = ({ data }: Props) => {
  const slug = data.title.toLowerCase().replace(/ /g, '-')
  const url = `/novedades/${data.id}/${slug}`

  return (
    <article className='fade-in border-2 border-primary rounded-2xl flex flex-col gap-y-4'>
      <div className='flex justify-between gap-x-3 items-center px-6 py-4 border-b-2 border-primary font-medium'>
        <div>
          <h1 className='text-xl'>{data.title}</h1>
        </div>
        <div>{data.date}</div>
      </div>
      <div className='px-6'>
        <Link
          to={url}
          className='border-2 block border-primary rounded-2xl aspect-[5/4] lg:aspect-[7/3] overflow-hidden 
        [&:hover>img]:scale-105 [&>img]:transition-all'
        >
          <Image
            src={data.image}
            alt={data.title}
          />
        </Link>
      </div>
      <div className='text-black/50 text-sm px-6'>
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
