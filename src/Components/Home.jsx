import React, { useEffect, useState } from "react";
import History from "../assets/Slider-images/ourHistory.jpg";
import grand from "../assets/Slider-images/grand-region.jpg";
import client1 from '../assets/client-image/client-1.jpg';
import client2 from '../assets/client-image/client-2.jpg';
import client3 from '../assets/client-image/client-3.jpg';
import client4 from '../assets/client-image/client-4.jpg';
import useFetch from "../Customhooks/useFetch";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"


function Home() {

  const navigate = useNavigate();
  const [perView, setPerview] = useState(1);

  const [Alldata, setAlldata] = useState([]);

  const axiosFetch = useFetch();

  useEffect(() => {

    axiosFetch.get('/AllData')
      .then(res => setAlldata(res?.data))
      .catch(error => console.log(error?.message))

  }, [])

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





  return (
    <>
      <section >

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          {/* --our-hotel-history-section- */}
          <div className={`flex w-full items-center md:flex-row flex-col md:px-[4%] px-[2%]`}>
            <div className="md:w-[50%] lg:p-9 md:p-2  bg-[#FFFF]">
              <h1 className="text-[#333333] lg:text-6xl text-4xl font-bold">
                Our <br />
                <span>History</span>
              </h1>

              <br />
              <p className="lg:text-[18px] text-base font-normal leading-normal md:leading-[35px] text-[#000000]">
                Hotel Relax Now has a storied past that traces its roots back to a
                picturesque village in the heart of Europe, where time seemed to
                slow down, and relaxation was a way of life. In the late 19th
                century, a visionary named Samuel Montgomery, a world-traveler and
                connoisseur of luxury, stumbled upon this hidden gem of a village
                during his explorations, Montgomery was enchanted by the natural
                beauty and tranquility of the place. He decided to create a haven
                for weary travelers, a place where they could escape the hustle
                and bustle of the modern world and experience unparalleled
                relaxation. Thus, in 1894, the first incarnation of Hotel Relax
                Now was born.
              </p>

              <br />
              <p className="lg:text-[18px] text-base font-normal leading-normal md:leading-[35px] text-[#000000] md:hidden lg:block block">
                The hotel quickly gained a reputation as a sanctuary of serenity.
                Celebrities, artists, and intellectuals from all corners of the
                world flocked to this remote paradise to find respite and
                inspiration. It was during this period that Hotel Relax Now's
                iconic Victorian architecture and lush gardens were meticulously
                crafted, enhancing its reputation as a world-class destination for
                rest and rejuvenation.
              </p>
            </div>

            <div className="md:w-[50%] bg-[#F0F0F0] lg:p-10 p-5 ">
              <div className="lg:border-[10px] border-5 border-[#FFFF] lg:w-[90%]">
                <img src={History} alt="Our history image" />
              </div>
            </div>
          </div>

        </motion.div>


        <br />


        {/*---------- the grand-regions-section--------- */}
        <div className="bg-[#000000] w-full flex pb-28 gap-4 items-center justify-center md:flex-row flex-col  md:px-[4%] px-[2%]">
          <div className="md:w-[50%]">
            <h1 className="md:text-6xl text-4xl font-bold text-white md:py-[80px] py-5 md:ml-9">
              THE GRAND <br />
              REGIONS
            </h1>
            <img src={grand} alt="" className="" />
          </div>

          <div className="md:w-[50%]  md:mt-12">
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
        <br />


        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 2 }}
        >

          {/* ---------Feature-rooms-section------------------ */}

          <div className="bg-[#F0F0F0] md:px-[4%] px-[2%]">
            <div className="w-full flex justify-between items-center py-10">
              <h1 className="md:text-6xl text-3xl font-bold text-[#333333]">
                Featured <br />
                Rooms
              </h1>
              <button onClick={() => navigate('/Room')} className="border-2 h-fit border-black py-2 px-2 md:py-4 md:px-8 text-base active:bg-[#ff0000]  hover:bg-black hover:text-white text-black  transition-all font-medium">
                View All Rooms
              </button>
            </div>
            <br />
            <div className=" pb-40">
              <Swiper
                slidesPerView={perView}
                spaceBetween={5}
                navigation={false}
                autoplay={true}

                pagination={{
                  clickable: false,
                  type: 'none'
                }}

                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {
                  Alldata?.map(room =>
                    <SwiperSlide key={room._id}>
                      <Link to={`/Details/${room?.Room_category}`}>
                        <div className="lg:w-[95%] md:w-[90%] mx-auto">
                          <img src={room?.Room_images[0]} alt="" className="w-full md:h-[470px] rounded-sm" />

                          <div className="flex justify-between mt-4">
                            <div>
                              <h1 className="text-black md:text-4xl text-xl font-bold">{room?.Room_category}</h1>
                              <p className="text-[#54595F] md:text-xl text-base  font-normal">{room?.Room_size}</p>
                            </div>
                            <div>
                              <h1 className="text-[#54595F] md:text-xl text-base text-end">From </h1>
                              <p className="text-black md:text-4xl text-xl font-bold">${room?.Room_price_per_night}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>


                  )
                }


              </Swiper>
            </div>
          </div>

        </motion.div>


        <br />
        <br />
        <br />
        <br />

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >

          {/* -------User Testimonials section--- */}
          <div className="md:px-[4%] px-[2%]">
            <h1 className='text-base font-medium text-red-500 text-center'>User Testimonials</h1>
            <div className='text-center space-y-2'>
              <h2 className='md:text-5xl text-3xl font-semibold text-[#333333]'>What Our Client Say</h2>



            </div>

            <br />
            <br />

            <div className='grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-4 md:gap-5 '>
              {/* ---client-one-- */}
              <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-10 '>
                <div className='w-full my-auto'>
                  <img src={client1} alt=".." className='md:w-full w-fit mx-auto h-[170px] my-auto rounded-sm' />
                </div>
                <div className='py-2 px-2 space-y-3'>
                  <h1 className='text-[18px] font-normal text-[#54595F] px-1'>
                    Hotel Relax made our vacation truly exceptional. The booking process was a breeze, and the stay exceeded our expectations. The rooms were immaculate, the staff was incredibly friendly, and the on-site amenities were top-notch. We can't wait to return!
                  </h1>
                  <p className='text-base font-semibold text-black'>Anlio juwandia</p>
                </div>

              </div>
              {/* ---client-two-- */}
              <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-10'>
                <div className='w-full my-auto'>
                  <img src={client2} alt=".." className='md:w-full w-fit mx-auto h-[170px] my-auto rounded-sm' />
                </div>
                <div className='py-2 px-2 space-y-3'>
                  <h1 className='text-[18px] font-normal text-[#54595F] px-1'>
                    My business trips are always hectic, but Hotel Relax provided the perfect sanctuary. The tranquil atmosphere and comfortable rooms allowed me to unwind after a long day. Their efficient service and proximity to key locations made my stay stress-free. Highly recommended!
                  </h1>
                  <p className='text-base font-semibold text-black'>Suntanio fuwankoan </p>
                </div>

              </div>
              {/* ---client-three-- */}
              <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-10'>
                <div className='w-full my-auto'>
                  <img src={client3} alt=".." className='md:w-full w-fit mx-auto h-[170px] my-auto rounded-sm' />
                </div>
                <div className='py-2 px-2 space-y-3'>
                  <h1 className='text-[18px] font-normal text-[#54595F] px-1'>
                    A big shoutout to Hotel Relax for an unforgettable anniversary weekend. The romantic package they offered was a hit! From the rose petals on the bed to the candlelit dinner at their restaurant, every detail was perfect. We'll cherish these memories forever.
                  </h1>
                  <p className='text-base font-semibold text-black'>Elija cruando</p>
                </div>

              </div>
              {/* ---client-four-- */}
              <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-10'>
                <div className='w-full my-auto'>
                  <img src={client4} alt=".." className='md:w-full w-fit mx-auto h-[170px] my-auto rounded-sm' />
                </div>
                <div className='py-2 px-2 space-y-3'>
                  <h1 className='text-[18px] font-normal text-[#54595F] px-1'>

                    I'm a frequent traveler, and I've stayed at numerous hotels, but Hotel Relax is now my go-to choice. Their commitment to cleanliness and safety during these times is commendable. I felt secure throughout my stay, and the quality of service remains top-notch. It's the ultimate place for both business and leisure travelers.
                  </h1>
                  <p className='text-base font-semibold text-black'>Renio zunkoy </p>
                </div>

              </div>


            </div>


          </div>

        </motion.div>





        {/* ---google-map/locaiton-section */}
        <div className="flex gap-2 lg:flex-row flex-col w-full mt-32 md:px-[4%] px-[2%]">
          <div className="lg:w-[40%] text-center flex items-center justify-center ">

            <div className="py-8 flex gap-3 flex-col">
              <h1 className="uppercase md:text-6xl text-4xl text-black font-bold">Hotel Relax</h1>
              <br />
              <div className="flex items-center gap-3">
                <i className="fa-regular fa-calendar-days text-2xl"></i>

                <div>
                  <h1 className="md:text-xl text-base text-black font-medium">Saturday to friday
                  </h1>
                  <p className="text-start md:text-base text-sm text-[#333333] font-normal"> 24/7 open</p>
                </div>

              </div>


              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot md:text-2xl text-xl"></i>

                <div>
                  <h1 className="md:text-xl text-base text-black font-medium">Auckland city in new zealand
                  </h1>
                  <p className="text-start md:text-base text-sm text-[#333333] font-normal ">Hotel locaiton</p>
                </div>

              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone md:text-2xl text-xl"></i>

                <div>
                  <h1 className="md:text-xl text-base text-black font-medium">+9990003</h1>
                  <h2 className="text-start md:text-base text-sm text-[#333333] font-normal">phone</h2>

                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope md:text-2xl text-xl"></i>

                <div>
                  <h1 className="md:text-xl text-base text-black font-medium">Hotel_realx2023@gmail.com
                  </h1>
                  <p className="text-start md:text-base text-sm text-[#333333] font-normal">email</p>
                </div>

              </div>
            </div>

          </div>
          <div className="lg:w-[60%]  bg-[#F0F0F0] lg:p-9">

            <motion.div
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >

            <div className="md:border-[10px] border-[#FFFF]">
              <iframe width="100%" height="500" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Auckland+(Hotel%20relax)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
            </div>

            </motion.div>
          </div>

        </div>
        <br />
        <br />
        <br />
        <br />
        {/* Newsletter Signup-section */}
        <div className='w-full md:h-[200px] md:py-0 py-7 bg-black text-white md:px-[4%] px-[2%] flex md:flex-row flex-col items-center justify-center md:justify-between md:gap-0 gap-5'>


          <div className='md:text-4xl text-2xl inline-flex items-center gap-4'>

            <i className="fa-solid fa-dove md:block hidden"></i>

            <h1 className='text-center'> Newsletter Signup</h1>

          </div>


          <div className='flex border-[1px] md:h-[65px] h-[60px] md:w-[35rem] w-full rounded-md '>
            <input type="text" name="search" id="search" placeholder='Enter your email address' className='md:w-[80%] w-[70%] px-2 rounded-l-sm outline-none border-none md:text-base text-sm font-normal' />
            <button className='md:w-[20%] w-[30%] bg-[#fafafa] rounded-r-sm text-base text-black hover:bg-inherit  font-noraml duration-700 hover:text-white active:bg-[#ff0000]'>Submit</button>
          </div>
          <hr />
        </div>

      </section>
    </>
  );
}

export default Home;
