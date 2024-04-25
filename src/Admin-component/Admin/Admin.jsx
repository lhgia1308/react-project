import React from 'react'
import { AdminSideBar } from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import { Order } from '../Order/Order'
import { Dashboard } from '../Dashboard/Dashboard'
import { Category } from '../Category/Category'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CategoryIcon from '@mui/icons-material/Category';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Ingredient } from '../Ingredient/Ingredient'
import { Event } from '../Event/Event'
import { Detail } from '../Detail/Detail'

const menu = [
  {title: 'Dashboard', icon: <DashboardIcon/>, path: '', element: <Dashboard/>},
  {title: 'Orders', icon: <ShoppingBagIcon/>, path: '/orders', element: <Order/>},
  {title: 'Category', icon: <CategoryIcon/>, path: '/categories', element: <Category/>},
  {title: 'Ingredients', icon: <FastfoodIcon/>, path: '/ingredients', element: <Ingredient/>},
  {title: 'Events', icon: <EventIcon/>, path: '/event', element: <Event/>},
  {title: 'Details', icon: <AdminPanelSettingsIcon/>, path: '/details', element: <Detail/>},
  {title: 'Logout', icon: <LogoutIcon/>, path: '/'},
]
export const Admin = () => {
  return (
    <div>
        <div className='lg:flex justify-between'>
            <div>
                <AdminSideBar menu={menu}/>
            </div>
            <div className='lg:w-[80%]'>
              <Routes>
                {
                  menu.map((item, i) => <Route path={item.path} element={item.element}/>)
                }
              </Routes>
            </div>
        </div>
    </div>
  )
}
