import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClose = () => {
        navigate("/")
    }
  return (
    <div>
        <Modal 
        onClose={handleClose}
        open={
            location.pathname === "/account/register"
            || location.pathname === "/account/login"
        }
        >
            <Box sx={style}>
                {location.pathname === "/account/register" ? <RegisterForm/> : <LoginForm/>}
            </Box>
        </Modal>
    </div>
  )
}
