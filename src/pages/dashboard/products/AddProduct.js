import { Box, Button, FormControl, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearDetails, createProduct, fetchProducts } from '../../../actions/products'
import { useValue } from '../../../context/ContextProvider'

const AddProduct = ({setSelectedLink,Link}) => {
    const {state:{currentUser,details:{title,description,price,category,image}},dispatch} = useValue()
    useEffect(() => {
        setSelectedLink(Link)
    }, [])
    // console.log("title",title)
    const navigate = useNavigate()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const priceRef = useRef()
    const categoryRef = useRef()
    const imageRef = useRef()
    const addProduct = (e) => {
        e.preventDefault();
        const title = titleRef.current.value
        console.log("title",title)
        console.log("description",descriptionRef.current.value)
        const description = descriptionRef.current.value
        const price = priceRef.current.value
        const category = categoryRef.current.value
        const image = imageRef.current.value
        // const product = {
        //     title,
        //     description,
        //     price,
        //     category,
        //     image
        // }
        // console.log(product)
        createProduct({title, description, price, category, image},currentUser,dispatch)
        clearDetails(dispatch)
        fetchProducts(dispatch)
        navigate('/dashboard/products')
    }
    console.log("title",title)
    return (
    <Box sx={{display:'flex', flexWrap:'wrap'}}>
        <Typography variant="h4" sx={{width:'100%', textAlign:'center', mb:2}}>Add Product</Typography>
        <form onSubmit={addProduct}>
            
            <TextField
            sx={{ m: 1, width: '25ch' }}
            inputRef={titleRef}
            // onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{title:e.target.value}})}
            label="Title"
            id='title'
            required
            />
            <TextField
                sx={{ m: 1, width: '25ch' }}
                inputRef={descriptionRef}
                // onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{title:e.target.value}})}
                label="description"
                id='description'
                required
                />
            <TextField
                sx={{ m: 1, width: '25ch' }}
                inputRef={priceRef}
                // onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{title:e.target.value}})}
                label="Price"
                id='price'
                required
                />
           
            <TextField
                sx={{ m: 1, width: '25ch' }}
                inputRef={categoryRef}
                // onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{title:e.target.value}})}
                label="Category"
                id='category'
                required
                />
            <TextField
                sx={{ m: 1, width: '25ch' }}
                inputRef={imageRef}
                // onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{title:e.target.value}})}
                label="Image"
                id='image'
                required
                />
            {/* <FormControl >
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
            </FormControl> */}
            <Button 
            variant="contained" 
            sx={{mt:2}}
            type="submit"
            >Add Product</Button>
        </form> 
        
    </Box>
  )
}

export default AddProduct




// import { Box, Button, FormControl, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { clearDetails, createProduct, fetchProducts } from '../../../actions/products'
// import { useValue } from '../../../context/ContextProvider'

// const AddProduct = ({setSelectedLink,Link}) => {
//     const {state:{currentUser,details:{title,description,price,category,image}},dispatch} = useValue()
//     useEffect(() => {
//         setSelectedLink(Link)
//     }, [])
//     // console.log("title",title)
//     const navigate = useNavigate()
//     const addProduct = () => {
//         const product = {
//             title,
//             description,
//             price,
//             category,
//             image
//         }
//         createProduct(product,currentUser,dispatch)
//         clearDetails(dispatch)
//         fetchProducts(dispatch)
//         navigate('/dashboard/products')
//     }
//     return (
//     <Box sx={{display:'flex', flexWrap:'wrap'}}>
//         <Typography variant="h4" sx={{width:'100%', textAlign:'center', mb:2}}>Add Product</Typography>
//         <div>
//             <FormControl >
//                 <InputLabel>Title</InputLabel>
//                 <OutlinedInput
//                 sx={{ m: 1, width: '25ch' }}
//                 value={title}
//                 onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{title:e.target.value}})}
//                 label="Title"
//                 />
//             </FormControl>
//             <FormControl >
//                 <InputLabel>Price</InputLabel>
//                 <OutlinedInput
//                 sx={{ m: 1, width: '25ch' }}
//                 value={price}
//                 onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{price:e.target.value}})}
//                 label="Price"
//                 required
//                 />
//             </FormControl>
//             <FormControl >
//                 <InputLabel>Category</InputLabel>
//                 <OutlinedInput
//                 sx={{ m: 1, width: '25ch' }}
//                 value={category}
//                 onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{category:e.target.value}})}
//                 label="Category"
//                 />
//             </FormControl>
//             <FormControl >
//                 <InputLabel>Image</InputLabel>
//                 <OutlinedInput
//                 sx={{ m: 1, width: '25ch' }}
//                 value={image}
//                 onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{image:e.target.value}})}
//                 label="Image"
//                 />
//             </FormControl>
//             <FormControl fullWidth>
//                 <InputLabel>Description</InputLabel>
//                 <OutlinedInput
//                 value={description}
//                 onChange={(e)=>dispatch({type:'UPDATE_DETAILS',payload:{description:e.target.value}})}
//                 label="Description"
//                 />
//             </FormControl>
//             <Button 
//             variant="contained" 
//             sx={{mt:2}}
//             onClick={addProduct}
//             >Add Product</Button>
//         </div>
        
//     </Box>
//   )
// }

// export default AddProduct