import React from 'react'
import { useLocation } from 'react-router-dom'

function Banner() {
    const location = useLocation();

    return (
        <>
            <div className={`${location.pathname == '/' || location.pathname == '/About' || location.pathname == '/Contact' ? 'flex' : 'hidden'}  text-start items-center flex-col justify-center w-fit h-full text-[#FFFF] px-[5%]`}>
                <span className={`${location.pathname == '/'  ? 'block' : 'hidden'} text-start w-full text-base font-normal uppercase`}>Live The exprience</span>

                <h1 className={`${location.pathname == '/'  ? 'block' : 'hidden'} text-8xl leading-tight uppercase font-bold`}>Make <br />
                    yourself <br />
                    At the Home</h1>

                <h1 className={`${location.pathname == '/About'  ? 'block' : 'hidden'} text-8xl font-bold text-white`}>
                    About <br /> our self
                </h1>

                <h1 className={`${location.pathname == '/Contact'  ? 'block' : 'hidden'} text-8xl font-bold text-white`}>
                    Contact <br /> With us
                </h1>

                <div className={`${location.pathname == '/'  ? 'block' : 'hidden'} w-full text-start`}>
                    <button className='border-2 py-4 px-6 text-base active:bg-[#ff0000] active:text-[#FFFF] hover:bg-white hover:text-black transition-all font-medium'>View our rooms</button>
                </div>
            </div>










        </>
    )
}

export default Banner