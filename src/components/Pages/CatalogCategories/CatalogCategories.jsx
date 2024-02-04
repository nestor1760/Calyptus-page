import React from 'react';
import style from './CatalogCategories.module.css';
import { useNavigate } from 'react-router-dom';
import { categoriesData } from './catalogCategoriesData';
import CategoriesItem from './CategoriesItem/CategoriesItem';

const CatalogCategories = () => {
  const navigate = useNavigate()

  return (
    <div className={style.categoriesContainer}>
      <div className={style.categoriesContent}>
        <div className={style.categoriesHeader}>
            <div className={style.headerNavidation}>
              <button style={{color: 'rgba(0, 0, 0, 0.67)'}} onClick={() => navigate('/')}>Home</button>
              <p style={{margin: '0 5px'}}>/</p>
              <button style={{color: 'rgba(0, 0, 0, 0.67)', fontWeight: '600'}}>Catalog categories</button>
            </div>
            <p className={style.categoriesTitle}>catalog categories</p>
        </div>
        <div className={style.categoriesItemContainer}>
          {categoriesData.map(category => 
            <CategoriesItem key={category.id} category={category}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default CatalogCategories