import React from 'react'
import Navbar from '../SignUp/Navbar'
import Nav from "../SignUp/Header"
import Footer from '../Home/Footer'
import Story from './Story'
import Hover from './Hover'
import Human from './Human'
import Last from './Last'
import { Helmet } from 'react-helmet-async'
Helmet
const About = () => {
  return (
    <div>
        <Helmet>
        <title>About Page</title>
        </Helmet>
        <Navbar/>
        <Nav/>
        <Story/>
        <Hover/>
        <Human/>
        <Last/>
        <Footer/>
    </div>
  )
}

export default About