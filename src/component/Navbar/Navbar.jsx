import { Avatar, Badge, IconButton, Box } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from "@mui/material/colors";
import "./Navbar.css"
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';

export const Navbar = () => {
    const navigate = useNavigate();
    const { auth } = useSelector(store => store)
    const handleClickAvatar = () => {
        if(auth.user?.role === 'ADMIN') {
            navigate('/admin')
        }
        else {
            navigate('/my-profile')
        }
    }
    
    return (
        <Box 
        className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between"
        >
            <div className="lg:mr-10 flex items-center space-x-4">
                <li className="logo font-semibold text-gray-300 text-2xl">
                    <HomeIcon onClick={()=>navigate("/")}/>
                </li>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-10">
                <div className="">
                    <IconButton>
                        <SearchIcon sx={{fontSize: "1.5rem"}}/>
                    </IconButton>
                </div>
                <div className="">
                    {
                        auth.user ? 
                        <Avatar 
                        sx={{bgcolor: "white", color: pink.A400}}
                        onClick={handleClickAvatar}
                        >
                            {auth.user.fullName[0].toUpperCase()}
                        </Avatar> :
                        <IconButton onClick={() => navigate("/account/login")}>
                            <Person/>
                        </IconButton>
                    }
                </div>
                <div className="">
                    <IconButton>
                        <Badge color="black" badgeContent={3}>
                            <ShoppingCartIcon sx={{fontSize: "1.5rem"}} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    )
}