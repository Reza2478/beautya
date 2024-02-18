import React from 'react'
import Image from 'next/image'
import logo from "../../../public/assets/images/logo.png"
import { BiSearchAlt2 } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";


function Header() {
    return (
        <div className='w-full flex justify-between items-center h-16 p-6 bg-gray-50'>
            <div className="flex space-x-3 justify-center items-center">
                <RxHamburgerMenu width={24} height={24} />
                <BiSearchAlt2 width={24} height={24} />
            </div>
            <Image alt='logo' src={logo} width={80} height={39} />
            <div className="flex justify-center items-center space-x-1">
                <CiLocationOn width={24} height={24} />
                <p className='text-sm'>(US)en</p>
            </div>
        </div>
    )
}

export default Header