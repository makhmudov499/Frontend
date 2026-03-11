import React, { useEffect } from 'react';
import "./Last.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

import a27 from "../../assets/a27.png";
import a28 from "../../assets/a28.png";
import a29 from "../../assets/a29.png";
import a30 from "../../assets/a30.png";

const Arrival = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="arrival-section">
      <div className="arrival-header" data-aos="fade-up">
        <div className="arrival-badge">
          <div className="red-line"></div>
          <span className="badge-text">{t('arrival_badge')}</span>
        </div>
        <h2 className="arrival-title">{t('arrival_main_title')}</h2>
      </div>

      <div className="arrival-grid">
        <div data-aos="fade-right">
          <img src={a27} alt="PS5" />
          <div className="item-info">
            <h3>PlayStation 5</h3>
            <p>{t('ps5_desc')}</p>
            <button className="shop-link">{t('shop_now')}</button>
          </div>
        </div>

        <div data-aos="fade-left">
          <img src={a28} alt="Women" />
          <div className="item-info">
            <h3>{t('women_collection_title')}</h3>
            <p>{t('women_collection_desc')}</p>
            <button className="shop-link">{t('shop_now')}</button>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200">
          <img src={a29} alt="Speakers" />
          <div className="item-info">
            <h3>{t('speakers_title')}</h3>
            <p>{t('speakers_desc')}</p>
            <button className="shop-link">{t('shop_now')}</button>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="400">
          <img src={a30} alt="Perfume" />
          <div className="item-info">
            <h3>{t('perfume_title')}</h3>
            <p>GUCCI INTENSE OUD EDP</p>
            <button className="shop-link">{t('shop_now')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrival;