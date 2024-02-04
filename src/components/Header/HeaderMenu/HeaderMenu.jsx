import React from 'react';
import style from './HeaderMenu.module.css'
import { Link } from 'react-router-dom';

const HeaderMenu = ({headerMenu, closeMenu}) => {

  const headerMenuContainerStyle = `${headerMenu === null ? style.headerMenuContainerStart : (headerMenu ? style.headerMenuContainerOpen : style.headerMenuContainerClose)}`;

  return (
    <div className={headerMenuContainerStyle}>
      <div className={style.menuContent}>
        <div className={style.menuLeftPart}>
          <h1>Basic must-have</h1>
          <Link to='/catalog' onClick={() => closeMenu()} className={style.menuLeftPartLink}>Lightweight Everyday Bags</Link>
          <Link to='/catalog' onClick={() => closeMenu()} className={style.menuLeftPartLink}>Office Briefcases</Link>
          <Link to='/catalog' onClick={() => closeMenu()} className={style.menuLeftPartLink}>Tote Bag</Link>
          <Link to='/catalog' onClick={() => closeMenu()} className={style.menuLeftPartLink}>Hobo Bag</Link>
          <Link to='/catalog' onClick={() => closeMenu()} className={style.menuLeftPartLink}>Shoulden Bag</Link>
        </div>
        <div className={style.menuRigthPart}>
          <div className={style.rigthPartBlock}>
            <div className={style.navigation}>
              <h2>Navigation</h2>
              <Link to='/' onClick={() => closeMenu()} className={style.navigationLink}>Home</Link>
              <Link to='/catalog_categories' onClick={() => closeMenu()} className={style.navigationLink}>Catalog Categories</Link>
              <Link to='/purchase' onClick={() => closeMenu()} className={style.navigationLink}>purchase</Link>
              <Link to='/wish_list' onClick={() => closeMenu()} className={style.navigationLink}>Wish List</Link>
            </div>
            <div className={style.information}>
              <h2>Information</h2>
              <Link to='/' onClick={() => closeMenu()} className={style.informationLink}>Delivery and Payment</Link>
              <Link to='/' onClick={() => closeMenu()} className={style.informationLink}>Return</Link>
              <Link to='/' onClick={() => closeMenu()} className={style.informationLink}>Warranty</Link>
              <Link to='/vouchers' onClick={() => closeMenu()} className={style.informationLink}>Gift Vouchers</Link>
              <Link to='/' onClick={() => closeMenu()} className={style.informationLink}>About Us</Link>
              <Link to='/contact' onClick={() => closeMenu()} className={style.informationLink}>Contact Information</Link>
            </div>
          </div>
          <div className={style.rigthPartFooter}>
            <p>Follow Us</p>
            <div className={style.footerItem}>
              <img src='/media/menuFooterMedia/instagram.png' alt='instagram-icon'/>
              <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">@calyptus</a>
            </div>
            <div className={style.footerItem}>
              <img src='/media/menuFooterMedia/facebook.png' alt='facebook-icon'/>
              <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">shop.calyptus</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu