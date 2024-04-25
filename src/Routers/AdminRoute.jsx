import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Admin-component/Navbar/Navbar'
import { Admin } from '../Admin-component/Admin/Admin'

export const AdminRoute = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/*' element={<Admin/>}></Route>
      </Routes>
    </div>
  )
}
