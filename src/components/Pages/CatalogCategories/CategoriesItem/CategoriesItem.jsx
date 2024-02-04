import React from 'react';
import style from './CategoriesItem.module.css'
import { useNavigate } from 'react-router-dom';

const CategoriesItem = ({category}) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/catalog')} className={style.categoriesItemContainer}>
      <img src={category.image} alt={category.title}/>
      <p>{category.title}</p>
    </div>
  )
}

export default CategoriesItem