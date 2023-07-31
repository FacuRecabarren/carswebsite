import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';


export default function Footer() {

  return (
    <div className="md:w-1/2 flex justify-center items-center px-8">
        <div className='w-[25rem]'>
              <div className="bg-white flex justify-start items-center w-full gap-4 py-2 pl-2 px-2 my-4 rounded-xl shadow-sombra-imagenes hover:border-[#D9043D] hover:border-l-4 hover:border-r-4 duration-100 cursor-pointer">
                <div className="w-10">
                  <AiOutlineWhatsApp className="text-4xl object-cover"/>
                </div>
                <div>
                  <p className="text-morado-oscuro font-bold text-[#D9043D]">WhatsApp</p>
                  <p className="text-morado-oscuro text-sm">+542616367289</p>
                </div>
              </div>
            
              <div className="bg-white flex justify-start items-center w-full gap-4 py-2 pl-2 px-2 my-4 rounded-xl shadow-sombra-imagenes hover:border-[#D9043D] hover:border-l-4 hover:border-r-4 duration-100 cursor-pointer">
                <div className="w-10">
                  <AiOutlineInstagram className="text-4xl object-cover"/>
                </div>
                <div>
                  <p className="text-morado-oscuro font-bold text-[#D9043D]">Instagram</p>
                  <p className="text-morado-oscuro text-sm">@mendoza_automotores</p>
                </div>
              </div>

              <div className="bg-white flex justify-start items-center w-full gap-4 py-2 pl-2 px-2 my-4 rounded-xl shadow-sombra-imagenes hover:border-[#D9043D] hover:border-l-4 hover:border-r-4 duration-100 cursor-pointer">
                <div className="w-10">
                    <AiOutlineFacebook className="text-4xl object-cover"/>
                </div>
                <div>
                  <p className="text-morado-oscuro font-bold text-[#D9043D]">Facebook</p>
                  <p className="text-morado-oscuro text-sm">@mendoza_automotores</p>
                </div>
              </div>
            
              <div className="bg-white flex justify-start items-center w-full gap-4 py-2 pl-2 px-2 my-4 rounded-xl shadow-sombra-imagenes cursor-pointer hover:border-[#D9043D] hover:border-l-4 hover:border-r-4 duration-100">
                <div className="w-10">
                  <AiOutlineMail className="text-4xl object-cover"/>
                </div>
                <div>
                  <p className="text-morado-oscuro font-bold text-[#D9043D]">Mail</p>
                  <p className="text-morado-oscuro text-sm">mdzautomotores@gmail.com</p>
                </div>
              </div>
        </div>
    </div>
  );
}