import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../component/Home/Home'
import { StoreDetail } from '../component/Store/StoreDetail'
import { Cart } from '../component/Cart/Cart'
import { Profile } from '../component/Profile/Profile'
import { Auth } from '../component/Auth/Auth'

export const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/account/:register' element={<Home/>}></Route>
            <Route path='/store/:city/:title/:id' element={<StoreDetail/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/my-profile/*' element={<Profile/>}></Route>
        </Routes>
        <Auth/>
    </div>
  )
}
