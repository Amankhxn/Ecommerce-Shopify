import React, { createContext, useEffect, useState } from 'react'
import all_products from "../assets/all_product";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);
    const [cartLoaded, setCartLoaded] = useState(false); // ✅ new flag


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);


            if (currentUser) {
                const ref = doc(db, "carts", currentUser.uid);
                const snap = await getDoc(ref);

                if (snap.exists()) {
                    setCart(snap.data().items || []);
                } else {
                    setCart([]);
                }
                setCartLoaded(true);
            }
            else {
                setCart([]);
                setCartLoaded(false);
            }
        })
        return () => unsubscribe();
    }, [])


    useEffect(() => {
        if (!user || !cartLoaded) return;

        const saveCart = async () => {
            const ref = doc(db, "carts", user.uid);

            await setDoc(ref, { items: cart }, { merge: true })
        }

        saveCart();
    }, [cart, user, cartLoaded])

  



    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id)
            // toast.success("Item Added")
            console.log("cart");

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            
            return [...prevCart, { ...product, quantity: 1 }]
        })


    }

    const count = cart.reduce((acc, item) => { return acc + item.quantity }, 0);

    const logout = () => {
      signOut(auth);
      toast.info("Logged Out");
    }



    const contextValue = { all_products, cart, setCart, addToCart, count, user, logout };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;




// import React, { createContext, useEffect, useState } from 'react'
// import all_products from "../assets/all_product";
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { auth, db } from './firebase';
// import { doc, getDoc, setDoc } from 'firebase/firestore';

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//     const [cart, setCart] = useState([]);
//     const [user, setUser] = useState(null);
//     const [cartLoaded, setCartLoaded] = useState(false);


//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//             setUser(currentUser);

//             if (currentUser) {
//                 // Load cart from Firestore
//                 const ref = doc(db, "carts", currentUser.uid);
//                 const snap = await getDoc(ref);

//                 if (snap.exists()) {
//                     setCart(snap.data().items || []);
//                 } else {
//                     setCart([]);
//                 }

//                 setCartLoaded(true);
//             } else {
//                 setCart([]);
//                 setCartLoaded(false);
//             }
//         });

//         return () => unsubscribe();
//     }, []);


//     useEffect(() => {
//         if (!user) return;
//         if (!cartLoaded) return; 

//         const saveCart = async () => {
//             const ref = doc(db, "carts", user.uid);
//             await setDoc(ref, { items: cart }, { merge: true });
//             console.log("Cart saved:", cart);
//         };

//         saveCart();
//     }, [cart, user, cartLoaded]);

  
//     const addToCart = (product) => {
//         setCart((prevCart) => {
//             const existing = prevCart.find((item) => item.id === product.id);

//             if (existing) {
//                 return prevCart.map((item) =>
//                     item.id === product.id
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 );
//             }

//             return [...prevCart, { ...product, quantity: 1 }];
//         });
//     };

//     const count = cart.reduce((acc, item) => acc + item.quantity, 0);

 
//     const logout = () => {
//         signOut(auth);
       
//     };

//     const contextValue = {
//         all_products,
//         cart,
//         setCart,
//         addToCart,
//         count,
//         user,
//         logout
//     };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;
