import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import WishlistPage from "./Components/Wishlist.jsx"; 
import Product from "./Product/Product";
import Cart from "./Components/Cart"
import { WishlistProvider } from "./Wishlist/WishlistContext"; 
import { SearchProvider } from "./Context.jsx"; 
import { CartProvider } from "./CartContext/CartContext.jsx";
import { HelmetProvider } from 'react-helmet-async';
import CheckOut from './Components/CheckOut/CheckOut.jsx';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <SearchProvider>
          <WishlistProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Routes>
          </WishlistProvider>
        </SearchProvider>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;