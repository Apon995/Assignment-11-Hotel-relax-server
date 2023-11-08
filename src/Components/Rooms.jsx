import React from 'react';
import cityview from '../assets/serviceImage/cityview.png'
import fitness from '../assets/serviceImage/Fitness.png'
import garden from '../assets/serviceImage/garden.png'
import jacuzi from '../assets/serviceImage/jacuzi.png'
import spa from '../assets/serviceImage/spa.png'
import swimming from '../assets/serviceImage/swimming.png'

function Rooms() {
  return (
    <div>
      <br />
      <br />
      <div className="flex w-full items-center px-[8%]">
        <div className="w-[50%] p-9 bg-[#FFFF]">
          <h1 className="text-[#333333] text-6xl font-bold">
            OUR ROOMS <br />
            AND SUITES
          </h1>

          <br />
          <p className="text-[18px] font-normal leading-[35px] text-[#000000] w-[400px]">
            On the present site of our hotel feet in the water, there used to be an establishment composed of a restaurant and dormitories
          </p>



        </div>

        <div className="w-[50%] p-10 ">

          <div >
            <div className='flex items-center justify-center gap-16 text-center'>
              <div>
                <img src={cityview} alt="" className='w-[80px] mx-auto'/>
                <h1 className='text-black font-normal text-xl py-2'>City view</h1>

              </div>
              <div>
                <img src={fitness} alt=""  className='w-[80px] mx-auto'/>
                <h1 className='text-black font-normal text-xl py-2'>Fitness clud </h1>

              </div>
              <div>
                <img src={garden} alt=""  className='w-[80px] mx-auto'/>
                <h1 className='text-black font-normal text-xl py-2'>Garden visit</h1>

              </div>
            </div>
            <br />
            <div className='flex items-center justify-center gap-16 text-center'>
              <div>
                <img src={jacuzi} alt=""  className='w-[80px] mx-auto'/>
                <h1 className='text-black font-normal text-xl py-2'>Jacuzzi</h1>
              </div>
              <div>
                <img src={spa} alt=""  className='w-[80px] mx-auto'/>
                <h1 className='text-black font-normal text-xl py-2'>Spa treatment</h1>
              </div>
              <div>
                <img src={swimming} alt=""  className='w-[80px] mx-auto'/>
                <h1 className='text-black font-normal text-xl py-2'>swimming pool</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Rooms