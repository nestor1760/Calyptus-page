import React from 'react';
import style from './ModalSubscribe.module.css';
import { useSelector } from 'react-redux';

const ModalSubscribe = ({children}) => {
  const {hoverThanksPage} = useSelector(state => state.modal) 

  const rootClasses = [style.modal]

    if(hoverThanksPage) {
        rootClasses.push(style.active)
    }    rootClasses.join(' ')

  return (
    <div className={rootClasses.join(' ')}>
        <div className={style.modalContent} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default ModalSubscribe