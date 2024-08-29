import { Facebook, Instagram } from './icons'

export const menu = [
  {
    title: 'Nuestros Servicios',
    path: '#servicios'
  },
  {
    title: 'Novedades',
    path: '#novedades'
  },
  {
    title: 'Nuestros Clientes',
    path: '#clientes'
  },
  {
    title: 'Contacto',
    path: '#contacto'
  }
]

export const social = [
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: Facebook()
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: Instagram()
  }
]

export const dataContact = {
  es: {
    name: 'Nombre y apellido*',
    city: 'Ciudad',
    email: 'E-Mail*',
    subject: 'Asunto',
    phone: 'Teléfono*',
    country: 'País',
    message: 'Consulta',
    send: 'Enviar',
    thanks: '¡Su mensaje fue enviado!',
    thanks2: '¡Tus datos fueron enviados!',
    error: 'Se produjo un error al enviar el mensaje',
    required: 'Por favor complete este dato'
  }
}
