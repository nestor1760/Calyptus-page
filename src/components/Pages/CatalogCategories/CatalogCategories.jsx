import React from 'react';
import style from './CatalogCategories.module.css';
import { categoriesData } from './catalogCategoriesData';
import CategoriesItem from './CategoriesItem/CategoriesItem';
import HeaderPageNavigation from '../../HeaderPageNavigation/HeaderPageNavigation';

const CatalogCategories = () => {

  return (
    <div className={style.categoriesContainer}>
      <div className={style.categoriesContent}>
        <HeaderPageNavigation 
          links={[
            {id: 1, name: 'Home', path: '/'},
          ]}
          activeLink='Catalog categories'
          title='catalog categories'
        />
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