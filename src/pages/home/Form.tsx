import { FieldsetHTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import { dataContact } from '../../components/data'

const Form = () => {
  const lan = 'es'

  interface Inputs {
    name: string
    city: string
    email: string
    location: string
    phone: string
    country: string
    message: string
  }

  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: FieldsetHTMLAttributes<Inputs>) => {
    setSending(true)

    axios.post('https://bocanavalores.com/backend/send-email.php', { ...data }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const Error = () => {
    return <div className='text-sm font-medium mt-3 text-black/50'>{dataContact[lan].required}</div>
  }

  return (
    <>
      {error ? (
        <div className='text-xl text-center font-medium'>{dataContact[lan].error}</div>
      ) : sended ? (
        <div className='text-xl text-center font-medium'>{dataContact[lan].thanks}</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 gap-4 text-sm lg:text-base'>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].name}
                {...register('name', { required: true })}
              />
              {errors.name && <Error />}
            </div>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].city}
                {...register('city')}
              />
            </div>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].email}
                {...register('email', { required: true })}
              />
              {errors.email && <Error />}
            </div>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].country}
                {...register('country')}
              />
            </div>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].phone}
                {...register('phone', { required: true })}
              />
              {errors.phone && <Error />}
            </div>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].subject}
                {...register('subject')}
              />
            </div>
          </div>
          <textarea
            className='w-full border border-t-0 border-primary placeholder-current font-medium h-52 p-4 mt-10 focus:outline-none focus:border-gray-400 rounded-b-2xl'
            placeholder={dataContact[lan].message}
            {...register('message')}
          />
          <div className='flex justify-end mt-8'>
            {sending ? (
              <BeatLoader />
            ) : (
              <button
                type='submit'
                className='py-2 px-12 text-white rounded-lg border-2 border-primary hover:text-white 
          text-primary transition-colors font-medium bg-primary-hover'
              >
                {dataContact[lan].send}
              </button>
            )}
          </div>
        </form>
      )}
    </>
  )
}

export default Form
