import React, { useState } from 'react'
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../State/Authentication/Action';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { CustomModal } from '../Modal/CustomModal';

const menu = [
    {title: "Dashboard", icon: <DashboardIcon/>},
    {title: "Orders", icon: <ShoppingBagIcon/>},
    {title: "Favorites", icon: <FavoriteIcon/>},
    {title: "Address", icon: <AddReactionIcon/>},
    {title: "Payments", icon: <AccountBalanceWalletIcon/>},
    {title: "Notification", icon: <NotificationsActiveIcon/>},
    {title: "Events", icon: <EventIcon/>},
    {title: "Logout", icon: <LogoutIcon/>}
]
export const ProfileNavigation = ({open, handleClose}) => {
    const isSmallScreen = useMediaQuery("(max-width: 900px)")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const handleLogout = () => {
        dispatch(logout({jwt, navigate}))
        setOpenConfirmation(false)
    }
    const handleNavigate = (item) => {
        if(item.title === 'Logout') {
            setOpenConfirmation(true);
        }
        else {
            navigate(`/my-profile/${item.title.toLowerCase()}`)
        }   
    }
    
  return (
    <div>
        <Drawer 
        variant={isSmallScreen ? "temporary" : "permanent"} 
        onClose={handleClose} 
        open={isSmallScreen ? open : true} 
        anchor='left' 
        sx={{zIndex: -1, position: "sticky"}}
        >
            <div className="w-[50vw] lg:w-[20vw] h-[90vh] flex flex-col justify-center text-xl gap-8">
                {menu.map((item, i) => <>
                    <div onClick={() => handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer">
                        {item.icon}
                        <span>{item.title}</span>
                    </div>  
                    {i !== menu.length - 1 && <Divider/>}
                </>)}
            </div>
        </Drawer>
        <CustomModal 
        title="LOGOUT" 
        content="Do you want to logout?" 
        open={openConfirmation} 
        setOpenConfirmation={setOpenConfirmation}
        handleLogout={handleLogout}
        />
    </div>
  )
}
