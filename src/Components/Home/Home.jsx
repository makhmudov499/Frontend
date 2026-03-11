import React from 'react'
import { Links } from 'react-router-dom'
import Nav from "../SignUp/Header"
import Navbar from "../SignUp/Navbar"
import Footer from './Footer'
import SwiperComp from './Swiper'
import Map from './Map'
import Browse from './Browse'
import Best from './Best'
import Your from './Your'
import Last from "../About/Last"
import Last2 from './Last'
import Product from './Product'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div className='wrapper'>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
        <Navbar/>
        <Nav/>
        <SwiperComp/>
        <Map/>
        <Browse/>
        <Best/>
        <Your/>
        <Product/>
        <Last2/>  
        <Last/>
        <Footer/>
    </div>
  )
}

export default Home