import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Customhooks/useFetch';
import grand from "../assets/Slider-images/grand-region.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

function Detailspage() {
  const { name } = useParams();
  const [data, setData] = useState();
  const axiosFetch = useFetch();
  const [currentDate, setCurrentDate] = useState();
  const [selectedDay, setSelectedDay] = useState(null);

  const { Room_details, Room_images, Room_price_per_night } = data || {};



  useEffect(() => {
    axiosFetch.get(`/AllData/${name}`)
      .then((res) => setData(res?.data))
      .catch(error => console.log(error));
  }, [])








  useEffect(() => {
    let a = new Date();
    let date = a.getDate();
    let month = a.getMonth();
    let year = a.getFullYear();

    const obj = {
      "day": date,
      "month": month,
      "year": year
    }

    setCurrentDate(obj)
  }, [])


  



  return (
    <>
      <div>
        <div className="flex w-full items-center">
          <div className="w-[50%] p-9 bg-[#FFFF]">
            <h1 className="text-[#333333] text-6xl font-bold">
              Room <br />
              <span>Details</span>
            </h1>

            <br />
            <p className="text-[18px] font-normal leading-[35px] text-[#000000]">
              {Room_details}
            </p>



          </div>

          <div className="w-[50%] bg-[#F0F0F0] p-10 ">
            <div className="border-[10px] border-[#FFFF] w-[90%]">
              <img src={data ? Room_images[0] : ''} alt="Our history image" />
            </div>
          </div>
        </div>
      </div>


      <br />
      <br />
      <br />
      <div className="bg-[#000000] w-full flex pb-28 gap-4 items-center ">
        <div className="w-[50%]">
          <h1 className="text-6xl font-bold text-white py-[80px] ml-9">
            THE GRAND <br />
            REGIONS
          </h1>
          <img src={grand} alt="" className="" />
        </div>

        <div className="w-[50%] px-5">
          <p className="text-white text-[18px] font-normal leading-[30px]">
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
          <p className="text-white  text-[18px] font-normal leading-[30px]">
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
      <br />
      <br />

      <div className='px-[5%]'>
        <h1 className='text-7xl text-[#333333] font-bold uppercase'>AVAILABILITY</h1>
      </div>
      <br />
      <br />
      <div className='flex gap-2 px-[5%]'>
        <div className='w-[60%] flex bg-white shadow-md gap-3'>
          <div className='border-2 border-[#adadad]'>
            <Calendar
              value={selectedDay}
              onChange={setSelectedDay}
              calendarClassName="responsive-calendar"
              shouldHighlightWeekends
            />
          </div>

          <div className='flex-1 px-4'>
            <h1 className=' text-[#333333] text-2xl font-medium'>Make a Reservation</h1>

            <div className='w-full'>
              <h1 className='text-black font-normal text-xl py-4'>Your booking date </h1>
              <p className='text-black font-normal text-xl border-b-2 border-black pb-2'>{selectedDay ? `${selectedDay?.day} / ${selectedDay?.month} / ${selectedDay?.year}` : `${currentDate?.day} / ${currentDate?.month} / ${currentDate?.year}`}</p>
            </div>

            <div>
              <h1 className='text-black font-normal text-xl py-4'>Person availability </h1>
              <div className='flex gap-4'>
                <div>
                  <p className='py-1 text-base font-normal uppercase'>Adults</p>
                  <select name="Adults" id="Adults" className='border-2 border-black outline-none px-4 text-base font-medium py-2 w-[120px]'>
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
                  <select name="children" id="children" className='border-2 border-black outline-none px-4 text-base font-medium py-2 w-[120px]'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                  </select>
                </div>
              </div>
            </div>
            <br />
            <br />

            <div>
              <button className='bg-black text-white font-medium text-base py-3 px-4 rounded-sm'>Book now ${data ? Room_price_per_night : ''}</button>
            </div>

          </div>





        </div>
        <div className='w-[40%]'>
          <img src={data?.Room_images[3]} alt="" className='border-[10px] border-[#adadad] max-h-[370px] w-full' />
        </div>
      </div>

      <br />
      <br />


      {/* --imager-slider- */}
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={35}

          pagination={{
            clickable: false,
            type: 'none',

          }}

          modules={[Pagination]}
          className="mySwiper"
        >


          {
            Room_images?.map(element => <SwiperSlide key={element} >
              <img src={element} alt="" className="w-full h-[470px] rounded-sm" />

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