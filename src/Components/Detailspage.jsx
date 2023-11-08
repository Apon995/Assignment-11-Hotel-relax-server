import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Customhooks/useFetch';
import grand from "../assets/Slider-images/grand-region.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';

function Detailspage() {
  const { name } = useParams();
  const [data, setData] = useState();
  const axiosFetch = useFetch();

  const { Room_details, Room_images } = data || {};



  useEffect(() => {
    axiosFetch.get(`/AllData/${name}`)
      .then((res) => setData(res?.data))
      .catch(error => console.log(error));
  }, [])


  console.log(data);


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


      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={35}
          pagination={{
            clickable: false,
            type: 'none'
          }}

          modules={[Pagination]}
          className="mySwiper"
        >


          {
            Room_images?.map(element => <SwiperSlide >
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