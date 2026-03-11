import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import { useTranslation } from 'react-i18next';
import "./Cart.css"; 
import Header from "../Components/SignUp/Header";
import Footer from "../Components/Home/Footer";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { t } = useTranslation();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Header/>
      <div className="cart-container">
        <div className="breadcrumb">{t('cart_breadcrumb')}</div>
        
        <table className="cart-table">
          <thead>
            <tr>
              <th>{t('cart_product')}</th>
              <th>{t('cart_price')}</th>
              <th>{t('cart_quantity')}</th>
              <th>{t('cart_subtotal')}</th>
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
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  />
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-actions">
          <Link to="/home">
            <button className="outline-btn">{t('cart_return_shop')}</button>
          </Link>
          <button className="outline-btn">{t('cart_update')}</button>
        </div>

        <div className="cart-bottom">
          <div className="coupon-section">
            <input type="text" placeholder={t('cart_coupon_placeholder')} />
            <button className="primary-btn">{t('cart_apply_coupon')}</button>
          </div>
          
          <div className="cart-total-card">
            <h3>{t('cart_total_title')}</h3>
            <div className="total-row">
              <span>{t('cart_subtotal')}:</span>
              <span>${subtotal}</span>
            </div>
            <hr />
            <div className="total-row">
              <span>{t('cart_shipping')}:</span>
              <span>{t('cart_shipping_free')}</span>
            </div>
            <hr />
            <div className="total-row bold">
              <span>{t('cart_total')}:</span>
              <span>${subtotal}</span>
            </div>
            <Link to="/checkout">
              <button className="primary-btn full-width">{t('cart_checkout')}</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;