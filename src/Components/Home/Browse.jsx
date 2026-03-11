import "./Browse.css"
import { Phone, Computer, Watch, Camera, Headphones, Gamepad, ChevronLeft, ChevronRight } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Browse = () => {
  const { t } = useTranslation()

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <div className='Browse'>
      <div className='browse-wrapper'>
        <span className='span'></span>
        <h4>{t('categories_title')}</h4>
        <p>{t('browse_by_category')}</p>
        <div className="map-arrows">
          <button className="map-arrow swiper-prev-btn"><ChevronLeft size={20} /></button>
          <button className="map-arrow swiper-next-btn"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className='certs'>
        <div className='phone' data-aos="fade-right">
          <div><Phone size={40}/></div>
          <p>{t('cat_phones')}</p>
        </div>
        <div className='phone' data-aos="fade-right">
          <div><Computer size={40}/></div>
          <p>{t('cat_computers')}</p>
        </div>
        <div className='phone' data-aos="flip-up" >
          <div><Watch size={40}/></div>
          <p>{t('cat_smartwatch')}</p>
        </div>
        <div className='phone' data-aos="flip-down" >
          <div><Camera size={40}/></div>
          <p>{t('cat_camera')}</p>
        </div>
        <div className='phone' data-aos="fade-left">
          <div><Headphones size={40}/></div>
          <p>{t('cat_headphone')}</p>
        </div>
        <div className='phone' data-aos="fade-left">
          <div><Gamepad size={40} /></div>
          <p>{t('cat_gaming')}</p>
        </div>
      </div>
    </div>
  )
}

export default Browse