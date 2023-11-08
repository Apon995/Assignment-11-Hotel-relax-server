import React from 'react';
import Aboutimg from '../assets/Slider-images/ourHistory.jpg'

function About() {
  return (
    <>

      <div className='min-h-screen px-[5%] mt-40'>
        <div className='flex lg:flex-row flex-col items-center justify-between gap-3'>
          <div className='lg:w-[50%] w-full '>

            <img src={Aboutimg} alt=".." className='mx-auto max-h-[800px]' />

          </div>
          <div className='lg:w-[50%] w-full  space-y-7'>
            <h1 className='md:text-5xl text-3xl font-medium text-[#000]'>
             About us
            </h1>

           
           <div>
           <p className='text-xl font-normal text-[#54595F] mx-auto'>
            Hotel Relax is not just a place to stay; it's a reflection of our commitment to hospitality and guest satisfaction. Our journey began with a vision of creating a haven where guests could unwind and rejuvenate while enjoying the best in service and amenities. Since our inception, we have continuously strived to turn this vision into reality, ensuring that every guest feels not just like a visitor, but like a cherished member of our extended family.

            
            </p>
            <br />

            <p className='text-xl text-[#54595F]'>Indulge in the comfort of our thoughtfully designed rooms and suites, each offering a unique blend of elegance and modern amenities. Whether you're here for a romantic getaway, a family vacation, or a business trip, our accommodations cater to your every need. Immerse yourself in the plush furnishings, unwind in our cozy beds, and enjoy the breathtaking views of the city that surrounds you.</p>
           </div>


            <div className='flex md:flex-row flex-col md:justify-start justify-center items-center text-start gap-3 ml-2 mx-auto'>
              <h2 className='font-medium text-2xl text-black'>
                Kajal Arefin Omi<br />
                <p className='text-sm font-medium '>Founder of Hotel Relax.</p>
              </h2>
            </div>
          </div>
        </div>

      </div>
      <br />
      <br />
      <br />
      <br />















    </>
  )
}

export default About