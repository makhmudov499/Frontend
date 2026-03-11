import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import "./Cart.css"; 
import Navbar from "../Components/SignUp/Navbar";
import Header from "../Components/SignUp/Header";
import Footer from "../Components/Home/Footer";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Navbar/>
      <Header/>
      <div className="cart-container">
        <div className="breadcrumb">Home / Cart</div>
        
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="product-info">
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                </td>
                <td>${item.price}</td>
                <td>
                  <input 
                    type="number" 
                    value={item.quantity} 
                    min="1" 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-actions">
          <Link to="/home">
            <button className="outline-btn">Return To Shop</button>
          </Link>
          <button className="outline-btn">Update Cart</button>
        </div>

        <div className="cart-bottom">
          <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" />
            <button className="primary-btn">Apply Coupon</button>
          </div>
          
          <div className="cart-total-card">
            <h3>Cart Total</h3>
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <hr />
            <div className="total-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="total-row bold">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
            <Link to="/checkout">
              <button className="primary-btn full-width">Process to checkout</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;