import React from 'react';
import style from './OrderDone.module.css';
import { useNavigate } from 'react-router-dom';

const OrderDonePage = () => {
  const navigate = useNavigate()

  return (
      <div className={style.orderDoneContainer}>
        <div className={style.orderDoneContent}>
          <p className={style.contentTitle}>Thank you for your order at Calyptus!</p>
          <p className={style.contenttext}>
            Choosing Calyptus means choosing style and quality. We can't wait to delight you and send your favorite modular bags. Your style is our pride!
          </p>
          <button className={style.contentBtn} onClick={() => navigate('/')}>Return to Home</button>
        </div>
      </div>

  )
}

export default OrderDonePage;