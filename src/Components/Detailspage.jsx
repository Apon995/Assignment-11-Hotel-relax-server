import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useFetch from '../Customhooks/useFetch';
import grand from "../assets/Slider-images/grand-region.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useAuth from "../Customhooks/useAuth.jsx";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";







function Detailspage() {
  const { user } = useAuth();
  const { name } = useParams();
  const [data, setData] = useState();
  const axiosFetch = useFetch();
  const [currentDate, setCurrentDate] = useState();
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [Bookfor, setBookfor] = useState();
  const location = useLocation();
  const [perView, setPerview] = useState(1);





  const { Room_category, Room_size, Room_details, Room_images, Room_price_per_night, Room_availability } = data || {};

  const handleScreen = () => {
    if (window.innerWidth <= 576) {
      setPerview(1);
    } else if (window.innerWidth > 576 && window.innerWidth <= 1024) {
      setPerview(1);
    } else {
      setPerview(2);
    }
  };

  useEffect(() => {
    handleScreen();

    const handleResize = () => {
      handleScreen();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname]);



  useEffect(() => {
    axiosFetch.get(`/AllData/${name}`)
      .then((res) => setData(res?.data))
      .catch(error => console.log(error?.message));
  }, [])








  useEffect(() => {

    let a = new Date();
    let date = a.getDate();
    let month = a.getMonth() + 1;
    let year = a.getFullYear();

    const obj = {
      "day": date,
      "month": month,
      "year": year
    }

    setCurrentDate(obj)
  }, [])


  const handleBookNow = (e) => {
    e.preventDefault();



    const bookobj = {
      "Book_user": user?.email,
      "Room_category": Room_category,
      "Room_size": Room_size,
      "Room_image": data ? Room_images[0] : '',
      "booking_date":{ "Date" : selectedDay.getDate() , "Month" : selectedDay.getMonth() + 1 , "Year":selectedDay.getFullYear() },
      "Adults": document.getElementById('Adults').value,
      "childrens": document.getElementById('childrens').value,
      "Room_price_per_night": Room_price_per_night,
      "Book_for": Bookfor,
      "Total_price": Room_price_per_night * Bookfor,


    }


    axiosFetch.post('/Bookdata', bookobj)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            title: 'Booking done',
            text: 'successfully Added your cart !',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,

          })

        }
      })
      .catch(error => console.log(error));
  }





  return (
    <>
      <br className='md:hidden block' />
      <div>
        <div className="flex md:flex-row flex-col w-full items-center">
          <div className="md:w-[50%] md:p-9 bg-[#FFFF]">
            <h1 className="text-[#333333] md:text-6xl text-4xl font-bold">
              Room <br />
              <span>Details</span>
            </h1>

            <br />
            <p className="md:text-[18px] text-base font-normal leading-normal md:leading-[35px] text-[#000000]">
              {Room_details}
            </p>



          </div>
          <br className='md:hidden block' />

          <div className="md:w-[50%] bg-[#F0F0F0] xl:p-10 ">
            <div className="md:border-[10px] border-[#FFFF] md:w-[90%]">
              <img src={data ? Room_images[0] : ''} alt="Our history image" />
            </div>
          </div>
        </div>
      </div>


      <br />
      <br />
      <br />
      <div className="bg-[#000000] w-full flex pb-28 gap-4 items-center justify-center md:flex-row flex-col ">
        <div className="md:w-[50%]">
          <h1 className="md:text-6xl text-4xl font-bold text-white md:py-[80px] py-5 md:ml-9">
            THE GRAND <br />
            REGIONS
          </h1>
          <img src={grand} alt="" className="" />
        </div>

        <div className="md:w-[50%] md:px-5 md:mt-12">
          <p className="text-white md:text-[18px] text-base font-normal leading-normal md:leading-[30px]">
            Experience the warm embrace of Hotel Relax Now from the moment you
            step through our doors. Our dedicated staff is committed to
            providing you with a grand welcome and ensuring your stay begins
            on a high note, Immerse yourself in the lush gardens and serene
            surroundings of Hotel Relax Now. Our pristine landscapes are a
            true oasis of relaxation, offering a peaceful escape from the
            demands of everyday life. At Hotel Relax Now, elegance is not just
            a word; it's a way of life. From our beautifully appointed rooms
            to our exquisite dining options, we pride ourselves on providing a
            grand and elegant experience for all our guests.
          </p>

          <br />
          <p className="text-white md:text-[18px] text-base font-normal md:leading-[30px] leading-normal  md:hidden lg:block block ">
            Savor the flavors of world-class cuisine at Hotel Relax Now. Our
            culinary team crafts grand dishes that tantalize your taste buds
            and leave you with a memorable dining experience.Our world-class
            spa and wellness facilities are designed to help you rejuvenate
            and refresh. The Grand Wellness Retreat at Hotel Relax Now offers
            a range of holistic treatments and activities to ensure you leave
            feeling revitalized.
          </p>
          <br />
          <button className="border-2 py-4 px-8 text-base active:bg-[#ff0000]  hover:bg-white hover:text-black text-white  transition-all font-medium">
            Book Now
          </button>
        </div>
      </div>
      <br />
      <br className='md:block hidden' />
      <br className='md:block hidden' />

      <div className='md:px-[5%] px-0'>
        <h1 className='md:text-7xl text-4xl text-[#333333] font-bold uppercase text-center md:text-start'>AVAILABILITY</h1>
      </div>
      <br />
      <br />
      <div className='flex md:flex-row flex-col gap-2 md:px-[5%]  '>
        <div className='xl:w-[60%] lgw-full flex md:flex-row flex-col bg-white shadow-md gap-3 mx-auto'>
         
          <form onSubmit={handleBookNow} className='flex-1 px-4'>
            <h1 className=' text-[#333333] text-2xl font-medium'>Make a Reservation</h1>
            <p>{Room_availability} Rooms Available</p>
            <div className='w-full'>
              <h1 className='text-black font-normal text-xl py-4'>Your booking date </h1>
              <DatePicker className='border-2 border-black p-2 rounded-md outline-none ' selected={selectedDay} onChange={(date) => setSelectedDay(date)} />
            </div>

            <div>
              <h1 className='text-black font-normal text-xl py-4'>Person availability </h1>
              <div className='flex flex-wrap gap-4'>
                <div>
                  <p className='py-1 text-base font-normal uppercase'>Adults</p>
                  <select name="Adults" defaultValue={1} required id="Adults" className='border-2 border-black outline-none px-4 text-base font-medium py-2 w-[120px]'>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                  </select>
                </div>
                <div>
                  <p className='py-1 text-base font-normal uppercase'>Childrens</p>
                  <select required defaultValue={1} id="childrens" className='border-2 border-black outline-none px-4 text-base font-medium py-2 w-[120px]'>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                  </select>
                </div>
                <div>
                  <p className='py-1 text-base font-normal uppercase'>Book for days ? </p>
                  <input type="number" onChange={(e) => setBookfor(e.target.value)} required placeholder='Days' className='border-2 border-black outline-none px-4 text-base font-medium py-[6px] w-[125px]' />
                </div>
              </div>
            </div>


            <br />
            <br />
            <div className='my-2'>
              <button className='bg-black active:bg-red-600 hover:opacity-90 text-white font-medium md:text-base text-sm py-3 px-4 rounded-sm '>Book now ${data ? Room_price_per_night : ''}</button>
            </div>

          </form>





        </div>
        <div className='md:w-[40%] md:hidden xl:block hidden '>
          <img src={data?.Room_images[3]} alt="" className='border-[10px] border-[#adadad] max-h-[370px] w-full' />
        </div>
      </div>

      <br />
      <br />


      {/* --imager-slider- */}
      <div className='md:px-[4%] px-[2%]'>
        <Swiper
          slidesPerView={perView}
          spaceBetween={6}
          navigation={false}
          autoplay={true}
          pagination={{
            clickable: false,
            type: 'none',

          }}

          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >


          {
            Room_images?.map(element => <SwiperSlide key={element} >
              <img src={element} alt="" className="mx-auto md:h-[470px] h-[350px] rounded-sm  md:w-full" />

            </SwiperSlide>)
          }






        </Swiper>
      </div>
      <br />
      <br />
    </>
  )
}

export default Detailspage