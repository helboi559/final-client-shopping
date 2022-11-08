import { AddRoadOutlined, Home, ManageHistoryRounded, ShoppingCart, ViewListTwoTone } from '@mui/icons-material'
import { Badge, BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import React, { useState,useRef,useEffect } from 'react'

// import Dashboard from './dashboard/Dashboard'

import Protected from './protected/Protected';

import { useValue } from '../context/ContextProvider';
import UserProducts from './products/UserProducts';
import UserShoppingCart from './shoppingCart/UserShoppingCart';
import OrdersHistory from './orders/OrdersHistory';

const BottomNav = () => {
    
    const {state:{section,cart},dispatch} = useValue()
    const ref = useRef();
    useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
    }, [section]);
    return (
    <Box
    // sx={{height:300 }}
    ref={ref}
    >   
    
        {
            {

            0: <Protected><UserProducts/></Protected>,
            1: <Protected><UserShoppingCart/></Protected>,
            2: <Protected><OrdersHistory /></Protected>,
            }[section]
        }
        {/* switch statement above */}
         <Paper
        elevation={3}
        sx={{position:"fixed", bottom:0,left:0,right:0,zIndex:2}}
        >
            <BottomNavigation
            showLabels
            value={section}
            onChange={(e,newValue)=> dispatch({type:'UPDATE_SECTION',payload:newValue}) }
            >
                <BottomNavigationAction label="Home" icon={<Home/>}/>
                <BottomNavigationAction label="Cart" icon={
                    <Badge color='error' badgeContent={cart?.length}>
                        <ShoppingCart/>
                    </Badge>
                
                }/>
                <BottomNavigationAction label="My Orders" icon={<ViewListTwoTone/>}/>
            </BottomNavigation>
        </Paper>
    </Box>
  )
}



export default BottomNav