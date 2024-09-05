import { useLocation } from 'wouter'

const useHome = () => {
  const [location] = useLocation()

  const ishome =
    location === '/' ||
    location === '/servicios' ||
    location === '/novedades' ||
    location === '/contacto' ||
    location === '/clientes' ||
    location === '/quienes-somos'

  return ishome
}

export default useHome
