import React from 'react'

const Card = ({ item }) => {


    const { name, image, new_price, old_price } = item
    return (
        <div className=' w-[285px] hover:shadow hover:shadow-red-400 rounded-2xl flex  justify-center items-center  flex-col gap-4 cursor-pointer  p-2  ' >

            <img src={image} alt="" className='bg-cover w-full rounded' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

            <div className='py-2'>
                <p className='text-lg sm:text-sm md:text-md '>{name}</p>
                <p className='font-bold'>${new_price} <span className='text-gray-600 line-through px-1.5' >{old_price}</span> </p>
            </div>
        </div>
      
    )
}

export default Card
