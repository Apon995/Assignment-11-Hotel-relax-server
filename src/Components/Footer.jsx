import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='w-full px-[5%] bg-[#000000] text-[#FFF] py-9 footer md:text-start text-center ' >

        <div className=' flex md:flex-row flex-col items-center justify-between py-9'>
          {/* --footer-1st-col-- */}
          <div>

            <h1 className='my-2 font-extrabold text-xl uppercase '>Hotel

              Relax
            </h1>


            <div>
              <p className='text-base  font-normal leading-[20px]'>Our Hotel is best service provider in the city , <br />
                one of the best hotel very larger and beautiful <br />
                rooms and every service here and buget friendly.</p>
            </div>

            <div className='flex items-center gap-4 pt-4 md:justify-start justify-center' id='socialIcons'>
              <div>
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div>
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          {/* --footer-2nd-col-- */}
          <div className='md:block hidden'>
            <h1 className='pb-4 font-semibold text-2xl'>Quick Links</h1>
            <div>
              <ul className='text-base font-medium space-y-2' id='quickLinks'>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/About' >About us</Link></li>
                <li><Link to='/Contact' >Contact us</Link></li>
                <li><Link to='/Mybooking' >My bookings</Link></li>
                <li><Link to='/Room' >Rooms</Link></li>
              </ul>
            </div>
          </div>

          {/* --foter-3rd-col-- */}
          <div className='lg:block hidden'>
            <h1 className='pb-4 font-semibold text-2xl'>Our Services</h1>

            <ul className='text-base font-medium space-y-2' id='serviceLinks'>
              <li><Link to='/'>24/7 call service </Link></li>
              <li><Link to='/'>Waiter service</Link> </li>
              <li><Link to='/'>Foods service</Link></li>
              <li><Link to='/'>Wifi service</Link></li>
              <li><Link to='/'>Tv + VOD service</Link></li>

            </ul>
          </div>

          {/* --footer-4th-col-- */}
          <div className='md:block hidden'>
            <h1 className='pb-4 font-semibold text-2xl'>Contact info </h1>

            <div>
              <ul className='text-base font-medium space-y-2'>
                <li>Auckland city in new zealand ,</li>
                <li>Celendon park , Nearby ocean Tower - 12123</li>
                <li>Hotline : +9990003</li>
                <li>Mail : Hotel_realx2023@gmail.com</li>

              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className='mt-3 flex items-center justify-between'>
          <p className='text-base font-normal'>Copyright &copy; 2023 Hotel Relax Hotel & Resturant</p>

          <div>
            <button className='bg-[#Ffff] text-[#000000] py-4 px-10 text-xl'><i className="fa-solid fa-arrow-up"></i></button>
          </div>

        </div>




      </div>


    </>
  )
}

export default Footer