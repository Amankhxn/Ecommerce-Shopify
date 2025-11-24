import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const BreadCrum = ({ selectedProduct }) => {
    return (
        <div className='flex  h-10 py-4 mt-6 '>
            <p className='flex justify-center items-center gap-2  text-xs sm:text-sm text-gray-700'><NavLink to={'/'}> Shop </NavLink>  <FaChevronRight /> <NavLink to={`/${selectedProduct.category}`}> {selectedProduct.category}  </NavLink> <FaChevronRight /> {selectedProduct.name} </p>
        </div>
    )
}

export default BreadCrum
