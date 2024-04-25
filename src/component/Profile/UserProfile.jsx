import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CustomModal } from '../Modal/CustomModal';
import { logout } from '../../State/Authentication/Action';

export const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem('jwt');
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const handleClickLogout = () => {
    setOpenConfirmation(true)
  }
  const handleLogout = () => {
    dispatch(logout({jwt, navigate}))
    setOpenConfirmation(false)
  }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
      <div className='flex flex-col items-center justify-center'>
        <AccountCircleIcon sx={{fontSize: "9rem"}}/>
        <h1 className='py-5 text-2xl font-semibold'>Code with Kane</h1>
        <p>Email: kanele@gmail.com</p>
        <Button variant='contained' onClick={handleClickLogout} sx={{margin: "2rem 0rem"}}>Logout</Button>
        <CustomModal 
        title="LOGOUT" 
        open={openConfirmation} 
        setOpenConfirmation={setOpenConfirmation}
        handleAccept={handleLogout}
        >
          <p>Do you want to logout?</p>
        </CustomModal>
      </div>
    </div>
  )
}
