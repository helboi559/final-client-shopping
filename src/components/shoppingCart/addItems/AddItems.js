import { Avatar, Box, Button, ListItemAvatar, ListItemButton, ListSubheader, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { RemoveOutlined } from '@mui/icons-material';
import { useValue } from '../../../context/ContextProvider';
const AddItems = ({total,setTotal}) => {
  const {state:{cart,product},dispatch} = useValue()
  // const [total,setTotal] = React.useState(0)
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
  return (
    <>
    
      <List sx={{ width: '50%',mt:1, bgcolor: 'background.paper' }}>
        {cart.map((item) => (
          
          <ListItem
            key={item._id}
            alignItems="flex-start"
            disableGutters
            secondaryAction={
              <>
              
              <Button onClick={()=> dispatch({type:"REMOVE_FROM_CART",payload:item})}>
                <RemoveOutlined />
              </Button>  
              <Button onClick={()=> dispatch({type:"ADD_TO_CART",payload:item})}>
                <AddBoxRoundedIcon />
              </Button>           
              </>
            
              
            }
          >
            <ListItemAvatar>
              <Avatar 
              alt={item.name} 
              src={item.image} 
              variant="square"
              sx={{ width: 75, height: 75 }}
              />
            </ListItemAvatar>
            <ListItemText 
            primary={`${item.title.slice(0,20)}...`}
            secondary={
              <>
              <Typography>
                {` Qty-${item.quantity}`}
              </Typography>
              <Typography>
                {` Price-$${item.price}`} 
              </Typography>
              </>
            }
            />
          
          </ListItem>
        ))}
      </List>
      <Box sx={{display:"flex",justifyContent:"space-between",mt:2}}>
        <Typography variant="h6">
          Total
        </Typography>
        <Typography variant="h6">
          {`$${total}`}
        </Typography>
      </Box>
    </>
  )
}

export default AddItems