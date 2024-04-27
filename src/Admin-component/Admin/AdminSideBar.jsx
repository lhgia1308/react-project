import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../../State/Authentication/Action';
import { CustomModal } from '../../component/Modal/CustomModal';

const drawerWidth = 240;
export const AdminSideBar = (props) => {
    const { window, menu } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    const container = window !== undefined ? () => window().document.body : undefined;
    const dispatch = useDispatch();
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const jwt = localStorage.getItem('jwt')

    const handleAcceptDelete = () => {
        dispatch(logout({jwt, navigate}))
    }
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };
    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };
    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const handleNavigate = (item) => {
        setTitle(item.title)
        if(item.title === 'Logout') {
            setOpenConfirmation(true)
        }
        else {
            navigate(`/admin${item.path}`)
        }
        handleDrawerClose()
    }
    const drawer = (
        <div className='flex flex-col gap-4'>
            {
                menu.map((item, i) => <>
                    <div onClick={() => handleNavigate(item)} className='flex gap-3 p-2 cursor-pointer'>
                        {item.icon}
                        <div>
                            {item.title}
                        </div>
                    </div>
                    {i !== menu.length - 1 && <Divider/>}
                </>)
            }
        </div>
    )

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
            position="fixed"
            sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            }}
            >
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
            >
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, justifyContent: 'center' },
                }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, justifyContent: 'center' },
                }}
                open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Routes>
                {
                  menu.map((item, i) => <Route path={item.path} element={item.element}/>)
                }
              </Routes>
            </Box>
            <CustomModal 
			title="Logout" 
			open={openConfirmation} 
			setOpenConfirmation={setOpenConfirmation}
			handleAccept={handleAcceptDelete}
			>
				<p>Do you want to logout?</p>
			</CustomModal>
        </Box>
    );
}
