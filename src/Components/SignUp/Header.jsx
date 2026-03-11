import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X, User } from 'lucide-react';
import { useTranslation } from 'react-i18next'; 
import { Link } from 'react-router-dom';
import "./Header.css";
import { useSearch } from '../../Context';
import { useWishlist } from "../../Wishlist/WishlistContext";
import { useCart } from "../../CartContext/CartContext";

import a9 from "../../assets/a9.png";
import a13 from "../../assets/a13.png";
import a19 from "../../assets/a19.png";
import a20 from "../../assets/a20.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { t } = useTranslation(); 
  const { searchQuery, setSearchQuery } = useSearch();
  const { wishlist } = useWishlist();
  const { cartItems } = useCart();

  const allProducts = [
    { id: 1, title: t('prod_gamepad'), pic: a9 },
    { id: 2, title: t('product_north_coat'), pic: a13 },
    { id: 3, title: t('shop_prod_dog_food'), pic: a19 },
    { id: 4, title: t('shop_prod_camera'), pic: a20 },
  ];

  const filteredResults = allProducts.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 8);

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo">
          <h1>Exclusive</h1>
        </div>

        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/">{t('home')}</Link></li>
            <li><Link to="/contact">{t('contact')}</Link></li>
            <li><Link to="/about">{t('about')}</Link></li>
            <li><Link to="/signup">{t('signup')}</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-wrapper">
            <div className="search-input-box">
              <input
                type="text"
                placeholder={t('search_placeholder')}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(e.target.value.length > 0);
                }}
                onFocus={() => searchQuery.length > 0 && setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              />
              <Search size={18} className="search-icon-inside" />
            </div>

            {showDropdown && filteredResults.length > 0 && (
              <div className="search-dropdown-custom">
                {filteredResults.map((product) => (
                  <div key={product.id} className="dropdown-item-custom">
                    <div className="img-container">
                       <img src={product.pic} alt={product.title} />
                    </div>
                    <span>{product.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="icon-group">
            <Link to="/wishlist" className="wishlist-link">
              <Heart size={26} />
              {wishlist && wishlist.length > 0 && (
                <span className="wishlist-badge">{wishlist.length}</span>
              )}
            </Link>

            <Link to="/cart" className="cart-link">
              <ShoppingCart size={26} />
              {cartItems && cartItems.length > 0 && (
                <span className="cart-badge">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <User size={26} />
            
            <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;