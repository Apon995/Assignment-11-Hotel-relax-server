import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="min-h-screen">
        <div className="py-5 lg:w-[30%] md:w-[60%] w-[90%] mx-auto shadow-lg bg-gray-100 rounded-xl">
          <h1 className="text-center font-semibold text-4xl text-gray-600">
            <span>Login Now </span>
          </h1>
          <div>
            <form className="space-y-5 py-5 px-5">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your email "
                  required
                  className="w-full dark:bg-[#fff] px-2 py-4 text-black outline-none rounded-lg outline-2 focus:outline-gray-300 placeholder:text-base placeholder:text-[#adadad]"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  id="user-password"
                  placeholder="Enter your password"
                  className="w-full dark:bg-[#fff] px-2 py-4 text-black outline-none rounded-lg outline-2 focus:outline-gray-300 placeholder:text-base placeholder:text-[#adadad]"
                />
              </div>

              <Link
                to="/"
                className="text-sm text-gray-700 hover:text-black cursor-pointer"
              >
                Forget password
              </Link>

              <br />
              <button
                style={{ transition: "background 1s" }}
                className="bg-black w-full hover:bg-white hover:shadow-xl hover:text-black py-2 rounded-md text-white font-medium cursor-pointer uppercase"
              >
                Login
              </button>
            </form>
            <div className="">
              <p className="text-base text-gray-500 text-center">
                ----------------Or-----------------
              </p>

              <div className="w-full flex items-center justify-center py-3 gap-3 mx-auto">
                <div>
                  <button>

                    <i className="fa-brands fa-facebook"></i>
                  </button>
                </div>
                <div>
                  <button>
                    <i className="fa-brands fa-google"></i>
                  </button>
                </div>
                <div>
                  <button>
                    <i className="fa-brands fa-linkedin"></i>
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-600 text-center">
                You don't have an account ?
                <Link to="/" className="text-[#405aff]">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
