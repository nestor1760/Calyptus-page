import React, { useEffect, useState } from 'react';
import style from './OrderPlacement.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCorrectPromo, setPromo } from '../../../store/purchaseReducer/purchaseReducer';
import { promoData } from '../PurchasePage/promocodeData';
import { setCounts } from '../../../store/counterReducer/counterReducer';
import OrderItem from './OrderItem/OrderItem';
import { clearCart } from '../../../store/cartReducer/cartReducer';
import { countryData } from '../../../FetchData/countryDataRest/countryData';
import { countryUrl, deliveryMethod, paymentMethod } from './dataForInformationPart';
import { setCity, setCountryName, setDeliveryMethodName, setEmail, setLastName, setName, setPaymentMethodName, setPhoneNumber, setPostOfficeNumber, setRegion } from '../../../store/checkOutReducer/checkOutReducer';


const OrderPlacement = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const {cart} = useSelector(state => state.cart)
  const {tax, promo, correctPromo} = useSelector(state => state.purchase)
  const {counts} = useSelector(state => state.counter)
  const {country} = useSelector(state => state.country)
  const {name, lastName, phoneNumber, email, countryName, region, city, postOfficeNumber, paymentMethodName, deliveryMethodName} = useSelector(state => state.checkOut)
  const [checked, setChecked] = useState(false)
  
  //state for validation input type email
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailCorrect, setEmailCorrect] = useState(false)

  //state for width screen
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

  const blurHandler = (e) => {
    if(e.target.name === 'email') {
      setEmailDirty(true)
    }
  }

  const emailHandler = (e) => {
    dispatch(setEmail(e.target.value))

    const validateEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    validateEmail.test(String(e.target.value).toLowerCase())
    if(!validateEmail.test(String(e.target.value).toLowerCase())) {
      setEmailCorrect(true)
    } else {
      setEmailCorrect(false)
    }
  }

  //state for validate input type number
  const [phoneNumberCorrect, setPhoneNumberCorrect] = useState(false);

  const handlePhoneNumber = (e) => {
    dispatch(setPhoneNumber(e.target.value))

    const phonePattern = /^\d+$/;

    if (!phonePattern.test(e.target.value)) {
      setPhoneNumberCorrect(true);
    } else {
      setPhoneNumberCorrect(false);
    }
  };

  useEffect(() => {
    const newInitialState = cart.map(item => {
    const existingCount = counts[cart.findIndex(i => i.id === item.id)]
    return existingCount !== undefined ? existingCount : 1
  })
  dispatch(setCounts(newInitialState))
  }, [cart])

  useEffect(() => {
    countryDataRequest()
  }, [])

  const countryDataRequest = () => {
    dispatch(countryData(countryUrl))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const isCorrectPromo = promoData.includes(promo.toLowerCase());
    dispatch(setCorrectPromo(isCorrectPromo))
  }
  
  const subTotalPrice = calculateSubTotalPrice()

  function calculateSubTotalPrice() {
    const subTotalPrice = cart.reduce((total, item, index) => {
      return total + item.price * counts[index];
    }, 0);
    return subTotalPrice.toFixed(2);
  }
  
  const totalPrice = calculateGrandTotalPrice(subTotalPrice, correctPromo);
  function calculateGrandTotalPrice(subTotalPrice, correctPromo) {
    const taxPrice = Number(subTotalPrice) * (Number(tax) / 100);
    let grandTotalPrice = Number(subTotalPrice) + Number(taxPrice);
    const priceWithPromo = grandTotalPrice * Number(10 / 100)
    
    if(correctPromo) {
      grandTotalPrice = grandTotalPrice - priceWithPromo
    }
    return grandTotalPrice.toFixed(2)
  }

  return (
    <div className={style.orderPlacementContainer}>
      <div className={style.orderPlacementContent}>
        <div className={style.orderPlacementHeader}>
            <div className={style.headerNavidation}>
              <button style={{color: 'rgba(0, 0, 0, 0.67)'}} onClick={() => navigate('/')}>home</button>
              <p style={{margin: '0 5px'}}>/</p>
              {(window.innerWidth < 1110)
                ?
                  null
                :
                  <>
                    <button style={{color: 'rgba(0, 0, 0, 0.67)'}} onClick={() => navigate('/catalog_categories')}>catalog categories</button>
                    <p style={{margin: '0 5px'}}>/</p>
                  </>
              }
              <button style={{color: 'rgba(0, 0, 0, 0.67)'}} onClick={() => navigate('/purchase')}>purchase</button>
              <p style={{margin: '0 5px'}}>/</p>
              <button style={{color: 'rgba(0, 0, 0, 0.67)', fontWeight: '600'}}>order placement</button>
            </div>
        </div>
        <div className={style.checkOut}>
          <div className={style.formInformation}>
              <div className={style.formItem}>
                <p className={style.formItemTitle}>personal information</p>
                <form className={style.formContainer}>
                  <input 
                    type='text' 
                    placeholder='Name'
                    value={name}
                    onChange={e => dispatch(setName(e.target.value))}
                  />
                  <input 
                    type='text' 
                    placeholder='Last Name'
                    value={lastName}
                    onChange={e => dispatch(setLastName(e.target.value))}
                  />
                  <input 
                    type='text' 
                    placeholder='Phone Number'
                    pattern="[0-9]*"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    style={{border: phoneNumberCorrect ? '2px solid red' : '1px solid rgba(0, 0, 0, 0.1)'}}
                  />
                  <input 
                    type='text' 
                    placeholder='Email'
                    value={email}
                    onChange={emailHandler}
                    onBlur={e => blurHandler(e)}
                    style={{border: emailDirty || emailCorrect ? '2px solid red' : '1px solid rgba(0, 0, 0, 0.1)'}}
                  />
                </form>
              </div>
              <div className={style.formItem}>
                <p className={style.formItemTitle}>Delivery Information</p>
                <form className={style.formContainer}>
                  <select 
                    className={style.selectionForm}
                    name='deliveryMethod'
                    value={deliveryMethodName}
                    onChange={e => dispatch(setDeliveryMethodName(e.target.value))}
                  >
                    <option disabled value='' style={{fontWeight: '600'}}>Choose a delivery method:</option>
                    {deliveryMethod.map((item, index)=> 
                      <option key={index} value={item}>{item}</option>
                    )}
                  </select>
                  <select 
                    className={style.selectionForm}
                    name='coutry'
                    value={countryName}
                    onChange={e => dispatch(setCountryName(e.target.value))}
                  >
                    <option disabled value='' style={{fontWeight: '600'}}>Choose a country:</option>
                    {country && country.map(item => 
                      <option key={item?.name?.common} value={item?.name?.common}>{item?.name?.common}</option>
                    )}
                  </select>
                  <input 
                    type='text' 
                    placeholder='Region'
                    value={region}
                    onChange={e => dispatch(setRegion(e.target.value))}
                  />
                  <input 
                    type='text' 
                    placeholder='City'
                    value={city}
                    onChange={e => dispatch(setCity(e.target.value))}
                  />
                  <input 
                    type='text' 
                    placeholder='Post Office Number'
                    value={postOfficeNumber}
                    onChange={e => dispatch(setPostOfficeNumber(e.target.value))}
                  />
                </form>
              </div>
              <div className={style.formItem}>
                <p className={style.formItemTitle}>Payment Method</p>
                <form className={style.formContainer}>
                  <select 
                    className={style.selectionForm}
                    name='paymentMethodName'
                    value={paymentMethodName}
                    onChange={e => dispatch(setPaymentMethodName(e.target.value))}
                  >
                    <option disabled value='' style={{fontWeight: '600'}}>Choose a payment method:</option>
                    {paymentMethod.map((item, index)=> 
                      <option key={index} value={item}>{item}</option>
                    )}
                  </select>
                </form>
              </div>
          </div>
          <div className={style.orderDetails}>
            <p className={style.orderDetailsTitle}>Your order</p>
            <div className={style.orderItem}>
                <div className={style.orderItem_product} style={{overflow: cart.length >= 1 ? 'auto' : 'hidden'}}>
                  {cart.map((item, index) => 
                    <OrderItem
                      key={item.id} 
                      item={item}  
                      index={index}
                    /> 
                  )}
                </div>
                <div className={style.orderReceipt}>
                  {(window.innerWidth < 1110)
                    ?
                      <p className={style.cartTotalsTitle}>cart totals :</p>
                    :
                      null
                  }
                  <div className={style.receiptItem} style={{marginBottom: '60px'}}>
                    <span>Subtotal</span>
                    <p>{subTotalPrice} PLN</p>
                  </div>
                  <div className={style.receiptItem} style={{marginBottom: '20px'}}>
                    <span>Shipping</span>
                    <p>PDP</p>
                  </div>
                  <div className={style.receiptItem} style={{marginBottom: '20px'}}>
                    <span>Sales TAX</span>
                    <p>{tax}%</p>
                  </div>
                  <div className={style.receiptItem} style={{marginBottom: '39px'}}>
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
                  <div className={style.receiptTotalPrice}>
                    <p className={style.totalPriceTitle}>Total</p>
                    <p>{totalPrice} PLN</p>
                  </div>
                  <form className={style.receiptForm}>
                    <input 
                      value={checked}
                      type='checkbox'
                      id="receiptInput"
                      name="receiptInput"
                      onChange={() => setChecked(prev => !prev)}
                    />
                    <p>I have read and <span style={{fontWeight: 700}}>agree to the Privacy Policy</span></p>
                  </form>
                  {(checked)
                    ?
                      <Link to='/order_done' className={style.orderReceiptLink} onClick={() => dispatch(clearCart())}>Checkout now</Link>
                    :
                      <button disabled className={style.orderReceiptLink}>Checkout now</button>
                  }
                  
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPlacement;