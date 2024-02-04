import React from 'react';
import style from './CartModal.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setHover } from '../../../../store/modalReducer/modalReducer';
import { Link } from 'react-router-dom';
import CartModalItem from './CartModalItem/CartModalItem';

const CartModal = () => {
  const dispatch = useDispatch()
  const {cart} = useSelector(state => state.cart)

  return (
    <div className={style.cartModalContainer}>
      <div className={style.cartModalContent}>
        <p className={style.cartModalTitle}>purchase</p>
        {(cart.length > 0)
          ?
            <div className={style.cartModalItemBlock} style={{overflow: cart.length >= 1 ? 'auto' : 'hidden', height: cart.length > 1 ? '350px' : '165px'}}>
              {cart.map((item, index) => 
                <CartModalItem key={item.id} item={item} index={index}/>
              )}
            </div>
          :
            <div>No items in the cart</div>
        }
        <Link to='/catalog' onClick={() => dispatch(setHover(false))} className={style.linkToCatalog}>Continue Shopping</Link>
        {cart.length > 0 && <Link to='/purchase' onClick={() => dispatch(setHover(false))} className={style.linkToCart}>Place an Order</Link>}
      </div>
    </div>
  )
}

export default CartModal