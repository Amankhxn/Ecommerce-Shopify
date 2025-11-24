import React from 'react'

const NewsLetter = () => {
    return (
        <div className='spaceMaker hero h-[600px] w-full flex justify-center items-center flex-col gap-4'>
            <h1 className='text-2xl text-center '>Get Exclusive Offer on Your email</h1>
            <p className='text-md text-center text-gray-600'>Subcribe to our newletter and stay updated</p>
            <div className='relative w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%] text-sm '>
                <input type="text" placeholder='Your email id...' name="" id="" className='newletterField w-full ' />
                <button className='newLetterBtn absolute top-0 right-0 '>Subcribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
