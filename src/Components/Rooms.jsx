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
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useFetch from '../Customhooks/useFetch';
import contactimg from '../assets/Slider-images/grand-region.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"


function Rooms() {
  const axiosFetch = useFetch();
  const [superior, setSuperior] = useState([]);
  const [Deluxe, setDeluxe] = useState([]);
  const [Signature, setSignature] = useState([]);
  const [Luxury, setLuxury] = useState([]);

  const navigate = useNavigate();




  useEffect(() => {
    axiosFetch.get("/AllData/Superior Room")
      .then(res => setSuperior(res?.data))
      .catch(error => console.log(error?.message));

  }, [])


  useEffect(() => {
    axiosFetch.get("/AllData/Deluxe Room")
      .then(res => setDeluxe(res?.data))
      .catch(error => console.log(error?.message));

  }, [])

  useEffect(() => {
    axiosFetch.get("/AllData/Signature Room")
      .then(res => setSignature(res?.data))
      .catch(error => console.log(error?.message));

  }, [])

  useEffect(() => {
    axiosFetch.get("/AllData/Luxury Suites Room")
      .then(res => setLuxury(res?.data))
      .catch(error => console.log(error?.message));

  }, [])



  return (
    <>
      <br />
      <br />

      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {/* --OUR-ROOM-AND-SUITES-- */}
        <div className="flex md:flex-row flex-col w-full items-center lg:px-[8%] md:px-[4%] px-[2%]">
          <div className="md:w-[50%] lg:p-9 bg-[#FFFF] ">
            <h1 className="text-[#333333] lg:text-6xl text-3xl font-bold ">
              OUR ROOMS <br />
              AND SUITES
            </h1>

            <br />
            <p className="lg:text-[18px] text-base  font-normal lg:leading-[35px] text-[#000000] lg:w-[400px]">
              On the present site of our hotel feet in the water, there used to be an establishment composed of a restaurant and dormitories
            </p>



          </div>

          <div className="md:w-[50%] lg:p-10 py-10 lg:py-0 ">

            <div >
              <div className='flex items-center justify-center lg:gap-16 gap-12 text-center'>
                <div>
                  <img src={cityview} alt="" className='lg:w-[80px] w-[50px] mx-auto' />
                  <h1 className='text-black font-normal lg:text-xl text-sm py-2'>City view</h1>

                </div>
                <div>
                  <img src={fitness} alt="" className='lg:w-[80px] w-[50px] mx-auto' />
                  <h1 className='text-black font-normal lg:text-xl text-sm py-2'>Fitness clud </h1>

                </div>
                <div>
                  <img src={garden} alt="" className='lg:w-[80px] w-[50px] mx-auto' />
                  <h1 className='text-black font-normal lg:text-xl text-sm py-2'>Garden visit</h1>

                </div>
              </div>
              <br />
              <div className='flex items-center justify-center lg:gap-16 gap-12 text-center'>
                <div>
                  <img src={jacuzi} alt="" className='lg:w-[80px] w-[50px] mx-auto' />
                  <h1 className='text-black font-normal lg:text-xl text-sm py-2'>Jacuzzi</h1>
                </div>
                <div>
                  <img src={spa} alt="" className='lg:w-[80px] w-[50px] mx-auto' />
                  <h1 className='text-black font-normal lg:text-xl text-sm py-2'>Spa treatment</h1>
                </div>
                <div>
                  <img src={swimming} alt="" className='lg:w-[80px] w-[50px] mx-auto' />
                  <h1 className='text-black font-normal lg:text-xl text-sm py-2'>swimming pool</h1>
                </div>
              </div>
            </div>

          </div>
        </div>

      </motion.div>


      <br />
      {/* --superior-rooms-section */}
      <div className='bg-[#F0F0F0] lg:py-32 py-20 md:px-[4%] px-[2%] '>
        <div className="flex lg:flex-row flex-col w-full items-center gap-8 ">
          <div className="lg:w-[40%] lg:pl-9 ">

            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 2 }}
            >
              <div>
                <h1 className="text-[#333333] lg:text-6xl text-4xl font-bold uppercase lg:w-[200px]">
                  {
                    superior?.Room_category
                  }
                </h1>

                <br />
                <p className="lg:text-[18px] text-base font-normal lg:leading-[35px] leading-normal text-[#000000] xl:w-fit ">
                  {superior?.Room_details || ''}
                </p>

                <br />
                <br />
                <div>
                  <button onClick={() => navigate(`/Details/${superior?.Room_category}`)} className='lg:px-6 px-3 lg:py-4 py-2 bg-black text-white lg:text-xl text-base font-medium hover:bg-inherit border-2 border-black hover:text-black active:bg-red-700 active:text-white'>Book now ${superior?.Room_price_per_night || ''} </button>
                </div>
              </div>

            </motion.div>
          </div>
          <br className='lg:hidden block' />
          <div className="lg:w-[60%] ">
            <Swiper
              slidesPerView='auto'
              spaceBetween={30}
              navigation={false}
              autoplay={true}

              pagination={{
                clickable: false,
                type: 'none',
                slidesPerView: true
              }}

              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >


              {
                superior?.Room_images?.map(element => <SwiperSlide key={element} >

                  <img src={element || ''} alt="" className='h-[470px] mx-auto  rounded-sm' />

                </SwiperSlide>)
              }
            </Swiper>


          </div>

        </div>

        <br />
        <br />
        <br />

        <div className='flex flex-wrap items-center justify-between  gap-6  lg:gap-0 lg:px-[4%] text-center'>
          <div>
            <img src={city} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>City view</h1>

          </div>
          <div>
            <img src={bed} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>Twin bed</h1>

          </div>
          <div >
            <img src={shower} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>Modren shower</h1>

          </div>
          <div>
            <img src={size} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>{superior?.Room_size || ''}</h1>
          </div>
          <div>
            <img src={tv} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>42" LED</h1>
          </div>
          <div>
            <img src={wifi} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>24/7 wifi system</h1>
          </div>
          <div className='xl:block hidden'>
            <i className="fa-solid fa-house-user lg:text-[69px] text-[40px] "></i>
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>{superior?.Room_availability} Room Available</h1>
          </div>


        </div>


      </div>

      <br />
      <br />

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
      >
        {/* --Duluxe-room-section */}
        <div className='lg:py-32 py-10 md:px-[4%] px-[2%]'>
          <div className="flex lg:flex-row-reverse flex-col w-full items-center ">
            <div className="lg:w-[40%] lg:pl-9 ">
              <h1 className="text-[#333333] lg:text-6xl text-4xl font-bold uppercase lg:w-[200px]">
                {
                  Deluxe?.Room_category
                }
              </h1>

              <br />
              <p className="lg:text-[18px] text-base font-normal lg:leading-[35px] leading-normal text-[#000000] xl:w-[500px]">
                {Deluxe?.Room_details || ''}
              </p>

              <br />
              <br />
              <div>
                <button onClick={() => navigate(`/Details/${Deluxe?.Room_category}`)} className='lg:px-6 px-3 lg:py-4 py-2 bg-black text-white lg:text-xl text-base font-medium hover:bg-inherit border-2 border-black hover:text-black active:bg-red-700 active:text-white'>Book now ${Deluxe?.Room_price_per_night || ''} </button>
              </div>
            </div>
            <br className='lg:hidden block' />
            <div className="lg:w-[60%] ">
              <Swiper
                slidesPerView='auto'
                spaceBetween={30}
                navigation={false}
                autoplay={true}
                pagination={{
                  clickable: false,
                  type: 'none',
                  slidesPerView: true
                }}

                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >


                {
                  Deluxe?.Room_images?.map(element => <SwiperSlide key={element} >

                    <img src={element || ''} alt="" className='h-[470px] mx-auto rounded-sm' />

                  </SwiperSlide>)
                }
              </Swiper>
            </div>

          </div>

          <br />
          <br />
          <br />

          <div className='flex flex-wrap items-center justify-between  gap-6  lg:gap-0 lg:px-[4%] text-center'>
            <div>
              <img src={city} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>City view</h1>

            </div>
            <div>
              <img src={bed} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>Twin bed</h1>

            </div>
            <div >
              <img src={shower} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>Modren shower</h1>

            </div>
            <div>
              <img src={size} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>{Deluxe?.Room_size || ''}</h1>
            </div>
            <div>
              <img src={tv} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>42" LED</h1>
            </div>
            <div>
              <img src={wifi} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>24/7 wifi system</h1>
            </div>
            <div className='xl:block hidden'>
              <i className="fa-solid fa-house-user lg:text-[69px] text-[40px] "></i>
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>{Deluxe?.Room_availability} Room Available</h1>
            </div>


          </div>


        </div>

      </motion.div>
      <br />
      <br />

      {/* --signature-room-section */}
      <div className=' bg-[#F0F0F0] lg:py-32 py-10 md:px-[4%] px-[2%]'>
        <div className="flex lg:flex-row flex-col w-full items-center gap-5 ">
          <div className="lg:w-[40%] lg:pl-9 ">
            <h1 className="text-[#333333] lg:text-6xl text-4xl font-bold uppercase lg:w-[200px]">
              {
                Signature?.Room_category
              }
            </h1>

            <br />
            <p className="lg:text-[18px] text-base font-normal lg:leading-[35px] leading-normal text-[#000000] xl:w-fit">
              {Signature?.Room_details || ''}
            </p>

            <br />
            <br />
            <div>
              <button onClick={() => navigate(`/Details/${Signature?.Room_category}`)} className='lg:px-6 px-3 lg:py-4 py-2 bg-black text-white lg:text-xl text-base font-medium hover:bg-inherit border-2 border-black hover:text-black active:bg-red-700 active:text-white'>Book now ${Signature?.Room_price_per_night || ''} </button>
            </div>
          </div>

          <br className='lg:hidden block' />

          <div className="lg:w-[60%] ">

            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 2 }}
            >
              <Swiper
                slidesPerView='auto'
                spaceBetween={30}
                navigation={false}
                autoplay={true}
                pagination={{
                  clickable: false,
                  type: 'none',
                  slidesPerView: true
                }}

                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >


                {
                  Signature?.Room_images?.map(element => <SwiperSlide key={element} >

                    <img src={element || ''} alt="" className='h-[470px] mx-auto rounded-sm' />

                  </SwiperSlide>)
                }
              </Swiper>

            </motion.div>
          </div>

        </div>

        <br />
        <br />
        <br />

        <div className='flex flex-wrap items-center justify-between  gap-6  lg:gap-0 lg:px-[4%] text-center'>
          <div>
            <img src={city} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>City view</h1>

          </div>
          <div>
            <img src={bed} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>Twin bed</h1>

          </div>
          <div >
            <img src={shower} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>Modren shower</h1>

          </div>
          <div>
            <img src={size} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>{Signature?.Room_size || ''}</h1>
          </div>
          <div>
            <img src={tv} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>42" LED</h1>
          </div>
          <div>
            <img src={wifi} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>24/7 wifi system</h1>
          </div>
          <div className='xl:block hidden'>
            <i className="fa-solid fa-house-user lg:text-[69px] text-[40px] "></i>
            <h1 className='text-black font-normal lg:text-xl text-xs py-2'>{Signature?.Room_availability} Room Available</h1>
          </div>


        </div>



      </div>
      <br />
      <br />
      {/* ---luxury-room-section */}
      <div className=' lg:py-32 py-10 md:px-[4%] px-[2%]'>
        <div className="flex lg:flex-row flex-col w-full items-center gap-5">
          <div className="lg:w-[40%] lg:pl-9 ">
            <h1 className="text-[#333333] lg:text-6xl text-4xl font-bold uppercase lg:w-[200px]">
              {
                Luxury?.Room_category
              }
            </h1>

            <br />
            <p className="lg:text-[18px] text-base font-normal lg:leading-[35px] leading-normal text-[#000000] xl:w-fit">
              {Luxury?.Room_details || ''}
            </p>

            <br />
            <br />
            <div>
              <button onClick={() => navigate(`/Details/${Luxury?.Room_category}`)} className='px-6 py-4 bg-black text-white text-xl font-medium hover:bg-inherit border-2 border-black hover:text-black active:bg-red-700 active:text-white'>Book now ${Luxury?.Room_price_per_night || ''} </button>
            </div>
          </div>
          <br className='lg:hidden block' />
          <div className="lg:w-[60%] ">
            <Swiper
              slidesPerView='auto'
              spaceBetween={30}
              navigation={false}
              autoplay={true}
              pagination={{
                clickable: false,
                type: 'none',
                slidesPerView: true
              }}

              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >


              {
                Luxury?.Room_images?.map(element => <SwiperSlide key={element} >

                  <img src={element || ''} alt="" className='h-[470px] mx-auto rounded-sm' />

                </SwiperSlide>)
              }
            </Swiper>
          </div>

        </div>

        <br />
        <br />
        <br />
        <motion.div
          initial={{ opacity: 0, y: 190 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <div className='flex flex-wrap items-center justify-between  gap-6  lg:gap-0 lg:px-[4%] text-center'>
            <div>
              <img src={city} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>City view</h1>

            </div>
            <div>
              <img src={bed} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>Twin bed</h1>

            </div>
            <div >
              <img src={shower} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>Modren shower</h1>

            </div>
            <div>
              <img src={size} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>{Luxury?.Room_size || ''}</h1>
            </div>
            <div>
              <img src={tv} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>42" LED</h1>
            </div>
            <div>
              <img src={wifi} alt="" className='lg:w-[80px] w-[30px] mx-auto' />
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>24/7 wifi system</h1>
            </div>
            <div className='xl:block hidden'>
              <i className="fa-solid fa-house-user lg:text-[69px] text-[40px] "></i>
              <h1 className='text-black font-normal lg:text-xl text-xs py-2'>{Luxury?.Room_availability} Room Available</h1>
            </div>


          </div>

        </motion.div>


      </div>

      <br />
      <br />
      <br />
      <br />
      <div className='flex md:flex-row flex-col md:gap-8 gap-10 px-2  '>
        <div className='xl:w-[40%] md:w-[60%]  w-full'>
          <img src={contactimg} alt="" className='border-[16px] border-[#F0F0F0] rounded-md h-[100%]' />
        </div>

        <div className='xl:w-[50%] md:w-[40%] w-full'>



          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <div>
              <h1 className='text-black font-bold xl:text-5xl lg:text-4xl text-xl md:text-start text-center'>DO YOU HAVE <br />
                ANY QUESTIONS?</h1>
              <br />
              <br />
              <div className='flex gap-10 flex-col'>

                <div>
                  <p className='text-xl font-medium text-black mb-4'>Your Name </p>
                  <input type="text" placeholder='enter your name ' className='border-b-2 border-black outline-none md:w-[80%] w-full focus:border-blue-700 placeholder:text-xl placeholder:font-normal py-6 text-base font-normal text-black' />
                </div>
                <div>
                  <p className='text-xl font-medium text-black mb-4'>Your Email </p>
                  <input type="text" placeholder='enter your email' className='border-b-2 border-black outline-none md:w-[80%] w-full focus:border-blue-700 placeholder:text-xl placeholder:font-normal py-6 text-base font-normal text-black' />
                </div>
                <div>
                  <p className='text-xl font-medium text-black mb-4'>Your Message </p>
                  <input type="text" placeholder='enter your message ' className='border-b-2 border-black outline-none md:w-[80%] w-full focus:border-blue-700 placeholder:text-xl placeholder:font-normal py-6 text-base font-normal text-black' />
                </div>

                <br />
                <div>
                  <button className='border-2 border-black px-8 py-3 bg-black text-white font-medium text-base active:bg-[#ff0000] md:w-fit w-full'>Submit</button>
                </div>
              </div>
            </div>

          </motion.div>




        </div>

      </div>
      <br />
      <br />
      <br />
    </>
  )
}

export default Rooms