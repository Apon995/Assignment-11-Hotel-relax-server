import React from 'react'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import './Main.css';
import Banner from './Components/Banner.jsx';

function App() {






  return (
    <>
      <header>

        <Banner />
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