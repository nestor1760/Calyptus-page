import React, { useEffect, useState } from 'react';
import style from './Contacts.module.css';
import GoogleMap from './GoogleMap';
import { useDispatch, useSelector } from 'react-redux';
import { setHoverContacts } from '../../../store/modalReducer/modalReducer';
import ModalContacts from '../../../UI/ModalContacts/ModalContacts';
import ConsultationDone from '../ConsultationDonePage/ConsultationDone';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import HeaderPageNavigation from '../../HeaderPageNavigation/HeaderPageNavigation';

const ContactsPage = () => {
  const dispatch = useDispatch()
  const {hoverContancts} = useSelector(state => state.modal)

//state for input
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')

// state for validation email
  const [email, setEmail] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailCorrect, setEmailCorrect] = useState(false)
  const [emailError, setEmailError] = useState(false)
  
//state for width screen
const windowWidth = useWindowWidth();
  
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
      setEmailError(true)
    } else {
      setEmailCorrect(false)
      setEmailError(false)
    }
  }

  useEffect(() => {
    if(hoverContancts) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [hoverContancts])

  const handleRequestCall = () => {
    if (!name || !phone || emailCorrect || !email || emailError) {
      alert('Please fill in the required fields correctly: Name, Phone Number, and Email');
      return 
    }
    dispatch(setHoverContacts(true))
    setComment('')
    setEmail('')
    setLastName('')
    setName('')
    setPhone('')
  }

  return (
    <div className={style.contactsContainer}>
      <div className={style.contactsContent}>
        <HeaderPageNavigation 
          links={[
            {id: 1, name: 'Home', path: '/'},
          ]}
          activeLink='Contacts'
        />
        <div className={style.contactsMain}>
            <div className={style.mainContactDetails}>
                <h2 className={style.mainContactDetails_title}>contacts</h2>
                <div className={style.mainContactDetails_info}>
                  <button>Delivery and Payment</button>
                  <button>Conditions for Returns</button>
                  <button>Warranty</button>
                  <button>Privacy Policy</button>
                  <button>Contacts</button>
                </div>
                {(windowWidth < 1110)
                  ?
                    <div className={style.contactsMobileVersionBlock}>
                      <div className={style.mainContactDetails_numbers}>
                        <p>(068)45-60-907</p>
                        <p>(068)45-60-908</p>
                        <p>(068)45-60-909</p>
                      </div>
                      <div className={style.addressBlockMobVersion}>
                        <div className={style.mainContactDetails_address}>
                          <p>Shevchenko Street 36</p>
                          <p>Mon-Sun 10:00 AM - 7:00 PM</p>
                        </div>
                        <div className={style.mainContactDetails_email}>
                          <p>calyptus.shop@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  :
                    <>
                      <div className={style.mainContactDetails_numbers}>
                        <p>(068)45-60-907</p>
                        <p>(068)45-60-908</p>
                        <p>(068)45-60-909</p>
                      </div>
                      <div className={style.mainContactDetails_address}>
                        <p>Address: Shevchenko Street 36</p>
                        <p>Mon-Sun 10:00 AM - 7:00 PM</p>
                      </div>
                      <div className={style.mainContactDetails_email}>
                        <p>calyptus.shop@gmail.com</p>
                      </div>
                    </>
                }
            </div>
            <div className={style.contactsMain_locationMap}>
              <h2 className={style.locationMap_title}>Shop location map</h2>
              <div className={style.locationMap_mapContainer}>
                <GoogleMap />
              </div>
            </div>
        </div>
        <div className={style.consultationContainer}>
          <h2 className={style.consultationTitle}>Do you wish to schedule a consultation ?</h2>
          <div className={style.consultationInputBlock}>
            <input 
              value={name}
              onChange={e => setName(e.target.value)}
              type='text' 
              placeholder='Name'
              name='name'
              required
            />
            <input 
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              type='text' 
              placeholder='Last Name'
              name='last name'
            />
            <input 
              style={{border: (phone.length === 9 || phone.length === 0) ?'1px solid rgba(0, 0, 0, 0.1)' : '2px solid red'}}
              value={phone}
              onChange={e => setPhone(e.target.value)}
              type='number' 
              placeholder='Phone Number'
              name='phone number'
              required
            />
            <input
              style={{border: (emailCorrect) ? '2px solid red': '1px solid rgba(0, 0, 0, 0.1)'}} 
              type='text' 
              value={email}
              name='email'
              onChange={e => emailHandler(e)}
              onBlur={e => blurHandler(e)}
              placeholder='Email'
            />
            <input 
              value={comment}
              onChange={e => setComment(e.target.value)}
              type='text' 
              placeholder='Commment'
              name='comment'
            />
            <button className={style.consultationBtn} onClick={handleRequestCall}>Request a Call</button>
            <ModalContacts>
              <ConsultationDone />
            </ModalContacts>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage;