import React from 'react';
import style from './ThanksForSubscribe.module.css';
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setHoverThanksPage } from '../../../store/modalReducer/modalReducer';



const ThanksForSubscribe = () => {
  const dispatch = useDispatch()

  return (
      <div className={style.thanksContainer}>
        <div className={style.thanksContent}>
            <img className={style.contentPhoto} src='/media/thanksMedia/thanksPnh1.png' alt='girl_photo_2'/>
          <div className={style.contentBlog}>
            {(window.innerWidth < 1110)
              ?
              <>
                <p className={style.blogTitle}>
                  Thank you for your subscription
                </p>
                <img className={style.blogPhoto} src='/media/thanksMedia/thanks_done_white.png' alt='done_png'/>
                <p className={style.blogText}>
                  Have a nice day!
                </p>
              </>
              :
              <>
                <p className={style.blogTitle}>
                  Thank you for your subscription
                </p>
                <p className={style.blogText}>
                  Have a nice day
                </p>
                <img className={style.blogPhoto} src='/media/thanksMedia/thanks_done_png.png' alt='done_png'/>
              </>
            }
          </div>
          <button onClick={() => dispatch(setHoverThanksPage(false))} className={style.blogBtn}>
            <IoCloseCircleOutline />
          </button>
        </div>
      </div>
  )
}

export default ThanksForSubscribe