import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeaderSection() {

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
    <div id="inicio" data-aos="fade" data-aos-duration="1000" className="bg-white h-screen flex justify-center items-center">
        <div className="relative isolate px-6 lg:px-14">
            <div className="absolute inset-x-0 -bottom-2 md:bottom-10 -z-10 transform-gpu blur-[rem] overflow-hidden sm:-top-54" aria-hidden="true">
                <div className="relative left-[15rem] h-[10rem] md:h-[15rem] lg:h-[65rem] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D33658] to-[#D9043D] md:left-[calc(100%-24rem)] lg:left-[calc(100%-5rem)] sm:w-[72.1875rem]"></div>
            </div>
            <div className="lg:flex justify-center items-center">
                <div className="flex items-center justify-center text-center">
                    <h1 id="title" className="mb-0 mt-20 lg:mt-0 font-bold tracking-tight text-gray-900 text-5xl sm:text-7xl">
                        Mendoza Automotores
                    </h1>
                </div>
                <div className="flex justify-center items-center">
                    <img className="md:w-[50rem] w-[25rem] py-5 sm:py-0" src="https://res.cloudinary.com/dreso9ye9/image/upload/v1690506409/Mercedes-G-Wagon-1_h2vodl.png" alt="" />
                </div>  
            </div>
            {/* <div className="mt-10 sm:flex sm:justify-center">
                <div className="text-center relative rounded-full px-3 py-4 text-sm leading-6 text-black ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Vendemos - Compramos - Cotizamos
                </div>
            </div> */}
        </div>
    </div>
  )
}


