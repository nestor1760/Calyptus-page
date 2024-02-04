import React from 'react';
import style from './RecommendationItem.module.css';
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromWishList } from '../../../store/wishListReducer/wishListReducer';
import { Link } from 'react-router-dom';

const RecommendationItem = ({recommendationItem}) => {
  const {name, price, image, id} = recommendationItem

  const {wishList} = useSelector(state => state.wishList)
  const dispatch = useDispatch()

  const productId = recommendationItem.id
  const isProductInWishList = wishList.some(item => item.id === productId);

  return (
    <div style={{position: 'relative'}}>
      <Link
        className={style.ListOfProductsLink} 
        key={recommendationItem.id} 
        to={`/catalog/${recommendationItem.id}`}
      >
        <div className={style.recommendationItemContainer}>
          <img src={image} alt={`${recommendationItem.name}-recommendation`}/>
          <p className={style.recommendationItemName}>{name}</p>
          <p className={style.recommendationItemPrice}>{price} PLN</p>
        </div>
      </Link>
          {(isProductInWishList)
            ?
            <button onClick={() => dispatch(removeFromWishList(id))} className={style.ItemHeart}><BsHeartFill /></button>
            :
            <button onClick={() => dispatch(addToWishList(recommendationItem))} className={style.ItemHeart}><BsHeart /></button>
          }
    </div>
  )
}

export default RecommendationItem