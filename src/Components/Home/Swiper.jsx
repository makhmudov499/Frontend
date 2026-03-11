import React, { useState, useEffect } from "react";
import "./Swiper.css";
import a8 from "../../assets/a8.png";
import a17 from "../../assets/a17.png";
import { useTranslation } from 'react-i18next';

const SwiperComp = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const categories = [
    { key: 'cat_woman_fashion', arrow: true },
    { key: 'cat_men_fashion', arrow: true },
    { key: 'cat_electronics', arrow: false },
    { key: 'cat_home_lifestyle', arrow: false },
    { key: 'cat_medicine', arrow: false },
    { key: 'cat_sports_outdoor', arrow: false },
    { key: 'cat_baby_toys', arrow: false },
    { key: 'cat_groceries_pets', arrow: false },
    { key: 'cat_health_beauty', arrow: false },
  ];

  const slides = [
    { brand: "iPhone 14 Series", title: t('slide_title_1'), link: t('shop_now') },
    { brand: "iPhone 14 Pro Series", title: t('slide_title_2'), link: t('shop_now') },
    { brand: "iPhone 14 Pro Max Series", title: t('slide_title_3'), link: t('shop_now') },
    { brand: "iPhone 14 Series", title: t('slide_title_4'), link: t('shop_now') },
    { brand: "iPhone 14 Pro Series", title: t('slide_title_5'), link: t('shop_now') },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="sw-wrapper">
      <div className="sw-sidebar">
        {categories.map((cat, index) => (
          <p key={index}>
            {t(cat.key)} {cat.arrow && <span>›</span>}
          </p>
        ))}
      </div>

      <div className="sw-slider">
        <div className="sw-slide-container">
          <div className="sw-content-box">
            <div className="sw-brand-row">
              <img src={a17} alt="brand" />
              <span>{slides[current].brand}</span>
            </div>
            <h2 className="sw-main-title">{slides[current].title}</h2>
            <div className="sw-link-wrapper">
              <a href="#" className="sw-action-link">{slides[current].link}</a>
              <span className="sw-arrow">→</span>
            </div>
          </div>
          
          <div className="sw-image-box">
            <img src={a8} alt="iPhone" className="sw-main-img" />
          </div>
        </div>

        <div className="sw-pagination">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`sw-circle ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperComp;