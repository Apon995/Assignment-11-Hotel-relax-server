import React from 'react'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import './Main.css';

function App() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    
    <footer>
      <Footer/>
    </footer>
    
    
    
    
    </>
  )
}

export default App