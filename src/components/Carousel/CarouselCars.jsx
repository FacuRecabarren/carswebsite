import { ArrowLeftIcon, ArrowRightIcon, MinusSmallIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';


export default function CarouselCars() {

  const cards = [
    {url: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1690383715/23_Corolla_SE_RubyFlarePearl_02_szx7mk.png',brand: 'Toyota Corolla', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quas ad, eum incidunt, tenetur facere quos suscipit voluptate aut impedit, omnis obcaecati? Cumque quasi est temporibus cupiditate fugiat error et.', model: 2023, price: '$50.000'},
    {url: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1690383801/2011_AUDI_R8_5.2_QUATTRO_COUPE_2D_BLACK_stock_desktop_1920x1080_r3wrn5.webp',brand: 'Audi R8', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quas ad, eum incidunt, tenetur facere quos suscipit voluptate aut impedit, omnis obcaecati? Cumque quasi est temporibus cupiditate fugiat error et.', model: 2015, price: '$94.550'},
    {url: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1690384016/volkswagen-amarok-v6-000_yzutbp.png',brand: 'Volkswagen Amarok', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quas ad, eum incidunt, tenetur facere quos suscipit voluptate aut impedit, omnis obcaecati? Cumque quasi est temporibus cupiditate fugiat error et.', model: 2020, price: '$65.000'},
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === cards.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-28'>
      <p className="text-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Autos Disponibles
      </p>
      <div className='flex justify-center items-center text-center my-10 shadow-xl'>
        <div className='cursor-pointer'>
          <ArrowLeftIcon onClick={prevSlide} className='w-6 shadow-xl bg-white rounded-full py-1 px-1 sm:bg-transparent sm:rounded-none sm:shadow-none sm:p-0 sm:w-8 mx-3' />
        </div>
        <div className="lg:flex flex-row justify-center items-center text-center rounded-xl my-5">
                <div className="w-full">
                  <img className="w-full object-cover shadow-sombra-btn-proyects rounded-xl" src={cards[currentIndex].url} alt="Cars" /> 
                </div>
                <div className="flex-col justify-center items-center w-full py-10">
                  <h3 className="text-lg font-bold text-morado-claro py-1">
                  {cards[currentIndex].brand}
                  </h3>
                  <p className="hidden sm:flex px-14 text-sm text-black text-opacity-70 py-1">
                  {cards[currentIndex].description}
                  </p>
                  <div className='flex justify-center items-center gap-5 pt-5'>
                    <p className='w-32 shadow-inner py-2'>Modelo {cards[currentIndex].model}</p>
                    <p className='w-32 shadow-inner py-2'>{cards[currentIndex].price}</p>
                  </div>
                  <div className='pt-10'>
                    <a href="" className='w-32 bg-slate-500 py-2 px-5'>Consultar</a>
                  </div>
                </div>
              </div>
        <div className='cursor-pointer'>
          <ArrowRightIcon onClick={nextSlide} className='w-6 shadow-xl bg-white rounded-full py-1 px-1 sm:bg-transparent sm:rounded-none sm:shadow-none sm:p-0 sm:w-8 mx-3'/>
        </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {cards.map((card, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <MinusSmallIcon className={`hidden sm:flex w-10 ${slideIndex === currentIndex ? 'bg-slate-500' : ''}`}/>
          </div>
        ))}
      </div>
    </div>
  )
}