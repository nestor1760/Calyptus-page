import React from 'react';
import style from './Filter.module.css';
import { styles, brands, colors, materials } from './filterData';
import ActiveFilterItem from './ActiveFilterItem/ActiveFilterItem';
import { RxCross2 } from "react-icons/rx";
import PriceSlider from './PriceSlider/PriceSlider';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxPrice, setMinPrice, setSelectedBrands, setSelectedColors, setSelectedMaterials, setSelectedStyles } from '../../store/filterReducer/filterReducer';

const Filter = () => {
  const dispatch = useDispatch()
  const {selectedStyles, selectedBrands, selectedColors, selectedMaterials} = useSelector(state => state.filter)
  const activeFilters = [...selectedStyles, ...selectedBrands, ...selectedColors, ...selectedMaterials]

  const handleCheckboxChange = (e, selectedValues, setSelectedValues) => {
    const value = e.target.name;
    const isChecked = e.target.checked;
  
    if (isChecked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((selectedValue) => selectedValue !== value));
    }
  };
  
  const clearBtn = () => {
    dispatch(setSelectedStyles([]))
    dispatch(setSelectedBrands([]))
    dispatch(setSelectedColors([]))
    dispatch(setSelectedMaterials([]))
    dispatch(setMaxPrice(3000))
    dispatch(setMinPrice(0))
  }

  const deleteFilter = (activeFilter) => {
    const updatedFilters = activeFilters.filter(item => item !== activeFilter);

    dispatch(setSelectedStyles(updatedFilters.filter(item => styles.includes(item))));
    dispatch(setSelectedBrands(updatedFilters.filter(item => brands.includes(item))));
    dispatch(setSelectedColors(updatedFilters.filter(item => colors.includes(item))));
    dispatch(setSelectedMaterials(updatedFilters.filter(item => materials.includes(item))));
  }

  return (
    <div>
      <div>
        <p className={style.categoryTitle} style={{marginTop: '0'}}>Active filters:</p>
        {(activeFilters.length > 0)
          ?
          <>
            <div className={style.activeFilterContainer}>
              {activeFilters.map((activeFilter) => 
                <ActiveFilterItem key={activeFilter} activeFilter={activeFilter} deleteFilter={deleteFilter}/>
              )}  
            </div>
            <div className={style.activeFilterBtnClearAll}>
              <p>Delete All</p>
              <button onClick={clearBtn}><RxCross2 /></button>
            </div>
          </>
          :
          null
        }
      </div>
      <div>
        <PriceSlider />
      </div>
      <div>
        <p className={style.categoryTitle}>Filter by:</p>
        {styles.map((categoryOfStyle, index) => (
          <div className={style.categoryItem} key={index}>
            <input 
              type='checkbox' 
              id={`categoryOfStyle${index}`}
              name= {`${categoryOfStyle}`} 
              onChange={(e) => handleCheckboxChange(e, selectedStyles, (selectedValue) => dispatch(setSelectedStyles(selectedValue)))}
              checked={activeFilters.includes(categoryOfStyle)}
            />
            <p style={{fontWeight: activeFilters.includes(categoryOfStyle) ? '600' : '400'}}> 
              {categoryOfStyle}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p className={style.categoryTitle}>Brands:</p>
        {brands.map((brand, index) => (
          <div className={style.categoryItem} key={index}>
            <input 
              type='checkbox' 
              id={`brand${index}`} 
              name={`${brand}`}
              onChange={(e) => handleCheckboxChange(e, selectedBrands, (selectedValue) => dispatch(setSelectedBrands(selectedValue)))}
              checked={activeFilters.includes(brand)}
            />
            <p style={{fontWeight: activeFilters.includes(brand) ? '600' : '400', textTransform: 'uppercase'}}>
              {brand}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p className={style.categoryTitle}>Color:</p>
        {colors.map((color, index) => (
          <div className={style.categoryItem} key={index}>
            <input 
              type='checkbox' 
              id={`color${index}`} 
              name={`${color}`}
              onChange={(e) => handleCheckboxChange(e,selectedColors, (selectedValue) => dispatch(setSelectedColors(selectedValue)))}
              checked={activeFilters.includes(color)}
            />
            <p style={{fontWeight: activeFilters.includes(color) ? '600' : '400'}}>
              {color}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p className={style.categoryTitle}>Material:</p>
        {materials.map((material, index) => (
          <div className={style.categoryItem} key={index}>
            <input 
              type="checkbox"
              id={`material${index}`} 
              name={`${material}`}
              onChange={(e) => handleCheckboxChange(e, selectedMaterials, (selectedValue) => dispatch(setSelectedMaterials(selectedValue)))}
              checked={activeFilters.includes(material)}
            />
            <p style={{fontWeight: activeFilters.includes(material) ? '600' : '400'}}>
              {material}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filter