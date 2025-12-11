import React from 'react'
import data_product from '../assets/data'
import collections from "../assets/new_collections";
import Card from './Card'
import { Link } from 'react-router-dom';

const NewCollection = () => {
    return (
        <div id='collections'>
            <div className='relative spaceMaker popular '>
                <h1 className='text-3xl  md:text-4xl lg:text-5xl font-bold text-center'>New Collections</h1>

                {/* underline */}
                <div className="popularUnderline mx-auto h-[7px] w-[200px] bg-black rounded-full mt-4" />

                {/* cards */}
                <div className="PopularCards  flex flex-wrap justify-center items-center">
                    {collections.map((item, index) => (
                        <Link to={`/product/${item.id}`}>
                            <Card item={item} key={index} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewCollection
