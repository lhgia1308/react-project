import React, { useState } from 'react'
import { ProfileNavigation } from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom';
import { UserProfile } from './UserProfile';
import { Order } from './Order';
import { Address } from './Address';
import { Favorites } from './Favorites';
import { Events } from './Events';

export const Profile = () => {
  const [openSideBar] = useState(false);
  
  return (
    <div className="lg:flex justify-between">
        <div className="sticky h-[80vh] lg:w-[20%]">
            <ProfileNavigation open={openSideBar} />
        </div>
        <div className="lg:w-[80%]">
          <Routes>
            <Route path='/' element={<UserProfile/>}></Route>
            <Route path='/orders' element={<Order/>}></Route>
            <Route path='/address' element={<Address/>}></Route>
            <Route path='/favorites' element={<Favorites/>}></Route>
            <Route path='/events' element={<Events/>}></Route>
          </Routes>
        </div>
    </div>
  )
}
