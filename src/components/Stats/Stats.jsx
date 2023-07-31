import { CurrencyDollarIcon, HandThumbUpIcon, TagIcon, UsersIcon } from '@heroicons/react/24/outline';
import React from 'react';

const features = [
    {
      name: '5.000+',
      description:
        'Autos vendidos',
      icon: CurrencyDollarIcon,
    },
    {
      name: '200+',
      description:
        'Autos a la venta',
      icon: TagIcon,
    },
    {
      name: '9.000+',
      description:
        'Clientes satisfechos',
      icon: HandThumbUpIcon,
    },
    {
      name: '1.500+',
      description:
        'Visitas web diarias',
      icon: UsersIcon,
    },
  ]

export default function Stats() {

  return (
    <div className='bg-gradient-to-tr from-[#D33658] to-[#D9043D]'>
        <div className="mx-auto mt-10 max-w-3xl md:mt-24 lg:w-full py-10 px-10 lg:px-0">
          <p className="text-center pb-16 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Más de 30 años de trayectoria en Mendoza
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
                <div className='text-center' key={feature.name}>
                    <div className="flex-col justify-around items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-xl shadow-sombra-imagenes bg-white sm:w-12 sm:h-12">
                            <feature.icon className="w-12 p-2 text-[#A60311]" aria-hidden="true" />
                        </div>
                            <p className='text-2xl text-white font-bold text-deep-purple-accent-400'>{feature.name}</p>
                            <p className="text-white opacity-75">{feature.description}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
    </div>
    // <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-16'>
    //   <h2 className='text-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Más de 30 años de trayectoria en Mendoza</h2>
    //   <div className='flex-row md:flex md:justify-center md:items-center gap-16 my-10'>
    //     <div className='flex justify-center items-center gap-2'>
    //         <div>
    //             <CurrencyDollarIcon className='w-10 bg-slate-400 p-2 rounded-xl'/>
    //         </div>
    //         <div>
    //             <p className='font-bold'>10.000+</p>
    //             <p>Autos vendidos</p>
    //         </div>
    //     </div>
    //     <div className='flex justify-center items-center gap-2'>
    //         <div>
    //             <TagIcon className='w-10 bg-slate-400 p-2 rounded-xl'/>
    //         </div>
    //         <div>
    //             <p className='font-bold'>200+</p>
    //             <p>Autos a la venta</p>
    //         </div>
    //     </div>
    //     <div className='flex justify-center items-center gap-2'>
    //         <div>
    //             <HandThumbUpIcon className='w-10 bg-slate-400 p-2 rounded-xl'/>
    //         </div>
    //         <div>
    //             <p className='font-bold'>9.000+</p>
    //             <p>Clientes satisfechos</p>
    //         </div>
    //     </div>
    //     <div className='flex justify-center items-center gap-2'>
    //         <div>
    //             <UsersIcon className='w-10 bg-slate-400 p-2 rounded-xl'/>
    //         </div>
    //         <div>
    //             <p className='font-bold'>1.500+</p>
    //             <p>Visitas web diarias</p>
    //         </div>
    //     </div>
    //   </div>
    // </div>
  )
}