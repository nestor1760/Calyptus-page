import React from 'react';
import style from './GiftVouchers.module.css';
import { useNavigate } from 'react-router-dom';
import { vouchersData } from './vouchersData';
import VoucherItem from './VouchersItem/VouchersItem';

const GiftVouchersPage = () => {
  const navigate = useNavigate()

  return (
    <div className={style.vouchersContainer}>
      <div className={style.vouchersContent}>
        <div className={style.vouchersHeader}>
            <div className={style.headerNavidation}>
              <button style={{color: 'rgba(0, 0, 0, 0.67)'}} onClick={() => navigate('/')}>Home</button>
              <p style={{margin: '0 5px'}}>/</p>
              <button style={{color: 'rgba(0, 0, 0, 0.67)'}} onClick={() => navigate('/catalog_categories')}>catalog categories</button>
              <p style={{margin: '0 5px'}}>/</p>
              <button style={{color: 'rgba(0, 0, 0, 0.67)', fontWeight: '600'}}>Gift Vouchers</button>
            </div>
            <p className={style.vouchersTitle}>Gift Vouchers</p>
        </div>
        <div className={style.vouchersListItem}>
          {vouchersData.map(voucher => 
            <VoucherItem 
              key={voucher.id} 
              voucher={voucher} 
            />  
          )}
        </div>
      </div>
    </div>
  )
}

export default GiftVouchersPage