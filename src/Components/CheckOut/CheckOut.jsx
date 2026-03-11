import React, { useState } from 'react';
import { useCart } from "../../CartContext/CartContext";
import { useTranslation } from 'react-i18next';
import Header from "../SignUp/Header";
import Footer from "../Home/Footer";
import l1 from "../../assets/l1.png";
import l2 from "../../assets/l2.png";
import l3 from "../../assets/l3.png";
import l4 from "../../assets/l4.png";
import "./CheckOut.css";

const CheckOut = () => {
  const { cartItems } = useCart();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phone: '',
    email: '',
    saveInfo: false
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const BOT_TOKEN = "8508034364:AAGmRO0uXJr3rPJWyrI7ikeug9QSX0cnSDk";
    const CHAT_ID = "7718244637";

    let message = `🚀 <b>Yangi Buyurtma!</b>\n\n`;
    message += `👤 <b>Mijoz:</b> ${formData.firstName}\n`;
    message += `📞 <b>Tel:</b> ${formData.phone}\n`;
    message += `🏠 <b>Manzil:</b> ${formData.streetAddress}, ${formData.city}\n\n`;
    message += `📦 <b>Mahsulotlar:</b>\n`;
    cartItems.forEach((item) => {
      message += `- ${item.name} (x${item.quantity}) - $${item.price * item.quantity}\n`;
    });
    message += `\n💰 <b>Jami: $${subtotal}</b>`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: "HTML" }),
      });
      alert(t('order_success'));
    } catch (error) {
      alert(t('order_error'));
    }
  };

  return (
    <>
      <Header />
      <div className="checkout-page-container">
        <div className="breadcrumb">Account / My Account / Product / View Cart / <span>CheckOut</span></div>
        <h1 className="billing-title">{t('checkout_billing')}</h1>
        <div className="checkout-flex">
          <form className="billing-form" id="checkout-form" onSubmit={handleSubmit}>
            <div className="input-field">
              <label>{t('checkout_fname')}</label>
              <input type="text" name="firstName" onChange={handleChange} required />
            </div>
            <div className="input-field">
              <label>{t('checkout_company')}</label>
              <input type="text" name="companyName" onChange={handleChange} />
            </div>
            <div className="input-field">
              <label>{t('checkout_street')}</label>
              <input type="text" name="streetAddress" onChange={handleChange} required />
            </div>
            <div className="input-field">
              <label>{t('checkout_apartment')}</label>
              <input type="text" name="apartment" onChange={handleChange} />
            </div>
            <div className="input-field">
              <label>{t('checkout_city')}</label>
              <input type="text" name="city" onChange={handleChange} required />
            </div>
            <div className="input-field">
              <label>{t('checkout_phone')}</label>
              <input type="tel" name="phone" onChange={handleChange} required />
            </div>
            <div className="input-field">
              <label>{t('checkout_email')}</label>
              <input type="email" name="email" onChange={handleChange} required />
            </div>
            <div className="save-info-checkbox">
              <input type="checkbox" name="saveInfo" id="saveInfo" onChange={handleChange} />
              <label htmlFor="saveInfo">{t('checkout_save')}</label>
            </div>
          </form>

          <div className="order-summary-box">
            <div className="summary-items">
              {cartItems.map((item) => (
                <div className="summary-item" key={item.id}>
                  <div className="item-left">
                    <img src={item.img} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                  <span className="item-price">${item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="summary-calc">
              <div className="calc-row"><span>{t('checkout_subtotal')}:</span><span>${subtotal}</span></div>
              <hr />
              <div className="calc-row"><span>{t('checkout_shipping')}:</span><span>{t('cart_shipping_free')}</span></div>
              <hr />
              <div className="calc-row bold"><span>{t('checkout_total')}:</span><span>${subtotal}</span></div>
            </div>

            <div className="payment-options">
              <div className="payment-row">
                <div className="radio-group">
                  <input type="radio" name="payment" id="bank" />
                  <label htmlFor="bank">{t('checkout_bank')}</label>
                </div>
                <div className="payment-cards">
                  <img src={l1} alt="bKash" />
                  <img src={l2} alt="Visa" />
                  <img src={l3} alt="MasterCard" />
                  <img src={l4} alt="Nagad" />
                </div>
              </div>
              <div className="payment-row">
                <div className="radio-group">
                  <input type="radio" name="payment" id="cash" defaultChecked />
                  <label htmlFor="cash">{t('checkout_cash')}</label>
                </div>
              </div>
            </div>

            <div className="coupon-checkout">
              <input type="text" placeholder={t('cart_coupon_placeholder')} />
              <button type="button" className="apply-coupon-btn">{t('cart_apply_coupon')}</button>
            </div>
            <button type="submit" form="checkout-form" className="place-order-btn">{t('checkout_place_order')}</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;