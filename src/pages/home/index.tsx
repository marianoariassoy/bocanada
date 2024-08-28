import { useEffect } from 'react'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import Clientes from './Clientes'
import Contacto from './Contacto'
import Novedades from './Novedades'
import Servicios from './Servicios'

const Index = () => {
  const [location] = useLocation()

  useEffect(() => {
    document.title = 'Bocanada - Valores'

    if (location === '/') return
    const target = location.replace('/', '#') as string
    const targetElement = document.querySelector(`${target}`) as HTMLElement
    window.scrollTo({
      top: targetElement?.offsetTop - 80,
      behavior: 'smooth'
    })
  }, [location])

  return (
    <Layout>
      <section
        className='py-12 relative'
        id='servicios'
      >
        <Servicios />
      </section>
      <section id='novedades'>
        <Novedades />
      </section>
      <section id='clientes'>
        <Clientes />
      </section>
      <section id='contacto'>
        <Contacto />
      </section>
    </Layout>
  )
}

export default Index
