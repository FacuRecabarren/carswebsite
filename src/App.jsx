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
      <div className='md:flex justify-center items-center'>
        <Footer/>
        <Map/>
      </div>
      <p className='text-center h-24 flex justify-center items-center'>© 2023 Mendoza Automotores</p>
    </div>
  )
}

export default App