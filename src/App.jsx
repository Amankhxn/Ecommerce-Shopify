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
    </>
  )
}

export default App
