import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navigation, setNavigation] = useState([
    { name: 'Inicio', href: '#', current:false },
    { name: 'Nosotros', href: '#', current:false },
    { name: 'Disponibles', href: '#', current:false },
    { name: 'Contacto', href: '#', current:false },
  ])

  const handleLinkClick = (clickedItem) => {
    const updatedNavigation = navigation.map((item) =>
      item.name === clickedItem.name ? { ...item, current: true } : { ...item, current: false }
    );
    setNavigation(updatedNavigation);
  };

  return (
    <div className="bg-[#f7f7f7] fixed w-full z-20">
      <header>
        <nav className="flex items-center justify-between shadow-custom p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="https://res.cloudinary.com/dreso9ye9/image/upload/v1690383801/2011_AUDI_R8_5.2_QUATTRO_COUPE_2D_BLACK_stock_desktop_1920x1080_r3wrn5.webp"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#00060D]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6 text-[#00060D]" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-5">
            {navigation.map((item) => (
              <a 
              key={item.name} 
              href={item.href} 
              className={classNames(
                item.current ? 'font-semibold text-sm text-[#D9043D]' : 'text-[#00060D] font-semibold text-sm hover:text-[#D9043D] duration-300'
                
              )}
              aria-current={item.current ? 'page' : undefined}
              onClick={() => handleLinkClick(item)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="leading-6 text-[#00060D] font-semibold text-sm hover:text-[#D9043D] duration-300">
              Ingresar <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#f7f7f7] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://res.cloudinary.com/dreso9ye9/image/upload/v1690383801/2011_AUDI_R8_5.2_QUATTRO_COUPE_2D_BLACK_stock_desktop_1920x1080_r3wrn5.webp"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-[#00060D]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-[#00060D]" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#00060D] hover:text-[#D9043D] duration-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}

