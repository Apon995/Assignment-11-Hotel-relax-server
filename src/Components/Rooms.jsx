import React, { useEffect, useState } from 'react';
import cityview from '../assets/serviceImage/cityview.png'
import fitness from '../assets/serviceImage/Fitness.png'
import garden from '../assets/serviceImage/garden.png'
import jacuzi from '../assets/serviceImage/jacuzi.png'
import spa from '../assets/serviceImage/spa.png';
import bed from '../assets/Roomsicons/bed.png';
import city from '../assets/Roomsicons/city.png';
import shower from '../assets/Roomsicons/shower.png';
import size from '../assets/Roomsicons/size.png';
import tv from '../assets/Roomsicons/tv.png';
import wifi from '../assets/Roomsicons/wifi.png';
import swimming from '../assets/serviceImage/swimming.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import useFetch from '../Customhooks/useFetch';
import contactimg from '../assets/Slider-images/grand-region.jpg';


function Rooms() {
  const axiosFetch = useFetch();
  const [superior, setSuperior] = useState([]);
  const [Deluxe, setDeluxe] = useState([]);
  const [Signature, setSignature] = useState([]);
  const [Luxury , setLuxury] = useState([]);




  useEffect(() => {
    axiosFetch.get("/AllData/Superior Room")
      .then(res => setSuperior(res?.data))
      .catch(error => console.log(error));

  }, [])


  useEffect(() => {
    axiosFetch.get("/AllData/Deluxe Room")
      .then(res => setDeluxe(res?.data))
      .catch(error => console.log(error));

  }, [])

  useEffect(() => {
    axiosFetch.get("/AllData/Signature Room")
      .then(res => setSignature(res?.data))
      .catch(error => console.log(error));

  }, [])

  useEffect(() => {
    axiosFetch.get("/AllData/Luxury Suites Room")
      .then(res => setLuxury(res?.data))
      .catch(error => console.log(error));

  }, [])



  return (
    <>
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
                <img src={cityview} alt="" className='w-[80px] mx-auto' />
                <h1 className='text-black font-normal text-xl py-2'>City view</h1>

              </div>
              <div>
                <img src={fitness} alt="" className='w-[80px] mx-auto' />
                <h1 className='text-black font-normal text-xl py-2'>Fitness clud </h1>

              </div>
              <div>
                <img src={garden} alt="" className='w-[80px] mx-auto' />
                <h1 className='text-black font-normal text-xl py-2'>Garden visit</h1>

              </div>
            </div>
            <br />
            <div className='flex items-center justify-center gap-16 text-center'>
              <div>
                <img src={jacuzi} alt="" className='w-[80px] mx-auto' />
                <h1 className='text-black font-normal text-xl py-2'>Jacuzzi</h1>
              </div>
              <div>
                <img src={spa} alt="" className='w-[80px] mx-auto' />
                <h1 className='text-black font-normal text-xl py-2'>Spa treatment</h1>
              </div>
              <div>
                <img src={swimming} alt="" className='w-[80px] mx-auto' />
                <h1 className='text-black font-normal text-xl py-2'>swimming pool</h1>
              </div>
            </div>
          </div>

        </div>
      </div>

      <br />
      {/* --superior-rooms-section */}
      <div className='bg-[#F0F0F0] py-32'>
        <div className="flex w-full items-center ">
          <div className="w-[40%] pl-9 ">
            <h1 className="text-[#333333] text-6xl font-bold uppercase w-[200px]">
              {
                superior?.Room_category
              }
            </h1>

            <br />
            <p className="text-[18px] font-normal leading-[35px] text-[#000000] w-[500px]">
              {superior.Room_details || ''}
            </p>

            <br />
            <br />
            <div>
              <button className='px-6 py-4 bg-black text-white text-xl font-medium hover:bg-inherit border-2 border-black hover:text-black active:bg-red-700 active:text-white'>Book now ${superior?.Room_price_per_night || ''} </button>
            </div>
          </div>

          <div className="w-[60%] ">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: false,
                type: 'none',
                slidesPerView: true
              }}

              modules={[Pagination]}
              className="mySwiper"
            >


              {
                superior?.Room_images?.map(element => <SwiperSlide >

                  <img src={element || ''} alt="" className='h-[470px] rounded-sm' />

                </SwiperSlide>)
              }
            </Swiper>


          </div>

        </div>

        <br />
        <br />
        <br />

        <div className='flex items-center justify-between px-[4%] text-center'>
          <div>
            <img src={city} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>City view</h1>

          </div>
          <div>
            <img src={bed} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>Twin bed</h1>

          </div>
          <div>
            <img src={shower} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>Modren shower</h1>

          </div>
          <div>
            <img src={size} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>{superior?.Room_size || ''}</h1>
          </div>
          <div>
            <img src={tv} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>42" LED</h1>
          </div>
          <div>
            <img src={wifi} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>24/7 wifi system</h1>
          </div>
          <div>
            <i className="fa-solid fa-house-user text-[69px]"></i>
            <h1 className='text-black font-normal text-xl py-2'>{superior?.Room_availability} Room Available</h1>
          </div>


        </div>


      </div>

      <br />
      <br />
      {/* --Duluxe-room-section */}
      <div className=' py-32'>
        <div className="flex flex-row-reverse w-full items-center ">
          <div className="w-[40%] pl-9 ">
            <h1 className="text-[#333333] text-6xl font-bold uppercase w-[200px]">
              {
                Deluxe?.Room_category
              }
            </h1>

            <br />
            <p className="text-[18px] font-normal leading-[35px] text-[#000000] w-[500px]">
              {Deluxe?.Room_details || ''}
            </p>

            <br />
            <br />
            <div>
              <button className='px-6 py-4 bg-black text-white text-xl font-medium hover:bg-inherit border-2 border-black hover:text-black active:bg-red-700 active:text-white'>Book now ${Deluxe?.Room_price_per_night || ''} </button>
            </div>
          </div>

          <div className="w-[60%] ">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: false,
                type: 'none',
                slidesPerView: true
              }}

              modules={[Pagination]}
              className="mySwiper"
            >


              {
                Deluxe?.Room_images?.map(element => <SwiperSlide >

                  <img src={element || ''} alt="" className='h-[470px] rounded-sm' />

                </SwiperSlide>)
              }
            </Swiper>
          </div>

        </div>

        <br />
        <br />
        <br />

        <div className='flex items-center justify-between px-[4%] text-center'>
          <div>
            <img src={city} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>City view</h1>

          </div>
          <div>
            <img src={bed} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>Twin bed</h1>

          </div>
          <div>
            <img src={shower} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>Modren shower</h1>

          </div>
          <div>
            <img src={size} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>{Deluxe?.Room_size || ''}</h1>
          </div>
          <div>
            <img src={tv} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>42" LED</h1>
          </div>
          <div>
            <img src={wifi} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>24/7 wifi system</h1>
          </div>
          <div>
            <i className="fa-solid fa-house-user text-[69px]"></i>
            <h1 className='text-black font-normal text-xl py-2'>{Deluxe?.Room_availability} Room Available</h1>
          </div>


        </div>


      </div>
      <br />
      <br />

      {/* --signature-room-section */}
      <div className=' bg-[#F0F0F0] py-32'>
        <div className="flex w-full items-center ">
          <div className="w-[40%] pl-9 ">
            <h1 className="text-[#333333] text-6xl font-bold uppercase w-[200px]">
              {
                Signature?.Room_category
              }
            </h1>

            <br />
            <p className="text-[18px] font-normal leading-[35px] text-[#000000] w-[500px]">
              {Signature?.Room_details || ''}
            </p>

            <br />
            <br />
            <div>
              <button className='px-6 py-4 bg-black text-white text-xl font-medium hover:bg-inherit border-2 border-black hover:text-black active:bg-red-700 active:text-white'>Book now ${Signature?.Room_price_per_night || ''} </button>
            </div>
          </div>

          <div className="w-[60%] ">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: false,
                type: 'none',
                slidesPerView: true
              }}

              modules={[Pagination]}
              className="mySwiper"
            >


              {
                Signature?.Room_images?.map(element => <SwiperSlide >

                  <img src={element || ''} alt="" className='h-[470px] rounded-sm' />

                </SwiperSlide>)
              }
            </Swiper>
          </div>

        </div>

        <br />
        <br />
        <br />

        <div className='flex items-center justify-between px-[4%] text-center'>
          <div>
            <img src={city} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>City view</h1>

          </div>
          <div>
            <img src={bed} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>Twin bed</h1>

          </div>
          <div>
            <img src={shower} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>Modren shower</h1>

          </div>
          <div>
            <img src={size} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>{Signature?.Room_size || ''}</h1>
          </div>
          <div>
            <img src={tv} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>42" LED</h1>
          </div>
          <div>
            <img src={wifi} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>24/7 wifi system</h1>
          </div>
          <div>
            <i className="fa-solid fa-house-user text-[69px]"></i>
            <h1 className='text-black font-normal text-xl py-2'>{Signature?.Room_availability} Room Available</h1>
          </div>


        </div>


      </div>
      <br />
      <br />
      {/* ---luxury-room-section */}
      <div className=' py-32'>
        <div className="flex flex-row-reverse w-full items-center ">
          <div className="w-[40%] pl-9 ">
            <h1 className="text-[#333333] text-6xl font-bold uppercase w-[200px]">
              {
                Luxury?.Room_category
              }
            </h1>

            <br />
            <p className="text-[18px] font-normal leading-[35px] text-[#000000] w-[500px]">
              {Luxury?.Room_details || ''}
            </p>

            <br />
            <br />
            <div>
              <button className='px-6 py-4 bg-black text-white text-xl font-medium hover:bg-inherit border-2 border-black hover:text-black active:bg-red-700 active:text-white'>Book now ${Luxury?.Room_price_per_night || ''} </button>
            </div>
          </div>

          <div className="w-[60%] ">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: false,
                type: 'none',
                slidesPerView: true
              }}

              modules={[Pagination]}
              className="mySwiper"
            >


              {
               Luxury?.Room_images?.map(element => <SwiperSlide >

                  <img src={element || ''} alt="" className='h-[470px] rounded-sm' />

                </SwiperSlide>)
              }
            </Swiper>
          </div>

        </div>

        <br />
        <br />
        <br />

        <div className='flex items-center justify-between px-[4%] text-center'>
          <div>
            <img src={city} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>City view</h1>

          </div>
          <div>
            <img src={bed} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>Twin bed</h1>

          </div>
          <div>
            <img src={shower} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>Modren shower</h1>

          </div>
          <div>
            <img src={size} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>{Luxury?.Room_size || ''}</h1>
          </div>
          <div>
            <img src={tv} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>42" LED</h1>
          </div>
          <div>
            <img src={wifi} alt="" className='w-[80px] mx-auto' />
            <h1 className='text-black font-normal text-xl py-2'>24/7 wifi system</h1>
          </div>
          <div>
            <i className="fa-solid fa-house-user text-[69px]"></i>
            <h1 className='text-black font-normal text-xl py-2'>{Luxury?.Room_availability} Room Available</h1>
          </div>


        </div>


      </div>

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

export default Rooms