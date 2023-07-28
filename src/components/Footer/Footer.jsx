import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';


export default function Footer() {

  return (
    <div className="md:w-1/2 flex justify-center items-center">
        <div>
              <div className="md:mx-8 sm:gap-2 sm:px-1 w-80 flex justify-start items-center gap-4 bg-gradient-to-b from-morado-poco-claro to bg-morado-muy-claro my-4 py-2 pl-2 rounded-xl shadow-sombra-bg hover:scale-105 duration-300 cursor-pointer">
                <div className="w-10">
                  <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1685385297/icons8-geo-cerca-96_ummduq.png" className="w-10 object-cover"/>   
                </div>
                <div>
                  <p className="text-morado-oscuro font-bold">Ubicación</p>
                  <p className="text-morado-oscuro text-sm text-opacity-60">Mendoza, Argentina</p>
                </div>
              </div>
            
              <div className="md:mx-8 sm:gap-2 sm:px-1 w-80 flex justify-start items-center gap-4 bg-gradient-to-b from-morado-poco-claro to bg-morado-muy-claro my-4 py-2 pl-2 rounded-xl shadow-sombra-bg hover:scale-105 duration-300 cursor-pointer">
                <div className="w-10">
                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1690500565/icons8-instagram_rqrgnp.svg" className="w-10 object-cover"/>
                </div>
                <div>
                  <p className="text-morado-oscuro font-bold">Instagram</p>
                  <p className="text-morado-oscuro text-sm text-opacity-60">@mendoza_automotores</p>
                </div>
              </div>

              <div className="md:mx-8 sm:gap-2 sm:px-1 w-80 flex justify-start items-center gap-4 bg-gradient-to-b from-morado-poco-claro to bg-morado-muy-claro my-4 py-2 pl-2 rounded-xl shadow-sombra-bg hover:scale-105 duration-300 cursor-pointer">
                <div className="w-10">
                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1690500720/icons8-facebook_y3yarn.svg" className="w-10 object-cover"/>
                </div>
                <div>
                  <p className="text-morado-oscuro font-bold">Facebook</p>
                  <p className="text-morado-oscuro text-sm text-opacity-60">@mendoza_automotores</p>
                </div>
              </div>
            
              <div className="md:mx-8 sm:gap-2 sm:px-1 w-80 flex justify-start items-center gap-4 bg-gradient-to-b from-morado-poco-claro to bg-morado-muy-claro my-4 py-2 pl-2 rounded-xl shadow-sombra-bg hover:scale-105 duration-300 cursor-pointer">
                <div className="w-10">
                  <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1685055099/icons8-gmail_qidngb.svg" className="w-9 object-cover"/>
                </div>
                <div>
                  <p className="text-morado-oscuro font-bold">Mail</p>
                  <p className="text-morado-oscuro text-sm text-opacity-60">mdzautomotores@gmail.com</p>
                </div>
              </div>
        </div>
    </div>
  );
}