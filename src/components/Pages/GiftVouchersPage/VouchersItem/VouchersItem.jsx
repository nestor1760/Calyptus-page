import React from 'react';
import style from './VouchersItem.module.css';
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromWishList } from '../../../../store/wishListReducer/wishListReducer';
import { Link } from 'react-router-dom';

const VoucherItem = ({voucher}) => {
  const dispatch = useDispatch()

  const {name, price, image, id} = voucher
  const {wishList} = useSelector(state => state.wishList)


  const voucherId = voucher.id
  const isVoucherInWishList = wishList.some(item => item.id === voucherId);

  return (
    <div style={{position: 'relative'}}>
      <Link
        className={style.ListOfVouchersLink} 
        key={voucher.id} 
        to={`/catalog/${voucher.id}`}
      >
        <div className={style.voucherItemContainer}>
          <img src={image} alt={`${voucher.name}-${voucher.id}`}/>
          <p className={style.voucherItemName}>{name}</p>
          <p className={style.voucherItemPrice}>{price} PLN</p>
          <p className={style.centeredPrice}>{price} PLN</p>
        </div>
      </Link>
      {(isVoucherInWishList)
        ?
          <button onClick={() => dispatch(removeFromWishList(id))} className={style.ItemHeart}><BsHeartFill /></button>
        :
          <button onClick={() => dispatch(addToWishList(voucher))} className={style.ItemHeart}><BsHeart /></button>
      }
    </div>
  )
}

export default VoucherItem