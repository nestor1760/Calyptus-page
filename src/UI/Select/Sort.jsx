import React from 'react';
import style from './Sort.module.css'

const Sort = ({options, defaultvalue, value, onChange}) => {
  return (
    <select
      className={style.sortSelection}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option disabled value=''>{defaultvalue}</option>
      {options.map(option =>
          <option key={option.value} value={option.value}>
              {option.name}
          </option>
      )}
    </select>
  )
}

export default Sort