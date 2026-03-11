import React from 'react'
import "./Story.css"
import a3 from "../../assets/a3.png"
import { useTranslation } from 'react-i18next'

const Story = () => {
  const { t } = useTranslation()

  return (
    <div className='stories-container'>
      <div className='stories-content'>
          <h1>{t('story_title')}</h1>
          <p>{t('story_text_1')}</p>
          <p>{t('story_text_2')}</p>
      </div>
      
      <div className='stories-img'>
          <img src={a3} alt="Our Story" />
      </div>
    </div>
  )
}

export default Story