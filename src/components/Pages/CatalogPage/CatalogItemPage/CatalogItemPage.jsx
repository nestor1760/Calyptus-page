import style from './CatalogItemPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import Accordion from '../../../../UI/Accordion/Accordion';
import RecommendationList from '../../../RecommendationList/RecommendationList';
import { catalogData } from '../catalogData';
import { recommendationData } from '../../../RecommendationList/recomendationData';
import { newColectionData } from '../../HomePage/NewColection/NewColectionData';
import { vouchersData } from '../../GiftVouchersPage/vouchersData';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromWishList } from '../../../../store/wishListReducer/wishListReducer';
import { addToCart } from '../../../../store/cartReducer/cartReducer';
import { useWindowWidth } from '../../../../hooks/useWindowWidth';
import HeaderPageNavigation from '../../../HeaderPageNavigation/HeaderPageNavigation';

const CatalogItemPage = () => {
  const navigate = useNavigate()
  const {id} = useParams()

  const {cart} = useSelector(state => state.cart)
  const {wishList} = useSelector(state => state.wishList)
  const dispatch = useDispatch()

  const allProductsData = [...catalogData, ...recommendationData, ...newColectionData, ...vouchersData]

  const foundProduct = allProductsData.find(item => item.id === id);
  
  const {name, price, rating, color, material, model, image, available} = foundProduct

  const productId = foundProduct.id
  const isProductInWishList = wishList.some(item => item.id === productId);
  const isProductInCart = cart.some(item => item.id === productId);

  //window width state
  const windowWidth = useWindowWidth();
    
  return (
    <div className={style.itemPageContainer}>
      <div className={style.itemPageContent}>
        <HeaderPageNavigation 
            links={[
              {id: 1, name: 'Home', path: '/'},
              {id: 2, name: 'Catalog', path: '/catalog'},
            ]}
            activeLink={name}
          />
        <div className={style.itemPageMain}>
            <Accordion name={name} rating={rating}/>
            <div className={style.mainInfoBlock}>
              {(windowWidth < 1110)
                ?
                  <h2 className={style.productInfo_title}>{name}</h2>
                :
                  null
              }
              <img className={style.infoBlock_Img} src={image} alt={name}/>
              <div className={style.infoBlock_ProductInfo}>
                {(windowWidth < 1110)
                  ?
                    null
                  :
                    <h2 className={style.productInfo_title}>{name}</h2>
                }
                <p>Model: <span>{model}</span></p>
                <p>Material: <span>{material}</span></p>
                <p>Available: <span>{available}</span></p>
                <p>Color</p>
                <div style={{marginBottom: (windowWidth < 1110) ? '40px' : '64px', width: '50px', height: '50px', background: `${color}`}}></div>
                <div className={style.productPrice}>{price} PLN</div>
                <div className={style.productInfo_btn}>
                  {(isProductInCart) 
                    ?
                      <button onClick={() => navigate('/purchase')} className={style.buttonBuy}>Your product in Cart</button>
                    : (available === "Yes")
                      ?
                        <button onClick={() => dispatch(addToCart(foundProduct))} className={style.buttonBuy}>Buy</button>
                      :
                        <button className={style.buttonBuy}>Product is not available</button>
                  }
                  {(isProductInWishList)
                    ?
                      <button onClick={() => dispatch(removeFromWishList(id))} className={style.buttonToWish}>Remove from Wish List</button>
                    :
                      <button onClick={() => dispatch(addToWishList(foundProduct))} className={style.buttonToWish}>Add to Wish List</button>
                  }
                </div>
              </div>
            </div>
        </div>
        <RecommendationList />
      </div>
    </div>
  )
}

export default CatalogItemPage