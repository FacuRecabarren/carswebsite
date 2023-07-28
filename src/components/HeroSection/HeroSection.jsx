

export default function HeaderSection() {

  return (
    <div className="bg-white h-screen flex justify-center items-center">
        <div className="relative isolate px-6 lg:px-14">
            <div className="absolute inset-x-0 -bottom-2 md:bottom-10 -z-10 transform-gpu blur-[rem] overflow-hidden sm:-top-54" aria-hidden="true">
            <div className="relative left-[15rem] h-[10rem] md:h-[15rem] lg:h-[65rem] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D9043D] to-[#A60311] opacity-70 md:left-[calc(100%-24rem)] lg:left-[calc(100%-5rem)] sm:w-[72.1875rem]"></div>
            </div>
            <div className="lg:flex justify-center items-center">
                <div className="flex items-center justify-center text-center">
                    <h1 id="title" className="mb-0 mt-20 lg:mt-0 font-bold tracking-tight text-gray-900 text-5xl sm:text-7xl">
                        Mendoza Automotores
                    </h1>
                </div>
                <div className="flex justify-center items-center">
                    <img className="lg:w-[50rem] w-[45rem]" src="https://res.cloudinary.com/dreso9ye9/image/upload/v1690383801/2011_AUDI_R8_5.2_QUATTRO_COUPE_2D_BLACK_stock_desktop_1920x1080_r3wrn5.webp" alt="" />
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


