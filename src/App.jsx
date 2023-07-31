import './App.css'
import NavBar from './components/NavBar/NavBar';
import HeaderSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import CarouselCars from './components/Carousel/CarouselCars';
import Stats from './components/Stats/Stats';
import Map from './components/Map/Map';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeaderSection/>
      <About/>
      <CarouselCars/>
      <Stats/>
      <Contact/>
      <div className='sm:flex justify-center items-center bg-[#D9043D] rounded-tl-full sm:rounded-none sm:bg-transparent sm:bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1690699632/wave-haikei_5_t9f7ym.svg)] sm:py-4 py-0'>
        <Footer/>
        <Map/>
      </div>
      <p className='bg-[#D9043D] text-center text-sm text-white h-24 flex justify-center items-center'>© 2023 Mendoza Automotores</p>
    </div>
  )
}

export default App