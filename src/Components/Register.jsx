import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>

      <div className='min-h-screen'>
        <div className="py-5 lg:w-[30%] md:w-[60%] w-[90%] mx-auto shadow-lg bg-gray-100 rounded-xl">
          <h1 className="text-center font-semibold text-4xl text-gray-600">
            <span>Register Now </span>
          </h1>
          <div >



            <form className="space-y-3 py-5 px-5">
              <input type="Name" name="name" placeholder="Enter your username " required className="w-full dark:bg-[#fff] px-2 py-4 text-black outline-none rounded-lg outline-2 focus:outline-gray-300 placeholder:text-base placeholder:text-[#adadad]" />


              <input type="email" name="email" placeholder="Enter Your email " required className="w-full dark:bg-[#fff] px-2 py-4 text-black outline-none rounded-lg outline-2 focus:outline-gray-300 placeholder:text-base placeholder:text-[#adadad]" />


              <input type='password' name="password" id="user-password" placeholder="Enter your password" className="w-full dark:bg-[#fff] px-2 py-4 text-black outline-none rounded-lg outline-2 focus:outline-gray-300 placeholder:text-base placeholder:text-[#adadad]" />


              <div className="flex flex-row-reverse justify-between">
                <Link to="/" className="text-sm text-gray-700 hover:text-black cursor-pointer">Forget password</Link>
                <label htmlFor="checkbox" className="text-sm text-gray-700 inline-flex gap-1">
                  <input type="checkbox" className="checkbox hover:cursor-pointer"
                  />
                  show password
                </label>
              </div>

              <div className="py-4 space-y-1">

                <button style={{ transition: 'background 1s' }} className='bg-black w-full hover:bg-white hover:shadow-xl hover:text-black py-2 rounded-md text-white font-medium cursor-pointer'>Register</button>
                <p className="text-base text-gray-500 text-center">
                  ----------------Or-----------------
                </p>

                <p className="text-sm text-gray-600 text-center">
                  You already have an account ?
                  <Link to="/Login" className="text-[#405aff]">Login</Link>
                </p>
              </div>

            </form>

          </div>
        </div>
      </div>










    </>
  )
}

export default Register