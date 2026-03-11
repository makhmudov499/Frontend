import React, { useEffect } from 'react'
import "./Human.css"
import a4 from "../../assets/a4.png"
import a5 from "../../assets/a5.png"
import a6 from "../../assets/a6.png"
import { Instagram, Twitter, Linkedin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Human = () => {
  const { t } = useTranslation()

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <div className='Human'>
      <div className='hum1' data-aos="fade-right">
        <img src={a4} alt="" />
        <h1>Tom Cruise</h1>
        <p>{t('role_founder')}</p>
        <div className='man1'>
          <Instagram /><Twitter /><Linkedin />
        </div>
      </div>

      <div className='hum2' data-aos="fade-up">
        <img src={a5} alt="" />
        <h1>Emma Watson</h1>
        <p>{t('role_director')}</p>
        <div className='man2'>
          <Instagram /><Twitter /><Linkedin />
        </div>
      </div>

      <div className='hum3' data-aos="fade-left">
        <img src={a6} alt="" />
        <h1>Will Smith</h1>
        <p>{t('role_designer')}</p>
        <div className='man3'>
          <Instagram /><Twitter /><Linkedin />
        </div>
      </div>
    </div>
  )
}

export default Human