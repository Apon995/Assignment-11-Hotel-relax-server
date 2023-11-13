import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../Customhooks/useAuth';


function Navbar() {
  const [Navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, Logout } = useAuth();



  useEffect(() => {
    if (location.pathname) {
      setNavbar(false)
    }
  }, [location.pathname])

  useEffect(() => {

    if (location.pathname) {
      document.getElementById("smallscreen").classList.remove("left-[0px]")
      document.getElementById("smallscreen").classList.add("left-[-300px]")

      setMenu(true)
    }

  }, [location.pathname])

  const handleChangeNav = () => {
    if (window.scrollY > 90) {
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



  const HandleLogOut = () => {
    Logout()
  }

  const handleShowNav = () => {

    setMenu(!menu)

    if (menu) {
      document.getElementById("smallscreen").classList.remove("left-[-300px]")
      document.getElementById("smallscreen").classList.add("left-[0px]")
    }
    else {
      document.getElementById("smallscreen").classList.remove("left-[0px]")
      document.getElementById("smallscreen").classList.add("left-[-300px]")
    }

  }

  return (
    <>
      <nav style={{ backgroundColor: Navbar ? 'white' : 'inherit', transition: 'background 0.2s' }}
        className={`fixed  w-full top-0 left-0 z-50 flex items-center justify-between lg:px-[5%] px-[2%] shadow-${Navbar ? 'md' : 'none'}`}
        id="Navbar"
      >
        <div className="flex items-center gap-10 ">
          <div className="bg-[#000000] text-white md:py-5 py-3  md:px-8  px-4 text-center">
            <h1 className="m-0 p-0 font-bold text-xl uppercase md:leading-[22px] leading-normal">
              Hotel
              <br />
              <span className=" text-center text-[#FFFF]">Relax</span>
            </h1>
          </div>

          {/* ---big-screeen-ul-links */}
          <div className=" md:block hidden">
            <ul id="navlink" className={` text-${location.pathname == '/Login' || location.pathname == '/Register' ? 'black' : ''} flex relative items-center gap-4 text-${Navbar ? '[#000000]' : '[#FFFF]'} font-medium text-[17px] hover-effect }`}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li >
                <NavLink to="/Room">Rooms </NavLink>

                <ul className={`absolute dropdown md:opacity-0 lg:opacity-100  bg-black  text-[#FFFF] top-[34px] left-[60px] w-[200px] rounded-sm px-2 py-5 space-y-2 hidden `}>
                  <li><NavLink to={`/Details/${"Superior Room"}`}>Superior Rooms</NavLink></li>
                  <li><NavLink to={`/Details/${"Deluxe Room"}`}>Deluxe Rooms</NavLink></li>
                  <li><NavLink to={`/Details/${"Signature Room"}`} >Luxury Rooms</NavLink></li>
                  <li><NavLink to={`/Details/${"Luxury Suites Room"}`} >Signature Rooms</NavLink></li>
                </ul>

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

        <div className="md:hidden block">
          <button onClick={handleShowNav} className={`text-2xl text-${location.pathname == '/Login' || location.pathname == '/Register' ? 'black' : ''} text-${Navbar ? '[#000000]' : '[#FFFF]'} font-bold`}>{menu ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}</button>
        </div>

        <div id="smallscreen" className="md:static transition-all duration-1000 flex items-center justify-center flex-col absolute top-0 left-[-300px] md:bg-inherit bg-black w-[50%] md:w-fit h-screen md:h-fit">

          {/* --small-screen-ul-links-- */}
          <div>
            <ul id="navlink" className={` md:hidden flex flex-col text-${location.pathname == '/Login' || location.pathname == '/Register' ? 'black' : ''} flex relative items-center gap-4 text-white font-medium text-[14px] hover-effect }`}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li ><NavLink to="/Room">Rooms </NavLink></li>
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



          <div>
            {
              user ? <button onClick={HandleLogOut} className={`bg-[#000000] text-${location.pathname == '/Login' || location.pathname == '/Register' ? 'white' : ''} text-[#FFFF] py-4 px-10 font-normal text-[18px]  active:bg-[#ff0000] active:text-[#FFFF] active:border-none hover:opacity-90 border-[#000000] hover:text-${Navbar ? '[#000000]' : '[#FFFF]'}  }`}>
                Logout
              </button> : <button onClick={() => navigate('/Login')} className={`bg-[#000000] text-${location.pathname == '/Login' || location.pathname == '/Register' ? 'white' : ''} text-[#FFFF] py-4 px-10 font-normal text-[18px] active:bg-[#ff0000] active:text-[#FFFF] active:border-none hover:opacity-90 border-[#000000] hover:text-${!Navbar ? 'white' : 'black'} `}>
                Login
              </button>
            }



          </div>

        </div>
      </nav>


    </>
  );
}

export default Navbar;
