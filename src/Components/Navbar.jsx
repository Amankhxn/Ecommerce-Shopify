import React, { useContext, useState } from 'react'
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { ShopContext } from '../Context/ShopContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [activePage, setActivePage] = useState("shop");
    const [isOpen, setIsOpen] = useState(false);
    const { count, logout, user } = useContext(ShopContext);
    return (
        <nav className='navbar  bg-blue-50  '>
            <div className='spaceMaker flex justify-between items-center py-2'>

                <div className="leftNav flex gap-4 ">
                    <NavLink to="/">
                        <div className='flex gap-4 justify-center items-center '>

                            <img src={logo} alt="logo" />
                            <h1 className='text-2xl font-semibold'>Shopify</h1>
                        </div>
                    </NavLink>
                </div>
                <div className="hidden lg:block middleNav">
                    <ul className='flex gap-10 '>
                        <li><NavLink to={"/"} onClick={() => setActivePage("shop")}>Shop {activePage === "shop" ? <hr /> : <></>}</NavLink></li>
                        <li><NavLink to={"/men"} onClick={() => setActivePage("mens")}>Mens {activePage === "mens" ? <hr /> : <></>}</NavLink></li>
                        <li><NavLink to={"/women"} onClick={() => setActivePage("womens")}>Womens{activePage === "womens" ? <hr /> : <></>}</NavLink></li>
                        <li><NavLink to={"/kid"} onClick={() => setActivePage("kids")}>Kids{activePage === "kids" ? <hr /> : <></>}</NavLink></li>
                    </ul>
                </div>
                <div className="rightNav hidden lg:flex items-center gap-6">



                    {
                        user ? <button className='border px-4 py-2 rounded cursor-pointer' onClick={logout}> Logout </button> :
                            <NavLink to={'/loginsignup'}>     <button className='border px-4 py-2 rounded cursor-pointer bg-red-500 text-white '>Login</button>  </NavLink>
                    }

                    <div className="cart relative">
                        <NavLink to={"/cart"}>
                            <div className="cartCounter absolute top-[-40%] right-[-50%]">{count}</div>
                            <FaShoppingCart size={25} />
                        </NavLink>
                    </div>
                </div>

                <div
                    className={`
                                 resNavbar border-2 bg-white fixed top-0
                                 w-[70%] md:w-[50%]  h-full z-10 
                                 transition-all duration-600 ease-in-out
                                 ${isOpen ? "right-0" : "-right-full"}
                              `}
                >

                    <div className="icons flex justify-between items-center  px-8 py-4">
                        <div className="closeIcon">
                            <IoClose size={30} onClick={() => setIsOpen(false)} />
                        </div>
                        <div className="LoginCart flex items-center gap-6 ">
                            {
                                user ? <button className='border px-4 py-2 rounded cursor-pointer' onClick={logout}> Logout </button> :
                                    <NavLink to={'/loginsignup'}>     <button className='border px-4 py-2 rounded cursor-pointer bg-red-500 text-white'>Login</button>  </NavLink>
                            }


                            <div className="cart relative"> 
                                <NavLink to={"/cart"}>

                                    <div className="cartCounter absolute top-[-40%] right-[-50%]">{count}</div>
                                    <FaShoppingCart size={25} />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="middleNav flex flex-col justify-center items-center h-[550px]">

                        <ul className='  flex gap-8 flex-col  text-lg justify-center items-center '>
                            <li><NavLink to={"/"} onClick={() => { setActivePage("shop") }}>Shop {activePage === "shop" ? <hr /> : <></>}</NavLink></li>
                            <li><NavLink to={"/men"} onClick={() => setActivePage("mens")}>Mens {activePage === "mens" ? <hr /> : <></>}</NavLink></li>
                            <li><NavLink to={"/women"} onClick={() => setActivePage("womens")}>Womens{activePage === "womens" ? <hr /> : <></>}</NavLink></li>
                            <li><NavLink to={"/kid"} onClick={() => setActivePage("kids")}>Kids{activePage === "kids" ? <hr /> : <></>}</NavLink></li>
                        </ul>
                    </div>


                </div>

                <div className='lg:hidden' >
                    <GiHamburgerMenu size={30} className='cursor-pointer' onClick={() => setIsOpen(true)} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
