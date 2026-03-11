import React, { useEffect } from 'react'
import "./Last.css"
import { Truck, Headphones, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Last = () => {
  const { t } = useTranslation()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='last'>
      <div className='last1' data-aos="fade-right" data-aos-duration="600">
        <div className='icon-circle'>
          <Truck size={40}/>
        </div>
        <h5>{t('delivery_title')}</h5>
        <p>{t('delivery_desc')}</p>
      </div>

      <div className='last2' data-aos="fade-up" data-aos-duration="900">
        <div className='icon-circle'>
          <Headphones size={40}/>
        </div>
        <h5>{t('service_title')}</h5>
        <p>{t('service_desc')}</p>
      </div>

      <div className='last3' data-aos="fade-left" data-aos-duration="1200">
        <div className='icon-circle'>
          <ShieldCheck size={40}/>
        </div>
        <h5>{t('money_title')}</h5>
        <p>{t('money_desc')}</p>
      </div>
    </div>
  )
}

export default Last