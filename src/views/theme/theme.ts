import { createTheme } from "@mui/material"
import { Public_Sans } from "next/font/google"

const publicSans = Public_Sans({ subsets: ["latin"] })

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
              margin: 0,
              padding: 0,  
            },
        },
    },
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#ffffff",
        },
    },
    typography: {
        fontFamily: publicSans.style.fontFamily,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
})

export default theme