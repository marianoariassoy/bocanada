import { useEffect } from 'react'
import { useParams } from 'wouter'
import { Link } from 'wouter'
import Layout from '../../layout/Layout'
import Slider from './Slider'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'

interface Props {
  id: number
  title: string
  text: string
  image: string
  date: string
}

const Index = () => {
  const { id } = useParams() as { id: string }
  const { data, loading } = useFetch<Props[]>(`/novedades`)
  let dataFiltered = [] as Props[]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data])

  if (data) {
    dataFiltered = data.filter(item => item.id === +id)
    document.title = `Bocana - ${dataFiltered[0].title}`
  }

  return (
    <Layout>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        data && (
          <>
            <Slider id={id} />

            <section className='fade-in pb-12'>
              <div className='m-auto max-w-7xl px-6 py-6 lg:py-12 flex flex-col gap-y-6 lg:gap-y-12'>
                <div className='flex justify-between gap-x-3 items-end py-6 border-b-2 border-primary font-medium'>
                  <div>
                    <h1 className='text-2xl lg:text-4xl'>{dataFiltered[0].title}</h1>
                  </div>
                  <div className='lg:text-2xl'>{dataFiltered[0].date}</div>
                </div>
                <div className='flex flex-col lg:flex-row gap-x-20 gap-y-12'>
                  <div className='lg:w-4/6 text-black/50 text-sm lg:text-base'>
                    <HTML text={dataFiltered[0].text} />
                  </div>
                  <div className='lg:w-2/6'>
                    <div className='border-2 border-primary rounded-2xl flex flex-col gap-y-4 p-6 text-primary font-medium '>
                      <div>
                        <h3 className='font-bold text-center'>Más Novedades</h3>
                      </div>
                      {data
                        .filter(item => item.id !== +id)
                        .map(item => (
                          <div
                            key={item.id}
                            className='border-t-2 border-primary px-2 pt-4 cursor-pointer hover:underline text-sm lg:text-base'
                          >
                            <Link to={`/novedades/${item.id}/${item.title.toLowerCase().replace(/ /g, '-')}`}>
                              {item.title}
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )
      )}
    </Layout>
  )
}

export default Index
