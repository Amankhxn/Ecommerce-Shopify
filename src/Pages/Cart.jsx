import React, { useContext, useState } from 'react'
import product from "../assets/product_36.png"
import { FaTimes } from 'react-icons/fa'
import { ShopContext } from '../Context/ShopContext';

const Cart = () => {
  // const [qauntity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(ShopContext);

  console.log(cart, setCart);

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;

    setCart((prev) => prev.map((item) => item.id === id ? { ...item, quantity: qty } : item))
  }

  const Subtotal = cart.reduce((acc, item) => { return acc + item.new_price * item.quantity }, 0)

  return (
    // <div className='spaceMaker'>


    //   <div className=" mt-10">

    //     <div className="grid grid-cols-6 text-gray-600 font-semibold border-b border-gray-500 pb-3 text-sm md:text-base">
    //       <p >Products</p>
    //       <p>Title</p>
    //       <p>Price</p>
    //       <p>Quantity</p>
    //       <p>Total</p>
    //       <p>Remove</p>
    //     </div>


    //     {
    //       cart.map((item) => (


    //         <div className="grid grid-cols-6 items-center border-b border-gray-500 py-4 text-sm md:text-base">
    //           {console.log(item)}

    //           <div className="flex">
    //             <img
    //               src={item.image}
    //               alt="product"
    //               className="w-14 h-16 object-cover rounded "
    //             />
    //           </div>

    //           <div className="font-medium pr-4 text-sm text-gray-500" >
    //             {item.name}
    //           </div>

    //           <div className="font-semibold">${item.new_price}</div>

    //           <div>
    //             <input
    //               type="number"
    //               value={item.quantity}
    //               onChange={(e) => {
    //                 updateQuantity(item.id, Number(e.target.value))
    //               }}
    //               className="w-12 border text-center rounded"
    //             />
    //           </div>

    //           <div className="font-bold">${item.quantity * item.new_price}</div>

    //           <div className="cursor-pointer text-gray-500 hover:text-red-500 flex justify-start">
    //             <FaTimes onClick={() => removeItem(item.id)} />
    //           </div>
    //         </div>
    //       ))
    //     }


    //   </div>


    //   <div className="totals flex gap-10 w-full">
    //     <div className="lefttotal w-[40%]">
    //       <div className="cartTotals  flex flex-col gap-4  mt-8">
    //         <h1 className='text-2xl font-bold'>Cart Totals</h1>
    //         <div className='border-b border-gray-500 flex justify-between items-center'>
    //           <p>Subtotal </p>
    //           <p> ${Subtotal}</p>
    //         </div>

    //         <div className='flex justify-between items-center'>
    //           <p>Shiping Fees </p>
    //           <p> Free</p>
    //         </div>

    //         <div className='font-bold border-t border-gray-500 flex justify-between items-center'>
    //           <p>Total </p>
    //           <p> ${Subtotal}</p>
    //         </div>


    //       </div>
    //       <button className='cartBtn mt-6'>Proceed to checkout</button>
    //     </div>
    //     <div className="righttotals  w-[60%] flex items-center text-center justify-center ">
    //       <div className=' w-[60%] '>

    //         <p>If you have a promo code Enter it Here. </p>
    //         <input type="text" placeholder='promo code' className='promo_code bg-gray-500 px-4 py-2 w-[60%] text-white outline-none mt-3' />
    //         <button className='text-white bg-black px-4 py-2 cursor-pointer'>Submit</button>

    //       </div>

    //     </div>
    //   </div>

    // </div>

    <div className='spaceMaker'>

      <div className="mt-10">

        {/* Table header (hidden on small screens) */}
        <div className="hidden md:grid grid-cols-6 text-gray-600 font-semibold border-b border-gray-500 pb-3 text-sm md:text-base">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {cart.map((item) => (
          <div
            key={item.id}
            className="
          md:grid md:grid-cols-6 
          flex flex-col border-b md:border-none 
          shadow md:shadow-none p-4 md:p-1 rounded-lg mb-4 md:justify-center md:items-center
        "
          >

            {/* Image + Remove for card mode */}
            <div className="flex justify-between  md:block">
              <img
                src={item.image}
                className="w-20 h-24 object-cover rounded"
                alt="product"
              />
              {/* remove — mobile right corner */}
              <FaTimes
                className="md:hidden text-gray-500 hover:text-red-500 cursor-pointer"
                onClick={() => removeItem(item.id)}
              />
            </div>

            {/* Title */}
            <p className="font-medium text-gray-600 mt-2 md:mt-0">{item.name}</p>

            {/* Price */}
            <p className="font-semibold text-gray-800">₹{item.new_price}</p>

            {/* Quantity */}
            <div className="my-2 md:my-0">
              <input
                type="number"
                className="w-14 border text-center rounded"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
              />
            </div>

            {/* Total */}
            <p className="font-bold text-gray-900">₹{item.quantity * item.new_price}</p>

            {/* remove button desktop */}
            <div className="hidden md:block cursor-pointer text-gray-500 hover:text-red-500">
              <FaTimes onClick={() => removeItem(item.id)} />
            </div>
          </div>
        ))}

      </div>


      {/* ---------------- TOTALS SECTION ---------------- */}
      <div className="totals flex flex-col lg:flex-row gap-10 w-full mt-10">

        <div className="w-full lg:w-[40%] bg-gray-100 p-5 rounded-lg shadow-md">
          <h1 className='text-2xl font-bold mb-4'>Cart Totals</h1>

          <div className="flex justify-between border-b p-2">
            <p>Subtotal</p>
            <p>₹{Subtotal}</p>
          </div>

          <div className="flex justify-between p-2">
            <p>Shipping</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between border-t p-2 font-bold">
            <p>Total</p>
            <p>₹{Subtotal}</p>
          </div>

          <button className='cartBtn w-full mt-5 bg-black text-white py-3 rounded-md hover:bg-gray-900'>
            Proceed to checkout
          </button>
        </div>

        {/* promo section */}
        <div className="w-full lg:w-[60%] flex flex-col gap-4 text-center">
          <p className="text-gray-600">Have a promo code?</p>

          <div className="flex justify-center gap-3">
            <input
              className="border px-4 py-2 w-[60%] rounded"
              placeholder="Enter code"
            />

            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">
              Apply
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cart
