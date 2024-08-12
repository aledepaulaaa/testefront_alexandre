import { Grid } from "@mui/material"
import BannerHeader from "./components/bannerheader/BannerHeader"
import BodyMainContent from "./components/body/BodyMainContent"

export default function MainContent() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <BannerHeader />
                <BodyMainContent />
            </Grid>
        </Grid>
    )
}