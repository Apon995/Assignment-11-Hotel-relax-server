import React from 'react'
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <>
      <nav className='flex items-center justify-between px-[5%]  bg-[#FFFFFF] shadow-md' id='Navbar'>

        <div className='flex items-center gap-10 '>
          <div className='bg-[#000000] text-white py-5  px-8 text-center'>
            <h1 className='m-0 p-0 font-bold text-xl uppercase leading-[22px]'>Hotel
              <br />
              <span className=' text-center'>Relax</span>
            </h1>
          </div>



          <div>
            <ul className='flex items-center gap-4 text-[#000000] font-medium text-[17px] hover-effect'>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/Room'>Rooms</NavLink></li>
              <li><NavLink to='/Mybooking'>My booking</NavLink></li>
              <li><NavLink to='/About'>About</NavLink></li>
              <li><NavLink to='/Contact'>Contact us</NavLink></li>
            </ul>
          </div>
        </div>


        <div>
          <button className='bg-[#000000] text-[#FFFF] py-4 px-10 font-normal text-[18px] hover:bg-inherit active:bg-[#ff0000] active:text-[#FFFF] active:border-none hover:border-[2px] border-[#000000] hover:text-[#000000] hover:font-medium'>Login</button>
          {/* <button className='bg-[#000000] text-[#FFFF] py-4 px-10 font-normal text-[18px] hover:bg-inherit active:bg-[#ff0000] active:text-[#FFFF] active:border-none hover:border-[2px] border-[#000000] hover:text-[#000000] hover:font-medium'>Logout</button> */}
        </div>
      </nav>




    </>
  )
}

export default Navbar