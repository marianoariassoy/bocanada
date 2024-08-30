import ServiciosItem from './ServiciosItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Image from '../../components/Image'
import { useInView } from 'react-intersection-observer'

interface Props {
  id: number
  title: string
  text: string
  icon: string
}

const Servicios = () => {
  const { data, loading } = useFetch<Props[]>(`/servicios`)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <>
      <div
        className={`absolute bg-primary h-full inset-0 -z-10 ${inView ? 'animate-fade-down' : 'opacity-0'}`}
        ref={ref}
      >
        <div className='w-full h-[60vh]'>
          <Image
            src='https://bocanavalores.com/backend/images-static/portada.jpg'
            alt='portada'
          />
        </div>
      </div>
      {loading ? (
        <div className='w-full'>
          <Loader />
        </div>
      ) : (
        <div className='mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-6 px-6'>
          {data &&
            data.map((item, index) => (
              <ServiciosItem
                key={item.id}
                data={item}
                index={index}
              />
            ))}
        </div>
      )}
    </>
  )
}

export default Servicios
