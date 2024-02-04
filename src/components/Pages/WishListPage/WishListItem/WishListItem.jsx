import React from 'react';
import style from './WishListItem.module.css';
import { BsHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { removeFromWishList } from '../../../../store/wishListReducer/wishListReducer';

const WishListItem = ({item}) => {
  const {name, price, image} = item
  const dispatch = useDispatch()

  return (
    <div style={{position: 'relative'}}>
      <Link 
        className={style.ListOfProductsLink} 
        key={item.id} 
        to={`/catalog/${item.id}`}
      >
        <div className={style.wishItemContainer}>
          <img src={image} alt={name}/>
          <p className={style.wishItemName}>{name}</p>
          <p className={style.wishItemPrice}>{price} PLN</p>
        </div>
      </Link>
        <button onClick={() => dispatch(removeFromWishList(item.id))} className={style.ItemHeart}><BsHeartFill /></button>
    </div>
  )
}

export default WishListItem