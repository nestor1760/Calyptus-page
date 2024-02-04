import React from 'react';
import style from './HeaderPageNavigation.module.css'
import { useNavigate } from 'react-router-dom';

const HeaderPageNavigation = ({title, activeLink, links}) => {
  const navigate = useNavigate()

  return (
    <div className={style.categoriesHeader}>
      <div className={style.headerNavidation}>
        {links.map(link => 
          <div style={{display: 'flex'}} key={link.id}>
            <button style={{color: 'rgba(0, 0, 0, 0.67)'}} onClick={() => navigate(`${link.path}`)}>{link.name}</button>
            <p style={{margin: '0 5px'}}>/</p>
          </div>
        )}
        <button style={{color: 'rgba(0, 0, 0, 0.67)', fontWeight: '600'}}>{activeLink}</button>
      </div>
      <p className={style.categoriesTitle}>{title}</p>
    </div>
  )
}

export default HeaderPageNavigation