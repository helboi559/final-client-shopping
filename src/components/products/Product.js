import { Close, StarBorder } from '@mui/icons-material'
import { AppBar, Box, Container, Dialog, IconButton, Rating, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useValue } from '../../context/ContextProvider'
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation,Autoplay,EffectCoverflow,Lazy,Zoom} from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/lazy';
import 'swiper/css/zoom';
import './swiper.css';

const Product = () => {
    const {state:{product},dispatch} = useValue() 
    const handleClose = () => {
        dispatch({type:"UPDATE_PRODUCT", payload:null})
    }
    
    console.log(product)
    return (
    <Dialog
    fullScreen
    open={Boolean(product)}
    onClose={handleClose}
    >
        <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="h3" sx={{ ml: 2, flex: 1 }}>
            {product?.title}
          </Typography>
          <IconButton color="inherit" onClick={handleClose}>
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
        <Container sx={{ pt: 5 }}>
          <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow, Lazy, Zoom]}
          centeredSlides
          slidesPerView={2}
          grabCursor
          navigation
          autoplay
          lazy
          zoom
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          
            <SwiperSlide >
              <div className="swiper-zoom-container">
                <img src={product?.image} alt="room" />
              </div>
            </SwiperSlide>

          {/* <Tooltip
            title={room?.uName || ''}
            sx={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              zIndex: 2,
            }}
          >
            <Avatar src={room?.uPhoto} />
          </Tooltip> */}
        </Swiper>
        <Stack sx={{ p: 3 }} spacing={2}>
            <Stack
            direction="row"
            sx={{
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
            >
            <Box>
              <Typography variant="h6" component="span">
                {'Price: '}
              </Typography>
              <Typography component="span">
                {product?.price === 0 ? 'Free Stay' : '$' + product?.price}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="span">
                {'Ratings: '}
              </Typography>
              <Rating
                name="product-ratings"
                defaultValue={3.5}
                precision={0.5}
                emptyIcon={<StarBorder />}
              />
            </Box>
          </Stack>
          {/* <Stack
            direction="row"
            sx={{
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <Box>
              <Typography variant="h6" component="span">
                {'Place Name: '}
              </Typography>
              <Typography component="span">{place?.text}</Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="span">
                {'Address: '}
              </Typography>
              <Typography component="span">{place?.place_name}</Typography>
            </Box>
          </Stack> */}
          <Stack>
            <Typography variant="h6" component="span">
              {'Description: '}
            </Typography>
            <Typography component="span">{product?.description}</Typography>
          </Stack>
        </Stack>
      </Container>
    </Dialog>
  )
}

export default Product


{/* <Stack
            direction="row"
            sx={{
                height:500
            }}
            >
                <img src={product?.image} alt="" />

            </Stack> */}