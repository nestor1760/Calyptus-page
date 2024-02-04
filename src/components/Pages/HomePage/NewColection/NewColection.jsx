import React from 'react';
import style from './NewColection.module.css'
import Arrow from '../../../../UI/Arrow/Arrow';
import { newColectionData } from './NewColectionData';
import NewColectionItem from './NewColectionItem/NewColectionItem';
import { useNavigate } from 'react-router-dom';

const NewColection = () => {
  const navigate = useNavigate()

  return (
    <div className={style.newColectionContainer}>
      <div className={style.newColectionContent}>
        <div className={style.contentTitleRow}>
          <p onClick={() => navigate('/catalog')}>New Collection</p>
          <Arrow />  
        </div>
        <div className={style.newColectionRowProduct}>
          {newColectionData.map(newProduct => 
            <NewColectionItem 
              key={newProduct.id} 
              newProduct={newProduct} 
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default NewColection