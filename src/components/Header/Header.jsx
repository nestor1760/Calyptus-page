import React, { useEffect, useState } from 'react';
import style from './Header.module.css';
import HeaderInput from './HeaderInput/HeaderInput';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { Link, useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FcMenu } from "react-icons/fc";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";
import { PiHandbagFill } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { setCartIcon, setHeaderMenu, setScroll, setSearchInput, setWishListIcon } from '../../store/headerReducer/headerReducer';
import Modal from '../../UI/Modal/Modal';
import { setHover } from '../../store/modalReducer/modalReducer';
import CartModal from '../Pages/PurchasePage/CartModal/CartModal';
import { setShowFilter } from '../../store/filterReducer/filterReducer';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {searchInput, headerMenu, wishListIcon, cartIcon, scroll} = useSelector(state => state.header)
  const {cart} = useSelector(state => state.cart)
  const {wishList} = useSelector(state => state.wishList)

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
  
  useEffect(() => {
    if(window.innerWidth < 1110) {
      dispatch(setHover(false))
    }
  }, [windowWidth])


  const openModal = () => {
    dispatch(setHover(true));
    if(searchInput === true || headerMenu === true) {
      dispatch(setSearchInput(false))
      dispatch(setHeaderMenu(false))
      dispatch(setScroll(false))
    }
  };

  const openSearchInput = (e) => {
    e.preventDefault()
    dispatch(setSearchInput(true))
    dispatch(setScroll(false))
    dispatch(setHeaderMenu(null))
    dispatch(setHover(false))
    dispatch(setShowFilter(false))
  }
  
  const closeSearchInput = (e) => {
    e.preventDefault()
    dispatch(setSearchInput(false))
  }

  const openHeaderMenu = () => {
    dispatch(setHeaderMenu(true))
    dispatch(setScroll(true))
    dispatch(setSearchInput(false))
    dispatch(setHover(false))
    dispatch(setShowFilter(false))
  }

  const closeHeaderMenu = () => {
    dispatch(setHeaderMenu(false))
    dispatch(setScroll(false))
  }

  const openWishList = () => {
    navigate('/wish_list')
    dispatch(setHeaderMenu(null))
    dispatch(setSearchInput(false))
    dispatch(setScroll(false))
    dispatch(setHover(false))
    dispatch(setShowFilter(false))
  }

  useEffect(() => {
    if(cart.length > 0) {
      dispatch(setCartIcon(true))
    } else{
      dispatch(setCartIcon(false))
    }
  }, [cart, dispatch])

  useEffect(() => {
    if(wishList.length > 0) {
      dispatch(setWishListIcon(true))
    } else{
      dispatch(setWishListIcon(false))
    }
  }, [wishList, dispatch])

  useEffect(() => {
    if(scroll && window.innerWidth > 1109) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [scroll])

  return (
    <div className={style.headerContainer}>
      <div className={style.headerContent}>
          <div className={style.btnContainer}>
            {(headerMenu)
              ?
                <button className={style.headerContentBtn} onClick={closeHeaderMenu}><IoCloseCircleOutline /></button>
              :
                <button className={style.headerContentBtn} onClick={openHeaderMenu}><FcMenu /></button>
            }
            {(searchInput)
              ?
                <button className={style.headerContentBtn} style={{color: searchInput ? 'black' : '#797676'}} onClick={closeSearchInput}><CiSearch /></button>
              :
                <button className={style.headerContentBtn} style={{color: searchInput ? 'black' : '#797676'}} onClick={openSearchInput}><CiSearch /></button>
            }
          </div>
          <Link to={'/'} className={style.headerTitle}>CALYPTUS</Link>
          <div className={style.btnContainer}>
            {wishListIcon
              ?
                <button className={`${(wishList.length > 0) ? style.headerContentBtnActive : style.headerContentBtn}`} onClick={openWishList}><IoMdHeart /></button>
              :
                <button className={style.headerContentBtn} onClick={openWishList}><CiHeart /></button>
            }
            {cartIcon
              ?
              (window.innerWidth < 1110)
                ?
                  <button className={`${(cart.length > 0) ? style.headerContentBtnActive : style.headerContentBtn}`} onClick={() => navigate('/purchase')}><PiHandbagFill /></button>
                :
                  <button className={`${(cart.length > 0) ? style.headerContentBtnActive : style.headerContentBtn}`} onClick={() => dispatch(setHover(false))} onMouseEnter={openModal}><PiHandbagFill /></button>   
              :
              (window.innerWidth < 1110)
                ?
                  <button className={style.headerContentBtn} onClick={() => navigate('/purchase')}><PiHandbagLight /></button>
                :
                  <button className={style.headerContentBtn} onClick={() => dispatch(setHover(false))} onMouseEnter={openModal}><PiHandbagLight /></button>
            }
          </div>
          <Modal>
            <CartModal />
          </Modal>
      </div> 
      {(headerMenu === true)
        ?
          <HeaderMenu headerMenu={headerMenu} closeMenu={closeHeaderMenu}/>
        :
          <HeaderMenu headerMenu={headerMenu} closeMenu={closeHeaderMenu}/> 
      }
      {searchInput && (
        <HeaderInput closeInput={closeSearchInput}/> 
      )}
    </div>
      
  )
}

export default Header