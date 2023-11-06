import React from 'react'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import './Main.css';
import Banner from './Components/Banner.jsx';

function App() {
  const location = useLocation();
  return (
    <>
      <header>
        <div className={`bg-${location.pathname == '/' ? '[url(./assets/Slider-images/slider-1.jpg)]' : 'inherit'} bg-no-repeat bg-cover bg-center w-full h-${location.pathname == '/' ? '[100vh]' : 'fit'}`}>
          <Banner />
        </div>
        <Navbar />
      </header>
      <main className='min-h-screen'>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>




    </>
  )
}

export default App