import React from 'react';
import { SendHorizontal, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import a2 from "../../assets/a2.png"; 

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="footer-logo">Exclusive</h2>
          <h3>{t('footer_subscribe')}</h3>
          <p>{t('footer_offer')}</p>
          <div className="subscribe-input">
            <input type="email" placeholder={t('footer_email_placeholder')} />
            <SendHorizontal size={20} className="send-icon" />
          </div>
        </div>

        <div className="footer-column">
          <h3>{t('footer_support')}</h3>
          <p>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-column">
          <h3>{t('footer_account')}</h3>
          <ul>
            <li><a href="#">{t('footer_my_account')}</a></li>
            <li><a href="#">{t('footer_login_register')}</a></li>
            <li><a href="#">{t('footer_cart')}</a></li>
            <li><a href="#">{t('footer_wishlist')}</a></li>
            <li><a href="#">{t('footer_shop')}</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>{t('footer_quick_link')}</h3>
          <ul>
            <li><a href="#">{t('footer_privacy_policy')}</a></li>
            <li><a href="#">{t('footer_terms_use')}</a></li>
            <li><a href="#">{t('footer_faq')}</a></li>
            <li><a href="#">{t('footer_contact')}</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>{t('footer_download_app')}</h3>
          <p className="app-promo">{t('footer_app_save')}</p>
          <div className="app-download-area">
            <div className="qr-code-img">
              <img src={a2} alt="QR Code" />
            </div>
            <div className="app-stores">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
            </div>
          </div>
          <div className="social-icons">
            <Facebook size={24} />
            <Twitter size={24} />
            <Instagram size={24} />
            <Linkedin size={24} />
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {t('footer_copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;