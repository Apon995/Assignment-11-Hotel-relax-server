import React from 'react'

function Mybookings() {
  return (
    <>
      <div>
        <div className="container mx-auto mt-10">
          <div className="flex shadow-lg my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">My Bookings</h1>
                <h2 className="font-semibold text-2xl"> 10  rooms</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-medium text-black text-sm uppercase w-2/5">
                  Room Details
                </h3>
                <h3 className="font-medium text-black text-sm uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-medium text-black text-sm uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-medium text-black text-sm uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {/* ----item-- */}
              <div

                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 hover:cursor-pointer"
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={''} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-gray-800 text-sm">kire</span>
                    <span className="text-red-500 text-xs">
                      helo
                    </span>
                    <button

                      className="text-xl"

                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value="1"
                  />
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $134
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $44
                </span>
              </div>
              {/* --item-end-- */}




            </div>
            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Total Price</span>
                <span className="font-semibold text-sm">$10</span>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-black px-5 py-2 text-base text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>$29</span>
                </div>
                <button className="bg-black py-3 text-base text-white uppercase w-full">
                  Checkout
                </button>
              </div>
              {/* Rest of the summary section */}
            </div>
          </div>
        </div>
      </div>














    </>
  )
}

export default Mybookings