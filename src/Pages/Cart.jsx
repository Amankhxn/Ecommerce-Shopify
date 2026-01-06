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

            <div className="flex justify-between  md:block">
              <img
                src={item.image}
                className="w-20 h-24 object-cover rounded"
                alt="product"
              />
              <FaTimes
                className="md:hidden text-gray-500 hover:text-red-500 cursor-pointer"
                onClick={() => removeItem(item.id)}
              />
            </div>

            <p className="font-medium text-gray-600 mt-2 md:mt-0">{item.name}</p>

            <p className="font-semibold text-gray-800">₹{item.new_price}</p>

            <div className="my-2 md:my-0">
              <input
                type="number"
                className="w-14 border text-center rounded"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
              />
            </div>

            <p className="font-bold text-gray-900">₹{item.quantity * item.new_price}</p>

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
