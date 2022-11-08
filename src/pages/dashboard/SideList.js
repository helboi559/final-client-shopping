import React, { useMemo, useState } from "react";
import MuiDrawer from '@mui/material/Drawer';
import { Avatar, Box, createTheme, IconButton, styled, Tooltip, Typography } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import { useValue } from "../../context/ContextProvider";
import { Dashboard, Inventory, LogoutSharp,Reorder } from "@mui/icons-material";
import { logout } from "../../actions/user";
import { Routes, useNavigate , Route } from "react-router-dom";
import useCheckToken from '../../components/hooks/useCheckToken'
import Main from "./main/Main";
import Products from "./products/Products";
import MyOrders from './carts/MyOrders'
import isAdmin from "./utils/isAdmin";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SideList = ({open,setOpen}) => {
  useCheckToken()
  const {state:{currentUser},dispatch} = useValue()
  const [selectedLink, setSelectedLink] = useState('')
  const navigate = useNavigate()
  const list = useMemo(() => [
    ...isAdmin(currentUser) ? [
      {title:"Products",icon:<Inventory/>, link:"products",component:<Products {...{setSelectedLink,link:'products'}}/>}
    ] : [],

    {title:"Main",icon:<Dashboard/>, link:"",component:<Main {...{setSelectedLink,link:''}}/>},
    {title:"My Orders", icon:<Reorder/>, link:"my-orders",component:<MyOrders {...{setSelectedLink,link:'my-orders'}}/>},
    
  ], []);
  const handleLogout = () => {
        logout(dispatch)
        // navigate('/')
    }
  return (
    <>
     <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={()=>setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {list.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={()=>navigate(item.link)}
                selected={selectedLink === item.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ mx:'auto', mt:3, mb:1}}>
          <Tooltip title={currentUser?.name}>
            <Avatar src={currentUser?.image} {...(open && { sx: { width: 100, height: 100 } })} />
          </Tooltip>
        </Box>
        <Box sx={{ textAlign:'center'}}>
          {open && <Typography variant="h6">{currentUser?.name}</Typography>}
          <Typography variant="body2">{currentUser?.role || 'role' }</Typography>
          {open && <Typography variant="body2">{currentUser?.email}</Typography>}
          <Tooltip title="Logout">
            <IconButton onClick={handleLogout}>
              <LogoutSharp/>
            </IconButton>
          </Tooltip>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          {list.map((item) => (
            <Route key={item.title} path={item.link} element={item.component} />
          ))}
          <Route path="*" element={isAdmin(currentUser) ? (
            <Main {...{setSelectedLink,link:''}}/>
          ) : (
            <MyOrders {...{setSelectedLink,link:'my-orders'}}/>
          )} />
        </Routes>
      </Box>
    </>
  )
}

export default SideList