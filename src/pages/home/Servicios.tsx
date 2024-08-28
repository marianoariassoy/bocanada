import ServiciosItem from './ServiciosItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

interface Props {
  id: number
  title: string
  text: string
  icon: string
}

const Servicios = () => {
  const { data, loading } = useFetch<Props[]>(`/servicios`)

  return (
    <>
      <div className='absolute bg-primary h-full inset-0 -z-10'>
        <div className='w-full h-[60vh]'>
          <img
            src='/assets/hero.jpg'
            className='object-cover object-center h-full w-full'
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
            data.map(item => (
              <ServiciosItem
                key={item.id}
                data={item}
              />
            ))}
        </div>
      )}
    </>
  )
}

export default Servicios
