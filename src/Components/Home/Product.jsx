import React, { useEffect } from 'react';
import "./Product.css";
import { ChevronLeft, ChevronRight, Heart, Eye, Star } from "lucide-react";
import { Link } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { useSearch } from "../../Context";
import { useWishlist } from "../../Wishlist/WishlistContext";
import { useCart } from "../../CartContext/CartContext";
import { products } from "../../Data/productsData"; 

const Shop = () => {
  const { t } = useTranslation();
  const { searchQuery } = useSearch();
  const { addToWishlist, wishlist } = useWishlist();
  const { addToCart } = useCart();

  const shopProducts = products.filter(p => p.type === "shop");

  const filteredProducts = shopProducts.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="catalog-container">
      <div className="catalog-head" data-aos="fade-up">
        <div className="catalog-info">
          <div className="label-group">
            <div className="decor-line"></div>
            <span className="label-txt">{t('shop_label')}</span>
          </div>
          <h2 className="main-heading">{t('shop_heading')}</h2>
        </div>
        <div className="nav-switches">
          <button className="switch-item"><ChevronLeft size={20} /></button>
          <button className="switch-item"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className="items-layout">
        {filteredProducts.map((obj) => {
          const isLiked = wishlist.some((item) => item.id === obj.id);

          return (
            <div className="item-box" key={obj.id} data-aos="zoom-in">
              <div className="item-preview">
                {obj.fresh && <div className="status-tag">{t('shop_tag_new')}</div>}
                <img src={obj.img} alt={obj.name} className="item-img" />
                <div className="float-actions">
                  <button 
                    className="action-dot" 
                    onClick={() => addToWishlist(obj)}
                  >
                    <Heart 
                      size={18} 
                      fill={isLiked ? "#DB4444" : "none"} 
                      color={isLiked ? "#DB4444" : "black"} 
                    />
                  </button>
                  <Link to={`/product/${obj.id}`} className="view-link">
                    <button className="action-dot"><Eye size={18} /></button>
                  </Link>
                </div>
                <button 
                  className="buy-strip"
                  onClick={() => addToCart(obj)}
                >
                  {t('shop_add_to_cart')}
                </button>
              </div>

              <div className="item-details">
                <h3 className="item-name">{obj.name}</h3>
                <div className="metrics-row">
                  <span className="price-tag">${obj.price}</span>
                  <div className="stars-box">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < obj.rating ? "#FFAD33" : "none"} color={i < obj.rating ? "#FFAD33" : "#ccc"} />
                    ))}
                    <span className="votes-num">({obj.reviews})</span>
                  </div>
                </div>
                {obj.hasColor && (
                  <div className="hue-selector">
                    <div className="hue-ball dark active"></div>
                    <div className="hue-ball scarlet"></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="footer-action">
        <button className="primary-loader">{t('shop_view_all')}</button>
      </div>
    </section>
  );
};

export default Shop;