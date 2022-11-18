import {
  Box,
  Button,
  Container,
  Stack,
  Step,
  StepButton,
  Stepper,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useValue } from '../../context/ContextProvider';
import { Cancel, Send } from '@mui/icons-material';
import { purchaseCart } from '../../actions/carts';
import AddItems from './addItems/AddItems';
// import AddDetails from './addDetails/AddDetails';

const UserShoppingCart = () => {
  const {
    state: {
      details,
      currentUser,
      cart
    },
    dispatch,
  } = useValue();
  const [total,setTotal] = useState(0)
  //flag to show submit button
  const [showSubmit, setShowSubmit] = useState(false);
  
  const handleSubmit = () => {
    const order = {
      cart:cart,
      total:total
    }
    console.log("current user",currentUser)
    console.log("order",order)
    purchaseCart(order,currentUser,dispatch)
    
  };

  //cancel button
  const handleCancel = () => {
    //if updating a drive and need to cancel
    // if (updatedDrive) {
    //   //clear data and redirect to edit page
    //   clearDrive(dispatch)
    //   dispatch({ type: 'UPDATE_SECTION', payload: 1 });
    // } else {
    //   //if adding and cancel go back to dashboard
    //   dispatch({ type: 'UPDATE_SECTION', payload: 0 });
    //   clearDrive(dispatch)
    // }
  };
  return (
    <>
    
    
    {cart.length === 0 && <Typography variant='h3' sx={{mt:10}}>Cart is empty!</Typography>}
    {cart.length > 0 && 
    <Container sx={{ mt: 10 }}>
      
        
      <AddItems {...{total,setTotal}}/>
      <Box sx={{pb:7}}>
          
        
        <Stack
          sx={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}
          direction="row"
        >
            <Button
              variant="contained"
              color='secondary'
              endIcon={<Send />}
              onClick={handleSubmit}
            >
              Purchase
            </Button>
          
          {/* <Button
            variant="outlined"
            endIcon={<Cancel />}
            // onClick={handleCancel}
          >
            Cancel
          </Button> */}
        </Stack>
      </Box>
    </Container>}
    </>
  );
    
};

export default UserShoppingCart;




// import { Box, Button, ListItemButton, Stack } from '@mui/material'
// import React, { useEffect } from 'react'
// import { useValue } from '../../context/ContextProvider'
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import CommentIcon from '@mui/icons-material/Comment';
// import IconButton from '@mui/material/IconButton';
// import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
// import { RemoveOutlined } from '@mui/icons-material';
// import ShoppingCartList from './ShoppingCartList';
// import { purchaseCart } from '../../actions/carts';
// const UserShoppingCart = () => {
//   const {state:{cart,product,currentUser},dispatch} = useValue()
//   const [total,setTotal] = React.useState(0)
//   console.log(total)
//   const handleTotal = () => {
//     let currTotal = 0
//     // console.log(cart)
//     cart.map((item) => {
//       // console.log(item.quantity)
//       return currTotal += item.quantity * item.price
//     })
//     setTotal(currTotal)
//   }
//   useEffect(() => { 
//     if(cart.length > 0) {
//       handleTotal()
//     }
    
//   },[cart])
//   const handleSubmit = () => {
//     const order = {
//       cart:cart,
//       total:total
//     }
//     // console.log("current user",currentUser)
//     // console.log("order",order)
//     purchaseCart(order,currentUser,dispatch)

//   }
//   return (
//     <>

//     <ShoppingCartList/>
//     <Button
//     variant='contained'
//     onClick={handleSubmit}
//     >
//       Checkout
//     </Button>
//     </>
//   )
// }

// export default UserShoppingCart