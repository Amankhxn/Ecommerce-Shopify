import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import AppLayout from "./Pages/AppLayout";
import Cart from "./Pages/Cart";
import menBanner from "./assets/banner_mens.png";
import womenBanner from "./assets/banner_women.png";
import kidsBanner from './assets/banner_kids.png'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const router = createBrowserRouter([{
  path: '/',
  element: <AppLayout />,
  error: <Error />,
  children: [
    { path: '/', element: <Shop /> },
    { path: '/men', element: <ShopCategory banner={menBanner} category="men" /> },
    { path: '/women', element: <ShopCategory banner={womenBanner} category="women" /> },
    { path: '/kid', element: <ShopCategory banner={kidsBanner} category="kid" /> },
    { path: '/loginsignup', element: <LoginSignup /> },
    { path: '/product/:id', element: <Product /> },
    { path: '/cart', element: <Cart /> },
  ]
}])

function App() {

  return (
    <>

      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      ></ToastContainer>
    </>
  )
}

export default App
