import { Box, Button, ListItemButton, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useValue } from '../../context/ContextProvider'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { RemoveOutlined } from '@mui/icons-material';
import ShoppingCartList from './ShoppingCartList';
import { purchaseCart } from '../../actions/carts';
const UserShoppingCart = () => {
  const {state:{cart,product,currentUser},dispatch} = useValue()
  const [total,setTotal] = React.useState(0)
  console.log(total)
  const handleTotal = () => {
    let currTotal = 0
    // console.log(cart)
    cart.map((item) => {
      // console.log(item.quantity)
      return currTotal += item.quantity * item.price
    })
    setTotal(currTotal)
  }
  useEffect(() => { 
    if(cart.length > 0) {
      handleTotal()
    }
    
  },[cart])
  const handleSubmit = () => {
    const order = {
      cart:cart,
      total:total
    }
    // console.log("current user",currentUser)
    // console.log("order",order)
    purchaseCart(order,currentUser,dispatch)

  }
  return (
    <>

    <ShoppingCartList/>
    <Button
    variant='contained'
    onClick={handleSubmit}
    >
      Checkout
    </Button>
    </>
  )
}

export default UserShoppingCart

