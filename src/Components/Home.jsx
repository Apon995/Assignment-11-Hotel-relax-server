import React from "react";
import History from "../assets/Slider-images/ourHistory.jpg";
import grand from "../assets/Slider-images/grand-region.jpg";
import client1 from '../assets/client-image/client-1.jpg';
import client2 from '../assets/client-image/client-2.jpg';
import client3 from '../assets/client-image/client-3.jpg';
import client4 from '../assets/client-image/client-4.jpg';

function Home() {
  return (
    <>
      <section>
        {/* --our-hotel-history-section- */}
        <div className="flex w-full items-center">
          <div className="w-[50%] p-9 bg-[#FFFF]">
            <h1 className="text-[#333333] text-6xl font-bold">
              Our <br />
              <span>History</span>
            </h1>

            <br />
            <p className="text-[18px] font-normal leading-[35px] text-[#000000]">
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
            <p className="text-[18px] font-normal leading-[35px] text-[#000000]">
              The hotel quickly gained a reputation as a sanctuary of serenity.
              Celebrities, artists, and intellectuals from all corners of the
              world flocked to this remote paradise to find respite and
              inspiration. It was during this period that Hotel Relax Now's
              iconic Victorian architecture and lush gardens were meticulously
              crafted, enhancing its reputation as a world-class destination for
              rest and rejuvenation.
            </p>
          </div>

          <div className="w-[50%] bg-[#F0F0F0] p-10 ">
            <div className="border-[10px] border-[#FFFF] w-[90%]">
              <img src={History} alt="Our history image" />
            </div>
          </div>
        </div>

        <br />


        {/*---------- the grand-regions-section--------- */}
        <div className="bg-[#000000] w-full flex pb-28 gap-4 items-center ">
          <div className="w-[50%]">
            <h1 className="text-6xl font-bold text-white py-6 ml-9">
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

        {/* ---------Feature-rooms-section------------------ */}

        <div className="bg-[#F0F0F0]">
          <div className="w-full flex justify-between px-[5%] py-10">
            <h1 className="text-6xl font-bold text-[#333333]">
              Featured <br />
              Rooms
            </h1>
            <button className="border-2 h-fit border-black py-4 px-8 text-base active:bg-[#ff0000]  hover:bg-black hover:text-white text-black  transition-all font-medium">
              View All Rooms
            </button>
          </div>
          <br />
          <div>
            divvvvvvvvvvvvvvvvvvaaaaaaaaaaaaaaa
          </div>
        </div>

        <br />

        {/* -------User Testimonials section--- */}
        <div>
          <h1 className='text-base font-medium text-red-500 text-center'>User Testimonials</h1>
          <div className='text-center space-y-2'>
            <h2 className='text-5xl font-semibold text-[#333333]'>What Our Client Say</h2>



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

        <br />
        <br />

      </section>
    </>
  );
}

export default Home;
