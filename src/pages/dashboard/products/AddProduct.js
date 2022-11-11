import { Box, Button, FormControl, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { clearDetails, createProduct } from '../../../actions/products'
import { useValue } from '../../../context/ContextProvider'

const AddProduct = ({setSelectedLink,Link}) => {
    const {state:{currentUser,details:{title,description,price,category,image}},dispatch} = useValue()
    useEffect(() => {
        setSelectedLink(Link)
    }, [])
    // console.log("title",title)
    const addProduct = () => {
        const product = {
            title,
            description,
            price,
            category,
            image
        }
        createProduct(product,currentUser,dispatch)
        clearDetails(dispatch)
    }
    return (
    <Box sx={{display:'flex', flexWrap:'wrap'}}>
        <Typography variant="h4" sx={{width:'100%', textAlign:'center', mb:2}}>Add Product</Typography>
        <div>
            <FormControl >
                <InputLabel>Title</InputLabel>
                <OutlinedInput
                sx={{ m: 1, width: '25ch' }}
                value={title}
                onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{title:e.target.value}})}
                label="Title"
                />
            </FormControl>
            <FormControl >
                <InputLabel>Price</InputLabel>
                <OutlinedInput
                sx={{ m: 1, width: '25ch' }}
                value={price}
                onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{price:e.target.value}})}
                label="Price"
                required
                />
            </FormControl>
            <FormControl >
                <InputLabel>Category</InputLabel>
                <OutlinedInput
                sx={{ m: 1, width: '25ch' }}
                value={category}
                onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{category:e.target.value}})}
                label="Category"
                />
            </FormControl>
            <FormControl >
                <InputLabel>Image</InputLabel>
                <OutlinedInput
                sx={{ m: 1, width: '25ch' }}
                value={image}
                onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{image:e.target.value}})}
                label="Image"
                />
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>Description</InputLabel>
                <OutlinedInput
                value={description}
                onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{description:e.target.value}})}
                label="Description"
                />
            </FormControl>
            <Button 
            variant="contained" 
            sx={{mt:2}}
            onClick={addProduct}
            >Add Product</Button>
        </div>
        
    </Box>
  )
}

export default AddProduct