import { useState } from 'react'
import NovedadesItem from './NovedadesItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

interface Props {
  id: number
  title: string
  shortext: string
  image: string
  date: string
}
const Novedades = () => {
  const { data, loading } = useFetch<Props[]>(`/novedades`)
  const [show, setShow] = useState(2)

  return (
    <div className='text-primary'>
      <div className='w-full mx-auto max-w-7xl py-20 px-6 flex flex-col items-center gap-y-16'>
        <div>
          <h1 className='font-semibold text-4xl'>Novedades</h1>
        </div>
        {loading ? (
          <div className='w-full'>
            <Loader />
          </div>
        ) : (
          data && (
            <>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-16'>
                {data.slice(0, show).map(item => (
                  <NovedadesItem
                    key={item.id}
                    data={item}
                  />
                ))}
              </div>
              <div>
                {show < data.length ? (
                  <button
                    onClick={() => setShow(prev => prev + 2)}
                    className='bg-primary py-2 px-12 text-white rounded-lg border-2 border-primary hover:bg-white 
               text-primary-hover transition-colors font-medium'
                  >
                    Más Novedades
                  </button>
                ) : (
                  <button
                    onClick={() => setShow(prev => prev - 2)}
                    className='bg-primary py-2 px-12 text-white rounded-lg border-2 border-primary hover:bg-white 
           text-primary-hover transition-colors font-medium'
                  >
                    Menos Novedades
                  </button>
                )}
              </div>
            </>
          )
        )}
      </div>
    </div>
  )
}

export default Novedades
