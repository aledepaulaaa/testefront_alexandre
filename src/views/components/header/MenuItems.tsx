import { headerItems } from "@/@core/interfaces/IHeaderItems"
import { Box, Grid, Typography, useMediaQuery } from "@mui/material"

export default function MenuItems() {
    const isMobile = useMediaQuery("(max-width: 1240px)")
    // #E0E4E7 cor da linha entre cada item

    return (
        <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection={isMobile ? "column" : "row"}
        >
            {headerItems.map((item) => (
                <Box width="100%" key={item.id}>
                    <Typography
                        p={2}
                        variant="body2"
                        sx={{
                            textTransform: "uppercase",
                            color: "#8A9099",
                            textAlign: "center",
                            borderBottom: isMobile ? "1px solid #E0E4E7" : "none",
                        }}
                    >
                        {item.title}
                    </Typography>
                </Box>
            ))}
        </Grid>
    )
}