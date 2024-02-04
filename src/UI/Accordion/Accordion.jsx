import React, { useState } from 'react';
import style from './Accordion.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = ({name, rating}) => {
  const [ratingShow, setRatingShow] = useState(false)
  const [reviews, setReviews] = useState(false)
  const [characteristic, setCharacteristic] = useState(false)
  const [description, setDescription] = useState(false)

  const toogleRating = () => {
    setRatingShow(prev => !prev)
    setReviews(false)
    setCharacteristic(false)
    setDescription(false)
  }

  const toogleReviews = () => {
    setReviews(prev => !prev)
    setRatingShow(false)
    setCharacteristic(false)
    setDescription(false)
  }

  const toogleCharacteristic = () => {
    setCharacteristic(prev => !prev)
    setReviews(false)
    setRatingShow(false)
    setDescription(false)
  }

  const toogleDescription = () => {
    setDescription(prev => !prev)
    setCharacteristic(false)
    setReviews(false)
    setRatingShow(false)
  }

  return (
    <div className={style.accordionContainer}>
        <div className={style.accordionItem}>
          <div className={style.itemTitle} onClick={toogleRating}>
            <p style={{fontWeight: ratingShow ? '600' : '400'}}>Customer Rating</p>
            {ratingShow
              ?
                <button style={{color: 'black'}}><IoIosArrowUp /></button>
              :
                <button><IoIosArrowDown /></button>
            }
          </div>
          <div className={style.content} style={{display: ratingShow ? 'flex' : 'none'}}>
           Customer rating: <span>{rating} / 5</span>
          </div>
        </div>
        <div className={style.accordionItem}>
          <div className={style.itemTitle} onClick={toogleReviews}>
            <p style={{fontWeight: reviews ? '600' : '400'}}>Reviews</p>
            {reviews
              ?
                <button style={{color: 'black'}}><IoIosArrowUp /></button>
              :
                <button><IoIosArrowDown /></button>
            }
          </div>
          <div className={style.content} style={{display: reviews ? 'flex' : 'none'}}>
          {name} body, with its distinctive and timeless design, exudes an air of sophistication that seamlessly blends with contemporary fashion trends. Its sleek silhouette not only makes a fashion statement but also embodies the brand's dedication to creating accessories that are both stylish and practical. Embracing the chic black color, {name} model transcends fashion boundaries, offering a versatile accessory that effortlessly complements various styles and occasions. The adaptability to different handle options, linings, cuffs, and cases allows you to curate a personalized look that reflects your individuality. As a true embodiment of fashion versatility, {name} is not just an accessory; it's a style companion that enhances your everyday look and elevates your presence on special occasions.
          </div>
        </div>
        <div className={style.accordionItem}>
          <div className={style.itemTitle} onClick={toogleCharacteristic}>
            <p style={{fontWeight: characteristic ? '600' : '400'}}>Characteristic</p>
            {characteristic
              ?
                <button style={{color: 'black'}}><IoIosArrowUp /></button>
              :
                <button><IoIosArrowDown /></button>
            }
          </div>
          <div className={style.content} style={{display: characteristic ? 'flex' : 'none'}}>
          {name} body, with its distinctive and timeless design, exudes an air of sophistication that seamlessly blends with contemporary fashion trends. Its sleek silhouette not only makes a fashion statement but also embodies the brand's dedication to creating accessories that are both stylish and practical. Embracing the chic black color, {name} model transcends fashion boundaries, offering a versatile accessory that effortlessly complements various styles and occasions. The adaptability to different handle options, linings, cuffs, and cases allows you to curate a personalized look that reflects your individuality. As a true embodiment of fashion versatility, {name} is not just an accessory; it's a style companion that enhances your everyday look and elevates your presence on special occasions.
          </div>
        </div>
        <div className={style.accordionItem}>
          <div className={style.itemTitle} onClick={toogleDescription}>
            <p style={{fontWeight: description ? '600' : '400'}}>Description</p>
            {description
              ?
                <button style={{color: 'black'}}><IoIosArrowUp /></button>
              :
                <button><IoIosArrowDown /></button>
            }
          </div>
          <div className={style.content} style={{display: description ? 'flex' : 'none'}}>
          {name} body, with its distinctive and timeless design, exudes an air of sophistication that seamlessly blends with contemporary fashion trends. Its sleek silhouette not only makes a fashion statement but also embodies the brand's dedication to creating accessories that are both stylish and practical. Embracing the chic black color, {name} model transcends fashion boundaries, offering a versatile accessory that effortlessly complements various styles and occasions. The adaptability to different handle options, linings, cuffs, and cases allows you to curate a personalized look that reflects your individuality. As a true embodiment of fashion versatility, {name} is not just an accessory; it's a style companion that enhances your everyday look and elevates your presence on special occasions.
          </div>
        </div>
    </div>
  )
}

export default Accordion
