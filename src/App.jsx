import React, { useEffect } from 'react'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import { Outlet, useNavigation } from 'react-router-dom';
import './Main.css';
import Banner from './Components/Banner.jsx';
import { Oval } from 'react-loader-spinner'

function App() {
  const navigation = useNavigation();

 






  return (
    <>
      <header>

        <Banner />
        <Navbar />
      </header>
      <main className='min-h-screen '>
        {
          navigation?.state == 'idle' ? < Outlet /> : <div className='flex items-center justify-center w-full h-[60vh]'>
            <Oval
              height={80}
              width={80}
              color="black"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#adadad"
              strokeWidth={5}
              strokeWidthSecondary={4}

            />
          </div>


        }
      </main>

      <footer>
        <Footer />
      </footer>




    </>
  )
}

export default App