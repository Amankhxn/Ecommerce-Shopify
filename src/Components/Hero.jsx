import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"
import handICon from "../assets/hand_icon.png"
import heroPage from "../assets/hero_image.png"

const Hero = () => {
    return (
      

        <div className="hero ">

            <div className="  px-4 py-10 spaceMaker">

                <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-6">

                    {/* Left Section */}
                    <div className="flex flex-col justify-center text-center md:text-left md:w-1/2  w-full">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide">
                            NEW ARRIVAL ONLY
                        </h2>

                        <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl  font-bold">New</p>
                        <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl  font-bold">Collection</p>
                        <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl  font-bold">For Everyone</p>

                        <button className='bg-[#F53E3F] flex justify-center items-center w-[250px]  sm:w-[250px] gap-2 mt-6 text-lg sm:text-xl px-4 py-2 rounded-full text-white cursor-pointer mx-auto md:mx-0'>
                            Latest Collection <FaLongArrowAltRight />
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="flex justify-center md:w-1/2">
                        <img
                            src={heroPage}
                            alt="hero"
                            className="w-[280px] sm:w-[320px] md:w-[420px] lg:w-[520px] object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Hero
