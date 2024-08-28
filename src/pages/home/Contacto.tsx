import { useEffect } from 'react'
import Form from './Form'
import scroll from '../../utils/scroll'

const Contacto = () => {
  useEffect(() => {
    scroll()
  }, [])

  return (
    <div className='w-full mx-auto max-w-5xl py-20 px-6 flex flex-col items-center gap-y-16'>
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
