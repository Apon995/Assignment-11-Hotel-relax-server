import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [Navbar, setNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      setNavbar(false)
    }
  }, [location.pathname])

  const handleChangeNav = () => {
    if (window.scrollY > 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };


  useEffect(() => {
    if (location.pathname) {

      window.addEventListener("scroll", handleChangeNav);
    }
    else {
      setNavbar(true)
    }
  }, [location.pathname, handleChangeNav])




  return (
    <>
      <nav style={{ backgroundColor: Navbar ? 'white' : 'inherit', transition: 'background 0.2s' }}
        className={`fixed w-full top-0 left-0 z-50 flex items-center justify-between px-[5%] shadow-${Navbar ? 'md' : 'none'}`}
        id="Navbar"
      >
        <div className="flex items-center gap-10 ">
          <div className="bg-[#000000] text-white py-5  px-8 text-center">
            <h1 className="m-0 p-0 font-bold text-xl uppercase leading-[22px]">
              Hotel
              <br />
              <span className=" text-center text-[#FFFF]">Relax</span>
            </h1>
          </div>

          <div>
            <ul className={`flex items-center gap-4 text-${Navbar ? '[#000000]' : '[#FFFF]'} font-medium text-[17px] hover-effect`}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Room">Rooms</NavLink>
              </li>
              <li>
                <NavLink to="/Mybooking">My booking</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact us</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <button className={`bg-[#000000] text-[#FFFF] py-4 px-10 font-normal text-[18px] hover:bg-inherit active:bg-[#ff0000] active:text-[#FFFF] active:border-none hover:border-[2px] border-[#000000] hover:text-${!Navbar ? 'white' : 'black'} hover:font-medium transition-all`}>
            Login
          </button>
          {/* <button className={`bg-[#000000] text-[#FFFF] py-4 px-10 font-normal text-[18px] hover:bg-inherit active:bg-[#ff0000] active:text-[#FFFF] active:border-none hover:border-[2px] border-[#000000] hover:text-${Navbar ? '[#000000]' : '[#FFFF]'} hover:font-medium transition-all`}>
            Logout
          </button> */}

        </div>

      </nav>


    </>
  );
}

export default Navbar;
