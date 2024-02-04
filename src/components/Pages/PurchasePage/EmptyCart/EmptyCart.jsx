import React from 'react';
import style from './EmptyCart.module.css'
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate()
   
  return (
    <div className={style.emptyCart}>
              <p className={style.emptyCart_title}>No items in the cart</p>
              <p className={style.emptyCart_text}>Change your world with Calyptus! Start selecting stylish bags and accessories that reflect your individuality. Let your style bloom with Calyptus</p>
              <button className={style.emptyCartBtn} onClick={() => navigate('/')}>Return to Home</button>
          </div>
  )
}

export default EmptyCart