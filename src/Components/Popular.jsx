import React from 'react'
import data_product from "../assets/data.js";
import Card from './Card';
import { Link } from 'react-router-dom';

const Popular = () => {

    return (


        <div className='relative spaceMaker popular '>
            <h1 className='text-3xl  md:text-4xl lg:text-5xl  font-bold text-center'>Popular in Women</h1>

            <div className="popularUnderline mx-auto h-[7px] w-[200px] bg-black rounded-full mt-4" />

         

            <div className="PopularCards  flex flex-wrap justify-center items-center">

                {data_product.map((item, index) => (
                    <Link
                        key={index}
                        to={`/product/${item.id}`}
                    >
                        <Card item={item} />
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default Popular
