import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../Admin-component/Admin/Admin'

export const AdminRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Admin/>}></Route>
      </Routes>
    </div>
  )
}
