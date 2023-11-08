import React, { useEffect } from 'react'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import './Main.css';
import Banner from './Components/Banner.jsx';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == '/') {
      document.getElementById('banner').classList.remove('Aboutpage');
      document.getElementById('banner').classList.remove('Contactpage');
      document.getElementById('banner').classList.add('homepage');
    }
    else if (location.pathname == '/Room') {
      document.getElementById('banner').classList.remove('homepage');
      document.getElementById('banner').classList.remove('Aboutpage');
      document.getElementById('banner').classList.remove('Contactpage');
    }
    else if(location.pathname == '/Mybooking'){
      document.getElementById('banner').classList.remove('homepage');
      document.getElementById('banner').classList.remove('Aboutpage');
      document.getElementById('banner').classList.remove('Contactpage');
    }
    else if(location.pathname == '/About'){
      document.getElementById('banner').classList.remove('Contactpage');
      document.getElementById('banner').classList.remove('homepage');
      document.getElementById('banner').classList.add('Aboutpage');

    }
    else if(location.pathname == '/Contact'){
      document.getElementById('banner').classList.remove('homepage');
      document.getElementById('banner').classList.remove('Aboutpage');
      document.getElementById('banner').classList.add('Contactpage');
      
    }







  }, [location.pathname])

  return (
    <>
      <header>
        <div id='banner'>
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