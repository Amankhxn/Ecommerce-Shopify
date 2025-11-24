import React, { createContext, useState } from 'react'
import all_products from "../assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id)

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...prevCart, { ...product, quantity: 1 }]
        })


    }

    const count = cart.reduce((acc, item) => { return acc + item.quantity }, 0);
    const contextValue = { all_products, cart, setCart, addToCart, count };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;