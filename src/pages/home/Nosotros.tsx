import { useInView } from 'react-intersection-observer'

const Nosotros = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <div className='w-full mx-auto max-w-6xl pt-20 px-6 flex flex-col items-center gap-y-16 text-center'>
      <div>
        <h1 className='font-semibold text-4xl'>Quienes Somos?</h1>
      </div>
      <div className='flex flex-col gap-y-4'>
        <div
          className={inView ? 'animate-fade-up' : 'opacity-0'}
          ref={ref}
        >
          En Bocana Valores S.A, somos un equipo de expertos en consultoría financiera comprometidos con ayudar a
          nuestros clientes a alcanzar sus metas económicas. Con una profunda comprensión de los mercados y una visión
          estratégica, brindamos soluciones personalizadas que se adaptan a las necesidades específicas de cada negocio.
          <br />
          <br />
          Nuestra trayectoria está respaldada por años de experiencia en el sector, trabajando con empresas de
          diferentes industrias y tamaños. Nos especializamos en ofrecer asesoramiento financiero integral, que abarca
          desde la planificación y gestión de recursos hasta la optimización de procesos financieros.
          <br />
          <br />
          Lo que nos distingue es nuestra dedicación a construir relaciones de confianza con nuestros clientes. Creemos
          en el poder de la colaboración y en la importancia de entender a fondo cada negocio para ofrecer soluciones
          que realmente generen valor.
        </div>
        <div
          className={`flex flex-col gap-y-4 ${inView2 ? 'animate-fade-up' : 'opacity-0'}`}
          ref={ref2}
        >
          <h2 className='font-semibold text-2xl text-primary'>Misión</h2>
          <p>
            Ofrecer soluciones financieras innovadoras y personalizadas, orientadas a optimizar la rentabilidad y las
            finanzas de cada uno de nuestros clientes, brindando siempre servicios de excelencia
          </p>
          <h2 className='font-semibold text-2xl text-primary'>Visión</h2>
          <p>
            Ser el referente al que cada cliente recurra ante toda situación financiera, asegurando que siempre tengamos
            una solución óptima y personalizada para cada necesidad.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Nosotros
