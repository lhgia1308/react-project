import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import { Box } from "@mui/material";

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Box 
        className="px-5 sticky top-0 z-[9999] py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between"
        >
            <div className="lg:mr-10 flex items-center space-x-4">
                <li className="logo font-semibold text-gray-300 text-2xl">
                    <HomeIcon onClick={()=>navigate("/")}/>
                </li>
            </div>
        </Box>
    )
}
