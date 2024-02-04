import React, { useEffect } from 'react';
import style from './CartModalItem.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounts, incrementCounts, setCounts } from '../../../../../store/counterReducer/counterReducer';
import { BsPlus } from 'react-icons/bs';
import { HiMiniMinusSmall } from 'react-icons/hi2';
import { removeFromCart } from '../../../../../store/cartReducer/cartReducer';

const CartModalItem = ({item, index}) => {
  const dispatch = useDispatch()
  const {cart} = useSelector(state => state.cart)
  const {counts} = useSelector(state => state.counter)

  useEffect(() => {
    const newInitialState = cart.map(item => {
    const existingCount = counts[cart.findIndex(i => i.id === item.id)]
    return existingCount !== undefined ? existingCount : 1
  })
  dispatch(setCounts(newInitialState))
  }, [cart])
  
  return (
    <div className={`${cart.length > 1 ? style.modalItemContainerActive : style.modalItemContainer}`} style={{marginBottom: cart.length > 1 ? '20px' : '0'}}>
      <img src={item.image} alt={item.name} className={style.itemImg}/>
      <div className={style.itemInfo}>
        <p className={style.itemName}>{item.name}</p>
        <p className={style.itemModel}><span>Model:</span>{item.model}</p>
        <p className={style.itemPrice}>{`${(item.price * counts[index]).toFixed(2)} PLN`}</p>
        <div className={style.itemCounter}>
          <button className={style.countBtn} onClick={() => dispatch(incrementCounts(index))}><BsPlus/></button>
          <p className={style.count}>{counts[index]}</p>
          <button className={style.countBtn} onClick={() => dispatch(decrementCounts(index))}><HiMiniMinusSmall/></button>
        </div>
        <button className={style.removeBtn} onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
      </div>
    </div>
  )
}

export default CartModalItem