import React from 'react';
import style from './ConsultationDone.module.css';
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setHoverContacts } from '../../../store/modalReducer/modalReducer';


const ConsultationDone = () => {
  const dispatch = useDispatch()

  return (
    <div className={style.consultationDoneContainer}>
      <div className={style.consultationDoneContent}>
        <img src='/media/consultationDoneMedia/consultationDone.png' alt='girl_photo'/>
        {(window.innerWidth < 1110)
          ?
            <div className={style.contentBlog}>
              <p className={style.blotTitle}>Our representative will get in touch with you soon!</p>
              <div>
               <img src='/media/consultationDoneMedia/consultationDoneLigth.png' alt='consultation_done_photo'/>  
              </div>
              <p className={style.blotText}>Have a nice day</p>
            </div>
          :
            <div className={style.contentBlog}>
              <p className={style.blotTitle}>Our representative will get in touch with you soon!</p>
              <p className={style.blotText}>Have a nice day</p>
              <img src='/media/consultationDoneMedia/consultationDone2.png' alt='consultation_done_photo'/>
            </div>
        }
        <button onClick={() => dispatch(setHoverContacts(false))} className={style.closeBtn}>
            <IoCloseCircleOutline />
        </button>
      </div>
    </div>
  )
}

export default ConsultationDone