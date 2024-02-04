import React from 'react';
import style from './ActiveFilterItem.module.css';
import { RxCross2 } from "react-icons/rx";

const ActiveFilterItem = ({activeFilter, deleteFilter}) => {
  return (
    <div className={style.activeFilterContainer}>
      <p>{activeFilter}</p>
      <button onClick={() => deleteFilter(activeFilter)}><RxCross2 /></button>
    </div>
  )
}

export default ActiveFilterItem