import React, { useEffect, useState } from 'react';
import style from './Footer.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHoverThanksPage } from '../../store/modalReducer/modalReducer';
import ThanksForSubscribe from '../Pages/ThanksForSubscribe/ThanksForSubscribe';
import ModalSubscribe from '../../UI/ModalSubscribe/ModalSubscribe';
import { useWindowWidth } from '../../hooks/useWindowWidth';

const Footer = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const windowWidth = useWindowWidth();
  const {hoverThanksPage} = useSelector(state => state.modal)

  const [email, setEmail] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailCorrect, setEmailCorrect] = useState(false)
  const [emailError, setEmailError] = useState('')

  const blurHandler = (e) => {
    if(e.target.name === 'email') {
      setEmailDirty(true)
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)

    const validateEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    validateEmail.test(String(e.target.value).toLowerCase())
    if(!validateEmail.test(String(e.target.value).toLowerCase())) {
      setEmailCorrect(true)
      setEmailError('Incorrect email form')
    } else {
      setEmailCorrect(false)
      setEmailError('')
    }
  }

  const handleSubscribeBtn = () => {
    dispatch(setHoverThanksPage(true))
    setEmail('')
  }


  useEffect(() => {
    if(hoverThanksPage) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [hoverThanksPage])

  return (
    <div className={style.footerContainer}>
      <div className={style.footerContent}>
        <div className={style.footerBlog}>
            <div className={style.footerBlogLeftPart}>
                <img className={style.leftPartImg} src='/media/footerMedia/footerImg1.png' alt='footerImg1'/>
                <p>Subscribe to our Instagram and get a 10%<br /> discount on your next order</p>
                <span>@calyptus</span>
            </div>
            <div className={style.footerBlogRightPart}>
              <img src='/media/footerMedia/footerImg2.png' alt='footerImg2' className={style.imageBlock_image} />
              <p className={style.rotatedText}>Buy now</p>
            </div>
        </div>
        <div className={style.footerInputContainer}>
          {(emailCorrect && emailError && emailDirty) && <div className={style.emailError}>{emailError}</div>}
          <div className={style.footerInputRow}>
            <input
              value={email}
              onChange={e => emailHandler(e)}
              onBlur={e => blurHandler(e)}
              type='text'
              name='email'
              placeholder={windowWidth < 1110 
                ? 
                  'Leave your email for latest fashion news!'
                :
                  'Leave your email address to be the first to know about all the latest fashion news!'}
            />
            {(emailCorrect || email.length <= 0)
              ?
                <button disabled className={style.incorrectFooterLink}>subscribe</button>
              :
                <button onClick={handleSubscribeBtn} className={style.footerLink}>subscribe</button>
            }
          </div>
          <ModalSubscribe>
            <ThanksForSubscribe />
          </ModalSubscribe>
        </div>
        <div className={style.footerContactBlock}>
          <div className={style.contactBlockInfo}>
            <div className={style.contactBlockInfo_item}>
              <div className={style.calyptusTitle}>calyptus</div>
              <div className={style.contactAddressBlock}>
                <div className={style.contactNumbers}>
                  <p className={style.calyptusNumber}>(068)45-60-907</p>
                  <p className={style.calyptusNumber}>(068)45-60-908</p>
                  <p className={style.calyptusNumber}>(068)45-60-909</p>
                </div>
                <div className={style.infoItemAddress}>
                  <div className={style.infoAddressStreet}>Shevchenko Street 36</div>
                  <span>Mon-Sun 10:00 AM - 7:00 PM</span>
                  {(windowWidth < 1110)
                    ?
                      <div className={style.emailMobileVersoin}>calyptus.shop@gmail.com</div>
                    :
                      null
                  }
                </div>
              </div>
            </div>
            <div className={style.contactBlockInfo_item}>
              {(windowWidth < 1110)
                ?
                  <div onClick={() => navigate('/contact')} className={style.blockInfoItemTitleNavigation}>Information</div>
                :
                  <div className={style.blockInfoItemTitle}>Information</div>
              }
              <div className={style.informationLink}>
                <Link to='/' className={style.informationLinkItem}>Delivery and Payment</Link>
                <Link to='/' className={style.informationLinkItem}>Return</Link>
                <Link to='/' className={style.informationLinkItem}>Warranty</Link>
                <Link to='/vouchers' className={style.informationLinkItem}>Gift Vouchers</Link>
                <Link to='/' className={style.informationLinkItem}>About Us</Link>
                <Link to='/contact' className={style.informationLinkItem}>Contact Information</Link>
              </div>
            </div>
            <div className={style.contactBlockInfo_item}>
              {(windowWidth < 1110)
                ?
                  <div onClick={() => navigate('/contact')} className={style.blockInfoItemTitleNavigation}>Follow Us</div>
                :
                <div className={style.blockInfoItemTitle}>Follow Us</div>
              }
              <div className={style.footerFollowUs}>
                <img src='/media/footerMedia/footerInstagram.png' alt='instagram'/>
                <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">@calyptus</a>
              </div>
              <div className={style.footerFollowUs}>
                <img src='/media/footerMedia/footerFacebook.png' alt='facebook'/>
                <a href='https://www.facebook.com/' target="_blank" rel="noreferrer">shop.calyptus</a>
              </div>
            </div>
            <div className={style.contactBlockInfo_item}>
            {(windowWidth < 1110)
                ?
                  <div onClick={() => navigate('/contact')} className={style.blockInfoItemTitleNavigation}>Payment Systems</div>
                :
                  <div className={style.blockInfoItemTitlePayment}>Payment Systems</div>
              }
              <div className={style.footerPayment}>
                <img src='/media/footerMedia/footerCard1.png' alt='visa'/>
                <img src='/media/footerMedia/footerCard2.png' alt='mastercard'/>
              </div>
            </div>
          </div>
          <div className={style.contactBlock_footer}>
              <p>calyptus.shop@gmail.com</p>  
              <p>© 2023 calyptus. All Rights Reserved.</p>  
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Footer