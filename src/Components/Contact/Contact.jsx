import React from 'react'
import Navbar from "../SignUp/Navbar"
import Nav from "../SignUp/Header"
import Footer from '../Home/Footer'
import Input from './Input'
import { Helmet } from 'react-helmet-async'
const Contact = () => {
  return (
    <div>
        <Helmet>
        <title>Contact Page</title>
        </Helmet>
        <Navbar/>
        <Nav/>
        <Input/>
        <Footer/>
    </div>
  )
}

export default Contact