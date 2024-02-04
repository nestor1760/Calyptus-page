import React from 'react';
import './PriceSlider.css';
import Slider from 'react-slider';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxPrice, setMinPrice } from '../../../store/filterReducer/filterReducer';

const PriceSlider = () => {
  const dispatch = useDispatch()
  const {minPrice, maxPrice} = useSelector(state => state.filter)

  const handleSlider = (newValues) => {
    dispatch(setMinPrice(newValues[0]));
    dispatch(setMaxPrice(newValues[1]));
  };

  return (
    <div className='sliderContainer'>
      <p className='sliderTitle'>Price Range, PLN</p>
      <div className='sliderValues'>
        <div className='valuesContainer'>
          <div className='valuesInput'>
            <input 
              type='number' 
              value={minPrice} 
              onChange={e => dispatch(setMinPrice(e.target.value))}
            />
            <div className='inputText'>PLN</div>
          </div>
          <div className='valuesSeparator'></div>
          <div className='valuesInput'>
            <input 
              type='number' 
              value={maxPrice} 
              onChange={e => dispatch(setMaxPrice(e.target.value))}
            />
            <div className='inputText'>PLN</div>
          </div>
        </div>
      </div>
      <Slider
        className='slider'
        thumbClassName='example-thumb'
        trackClassName='example-track'
        onChange={handleSlider}
        value={[parseInt(minPrice), parseInt(maxPrice)]}            
        min={0} 
        max={3000}
      />
    </div>
  )
}

export default PriceSlider