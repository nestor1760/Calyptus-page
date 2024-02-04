import React from 'react';
import style from './RecommendationList.module.css'
import { recommendationData } from './recomendationData';
import RecommendationItem from './RecommendationItem/RecommendationItem';

const RecommendationList = () => {
  return (
    <div className={style.recommendationContainer}>
      <div className={style.recommendationContent}>
        <div className={style.recommendationTitle}>
          <p>You might also like</p>
        </div>
        <div className={style.recommendationItemList}>
          {recommendationData.map(recommendationItem => 
            <RecommendationItem 
              key={recommendationItem.id} 
              recommendationItem={recommendationItem} 
            />  
          )}
        </div>
      </div>
    </div>
  )
}

export default RecommendationList