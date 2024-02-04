import React, { useEffect, useState } from 'react';
import style from './PurchasePage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import EmptyCart from './EmptyCart/EmptyCart';
import CartItem from './CartItem/CartItem';
import RecommendationList from '../../RecommendationList/RecommendationList';

import { useDispatch, useSelector } from 'react-redux';
import { setCounts } from '../../../store/counterReducer/counterReducer';
import { promoData } from './promocodeData';
import { setCorrectPromo, setPromo } from '../../../store/purchaseReducer/purchaseReducer';

const PurchasePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {cart} = useSelector(state => state.cart)
  const {counts} = useSelector(state => state.counter)
  const {tax, promo, correctPromo} = useSelector(state => state.purchase)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  //submit for input
  const handleSubmit = (e) => {
    e.preventDefault()
    const isCorrectPromo = promoData.includes(promo.toLowerCase());
    dispatch(setCorrectPromo(isCorrectPromo))
  }


  useEffect(() => {
    const newInitialState = cart.map(item => {
    const existingCount = counts[cart.findIndex(i => i.id === item.id)]
    return existingCount !== undefined ? existingCount : 1
  })
  dispatch(setCounts(newInitialState))
  }, [cart])
  
  const subTotalPrice = calculateSubTotalPrice()

  function calculateSubTotalPrice() {
    const subTotalPrice = cart.reduce((total, item, index) => {
      return total + item.price * counts[index];
    }, 0);
  
    return subTotalPrice.toFixed(2);
  }
  
  function calculateGrandTotalPrice(subTotalPrice, correctPromo) {
    const taxPrice = Number(subTotalPrice) * (Number(tax) / 100);
    let grandTotalPrice = Number(subTotalPrice) + Number(taxPrice);
    const priceWithPromo = grandTotalPrice * Number(10 / 100)
    
    if(correctPromo) {
      grandTotalPrice = grandTotalPrice - priceWithPromo
    }

    return grandTotalPrice.toFixed(2)
  }

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
    <>
      <div className={style.purchaseContainer}>
        <div className={style.purchaseContent}>
          <div className={style.purchaseHeader}>
              <div className={style.headerNavidation}>
                <button style={{color: 'rgba(0, 0, 0, 0.67)'}} onClick={() => navigate('/')}>Home</button>
                <p style={{margin: '0 5px'}}>/</p>
                <button style={{color: 'rgba(0, 0, 0, 0.67)'}} onClick={() => navigate('/catalog_categories')}>Catalog Categories</button>
                <p style={{margin: '0 5px'}}>/</p>
                <button style={{color: 'rgba(0, 0, 0, 0.67)', fontWeight: '600'}}>Purchase</button>
              </div>
              {(window.innerWidth < 1110)
                ?
                  <div className={style.titlesRow}>
                    {(cart.length > 0)
                      ?
                        <p className={style.purchaseTitle}>shopping list :</p>
                      :
                        <p className={style.purchaseTitle}>Purchase</p>
                    }
                  </div>
                :
                  <div className={style.titlesRow}>
                    {(cart.length > 0)
                      ?
                        <p className={style.purchaseTitle}>shopping list :</p>
                      :
                        <p className={style.purchaseTitle}>Purchase</p>
                    }
                    {
                      cart.length > 0 && <p className={style.cartTotalTitle}>cart totals :</p>
                    }
                  </div>
              }
          </div>
          {(cart.length > 0)
            ?
              <div className={style.cartItem}>
                <div className={style.cartItem_product} style={{overflow: cart.length >= 1 ? 'auto' : 'hidden'}}>
                  {cart.map((item, index) => 
                    <CartItem 
                      key={item.id} 
                      item={item}  
                      index={index}
                    /> 
                  )}
                </div>
                <div className={style.cartTotalCost}>
                  {(window.innerWidth < 1110)
                    ?
                      <p className={style.cartTotalTitle}>cart totals :</p>
                    :
                      null
                  }
                  <div className={style.totalCostItem} style={{marginBottom: (window.innerWidth < 1110) ? '40px' : '60px'}}>
                    <span>Subtotal</span>
                    <p>{subTotalPrice} PLN</p>
                  </div>
                  <div className={style.totalCostItem} style={{marginBottom: '20px'}}>
                    <span>Shipping</span>
                    <p>PDP</p>
                  </div>
                  <div className={style.totalCostItem} style={{marginBottom: '20px'}}>
                    <span>Sales TAX</span>
                    <p>{tax}%</p>
                  </div>
                  <div className={style.totalCostItem} style={{marginBottom: '39px'}}>
                    <span>Have a promo code ?</span>
                    <form onSubmit={handleSubmit}>
                      {correctPromo
                        ?
                          (window.innerWidth < 1110)
                          ?
                            <p>Promo activated</p>
                          :
                            <p>Promo 10% has been activated</p>
                        :
                          <input 
                            value={promo}
                            onChange={e => dispatch(setPromo(e.target.value))}
                            type='text'
                          />
                      }
                    </form>
                  </div>
                  <div className={style.totalCost}>
                    <p className={style.totalTitle}>Total</p>
                    <p>{`${calculateGrandTotalPrice(subTotalPrice, correctPromo)}`} PLN</p>
                  </div>
                  <Link to='/order_placement' className={style.cartTotalCostLink}>Checkout now</Link>
                </div>
              </div>
            :
              <EmptyCart />
          }
        </div>
      </div>
      {(cart.length > 0)
        ?
          <RecommendationList />
        :
          null
      }
    </> 
  )
}

export default PurchasePage