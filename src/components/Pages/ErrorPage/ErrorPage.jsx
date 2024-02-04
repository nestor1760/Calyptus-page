import React from 'react';
import style from './Error.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';

const ErrorPage = () => {
  const navigate = useNavigate()


  return (
    <>
      <Header />
      <div className={style.errorContainer}>
          <div className={style.errorContent}>
              <p className={style.errorTopText}>The page seems to be lost, but you'll find everything at CALYPTUS</p>
              <p className={style.error404}>404</p>
              <p className={style.errorBottomText}>
                The 404 page occurred because you attempted to access a page or resource that doesn't exist or is temporarily unavailable
              </p>
              <button className={style.errorBtn} onClick={() => navigate('/')}>Return to Home</button>
          </div>
      </div>
    </>
  )
}

export default ErrorPage