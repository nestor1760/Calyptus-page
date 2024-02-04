import React, { useEffect} from 'react';
import style from './Catalog.module.css';
import { catalogData } from './catalogData';
import CatalogItem from './CatalogItem/CatalogItem';
import Sort from '../../../UI/Select/Sort';
import { useProducts } from '../../../hooks/useSort';
import Filter from '../../../UI/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSort } from '../../../store/sortReducer/sortReducer';
import { catalogDataProducts } from '../../../FetchData/catalogDataRest/catalogDataProducts';
import { setShowFilter } from '../../../store/filterReducer/filterReducer';
import { VscSettings } from "react-icons/vsc";
import { LuSettings2 } from "react-icons/lu";
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import HeaderPageNavigation from '../../HeaderPageNavigation/HeaderPageNavigation';

const CatalogPage = () => {
  const dispatch = useDispatch()

  const {selectedStyles, selectedBrands, selectedColors, selectedMaterials, minPrice, maxPrice} = useSelector(state => state.filter)
  const {catalogProducts, loading, error} = useSelector(state => state.catalog)
  const {selectedSort} = useSelector(state => state.sort)
  const {showFilter} = useSelector(state => state.filter)

  const sortedAndFilteredProducts = useProducts(catalogProducts, selectedSort, selectedStyles, selectedBrands, selectedColors, selectedMaterials, minPrice, maxPrice)

  useEffect(() => {
    getCatalogData()
  }, [])

  const getCatalogData = () => {
    dispatch(catalogDataProducts(catalogData))
  }
  
  const sortItems = (sort) => {
    dispatch(setSelectedSort(sort))
  } 

  //window width
  const windowWidth = useWindowWidth();

  const filterContainerStyles = `${showFilter === null ? style.catalogFilterDefault : (showFilter ? style.catalogFilterOpen : style.catalogFilterClose)}`;

  return (
    <div className={style.catalogContainer}>
      <div className={style.catalogContent}>
        <div className={style.catalogHeader}>
          <HeaderPageNavigation 
            links={[
              {id: 1, name: 'Home', path: '/'},
            ]}
            activeLink='Catalog'
          />
          <div className={style.headerBlog}>
            <p className={style.blogTitle}>Discover flawless design in every detail</p>
            <p className={style.blogText}>Our new seasonal collection of women's handbags is the perfect companion for any occasion. From work to evening outings, choose practicality and luxury with our exquisite women's handbags, shoulder bags, and clutches. Your style, your choice – discover more on our website!</p>
          </div>
        </div>
        <div className={style.sortContainer}>
          {(windowWidth < 1110)
            ? (showFilter)
                ? <div className={style.filterIcon} onClick={() => dispatch(setShowFilter(false))}><LuSettings2 /></div>
                : <div className={style.filterIcon} onClick={() => dispatch(setShowFilter(true))}><VscSettings /></div>
            : null
          }
          <div className={style.sortBlock}>
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
        </div>
        <div className={style.catalogMainContent}>
          <div className={filterContainerStyles}>
            <Filter />
          </div>
          <div className={style.catalogListOfProducts}>
            {
              (loading)
                ?
                  <div className={style.loader}>Loading...</div>
                :
                  (error)
                    ?
                      <div className={style.errorRequest}>We have not received data from the server<br />Please try again later</div>
                    :
                      (sortedAndFilteredProducts.length > 0)
                        ?
                          sortedAndFilteredProducts.map((product, index) => 
                              <CatalogItem 
                                key={product.id} 
                                product={product} 
                                index={index} 
                              />
                          )
                        :
                          <div>There are no products for the selected filters</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage