import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useMemo, useState } from 'react'
import { fetchProducts } from '../../../actions/products';
import { useValue } from '../../../context/ContextProvider'
import ProductActions from './productActions/ProductActions';

const Products = ({setSelectedLink,link}) => {
    
  const {state:{products},dispatch} = useValue()
  const [rowId, setRowId] = useState(null);
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
        setSelectedLink(link)
        if(products.length === 0) fetchProducts(dispatch)
    }, [])

  const columns = useMemo(
    () => [
      {
        field: 'image',
        headerName: 'Product',
        width: 60,
        renderCell: (params) => <Avatar src={params.row.image} />,
        // sortable: false,
        // filterable: false,
      },
      {
        field: 'title',
        headerName: 'Title',
        width: 200,
      },
      { field: 'description', headerName: 'Description', width: 200 ,},
      {
        field: 'category',
        headerName: 'Category',
        width: 75,
      },
      {
        field: 'price',
        headerName: 'Price',
        width: 75,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (params) => (
          <ProductActions {...{ params , rowId , setRowId}} />
        ),
      },
     
      { field: '_id', headerName: 'Id', width: 75},
      
    ],
    [rowId]
  )
    
    return (
    <Box
    sx={{
      height:500,
      width:'100%'
    }}
    >
      <Typography
      variant='h3'
      component='h3'
      sx={{textAlign:'center',mt:3,mb:3}}
      >
        Manage Products
      </Typography>
      
      <DataGrid
      columns={columns}
      rows={products}
      getRowId={row=>row._id}
      rowsPerPageOptions={[5, 10, 20]}
      initialState={{
        pagination: {
          pageSize: 5,
        },
      }}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
      />
    </Box>
  )
}

export default Products