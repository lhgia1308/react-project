import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CategoryIcon from '@mui/icons-material/Category';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../component/State/Authentication/Action';

const menu = [
    {title: 'Dashboard', icon: <DashboardIcon/>, path: '/'},
    {title: 'Orders', icon: <ShoppingBagIcon/>, path: '/orders'},
    {title: 'Food Category', icon: <CategoryIcon/>, path: '/category'},
    {title: 'Ingredients', icon: <FastfoodIcon/>, path: '/ingredients'},
    {title: 'Events', icon: <EventIcon/>, path: '/event'},
    {title: 'Details', icon: <AdminPanelSettingsIcon/>, path: '/details'},
    {title: 'Logout', icon: <LogoutIcon/>, path: '/'},
]
export const AdminSideBar = ({handleClose}) => {
    const isSmallScreen = useMediaQuery("(max-width:1080px)")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const handleNavigate = (item) => {
        if(item.title === 'Logout') {
            dispatch(logout({jwt, navigate}))
        }
        else {
            navigate(`/admin${item.path}`)
        }
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
                    <div className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[2rem]'>
                        {
                            menu.map((item, i) => <>
                                <div onClick={() => handleNavigate(item)} className='px-5 flex gap-3'>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                {i !== menu.length - 1 && <Divider/>}
                            </>)
                        }
                    </div>
                </Drawer>
            </>
        </div>
    )
}
