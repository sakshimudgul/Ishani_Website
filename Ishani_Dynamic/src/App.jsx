import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
}from "react-router-dom"
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Gallery from './Pages/Gallery/Gallery'
import Product from './Pages/Product/Product'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Layout from './Layout/Layout'
function App() {

  const router = createBrowserRouter( createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/Product" element={<Product/>}/>

    </Route>
  ))
  return <RouterProvider router={router}/>;
}

export default App