import { Box, Button, ListItemButton, Stack } from '@mui/material'
import React from 'react'
import { useValue } from '../../context/ContextProvider'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { RemoveOutlined } from '@mui/icons-material';
const ShoppingCartList = () => {
  const {state:{cart,product},dispatch} = useValue()
  
  return (
    <List sx={{ width: '50%',mt:10, bgcolor: 'background.paper' }}>
      {cart.map((item) => (
        
        <ListItem
          key={item._id}
          // disableGutters
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
          <ListItemText primary={`${item.title}`} />
          <ListItemText primary={`${item.quantity}`} />
        </ListItem>
      ))}
    </List>
  )
}

export default ShoppingCartList

//  <ListItemButton onClick={()=> dispatch({type:'ADD_TO_CART', payload:item})}>
//               <IconButton aria-label="add" >
//                 <AddBoxRoundedIcon />
//               </IconButton>
//             </ListItemButton>       

{/* <IconButton aria-label="remove">
              <RemoveOutlined />
            </IconButton> */}


    //         <List sx={{ width: '50%',mt:10, bgcolor: 'background.paper' }}>
    //   {cart.map((item) => (
    //     <ListItem
    //       key={`cart-${item._id}`}
    //       disableGutters
    //       secondaryAction={
            
            
    //         <IconButton aria-label="add" onClick={()=> dispatch({type:'ADD_TO_CART', payload:item})}>
    //           <AddBoxRoundedIcon />
    //         </IconButton>
          
            
    //       }
    //     >
    //       <ListItemText primary={`${item.title}`} />
    //     </ListItem>
    //   ))}
    // </List>