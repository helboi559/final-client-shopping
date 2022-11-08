// import { StarBorder } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import {
  Avatar,
  Button,
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItem,
  ListItemText,
  Rating,
  Tooltip,
  Divider,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  Collapse,
  ListItemAvatar,
  Typography
} from '@mui/material';
import React, { useEffect } from 'react'
import { fetchMyOrders } from '../../actions/carts';
import { useValue } from '../../context/ContextProvider';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
// import { fetchorders } from '../../actions/products';
// import { useValue } from '../../context/ContextProvider';
// import Product from './Product';

const OrdersHistory = () => {
  const {state:{orders,currentUser},dispatch} = useValue() 
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(()=> {
      if(orders.length === 0) fetchMyOrders(currentUser,dispatch);
    },[])
    console.log("orders",orders)
  return (
   <List 
   sx={{ width: '100%',mt:10, maxWidth:700, bgcolor: 'background.paper' }}
   component="nav"
    aria-labelledby="nested-list-subheader"
   subheader={ 
      <ListSubheader component="div" id="nested-list-subheader">

      </ListSubheader>
   }
   >
      {orders.map((item) => (
        <>
        
        <Divider variant="inset" component="div" />
        <ListItem
          key={item._id}
          // disableGutters
          // secondaryAction={
          //    <Button onClick={()=> dispatch({type:"ADD_TO_CART",payload:item})}>
          //     <AddBoxRoundedIcon />
          //   </Button>           
          // }
        >
          
          
          
          {/* <ListItemText primary={`${item.total}`} /> */}

          <ListItemButton onClick={handleClick}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText secondary={`Total $ ${item.total}`} primary={`Date Purchased ${item.date}`}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.products.map((product) => (
            <>
            
            <ListItem
            component="div"
            disablePadding
            sx={{pl:4}}
            alignItems="flex-start"
            
            >
              <ListItemAvatar>
                <Avatar alt={product.title} src={product.image} />
              </ListItemAvatar>
              <ListItemText 
              primary={product.title} 
              secondary={
                <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {`Qty- ${product.quantity} -`}
                </Typography>
                {product.price}
            </React.Fragment>
              }/>
            </ListItem>
            <Divider variant="inset" component="div" />
            </>
          ))}
        </List>
      </Collapse>
        </ListItem>
        </>
        
      ))}
      
    </List>
  )
}

export default OrdersHistory

// const OrdersHistory = () => {
//   const {state:{orders,currentUser},dispatch} = useValue() 
//   useEffect(()=> {
//       if(orders.length === 0) fetchMyOrders(currentUser,dispatch);
//     },[])
//     console.log("orders",orders)
//   return (
//    <List sx={{ width: '75%',mt:10, bgcolor: 'background.paper' }}>
//       {orders.map((item) => (
//         <>
//         <Divider variant="inset" component="li" />
//         <ListItem
//           key={item._id}
//           // disableGutters
//           // secondaryAction={
//           //    <Button onClick={()=> dispatch({type:"ADD_TO_CART",payload:item})}>
//           //     <AddBoxRoundedIcon />
//           //   </Button>           
//           // }
//         >
          
          
//           {/* <ListItemText primary={`${item.quantity}`} /> */}
//           {/* {console.log("item",item.products)} */}
//           {item.products.map((product) => (
//               <ListItem
//               key={product._id}
              
//               >
//                 <ListItemText primary={`${product.title}`} />

//               </ListItem>
//           ))}
//           <ListItemText primary={`${item.total}`} />
//         </ListItem>
//         </>
//       ))}
      
//     </List>
//   )
// }