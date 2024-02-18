import Image from 'next/image'
import React from 'react'
import bannerMobile from "../../../public/assets/images/banner-mobile.png"

function Banner() {
    return (
        <div className='relative'>
            <Image alt="banner-mobile" src={bannerMobile} />
            <div className='w-full h-full   bg-black opacity-40 absolute top-0 left-0' />
            <div className='flex flex-col w-full space-y-3 justify-end items-center absolute bottom-8 opacity-100' >
                <p className='text-white font-semibold text-xl'>Unlock Your Natural Glow</p>
                <button className='text-white px-6 py-3 bg-transparent border-2 border-white'>Know More</button>
            </div>

        </div>
    )
}

export default Banner