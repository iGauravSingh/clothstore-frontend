import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import Homepage from './pages/homepage/Homepage.jsx';
import Signin from './pages/authController/Signin.jsx';
import Signup from './pages/authController/Signup.jsx';
import Cart from './pages/cart/Cart.jsx';
import Category from './pages/category/Category.jsx';
import OrderDetails from './pages/orderDetail/OrderDetails.jsx';
import ProductDetails from './pages/productDetails/ProductDetails.jsx';
import ProductInCategory from './pages/productincategory/ProductInCategory.jsx';
import CategoryList from './pages/categoryList/CategoryList.jsx';
import SubCategory from './pages/subCategory/SubCategory.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import Shop from './pages/shop/Shop.jsx';
import NotFound from './pages/notfound/NotFound.jsx';
import Profile from './pages/profile/Profile.jsx';
import Search from './pages/search/Search.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Homepage />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/category' element={<CategoryList />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/search' element={<Search />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/category/:type' element={<SubCategory />} />
      <Route path='/category/:type/:products' element={<Category />} />
      <Route path='/category/:type/:products/:id' element={<ProductDetails />} />
      <Route path='/orderdetails' element={<OrderDetails />} />
      <Route path='*' element={<NotFound />} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
