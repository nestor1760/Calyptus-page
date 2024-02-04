import React from 'react';
import style from './Arrow.module.css'
import { useNavigate } from 'react-router-dom';

const Arrow = () => {
  const navigate = useNavigate()

  return (
    <div className={style.arrowContainer} onClick={() => navigate('/catalog')}>
      <div className={style.arrow}>
        <div></div>
      </div>
    </div>
  )
}

export default Arrow