import { LoginSharp } from '@mui/icons-material'
import { Alert, AlertTitle, Button, Container } from '@mui/material'
import React from 'react'
import { useValue } from '../../context/ContextProvider';

const AccessMessage = () => {
    const { dispatch } = useValue();
    return (
    <Container sx={{ py: 15 }}>
      <Alert severity="error" variant="outlined">
        <AlertTitle>No Access</AlertTitle>
        Please login or register to access this page
        <Button
          variant="outlined"
          sx={{ ml: 2 }}
          startIcon={<LoginSharp />}
          onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
        >
          login
        </Button>
      </Alert>
    </Container>
  )
}

export default AccessMessage