import MoreVertIcon from "@mui/icons-material/MoreVert"
import LogoSVGNoRadius from "../assets/LogoSVGNoRadius"
import { Box, Grid, IconButton, Typography, useMediaQuery } from "@mui/material"

export default function NavUserInfo() {
    const isMobile = useMediaQuery("(max-width: 1240px)")
    // #E0E4E7 cor de fundo ACME Corporation Mobile
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} gap={3} display="flex" justifyContent="flex-end" alignItems="center">
                {isMobile ? (
                    <Grid 
                        item 
                        xs={12}
                        display="flex"
                        alignItems="center"
                        gap={1.5}
                        p={2}
                        sx={{ bgcolor: "#EEF2F3", height: "78px", borderBottom: "1px solid #E0E4E7" }}>
                        <LogoSVGNoRadius />
                        <Typography variant="body2" fontWeight="bold">
                            ACME Corporation
                        </Typography>
                    </Grid>
                ) : (
                    <Box
                        display="flex"
                        alignItems="center"
                        border="1px solid #242528"
                        borderRadius="4px"
                        gap={1.5}
                        p={1}
                    >
                        <LogoSVGNoRadius />
                        <Typography variant="body2">
                            ACME Corporation
                        </Typography>
                    </Box>
                )}
                {isMobile ? (
                    <>
                    </>
                ) : (
                    <Box>
                        <Typography variant="body1" color="white">
                            Adriano Lima
                        </Typography>
                        <Typography variant="body2" color="#8A9099">
                            adriano.lima@acmecorp.com
                        </Typography>
                    </Box>
                )}
                {isMobile ? (
                    <>
                    </>
                ) : (
                    <IconButton>
                        <MoreVertIcon sx={{ color: "white" }} />
                    </IconButton>
                )}
            </Grid>
        </Grid >
    )
}