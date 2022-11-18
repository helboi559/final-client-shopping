import { createTheme,ThemeProvider } from "@mui/material"
// import { lightGreen } from "@mui/material/colors";
import {indigo} from '@mui/material/colors'
import {deepPurple} from '@mui/material/colors'
// import { blueGrey } from "@mui/material/colors";
// import {teal} from '@mui/material/colors'
const TEAL_COLOR = '#1de9b6';
const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[700],
    },
    secondary:{
        main:TEAL_COLOR
    }
  },
});
const CustomTheme = (props) => {
    const{children} = props
    return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}

export default CustomTheme