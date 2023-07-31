import { ArrowLeftIcon, ArrowRightIcon, MinusSmallIcon } from '@heroicons/react/24/outline';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import React, { useState } from 'react';


export default function CarouselCars() {

  const cards = [
    {url: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1690383715/23_Corolla_SE_RubyFlarePearl_02_szx7mk.png',brand: 'Toyota Corolla', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quas ad, eum incidunt, tenetur facere quos suscipit voluptate aut impedit, omnis obcaecati? Cumque quasi est temporibus cupiditate fugiat error et.', model: 2023, price: '$50.000'},
    {url: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1690383801/2011_AUDI_R8_5.2_QUATTRO_COUPE_2D_BLACK_stock_desktop_1920x1080_r3wrn5.webp',brand: 'Audi R8', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quas ad, eum incidunt, tenetur facere quos suscipit voluptate aut impedit, omnis obcaecati? Cumque quasi est temporibus cupiditate fugiat error et.', model: 2015, price: '$94.550'},
    {url: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1690506385/iris_h59cfz.avif',brand: 'Mercedes Benz EQA', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quas ad, eum incidunt, tenetur facere quos suscipit voluptate aut impedit, omnis obcaecati? Cumque quasi est temporibus cupiditate fugiat error et.', model: 2023, price: '$65.000'},
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
    <div id='disponibles' className='mx-auto max-w-7xl lg:py-24 px-6 lg:px-8 mt-28'>
      <p className="text-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Autos Disponibles
      </p>
      <div className='flex justify-center items-center text-center my-10 rounded-xl shadow-sombra-imagenes bg-gradient-to-tr from-[#D33658] to-[#D9043D]'>
        <div className='cursor-pointer'>
          <ArrowLeftIcon onClick={prevSlide} className='w-6 text-[#A60311] shadow-sombra-imagenes bg-white rounded-full py-1 px-1 sm:w-8 mx-3 hover:scale-105 duration-300' />
        </div>
        <div className="lg:flex flex-row justify-center items-center text-center rounded-xl my-5">
                <div className="w-full bg-white rounded-xl">
                  <img className="w-full object-cover shadow-sombra-imagenes rounded-xl" src={cards[currentIndex].url} alt="Cars" /> 
                </div>
                <div className="flex-col justify-center items-center w-full py-10">
                  <h3 className="text-2xl text-white font-semibold py-1">
                  {cards[currentIndex].brand}
                  </h3>
                  <p className="hidden sm:flex px-14 text-sm text-white opacity-75 font-light py-1">
                  {cards[currentIndex].description}
                  </p>
                  <div className='flex justify-center items-center gap-5 pt-5'>
                    <p className='w-32 rounded-xl font-medium text-white border-2 py-2'>Modelo {cards[currentIndex].model}</p>
                    <p className='w-32 rounded-xl font-medium text-white border-2 py-2'>{cards[currentIndex].price}</p>
                  </div>
                  <div className='pt-10 flex justify-center items-center'>
                    <a href="" className='bg-white w-32 rounded-xl px-2 py-2 hover:scale-105 duration-300 flex justify-center items-center gap-2 shadow-sombra-imagenes'><p className='text-lg font-medium text-[#590808]'>Consultar</p></a>
                  </div>
                </div>
              </div>
        <div className='cursor-pointer'>
          <ArrowRightIcon onClick={nextSlide} className='text-[#A60311] w-6 shadow-sombra-imagenes bg-white rounded-full py-1 px-1 sm:w-8 mx-3 hover:scale-105 duration-300'/>
        </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {cards.map((card, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
              <MinusSmallIcon className={`hidden text-[#A60311] sm:flex w-10 ${slideIndex === currentIndex ? 'bg-[#D9043D] shadow-sombra-imagenes rounded-xl text-white' : ''}`}/>
          </div>
        ))}
      </div>
    </div>
  )
}