import React from 'react'
import exclusiveImage from "../assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className='Offer spaceMaker flex justify-center items-center hero gap-4  md:gap-10 '>
      <div className="leftOffer  w-[50%] sm:w-[60%] flex flex-col gap-1 p-10">
        <h1 className=' text-xl sm:text-3xl  md:text-5xl lg:text-7xl'>Offers for You</h1>
        <h1 className=' text-xl sm:text-3xl md:text-5xl lg:text-7xl'>Exclusive</h1>
        <p className=' text-xs sm:text-sm md:text-md lg:text-lg '>Only on Best Sellers Products</p>

        <button className='bg-[#F53E3F] flex justify-center items-center w-[120px] text-xs sm:w-[150px] sm:text-sm  md:w-[200px]  gap-2 mt-4  px-4 py-2 rounded-full text-white cursor-pointer'>Check now  </button>
      </div>
      <div className="rightOffer  w-[50%] sm:w-[40%] flex justify-center items-center">
        <img src={exclusiveImage} alt=" image" />
      </div>
    </div>
  )
}

export default Offer
