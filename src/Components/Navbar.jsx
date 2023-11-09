import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../Customhooks/useAuth';


function Navbar() {
  const [Navbar, setNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, Logout } = useAuth();



  useEffect(() => {
    if (location.pathname) {
      setNavbar(false)
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

  // useEffect(() => {
  //   if (location.pathname == '/Login' || location.pathname == '/Register') {
  //     setNavbar(true);
  //   }
  // }, [location.pathname == '/Login' || location.pathname == '/Register'])


  const HandleLogOut = () => {
    Logout()
  }


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
            <ul id="navlink" className={`text-${location.pathname == '/Login' || location.pathname == '/Register' ? 'black' : ''} flex relative items-center gap-4 text-${Navbar ? '[#000000]' : '[#FFFF]'} font-medium text-[17px] hover-effect }`}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li >
                <NavLink to="/Room">Rooms </NavLink>

                <ul className={`absolute dropdown bg-black  text-[#FFFF] top-[34px] left-[60px] w-[200px] rounded-sm px-2 py-5 space-y-2 hidden `}>
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

        <div>

          {
            user ? <button onClick={HandleLogOut} className={`bg-[#000000] text-[#FFFF] py-4 px-10 font-normal text-[18px]  active:bg-[#ff0000] active:text-[#FFFF] active:border-none hover:border-[2px] border-[#000000] hover:text-${Navbar ? '[#000000]' : '[#FFFF]'} hover:font-medium transition-all }`}>
              Logout
            </button> : <button onClick={() => navigate('/Login')} className={`bg-[#000000] text-[#FFFF] py-4 px-10 font-normal text-[18px]active:bg-[#ff0000] active:text-[#FFFF] active:border-none hover:border-[2px] border-[#000000] hover:text-${!Navbar ? 'white' : 'black'} hover:font-medium transition-all `}>
              Login
            </button>
          }



        </div>

      </nav>


    </>
  );
}

export default Navbar;
