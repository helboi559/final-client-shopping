import { Avatar, Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DataGrid , gridClasses} from '@mui/x-data-grid';
import React, { useEffect, useMemo, useState } from 'react'
import { fetchUsers } from '../../../actions/user';
import { useValue } from '../../../context/ContextProvider';
import UserActions from './UserActions';

const Users = ({setSelectedLink,link}) => {
    const {state:{users, currentUser},dispatch} = useValue()
    const [pageSize, setPageSize] = useState(5);
    const [rowId, setRowId] = useState(null);
    useEffect(() => {
        setSelectedLink(link)
        if (users.length === 0) {
            fetchUsers(currentUser,dispatch)
        }
    }, [])
    const columns = useMemo(
    () => [
      {
        field: 'photoURL',
        headerName: 'Avatar',
        width: 60,
        renderCell: (params) => <Avatar src={params.row.image} />,
        sortable: false,
        filterable: false,
      },
      { field: 'name', headerName: 'Name', width: 170 },
      { field: 'email', headerName: 'Email', width: 200 },
      {
        field: 'role',
        headerName: 'Role',
        width: 100,
        type: 'singleSelect',
        valueOptions: ['basic', 'admin'],
        editable: currentUser?.role === 'admin',
      },
      {
        field: 'active',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: currentUser?.role === 'admin',
      },
      { field: '_id', headerName: 'Id', width: 220 },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (params) => (
          <UserActions {...{ params, rowId, setRowId }} />
        ),
      },
    ],
    [rowId]
  );
    return (
    <Box
      sx={{
        height: 400,
        width: '100%',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: 'center', mt: 3, mb: 3 }}
      >
        Manage Users
      </Typography>
      <DataGrid
        columns={columns}
        rows={users}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? grey[200] : grey[900],
          },
        }}
        onCellEditCommit={(params) => setRowId(params.id)}
      />
    </Box>
  )
}

export default Users