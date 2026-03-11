import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X, User } from 'lucide-react';
import { useTranslation } from 'react-i18next'; 
import { Link } from 'react-router-dom';
import "./Header.css";
import { useSearch } from '../../Context';
import { useWishlist } from "../../Wishlist/WishlistContext";
import { useCart } from "../../CartContext/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); 
  const { searchQuery, setSearchQuery } = useSearch();
  const { wishlist } = useWishlist();
  const { cartItems } = useCart();

  const languages = [
    { code: 'eng', label: 'EN' },
    { code: 'rus', label: 'RU' },
    { code: 'uzb', label: 'UZ' },
  ];

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo">
          <Link to="/"><h1>Exclusive</h1></Link>
        </div>

        <nav className="nav-menu-desktop">
          <ul>
            <li><Link to="/">{t('home')}</Link></li>
            <li><Link to="/contact">{t('contact')}</Link></li>
            <li><Link to="/about">{t('about')}</Link></li>
            <li><Link to="/signup">{t('signup')}</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-column">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-btn-v ${i18n.language === lang.code ? 'active' : ''}`}
                onClick={() => i18n.changeLanguage(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className="search-wrapper">
            <div className="search-input-box">
              <input
                type="text"
                placeholder={t('search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={18} />
            </div>
          </div>

          <div className="icon-group">
            <Link to="/wishlist" className="action-icon">
              <Heart size={24} />
              {wishlist?.length > 0 && <span className="badge">{wishlist.length}</span>}
            </Link>

            <Link to="/cart" className="action-icon">
              <ShoppingCart size={24} />
              {cartItems?.length > 0 && <span className="badge">{cartItems.length}</span>}
            </Link>

            <User size={24} />
            
            <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>

        <nav className={`nav-menu-mobile ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>{t('home')}</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>{t('contact')}</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>{t('about')}</Link></li>
            <li><Link to="/signup" onClick={() => setIsOpen(false)}>{t('signup')}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;