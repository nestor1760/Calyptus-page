import React from 'react';
import style from './Modal.module.css';
import { useSelector } from 'react-redux';

const Modal = ({children}) => {
  const {hover} = useSelector(state => state.modal) 

  const rootClasses = [style.modal]

    if(hover) {
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

export default Modal