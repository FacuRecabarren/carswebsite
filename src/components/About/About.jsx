import { ArrowsRightLeftIcon, ClipboardDocumentListIcon, CreditCardIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    name: 'Garantía Oficial',
    description:
      'Los 0km que compres en Mendoza Automotores, cuentan con la garantía oficial del fabricante, la que podrás hacer valer, en cualquier concesionario oficial de Argentina.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Permutas y Usados',
    description:
      'Recibimos tu vehículo en parte de pago, y contamos con un amplio stock de usados, para que tu elección, no esté limitada.',
    icon: ArrowsRightLeftIcon,
  },
  {
    name: 'Financiación',
    description:
      'Financiación exclusiva para que puedas adquirir el auto de tus sueños sin complicaciones.',
    icon: CreditCardIcon,
  },
  {
    name: 'Gestoría',
    description:
      'Eficacia y rapidez a la hora de entregar la documentación ya que contamos con gestoría propia altamente capacitada.',
    icon: UsersIcon,
  },
]

export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación (en milisegundos)
      once: true, // Solo animar una vez
      easing: 'ease-in-out', // Función de tiempo de la animación
      // Aquí puedes agregar más opciones de configuración según tus necesidades
    });
    AOS.refresh();
  }, []);

  return (
    <div id='nosotros' data-aos="fade" data-aos-duration="1000" className="bg-white pt-24">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Por qué elegirnos?
          </p>
          <p className="text-center mt-6 text-lg leading-8 text-gray-600">
          <span className='text-[#D9043D]'>Mendoza Automotores</span> es una empresa que se especializa en la venta y compra de automoviles multimarca <span className='text-[#D9043D]'>0Km</span> y <span className='text-[#D9043D]'>usados</span>. Desde nuestros inicios nos comprometimos con el cliente, brindando calidad, asesoramiento, seguridad y un servicio inigualable.
          </p>
        </div>
      </div>
      <div className='bg-gradient-to-tr from-[#D33658] to-[#D9043D]'>
        <div className="mx-auto mt-10 max-w-3xl md:mt-24 lg:w-full py-10 px-10 lg:px-0">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-2 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sombra-imagenes">
                    <feature.icon className="h-6 w-6 text-[#A60311]" aria-hidden="true" />
                  </div>
                  <p className='text-lg text-white font-semibold'>{feature.name}</p>
                </dt>
                <dd className="mt-2 text-sm text-white opacity-75 font-light">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}