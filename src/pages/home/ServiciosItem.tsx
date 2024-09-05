import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
  data: {
    id: number
    title: string
    text: string
    icon: string
  }
  index: number
}

const ServiciosItem = ({ data, index }: Props) => {
  const [more, setMore] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <article
      className={`flex flex-col gap-y-6 text-primary bg-white p-6 lg:p-8 rounded-2xl  ${
        inView ? 'animate-fade-up' : 'opacity-0'
      } ${index === 1 && 'animate-delay-500'} ${index === 2 && 'animate-delay-1000'} ${
        index === 3 && 'animate-delay-[1500ms]'
      }
      }`}
      ref={ref}
    >
      <div className='flex flex-col items-center gap-y-3 border-b-2 border-primary pb-6'>
        <div className='h-16 flex items-center p-2'>
          <img
            src={data.icon}
            alt={data.title}
            className='h-full object-cover object-center'
          />
        </div>
        <h2 className='font-medium lg:text-xl text-center'>{data.title}</h2>
      </div>
      <div className='text-sm'>{more ? data.text : `${data.text.substring(0, 160)}...`}</div>
      <div className='flex justify-center'>
        <button
          onClick={() => setMore(!more)}
          className='bg-primary py-2 px-12 text-white rounded-lg border-2 border-primary hover:bg-white 
          text-primary-hover transition-colors font-medium'
        >
          Ver {more ? ' menos' : 'más'}
        </button>
      </div>
    </article>
  )
}

export default ServiciosItem
