import React, { useEffect } from 'react'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import './Main.css';
import Banner from './Components/Banner.jsx';

function App() {
  const location = useLocation();



  useEffect(() => {
    
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