import React, { useEffect, useState } from 'react';
import style from './CatalogItem.module.css';
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromWishList } from '../../../../store/wishListReducer/wishListReducer';

const CatalogItem = ({product, index}) => {
  const {image, name, price} = product
  const dispatch = useDispatch()
  const {wishList} = useSelector(state => state.wishList)

  const productId = product.id
  const isProductInWishList = wishList.some(item => item.id === productId);

  const styleItemContainer = (window.innerWidth < 1110) ? null : {width: index < 2 || index > 4 ? '404px' : '263px', height: index < 2 || index > 4 ? '569px' : '434px'}

  const styleItemImageSize = (window.innerWidth < 1110) ? null : {width: index < 2 || index === 5 || index === 6 ? '404px' : '262px', height: index < 2 || index === 5 || index === 6 ? '497px' : '366px'}

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div style={{position: 'relative'}}>
      <Link 
        className={style.ListOfProductsLink} 
        key={product.id} 
        to={`/catalog/${product.id}`}
      >
        <div className={style.itemContainer}
            style={styleItemContainer}
        >
          <img 
            src={image} 
            alt={name}
            className={style.itemImg}
            style={styleItemImageSize}
          />
          <p className={style.itemTitle}>{name}</p>
          <p className={style.itemPrice}>{price} PLN</p>
        </div>
      </Link>
      {(isProductInWishList)
          ?
            <button onClick={() => dispatch(removeFromWishList(product.id))} className={style.ItemHeart}><BsHeartFill /></button>
          :
            <button onClick={() => dispatch(addToWishList(product))} className={style.ItemHeart}><BsHeart /></button>
        }
    </div>
  )
}

export default CatalogItem