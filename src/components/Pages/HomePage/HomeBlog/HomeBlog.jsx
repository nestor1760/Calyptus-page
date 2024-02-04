import React from 'react';
import style from './HomeBlog.module.css'
import { Link } from 'react-router-dom';

const HomeBlog = () => {
  return (
    <div className={style.homeBlogContainer}>
      <div className={style.homeBlogContent}>
        <img className={style.contentPhoto1} src='/media/homeBlogMedia/homepageBlog1.png' alt='girl_photo'/>
        <div className={style.contentText}>
          <p>Where your <span>style</span></p>
          <p>Finds It's</p>
          <p>Perfect Reflection – </p>
          <p><span>Choose</span> Bags That </p>
          <p><span>speak more</span> than words</p>
        </div>
        <img className={style.contentPhoto2} src='/media/homeBlogMedia/homepageBlog2.png' alt='homeBlog_photo'/>
        <Link to='/catalog' className={style.catalogBtn}>Catalog</Link>
      </div>
    </div>
  )
}

export default HomeBlog