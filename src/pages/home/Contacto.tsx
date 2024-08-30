import { useEffect } from 'react'
import Form from './Form'
import scroll from '../../utils/scroll'
import { useInView } from 'react-intersection-observer'

const Contacto = () => {
  useEffect(() => {
    scroll()
  }, [])

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <div
      className={`w-full mx-auto max-w-5xl py-20 px-6 flex flex-col items-center gap-y-16 ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
      ref={ref}
    >
      <div>
        <h1 className='font-semibold text-4xl'>Contacto</h1>
      </div>
      <div className='w-full'>
        <Form />
      </div>
    </div>
  )
}

export default Contacto
