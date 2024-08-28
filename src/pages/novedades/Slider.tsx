import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

interface Props {
  id: string
  image: string
}

const Slider = ({ id }: { id: string }) => {
  const { data, loading } = useFetch<Props[]>(`/imagenes/${id}`)

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )

  const sliderProperties = {
    autoplay: true,
    transitionDuration: 1000,
    duration: 3000,
    indicators: true,
    arrows: false,
    infinite: true,
    pauseOnHover: false
  }

  return (
    <section className='w-screen relative'>
      <Fade {...sliderProperties}>
        {data &&
          data.map(item => (
            <div
              key={item.id}
              className='aspect-[5/4] lg:aspect-[16/5] w-full h-full'
            >
              <Image
                src={item.image}
                alt=''
              />
            </div>
          ))}
      </Fade>
    </section>
  )
}

export default Slider
