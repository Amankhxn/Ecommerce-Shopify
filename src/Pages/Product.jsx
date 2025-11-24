import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import all_product from '../assets/all_product';
import BreadCrum from '../Components/BreadCrum';
import starIcon from "../assets/star_icon.png"
import starIconDull from "../assets/star_dull_icon.png"
import ReviewTab from '../Components/ReviewTab';
import Card from '../Components/Card';
import data_product from '../assets/data';
import { kidRelated, menRelated, womenRelated } from '../assets/related_products';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState("description");
  const selectedProduct = all_product.find((product) => product.id === Number(id))
  const { addToCart } = useContext(ShopContext);

  if (!selectedProduct) {
    return <h1>No such Product...</h1>
  }

  const relatedCollections = {
    men: menRelated,
    women: womenRelated,
    kid: kidRelated
  }

  const relatedCard = relatedCollections[selectedProduct.category] || [];


  return (


    <div className='spaceMaker flex flex-col gap-10 p-4'>

      <BreadCrum selectedProduct={selectedProduct} />

      <div className="Product flex flex-col lg:flex-row gap-10 lg:gap-8  ">


        <div className="leftProduct flex flex-col-reverse sm:flex-row gap-2 w-full lg:w-[50%] justify-center items-center ">

          <div className="multipleImg flex sm:flex-col  gap-4  w-full sm:w-[100px] md:w-[100px] px-4 justify-center ">
            {[1, 2, 3, 4].map((_, i) => (
              <img
                key={i}
                src={selectedProduct.image}
                alt="thumb"
                className='productAngle h-[90px] sm:h-[107px] lg:h-[92px] flex-wrap  object-cover cursor-pointer rounded'
              />
            ))}
          </div>

          <img
            src={selectedProduct.image}
            alt="main product"
            className='mainProduct  h-[350px] sm:h-[480px]  lg:w-[350px] object-contain rounded'
          />
        </div>

        <div className="rightProduct w-full lg:w-[50%] flex flex-col gap-5 px-2">

          <h1 className='text-2xl sm:text-3xl font-semibold'>{selectedProduct.name}</h1>

          <div className="rating flex gap-2 items-center">
            {[1, 2, 3, 4].map((_, i) => <img src={starIcon} key={i} alt="star" />)}
            <img src={starIconDull} alt="" />
            <p className="mt-1 text-gray-500">({selectedProduct.review_count} Reviews)</p>
          </div>

          <div className="pricing">
            <p className='text-lg sm:text-2xl text-gray-700 flex gap-6'>
              <span className='line-through'>₹{selectedProduct.old_price}</span>
              <span className='text-[#F53E3F] font-semibold'>₹{selectedProduct.new_price}</span>
            </p>
          </div>

          <p className='text-gray-600'>
            {selectedProduct.description_short}
          </p>

          <div>
            <p className='text-xl font-semibold'>Select Size</p>
            <div className="sizes flex flex-wrap gap-3 sm:gap-5 mt-2">
              {["M", "L", "XL", "XXL", "S"].map((size, i) => (
                <div key={i} className='size w-[45px] h-[45px] flex justify-center items-center border rounded cursor-pointer'>
                  {size}
                </div>
              ))}
            </div>
          </div>

          <button
            className='cartBtn bg-[#F53E3F] hover:bg-[#d53232] text-white py-3 rounded-md w-full sm:w-[250px] font-semibold transition'
            onClick={() => addToCart(selectedProduct)}
          >
            ADD TO CART
          </button>

          <div className="text-gray-700 text-sm sm:text-base">
            <p><span className='font-semibold text-black'>Tags :</span> Modern, Latest</p>
            <p><span className='font-semibold text-black'>Category :</span> Women , T-shirt , Crop-top</p>
          </div>
        </div>
      </div>


      <div className="productTabs flex flex-wrap gap-4 border-b-2 border-gray-300 text-sm sm:text-base">
        {["description", "rating"].map((tab) => (
          <div
            key={tab}
            className={`p-3 cursor-pointer ${isActive === tab ? "border-b-2 border-[#F53E3F] font-semibold" : "text-gray-500"}`}
            onClick={() => setIsActive(tab)}
          >
            {tab === "description" ? "Description" : `Review (${selectedProduct.review_count})`}
          </div>
        ))}
      </div>

      {isActive === "description" ? (
        <p className='text-gray-500 p-3'>
          {selectedProduct.description_long}
        </p>
      ) : (
        <ReviewTab review_count={selectedProduct.review_count} />
      )}

      <div className="relatedProducts">
        <h1 className='text-3xl font-bold text-center'>Related Products</h1>
        <div className="popularUnderline mx-auto h-1.5 w-[180px] bg-black rounded-full mt-3" />

        <div className="PopularCards  flex flex-wrap justify-center items-center">

          {relatedCard.map((item, index) => (
            <Link
              key={index}
              to={`/product/${item.id}`}
            >
              <Card item={item} />
            </Link>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Product
