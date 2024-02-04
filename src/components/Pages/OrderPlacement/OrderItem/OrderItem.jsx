import React from 'react';
import style from './OrderItem.module.css';
import { BsPlus } from "react-icons/bs";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../../store/cartReducer/cartReducer';
import { decrementCounts, incrementCounts } from '../../../../store/counterReducer/counterReducer';


const OrderItem = ({item, index}) => {
  const dispatch = useDispatch()
  const {cart} = useSelector(state => state.cart)
  const {counts} = useSelector(state => state.counter)
  
  return (
    <div className={`${cart.length > 1 ? style.itemContainerActive : style.itemContainer}`} style={{marginBottom: cart.length > 1 ? '20px' : '0'}}>
      <img src={item.image} alt={item.name} className={style.itemPhoto}/>
      <div className={style.itemInfo}>
        <p className={style.itemName}>{item.name}</p>
        <p className={style.itemModel}><span>Model:</span>{item.model}</p>
        {(window.innerWidth < 1110)
          ?
            <div className={style.itemPriceAndCounterBlock}>
              <p className={style.itemPrice}>{`${(item.price * counts[index]).toFixed(2)} PLN`}</p>
              <div className={style.itemCounter}>
                <button onClick={() => dispatch(incrementCounts(index))}><BsPlus/></button>
                <p className={style.count}>{counts[index]}</p>
                <button onClick={() => dispatch(decrementCounts(index))}><HiMiniMinusSmall/></button>
              </div>
            </div>
          :
            <>
              <div className={style.itemCounter}>
                <button onClick={() => dispatch(incrementCounts(index))}><BsPlus/></button>
                <p className={style.count}>{counts[index]}</p>
                <button onClick={() => dispatch(decrementCounts(index))}><HiMiniMinusSmall/></button>
              </div>
              <p className={style.itemPrice}>{`${(item.price * counts[index]).toFixed(2)} PLN`}</p>
            </>
        }
        <button className={style.removeBtn} onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
      </div>
    </div>
  )
}

export default OrderItem