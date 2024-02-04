import React from 'react';
import style from './GiftVouchers.module.css';
import { vouchersData } from './vouchersData';
import VoucherItem from './VouchersItem/VouchersItem';
import HeaderPageNavigation from '../../HeaderPageNavigation/HeaderPageNavigation';

const GiftVouchersPage = () => {

  return (
    <div className={style.vouchersContainer}>
      <div className={style.vouchersContent}>
        <div className={style.vouchersHeader}>
            <HeaderPageNavigation 
              links={[
                {id: 1, name: 'Home', path: '/'},
                {id: 2, name: 'catalog categories', path: '/catalog_categories'},
              ]}
              activeLink='Gift Vouchers'
              title='Gift Vouchers'
            />
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