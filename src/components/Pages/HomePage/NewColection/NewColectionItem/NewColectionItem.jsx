import React from 'react';
import style from './NewColectionItem.module.css';
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromWishList } from '../../../../../store/wishListReducer/wishListReducer';
import { Link } from 'react-router-dom';



const NewColectionItem = ({newProduct}) => {
  const dispatch = useDispatch()

  const {name, price, image, id} = newProduct
  const {wishList} = useSelector(state => state.wishList)

  const newProductId = newProduct.id
  const isNewProductInWishList = wishList.some(item => item.id === newProductId);

  return (
    <div style={{position: 'relative'}}>
      <Link
        className={style.ListOfProductsLink} 
        key={newProduct.id} 
        to={`/catalog/${newProduct.id}`}
      >
        <div className={style.newItemContainer}>
          <img src={image} alt={`${name}-newColection`}/>
          <p className={style.newItemName}>{name}</p>
          <p className={style.newItemPrice}>{price} PLN</p>
        </div>
      </Link>
          {(isNewProductInWishList)
            ?
              <button onClick={() => dispatch(removeFromWishList(id))} className={style.ItemHeart}><BsHeartFill /></button>
            :
              <button onClick={() => dispatch(addToWishList(newProduct))} className={style.ItemHeart}><BsHeart /></button>
          }
    </div>
  )
}

export default NewColectionItem