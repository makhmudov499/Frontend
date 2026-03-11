import React from 'react';
import { useWishlist } from "../Wishlist/WishlistContext";
import { Trash2, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import "../Wishlist.css";
import Header from "./SignUp/Header";
import Footer from "./Home/Footer";

const Wishlist = () => {
  const { wishlist, addToWishlist, moveAllToCart } = useWishlist();
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="wishlist-page">
        <div className="wishlist-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', alignItems: 'center' }}>
          <h2>{t('wishlist')} ({wishlist.length})</h2>
          <button 
            className="move-to-bag" 
            onClick={moveAllToCart}
            style={{ padding: '10px 20px', border: '1px solid #000', background: 'none', cursor: 'pointer', borderRadius: '4px' }}
          >
            {t('move_all_to_bag')}
          </button>
        </div>

        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="wish-card">
              <div className="wish-img-box">
                <img src={item.img || item.pic} alt={item.name || item.title} style={{ maxWidth: '180px' }} />
                
                <button className="wish-add-cart">
                  <ShoppingCart size={18} /> {t('add_to_cart')}
                </button>

                <button className="wish-remove" onClick={() => addToWishlist(item)}>
                  <Trash2 size={20} />
                </button>
              </div>
              <div className="wish-info">
                <h4>{item.name || item.title}</h4>
                <div className="wish-price">${item.price || item.cost}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;