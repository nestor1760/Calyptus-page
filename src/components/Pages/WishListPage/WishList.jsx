import React from 'react'
import style from './WishList.module.css'
import { useNavigate } from 'react-router-dom'
import WishListItem from './WishListItem/WishListItem'
import Sort from '../../../UI/Select/Sort'
import { useSortedProducts } from '../../../hooks/useSort'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedSort } from '../../../store/sortReducer/sortReducer'

const WishList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {selectedSort} = useSelector(state => state.sort)
  const {wishList} = useSelector(state => state.wishList)

  const sortedWishList = useSortedProducts(wishList, selectedSort)
  
  const sortItems = (sort) => {
    dispatch(setSelectedSort(sort))
  } 

  return (
      <div className={style.wishListContainer}>
        <div className={style.wishListContent}>
          <div className={style.wishListHeader}>
              <div className={style.headerNavidation}>
                <button style={{color: 'rgba(0, 0, 0, 0.67)'}} onClick={() => navigate('/')}>Home</button>
                <p style={{margin: '0 5px'}}>/</p>
                <button style={{color: 'rgba(0, 0, 0, 0.67)', fontWeight: '600'}}>Wish List</button>
              </div>
              <p className={style.wishListTitle}>Wish List</p>
          </div>
          {
            (wishList.length > 0)
              ?
                <div className={style.wishListBlock}>
                  <div className={style.sortContainer}>
                    <p>Sort by:</p>
                    <Sort 
                      defaultvalue='Sort by...'
                      value={selectedSort}
                      onChange={sortItems}
                      options={[
                        {value: 'default', name: 'Default'},
                        {value: 'rating', name: 'Most popular'},
                        {value: 'lowestPrice', name: 'Lowest price'},
                        {value: 'highestPrice', name: 'Highest price'},
                      ]}
                    />
                  </div>
                  <div className={style.wishItemList}>
                    {sortedWishList.map((wishItem, index) => 
                      <WishListItem key={index} item={wishItem}/>
                    )}
                  </div>
                </div>
              :
                <div className={style.emptyWishList}>
                    <p className={style.emptyWishList_title}>No selected items</p>
                    <p className={style.emptyWishList_text}>Change your world with Calyptus! Start selecting stylish bags and accessories that reflect your individuality. Let your style bloom with Calyptus</p>
                    <button className={style.emptyWishListBtn} onClick={() => navigate('/')}>Return to Home</button>
                </div>
          }
        </div>
      </div>
  )
}

export default WishList