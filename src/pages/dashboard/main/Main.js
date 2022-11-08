import { FolderShared, Group, Inventory2, MapsHomeWork } from '@mui/icons-material'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { fetchProducts } from '../../../actions/products'
import { fetchUsers } from '../../../actions/user'
import { useValue } from '../../../context/ContextProvider'

const Main = ({setSelectedLink,link}) => {
    const {state:{users,products,orders,currentUser},dispatch} = useValue()
    useEffect(() => {
        setSelectedLink(link)
        // if (users.length === 0) {
        //     fetchUsers(currentUser,dispatch)
        // }
        if (products.length === 0) {
            fetchProducts(dispatch)
        }
    }, [])
    return (
    <Box
    sx={{
        display: { xs: 'flex', md: 'grid' },
        gridTemplateColumns: 'repeat(3,1fr)',
        gridAutoRows: 'minmax(100px, auto)',
        gap: 3,
        textAlign: 'center',
        flexDirection: 'column',
      }}
      >
         <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Store Inventory</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Inventory2 sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">{products.length}</Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Orders Placed</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FolderShared sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">{orders.length}</Typography>
        </Box>
      </Paper>
          <Paper elevation={3} sx={{ p: 2, gridColumn: 3, gridRow: '1/4' }}>
        <Box>
          <Typography>Recent Users</Typography>
          <List>
            {users.slice(0, 4).map((user, i) => (
              <Box key={user._id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt={user?.name} src={user?.photoURL} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user?.name}
                    // secondary={`Time Created: ${moment(user?.createdAt).format(
                    //   'YYYY-MM-DD H:mm:ss'
                    // )}`}
                  />
                </ListItem>
                {i !== 3 && <Divider variant="inset" />}
              </Box>
            ))}
          </List>
        </Box>
        <Divider sx={{ mt: 3, mb: 3, opacity: 0.7 }} />
        <Box>
          <Typography>Recently added Items</Typography>
          <List>
            {products.slice(0, 4).map((product, i) => (
              <Box key={product._id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt={product?.title}
                      src={product?.image}
                      variant="rounded"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product?.title}
                    // secondary={`Added: ${moment(room?.createdAt).fromNow()}`}
                  />
                </ListItem>
                {i !== 3 && <Divider variant="inset" />}
              </Box>
            ))}
          </List>
        </Box>
      </Paper>
      </Box>
  )
}

export default Main