import React from 'react'
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <>
      <nav className='flex items-center justify-between px-[5%] py-4'>

        <h1>Hotel_relax</h1>



        <div>
          <ul className='flex items-center gap-2'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Room'>Rooms</NavLink></li>
            <li><NavLink to='/Mybooking'>Mybookings</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Contact'>Contact us</NavLink></li>
          </ul>
        </div>


        <div>
          <button>Login</button>
        </div>
      </nav>




    </>
  )
}

export default Navbar