import Header from "./header/Header"
import { CssBaseline, Grid } from "@mui/material"

interface ILayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
    return (
        <Grid item xs={12}>
            <CssBaseline />
            <Header />
            {children}
        </Grid>
    )
}