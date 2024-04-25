import React, { useState } from 'react'
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../component/State/Authentication/Action';
import { CustomModal } from '../../component/Modal/CustomModal'

export const AdminSideBar = ({handleClose, menu}) => {
    const isSmallScreen = useMediaQuery("(max-width:1080px)")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const handleNavigate = (item) => {
        if(item.title === 'Logout') {
            setOpenConfirmation(true)
        }
        else {
            navigate(`/admin${item.path}`)
        }
    }
    const handleLogout = () => {
        dispatch(logout({jwt, navigate}))
        setOpenConfirmation(false)
    }
    return (
        <div>
            <>
                <Drawer 
                variant={isSmallScreen ? "temporary" : "permanent"}
                onClose={handleClose}
                open={true}
                anchor='left' 
                sx={{zIndex: 1}}
                >
                    <div className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[2rem] -z-0'>
                        {
                            menu.map((item, i) => <>
                                <div onClick={() => handleNavigate(item)} className='px-5 flex gap-3 cursor-pointer'>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                {i !== menu.length - 1 && <Divider/>}
                            </>)
                        }
                    </div>
                </Drawer>
                <CustomModal 
                title="LOGOUT" 
                open={openConfirmation} 
                setOpenConfirmation={setOpenConfirmation}
                handleAccept={handleLogout}
                >
                    <p>Do you want to logout?</p>
                </CustomModal>
            </>
        </div>
    )
}
