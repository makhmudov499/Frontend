import React, { useState, useEffect } from 'react';
import "./Map.css"
import { Heart, Eye, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import { useSearch } from "../../Context";
import { useWishlist } from "../../Wishlist/WishlistContext";
import { Link } from 'react-router-dom';
import { useCart } from "../../CartContext/CartContext";
import 'swiper/css'
import 'swiper/css/navigation'

import a9 from "../../assets/a9.png"
import a10 from "../../assets/a10.png"
import a11 from "../../assets/a11.png"
import a12 from "../../assets/a12.png"

const FlashSales = () => {
  const { t } = useTranslation();
  const { searchQuery } = useSearch();
  const { addToWishlist, wishlist } = useWishlist();
  const { addToCart } = useCart();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    let deadline = localStorage.getItem("flash_sale_deadline");
    if (!deadline) {
      deadline = new Date().getTime() + (3 * 24 * 60 * 60 * 1000) + (23 * 60 * 60 * 1000); 
      localStorage.setItem("flash_sale_deadline", deadline);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  const products = [
    { id: 1, name: t('prod_gamepad'), price: 120, oldPrice: 160, discount: "-40%", rating: 5, reviews: 88, img: a9 },
    { id: 2, name: t('prod_keyboard'), price: 960, oldPrice: 1160, discount: "-35%", rating: 4, reviews: 75, img: a10 },
    { id: 3, name: t('prod_monitor'), price: 370, oldPrice: 400, discount: "-30%", rating: 5, reviews: 99, img: a11 },
    { id: 4, name: t('prod_chair'), price: 375, oldPrice: 400, discount: "-25%", rating: 5, reviews: 99, img: a12 },
    { id: 5, name: t('prod_chair'), price: 375, oldPrice: 400, discount: "-25%", rating: 5, reviews: 99, img: a12 },
    { id: 2, name: t('prod_keyboard'), price: 960, oldPrice: 1160, discount: "-35%", rating: 4, reviews: 75, img: a10 },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='map'>
      <div className="map-top">
        <div className="map-left">
          <div className="map-today">
            <span className="map-bar"></span>
            <p>{t('flash_today')}</p>
          </div>
          <div className="map-middle">
            <h2>{t('flash_sales')}</h2>
            <div className="timer">
              <div className="timer-item"><p>{t('days')}</p><b>{formatTime(timeLeft.days)}</b></div>
              <span className="timer-colon">:</span>
              <div className="timer-item"><p>{t('hours')}</p><b>{formatTime(timeLeft.hours)}</b></div>
              <span className="timer-colon">:</span>
              <div className="timer-item"><p>{t('minutes')}</p><b>{formatTime(timeLeft.minutes)}</b></div>
              <span className="timer-colon">:</span>
              <div className="timer-item"><p>{t('seconds')}</p><b>{formatTime(timeLeft.seconds)}</b></div>
            </div>
          </div>
        </div>
        <div className="map-arrows">
          <button className="map-arrow swiper-prev-btn"><ChevronLeft size={20} /></button>
          <button className="map-arrow swiper-next-btn"><ChevronRight size={20} /></button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-prev-btn',
          nextEl: '.swiper-next-btn',
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },    
          640: { slidesPerView: 2, spaceBetween: 20 },    
          1024: { slidesPerView: 4.5, spaceBetween: 30 },  
        }}
        className="map-swiper"
      >
        {filteredProducts.map((product) => {
          const isLiked = wishlist.some((item) => item.id === product.id);
          return (
            <SwiperSlide key={product.id}>
              <div className="map-card">
                <div className="map-card-img">
                  <span className="map-discount">{product.discount}</span>
                  <img src={product.img} alt={product.name} />
                  <button className='asdfgh' onClick={() => addToCart(product)}>{t('add_to_cart')}</button>
                  <div className="map-icons">
                    <button 
                      onClick={() => addToWishlist(product)} 
                      style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                    >
                      <Heart 
                        size={25} 
                        fill={isLiked ? "#DB4444" : "none"} 
                        color={isLiked ? "#DB4444" : "black"} 
                      />
                    </button>
                    <Link to={`/product/${product.id}`} className="icon-btn">
                      <Eye size={25} />
                    </Link>
                  </div>
                </div>
                <h3>{product.name}</h3>
                <div className="map-price">
                  <span className="map-new">${product.price}</span>
                  <span className="map-old">${product.oldPrice}</span>
                </div>
                <div className="map-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill={i < product.rating ? "#FFAD33" : "none"} color={i < product.rating ? "#FFAD33" : "#ccc"} />
                  ))}
                  <span>({product.reviews})</span>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <button className='btn123'>{t('view_all_products')}</button>
    </div>
  )
}

export default FlashSales;