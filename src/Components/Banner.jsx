import React from 'react'
import { useLocation } from 'react-router-dom'

function Banner() {
    const location = useLocation();

    return (
        <>
            <div className={`${location.pathname == '/' ? 'flex' : 'hidden'}  text-start items-center flex-col justify-center w-fit h-full text-[#FFFF] px-[5%]`}>
                <span className='text-start w-full text-base font-normal uppercase'>Live The exprience</span>

                <h1 className='text-8xl leading-tight uppercase font-bold'>Make <br />
                    yourself <br />
                    At the Home</h1>

                <div className='w-full text-start'>
                    <button className='border-2 py-4 px-6 text-base active:bg-[#ff0000] active:text-[#FFFF] hover:bg-white hover:text-black transition-all font-medium'>View our rooms</button>
                </div>
            </div>










        </>
    )
}

export default Banner