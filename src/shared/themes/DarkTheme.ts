import {createTheme} from '@mui/material'
import {yellow, cyan} from '@mui/material/colors'

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700] ,
            dark: yellow[800] ,
            light: yellow[900] ,
            contrastText: '#ffffff',
        },
        secondary: {
            main: cyan[700] ,
            dark: cyan[800] ,
            light: cyan[900] ,
            contrastText: '#ffffff' ,
        },
        background: {
            default: '#303134' ,
            paper: '#202124'
        }
    }
})