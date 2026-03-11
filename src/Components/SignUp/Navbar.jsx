import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Navbar.css'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'eng', label: 'English' },
    { code: 'rus', label: 'Russian' },
    { code: 'uzb', label: 'Uzbek' },
  ]

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

  const handleSelect = (code) => {
    i18n.changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className='sign'>
      <div className='sign-content'>
        <div className='sign-text'>
          <i>{t('Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!')}</i>
          <u className="shop-now"> {t('shop_now')} </u>
        </div>

        <div className='lang-dropdown'>
          <div className='lang-btn' onClick={() => setIsOpen(!isOpen)}>
            {currentLang.label} <span className='arrow'>{isOpen ? '▲' : '▼'}</span>
          </div>

          {isOpen && (
            <ul className='lang-menu'>
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  className={`lang-item ${i18n.language === lang.code ? 'active' : ''}`}
                  onClick={() => handleSelect(lang.code)}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar