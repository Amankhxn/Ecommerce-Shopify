import React, { useState } from 'react'
import all_product from '../assets/all_product'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'

const ShopCategory = ({ category, banner }) => {
  const [filter , setFilter] = useState("low");


  const productFilter = [...all_product].sort((a, b) => {
    if(filter === "low"){
      return a.new_price - b.new_price ;
    }
    else{
      return b.new_price - a.new_price;
    }
  })
  
  return (
    <div>
      <img src={banner} alt="banner" />
      <div className='spaceMaker'>
        <div className="filterCards flex justify-between my-6 gap-4">
          <div className="leftFilter text-xs">
            <span className='font-semibold'>Showing  1 - 12</span> out of 54 Products
          </div>
          <div className="rightFilter ">
            <select className='border px-4 py-2 rounded-2xl text-xs' value={filter} onChange={(e) => setFilter(e.target.value)} >
              <option value={"low"}>Low to High</option>
              <option value={"high"}>High to low</option>
            </select>
          </div>
        </div>

        <div className="ProductCards border flex flex-wrap justify-evenly items-center ">
          {
            productFilter.map((item) => {
              if (category === item.category) {
                return (
                  <Link to={`/product/${item.id}`}>
                  <Card item={item} />
                  </Link>

                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ShopCategory
