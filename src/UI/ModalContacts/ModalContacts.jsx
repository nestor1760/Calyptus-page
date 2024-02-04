import React from 'react';
import style from './ModalContacts.module.css';
import { useSelector } from 'react-redux';

const ModalContacts = ({children}) => {
  const {hoverContancts} = useSelector(state => state.modal) 

  const rootClasses = [style.modal]

    if(hoverContancts) {
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

export default ModalContacts