import React from 'react'
import logo from "../assets/logo_big.png"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='spaceMaker  flex flex-col gap-5 footer'>
            <div className="logo flex-center gap-5 cursor-pointer">

                <NavLink to={'/'}>
                    <img src={logo} alt="logo" />
                    <h1 className='text-2xl'>Shopify</h1>
                </NavLink>
            </div>
            <div className="footerNav">
                <ul className='flex-center gap-3 cursor-pointer text-xs sm:text-sm md:text-lg '>
                    <li>Company</li>
                    <li>Product</li>
                    <li>Offices</li>
                    <li>About </li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="icons flex-center gap-6 ">
                <FaInstagram size={30} className='cursor-pointer' />
                <FaWhatsapp size={30} className='cursor-pointer' />
                <FaPinterest size={30} className='cursor-pointer' />
            </div>
            <div className="copyRight border-t border-gray-600 text-center py-2">
                <p className='text-gray-600 text-xs sm:text-sm md:text-lg'>CopyRight 2025@ - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
