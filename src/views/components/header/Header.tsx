import React from "react"
import LogoSVG from "../assets/LogoSVG"
import MenuItems from "./MenuItems"
import NavUserInfo from "./NavUserInfo"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material"
import NotificationSVG from "../assets/NotificationSVG"

export default function Header() {
    const isMobile = useMediaQuery("(max-width: 1240px)")
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <AppBar position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    height: "65px",
                    width: "100%",
                    borderBottom: "1px solid #242528",
                    boxShadow: "none",
                }}
            >
                <Toolbar>
                    <Box display="flex" alignItems="center">
                        <LogoSVG />
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                sx={{ mr: 2 }}
                                onClick={handleDrawerToggle}
                            >
                                {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        )}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        {!isMobile && <MenuItems />}
                    </Box>
                    {!isMobile && <NavUserInfo />
                        ||
                        <IconButton>
                            <NotificationSVG />
                        </IconButton>
                    }
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="top"
                variant="temporary"
                open={isMobile && isDrawerOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: "block" }, width: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mt: 2 }}>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <NavUserInfo />
                <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    <MenuItems />
                    <Box p={2} display="flex" alignItems="center" flexDirection="column" height="150px">
                        <Typography variant="body1" fontWeight="bold">
                            Adriano Lima
                        </Typography>
                        <Typography variant="body2" color="#8A9099">
                            adriano.lima@acmecorp.com
                        </Typography>
                        <Divider sx={{ mt: 4, mb: 2, width: "183px" }} color="#E0E4E7" />
                        <Typography variant="body1">
                            Logout
                        </Typography>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    )
}