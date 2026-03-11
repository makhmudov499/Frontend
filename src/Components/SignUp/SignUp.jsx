import React from 'react'
import Header from "../SignUp/Header"
import Firebase from "../SignUp/Firebase"
import { Helmet } from 'react-helmet-async'
Helmet
const SignUp = () => {
  return (
    <div>
        <Helmet>
              <title>SignUp Page</title>
        </Helmet>
        <Header/>
        <Firebase/>
    </div>
  )
}

export default SignUp