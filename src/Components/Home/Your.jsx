
import CountUp from 'react-countup';
import "./Your.css";
import a18 from "../../assets/a18.png";
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Your = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <div className="your-section">
      <div className="your-container">
        <div className="your-content">
          <p className="your-subtitle">{t('categories_title')}</p>
          <h1 className="your-title" dangerouslySetInnerHTML={{ __html: t('enhance_music_title') }}></h1>
          
          <div className="your-timer"  data-aos="zoom-in">
            <div className="timer-circle">
              <b className="timer-num"><CountUp end={23} /></b>
              <span className="timer-label">{t('hours')}</span>
            </div>
            <div className="timer-circle">
              <b className="timer-num"><CountUp end={5} /></b>
              <span className="timer-label">{t('days')}</span>
            </div>
            <div className="timer-circle">
              <b className="timer-num"><CountUp end={59} data-aos="flip-down" /></b>
              <span className="timer-label">{t('minutes')}</span>
            </div>
            <div className="timer-circle">
              <b className="timer-num"><CountUp end={35} /></b>
              <span className="timer-label">{t('seconds')}</span>
            </div>
          </div>

          <button className="your-btn">{t('buy_now')}</button>
        </div>

        <div className="your-image">
          <img src={a18} alt="Speaker" />
        </div>
      </div>
    </div>
  );
};

export default Your;