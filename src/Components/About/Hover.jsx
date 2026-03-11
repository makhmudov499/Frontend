import React, { useEffect } from 'react'
import "./Hover.css"
import { Store, CircleDollarSign, Briefcase, Coins } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CountUp from 'react-countup'

const Hover = () => {
  const { t } = useTranslation()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className='xax1'>
        <div className='ha1' data-aos="fade-right">
          <Store width={40} height={40}/>
          <h1><CountUp end={10500} duration={2} /></h1>
          <p>{t('active_sellers')}</p>
        </div>

        <div className='ha2' data-aos="fade-up" data-aos-delay="100">
          <CircleDollarSign width={40} height={40}/>
          <h1><CountUp end={33000} duration={2} /></h1>
          <p>{t('monthly_sale')}</p>
        </div>

        <div className='ha3' data-aos="fade-down" data-aos-delay="200">
          <Briefcase width={40} height={40}/>
          <h1><CountUp end={45500} duration={2} /></h1>
          <p>{t('active_customers')}</p>
        </div>

        <div className='ha4' data-aos="fade-left" data-aos-delay="300">
          <Coins width={40} height={40}/>
          <h1><CountUp end={25000} duration={2} /></h1>
          <p>{t('annual_sale')}</p>
        </div>
      </div>
    </>
  )
}

export default Hover