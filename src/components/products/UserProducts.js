import { StarBorder } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Avatar,
  Button,
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
  Tooltip,
} from '@mui/material';
import React, { useEffect } from 'react'
import { fetchProducts } from '../../actions/products';
import { useValue } from '../../context/ContextProvider';
import Product from './Product';

const UserProducts = () => {
  const {state:{products,product,cart},dispatch} = useValue() 
  useEffect(()=> {
      if(products.length === 0) fetchProducts(dispatch);
    },[])
    console.log(cart)
  return (
    <>
    
    <Container
    sx={{mt:10}}
    >
        <ImageList
        gap={12}
        sx={{
          mb: 10,
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))!important',
        }}
      >
        {products.map((product) => (
          <Card key={product._id}>
            <ImageListItem sx={{ height: '100% !important' }}>
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)',
                }}
                title={`$ ${product.price}`}
                // actionIcon={
                //   <Tooltip title={product.uName} sx={{ mr: '5px' }}>
                //     <Avatar src={product.uPhoto} />
                //   </Tooltip>
                // }
                actionIcon={
                  <Rating
                    sx={{ color: 'rgba(255,255,255, 0.8)', mr: '5px' }}
                    name="product-rating"
                    defaultValue={3.5}
                    precision={0.5}
                    emptyIcon={
                      <StarBorder sx={{ color: 'rgba(255,255,255, 0.8)' }} />
                    }
                  />
                }
                position="top"
              />
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                style={{ cursor: 'pointer' }}
                onClick={() => dispatch({ type: 'UPDATE_PRODUCT', payload: product })}
              />
              <ImageListItemBar
                title={product.title}
                actionIcon={
                  <Button
                    // sx={{ color: 'rgba(255,255,255, 0.8)', mr: '5px' }}
                    // name="product-rating"
                    // defaultValue={3.5}
                    // precision={0.5}
                    // emptyIcon={
                    //   <StarBorder sx={{ color: 'rgba(255,255,255, 0.8)' }} />
                    // }
                    sx={{
                      mr:'5px'
                    }}
                    variant='contained'
                    color='secondary'
                    onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                  >
                    <AddShoppingCartIcon/>
                    </Button>
                }
                position="bottom"
                subtitle={product.description}
              />
             
            </ImageListItem>
          </Card>
        ))}
      </ImageList>
    </Container>
    <Product/>
    </>
  )
}

export default UserProducts


//  <ImageListItemBar
//                 title={product.title}
//                 actionIcon={
//                   <Rating
//                     sx={{ color: 'rgba(255,255,255, 0.8)', mr: '5px' }}
//                     name="product-rating"
//                     defaultValue={3.5}
//                     precision={0.5}
//                     emptyIcon={
//                       <StarBorder sx={{ color: 'rgba(255,255,255, 0.8)' }} />
//                     }
//                   />
//                 }
//                 position="bottom"
//                 subtitle={product.description}
//               />