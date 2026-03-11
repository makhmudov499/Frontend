import React from 'react'
import './Input.css'
import { Phone, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const BOT_TOKEN = "8508034364:AAGmRO0uXJr3rPJWyrI7ikeug9QSX0cnSDk";
const CHAT_ID = "7718244637";

const Contact = () => {
  const { t } = useTranslation()

  const handleSubmit = async () => {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const message = document.querySelector('textarea').value;

    const text = `
📩 Yangi xabar!
👤 Ism: ${name}
📧 Email: ${email}
📞 Telefon: ${phone}
💬 Xabar: ${message}
    `;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });

    alert(t('alert_success'));
  };

  return (
    <div className="contact-pages">
      <div className="breadcrumbs">
        <span>{t('nav_home')}</span>
        <span className="slashs"> / </span>
        <span className="actives">{t('nav_contact')}</span>
      </div>

      <div className="contact-cards">
        <div className="contact-lefts">
          <div className="contact-sections">
            <div className="contact-headers">
              <div className="icon-circles">
                <Phone size={20} color="white" />
              </div>
              <h4>{t('call_to_us')}</h4>
            </div>
            <p>{t('call_desc')}</p>
            <p>{t('phone')}: +998950411447</p>
          </div>

          <hr className="dividers" />

          <div className="contact-sections">
            <div className="contact-headers">
              <div className="icon-circles">
                <Mail size={20} color="white" />
              </div>
              <h4>{t('write_to_us')}</h4>
            </div>
            <p>{t('write_desc')}</p>
            <p>{t('emails')}: asrormahmudov05@gmail.com</p>
          </div>
        </div>

        <div className="contact-rights">
          <div className="form-rows">
            <input type="text" placeholder={t('placeholder_name')} className="form-inputs" />
            <input type="email" placeholder={t('placeholder_email')} className="form-inputs" />
            <input type="tel" placeholder={t('placeholder_phone')} className="form-inputs" />
          </div>
          <textarea
            className="form-textareas"
            placeholder={t('placeholder_message')}
            rows={8}
          />
          <div className="form-footers">
            <button className="send-btns" onClick={handleSubmit}>{t('send_btn')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact