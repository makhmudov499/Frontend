import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, Truck, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next'; 
import { products } from '../Data/productsData';
import './Product.css';
import Header from "../Components/SignUp/Header";
import Footer from "../Components/Home/Footer";

const Product = () => {
  const { id } = useParams();
  const { t } = useTranslation(); 
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  
  const currentProduct = products.find(item => item.id === Number(id));
  const [mainImg, setMainImg] = useState(null);

  useEffect(() => {
    if (currentProduct) {
      setMainImg(currentProduct.img);
      window.scrollTo(0, 0);
    }
  }, [currentProduct]);

  if (!currentProduct) {
    return (
      <>
        <Header />
        <div className="product-page"><h2>{t('not_found')}</h2></div>
        <Footer />
      </>
    );
  }

  const productImages = [currentProduct.img, currentProduct.img, currentProduct.img, currentProduct.img];

  return (
    <>
      <Header />
      <div className="product-page">
        <div className="breadcrumb">
          {t('breadcrumb_account')} / {t('breadcrumb_gaming')} / <span>{currentProduct.name}</span>
        </div>

        <div className="product-container">
          <div className="product-gallery">
            <div className="product-thumbnails">
              {productImages.map((img, index) => (
                <div 
                  key={index} 
                  className={`thumb-item ${mainImg === img ? 'active-thumb' : ''}`}
                  onClick={() => setMainImg(img)}
                >
                  <img src={img} alt={`thumb-${index}`} />
                </div>
              ))}
            </div>
            <div className="main-image">
              <img src={mainImg || currentProduct.img} alt="main" />
            </div>
          </div>

          <div className="product-info">
            <h1>{currentProduct.name}</h1>
            <div className="rating-row">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < currentProduct.rating ? "#FFAD33" : "none"} color="#FFAD33" />
                ))}
              </div>
              <span className="reviews">({currentProduct.reviews} {t('reviews')})</span>
              <span className="stock">| {t('in_stock')}</span>
            </div>
            <div className="price">${currentProduct.price.toFixed(2)}</div>
            <p className="description">
              {currentProduct.desc || "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."}
            </p>

            <hr />

            <div className="options">
              <div className="option-row">
                <span>{t('colours')}:</span>
                <div className="color-dots">
                  <span className="dot blue active"></span>
                  <span className="dot red"></span>
                </div>
              </div>

              <div className="option-row">
                <span>{t('size')}:</span>
                <div className="size-selector">
                  {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                    <button 
                      key={size} 
                      className={selectedSize === size ? 'active' : ''}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="actions">
              <div className="quantity-control">
                <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>-</button>
                <span>{quantity}</span>
                <button className="plus" onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
              <button className="buy-btn">{t('buy_now')}</button>
              <button className="wish-btn"><Heart size={20} /></button>
            </div>

            <div className="delivery-box">
              <div className="delivery-item">
                <Truck size={30} />
                <div>
                  <h4>{t('free_delivery')}</h4>
                  <p><u>{t('delivery_availability')}</u></p>
                </div>
              </div>
              <div className="delivery-item">
                <RefreshCw size={30} />
                <div>
                  <h4>{t('return_delivery')}</h4>
                  <p>{t('return_details')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;