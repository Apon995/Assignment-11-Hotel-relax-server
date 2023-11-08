import React from 'react';
import contactimg from '../assets/Slider-images/grand-region.jpg';

function Contact() {
  return (
    <>
      <div className="flex gap-2 w-full  mt-32">
        <div className="w-[40%] text-center flex items-center justify-center ">

          <div className="py-8 flex gap-3 flex-col">
            <h1 className="uppercase text-6xl text-black font-bold">Hotel Relax</h1>
            <br />
            <div className="flex items-center gap-3">
              <i className="fa-regular fa-calendar-days text-2xl"></i>

              <div>
                <h1 className="text-xl text-black font-medium">Saturday to friday
                </h1>
                <p className="text-start text-base text-[#333333] font-normal"> 24/7 open</p>
              </div>

            </div>


            <div className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-2xl"></i>

              <div>
                <h1 className="text-xl text-black font-medium">Auckland city in new zealand
                </h1>
                <p className="text-start text-base text-[#333333] font-normal ">Hotel locaiton</p>
              </div>

            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-2xl"></i>

              <div>
                <h1 className="text-xl text-black font-medium">+9990003</h1>
                <h2 className="text-start text-base text-[#333333] font-normal">phone</h2>

              </div>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-2xl"></i>

              <div>
                <h1 className="text-xl text-black font-medium">Hotel_realx2023@gmail.com
                </h1>
                <p className="text-start text-base text-[#333333] font-normal">email</p>
              </div>

            </div>
          </div>

        </div>
        <div className="w-[60%]  bg-[#F0F0F0] p-9">
          <div className="border-[10px] border-[#FFFF]">
            <iframe width="100%" height="500" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Auckland+(Hotel%20relax)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
          </div>
        </div>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='flex gap-8'>
        <div className='w-[40%]  '>
          <img src={contactimg} alt="" className='border-[16px] border-[#F0F0F0] rounded-md h-[100%]' />
        </div>

        <div className='w-[50%]'>

          <h1 className='text-black font-bold text-5xl '>DO YOU HAVE <br />
            ANY QUESTIONS?</h1>
          <br />
          <br />
          <div className='flex gap-10 flex-col'>

            <div>
              <p className='text-xl font-medium text-black mb-4'>Your Name </p>
              <input type="text" placeholder='enter your name ' className='border-b-2 border-black outline-none w-[80%] focus:border-blue-700 placeholder:text-xl placeholder:font-normal py-6 text-base font-normal text-black' />
            </div>
            <div>
              <p className='text-xl font-medium text-black mb-4'>Your Email </p>
              <input type="text" placeholder='enter your email' className='border-b-2 border-black outline-none w-[80%] focus:border-blue-700 placeholder:text-xl placeholder:font-normal py-6 text-base font-normal text-black' />
            </div>
            <div>
              <p className='text-xl font-medium text-black mb-4'>Your Message </p>
              <input type="text" placeholder='enter your message ' className='border-b-2 border-black outline-none w-[80%] focus:border-blue-700 placeholder:text-xl placeholder:font-normal py-6 text-base font-normal text-black' />
            </div>

            <br />
            <div>
              <button className='border-2 border-black px-8 py-3 bg-black text-white font-medium text-base active:bg-[#ff0000]'>Submit</button>
            </div>
          </div>


        </div>

      </div>
      <br />
      <br />
      <br />
    </>
  )
}

export default Contact