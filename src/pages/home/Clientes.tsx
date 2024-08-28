import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

interface Props {
  id: number
  title: string
  icon: string
}

const Clientes = () => {
  const { data, loading } = useFetch<Props[]>(`/clientes`)

  return (
    <div className='px-6 lg:px-12 bg-gray-100 py-20'>
      <div className='text-black/60 text-center border-b-2 border-black/60 pb-12'>
        <h1 className='font-semibold text-4xl'>Nuestros Clientes</h1>
      </div>
      {loading ? (
        <div className='w-full'>
          <Loader />
        </div>
      ) : (
        data && (
          <div className='max-w-7xl mx-auto grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-12 items-center py-12'>
            {data.map(({ id, icon }) => (
              <div key={id}>
                <img
                  src={icon}
                  alt='logo'
                  className='w-full'
                />
              </div>
            ))}
          </div>
        )
      )}
    </div>
  )
}

export default Clientes
