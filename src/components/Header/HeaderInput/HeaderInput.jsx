import React, { useState } from 'react';
import style from './HeaderInput.module.css';
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const HeaderInput = ({closeInput}) => {
  const [inputValue, setInputValue] = useState('')
  const linksData = [
    {id: 1, label: 'home', path: '/'},
    {id: 2, label: 'categories', path: '/catalog_categories'},
    {id: 3, label: 'catalog', path: '/catalog'},
    {id: 4, label: 'products', path: '/catalog'},
    {id: 5, label: 'wish list', path: '/wish_list'},
    {id: 6, label: 'contact', path: '/contact'},
    {id: 7, label: 'information', path: '/contact'},
    {id: 8, label: 'gift vouchers', path: '/vouchers'},
  ]

  const [links, setLinks] = useState([])


  function handleInput(e) {
    const value = e.target.value
    setInputValue(value)

    if(value.trim() === '' || value.trim() === null) {
      setLinks([])
    } else {
      const filteredLinks = linksData.filter((link) =>
        link.label.toLowerCase().trim().includes(value.toLowerCase()))
        setLinks(filteredLinks);
    }
  } 

  return (
    <div className={style.headerForm}>
      <div className={style.headerInput} >
        <input
          type='text'
          value={inputValue}
          name='header-search'
          onChange={handleInput}
          placeholder='What do you need to find?'
        />
        {links.length > 0 && (
          <ul>
            {links.map((link) => (
                <li key={link.id} className={style.li_Item} onClick={closeInput}>
                  <Link to={link.path} className={style.linkStyle}>{link.label}</Link>
                </li>
            ))}
          </ul>
        )}
        <div className={style.headerInputBtn}>
          <button onClick={closeInput}>
            <IoCloseCircleOutline />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderInput