import React, { useEffect } from 'react'
import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'

import HomePage from './components/Pages/HomePage/HomePage'
import OrderDonePage from './components/Pages/OrderDone/OrderDonePage'
import ErrorPage from './components/Pages/ErrorPage/ErrorPage'
import CatalogPage from './components/Pages/CatalogPage/CatalogPage'
import CatalogCategories from './components/Pages/CatalogCategories/CatalogCategories'
import GiftVouchersPage from './components/Pages/GiftVouchersPage/GiftVouchersPage'
import WishList from './components/Pages/WishListPage/WishList'
import ContactsPage from './components/Pages/ContactsPage/ContactsPage'
import Layout from './components/Layout/Layout'
import CatalogItemPage from './components/Pages/CatalogPage/CatalogItemPage/CatalogItemPage'
import PurchasePage from './components/Pages/PurchasePage/PurchasePage'
import OrderPlacement from './components/Pages/OrderPlacement/OrderPlacement'

const App = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/catalog_categories' element={<CatalogCategories />}/>
          <Route path='catalog' element={<CatalogPage  />}/>
          <Route path='/catalog/:id' element={<CatalogItemPage />}/>
          <Route path='/wish_list' element={<WishList />}/>
          <Route path='/vouchers' element={<GiftVouchersPage />}/>
          <Route path='/purchase' element={<PurchasePage />}/>
          <Route path='order_placement' element={<OrderPlacement />}/>
          <Route path='/contact' element={<ContactsPage />} />
          <Route path='/order_done' element={<OrderDonePage />}/>
        </Route>
          <Route path='/*' element={<ErrorPage />}/>
      </Routes>
    </div>
  )
}

export default App