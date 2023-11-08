import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Banner() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname == '/') {

            document.getElementById('banner').classList.remove('room')
            document.getElementById('banner').classList.remove('superior')
            document.getElementById('banner').classList.remove('signature')
            document.getElementById('banner').classList.remove('luxary')
            document.getElementById('banner').classList.remove('deluxe')
            document.getElementById('banner').classList.remove('mybooking')
            document.getElementById('banner').classList.remove('about')
            document.getElementById('banner').classList.remove('contact')

            document.getElementById('banner').classList.add('home')

        }
        else if (location.pathname == '/Room') {
            document.getElementById('banner').classList.remove('superior')
            document.getElementById('banner').classList.remove('signature')
            document.getElementById('banner').classList.remove('luxary')
            document.getElementById('banner').classList.remove('deluxe')
            document.getElementById('banner').classList.remove('room')
            document.getElementById('banner').classList.remove('mybooking')
            document.getElementById('banner').classList.remove('about')
            document.getElementById('banner').classList.remove('home')
            document.getElementById('banner').classList.add('room')

        }
        else if (location.pathname == '/Mybooking') {
            document.getElementById('banner').classList.remove('superior')
            document.getElementById('banner').classList.remove('signature')
            document.getElementById('banner').classList.remove('luxary')
            document.getElementById('banner').classList.remove('deluxe')
            document.getElementById('banner').classList.remove('home')
            document.getElementById('banner').classList.remove('room')
            document.getElementById('banner').classList.remove('mybooking')
            document.getElementById('banner').classList.remove('about')
            document.getElementById('banner').classList.remove('contact')
            document.getElementById('banner').classList.add('mybooking')

        }
        else if (location.pathname == '/About') {
            document.getElementById('banner').classList.remove('superior')
            document.getElementById('banner').classList.remove('signature')
            document.getElementById('banner').classList.remove('luxary')
            document.getElementById('banner').classList.remove('deluxe')
            document.getElementById('banner').classList.remove('home')
            document.getElementById('banner').classList.remove('room')
            document.getElementById('banner').classList.remove('mybooking')
            document.getElementById('banner').classList.remove('contact')
            document.getElementById('banner').classList.add('about')

        }
        else if (location.pathname == '/Contact') {
            document.getElementById('banner').classList.remove('superior')
            document.getElementById('banner').classList.remove('signature')
            document.getElementById('banner').classList.remove('luxary')
            document.getElementById('banner').classList.remove('deluxe')
            document.getElementById('banner').classList.remove('home')
            document.getElementById('banner').classList.remove('room')
            document.getElementById('banner').classList.remove('mybooking')
            document.getElementById('banner').classList.remove('about')
            document.getElementById('banner').classList.add('contact')

        }
        else if (location.pathname == '/Details/Superior%20Room') {

            document.getElementById('banner').classList.remove('home')
            document.getElementById('banner').classList.remove('room')
            document.getElementById('banner').classList.remove('mybooking')
            document.getElementById('banner').classList.remove('about')
            document.getElementById('banner').classList.remove('contact')
            document.getElementById('banner').classList.add('superior')


        }
        else if (location.pathname == '/Details/Deluxe%20Room') {
            document.getElementById('banner').classList.remove('home')
            document.getElementById('banner').classList.remove('room')
            document.getElementById('banner').classList.remove('mybooking')
            document.getElementById('banner').classList.remove('about')
            document.getElementById('banner').classList.remove('contact')
            document.getElementById('banner').classList.remove('superior')
            document.getElementById('banner').classList.add('deluxe')

        }
        else if (location.pathname == '/Details/Signature%20Room') {
            document.getElementById('banner').classList.remove('home')
            document.getElementById('banner').classList.remove('room')
            document.getElementById('banner').classList.remove('mybooking')
            document.getElementById('banner').classList.remove('about')
            document.getElementById('banner').classList.remove('contact')
            document.getElementById('banner').classList.remove('deluxe')
            document.getElementById('banner').classList.remove('superior')
            document.getElementById('banner').classList.add('signature')

        }

        else if (location.pathname == '/Details/Luxury%20Suites%20Room') {
            document.getElementById('banner').classList.remove('home')
            document.getElementById('banner').classList.remove('room')
            document.getElementById('banner').classList.remove('mybooking')
            document.getElementById('banner').classList.remove('about')
            document.getElementById('banner').classList.remove('contact')
            document.getElementById('banner').classList.remove('deluxe')
            document.getElementById('banner').classList.remove('superior')
            document.getElementById('banner').classList.remove('signature')
            document.getElementById('banner').classList.add('luxary')



        }







    }, [location.pathname])

    return (
        <>
            <div id='banner' className='BannerBackground'>
                <div className={`flex text-start items-center flex-col justify-center w-fit h-full text-[#FFFF] px-[5%]`}>
                    <span className={`${location.pathname == '/' ? 'block' : 'hidden'} text-start w-full text-base font-normal uppercase`}>Live The exprience</span>
                    <span className={`${location.pathname == '/Room' ? 'block' : 'hidden'} text-start w-full text-base font-normal uppercase`}>
                        EXCLUSIVE ENVIRONMENT</span>

                    <h1 className={`${location.pathname == '/' ? 'block' : 'hidden'} text-8xl leading-tight uppercase font-bold`}>Make <br />
                        yourself <br />
                        At the Home</h1>

                    <h1 className={`${location.pathname == '/Room' ? 'block' : 'hidden'} text-8xl leading-tight uppercase font-bold`}>
                        Discover<br />
                        our rooms <br />
                        and suites
                    </h1>
                    <h1 className={`${location.pathname == '/Mybooking' ? 'block' : 'hidden'} text-8xl  leading-tight uppercase font-extrabold`}>
                        MY booking <br />
                        Rooms and <br /> suites
                    </h1>

                    <h1 className={`${location.pathname == '/About' ? 'block' : 'hidden'} text-8xl font-bold text-white`}>
                        About <br /> our self
                    </h1>

                    <h1 className={`${location.pathname == '/Contact' ? 'block' : 'hidden'} text-8xl font-bold text-white`}>
                        Contact <br /> With us
                    </h1>

                    <h1 className={`${location.pathname == '/Details/Superior%20Room' ? 'block' : 'hidden'}  uppercase text-8xl font-bold text-white`}>
                        Superior <br /> Room
                    </h1>
                    <h1 className={`${location.pathname == '/Details/Deluxe%20Room' ? 'block' : 'hidden'}  uppercase text-8xl font-bold text-white`}>
                        Deluxe <br /> Room
                    </h1>
                    <h1 className={`${location.pathname == '/Details/Signature%20Room' ? 'block' : 'hidden'}  uppercase text-8xl font-bold text-white`}>
                        signature <br /> Room
                    </h1>
                    <h1 className={`${location.pathname == '/Details/Luxury%20Suites%20Room' ? 'block' : 'hidden'}  uppercase text-8xl font-bold text-white`}>
                        Luxury <br /> Room
                    </h1>

                    <div className={`${location.pathname == '/' ? 'block' : 'hidden'} w-full text-start`}>
                        <button className='border-2 py-4 px-6 text-base active:bg-[#ff0000] active:text-[#FFFF] hover:bg-white hover:text-black transition-all font-medium'>View our rooms</button>
                    </div>
                </div>

            </div>









        </>
    )
}

export default Banner