import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../Firebase';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import './Firebase.css';
import a31 from '../../assets/a31.png';

const SignUp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={a31} alt="signup" />
      </div>
      <div className="signup-form">
        <h2>{t('create_account')}</h2>
        <p>{t('enter_details')}</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder={t('name_placeholder')} 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder={t('email_placeholder')} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder={t('password_placeholder')} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit" className="btn-create">{t('create_account_btn')}</button>
        </form>
        <button className="btn-google" onClick={handleGoogleSignIn}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="google" />
          {t('signup_google')}
        </button>
        <p className="login-link">
          {t('already_have_account')}{' '}
          <span onClick={() => navigate('/login')}>{t('login_link')}</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;