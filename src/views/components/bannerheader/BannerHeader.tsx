import Image from "next/image"
import GIF from "../../../../public/gif_card_04.png"
import ButtonAddIcon from "../assets/ButtonAddIcon"
import CircleGreenCard_01 from "../assets/CircleGreenCard_01"
import ProgressBar_Card_03 from "../assets/ProgressBar_Card_03"
import CircleOutlinedCard_01 from "../assets/CircleOutlinedCard_01"
import { Box, Button, Card, CardContent, CardHeader, Grid, Stack, Typography } from "@mui/material"

export default function BannerHeader() {
    return (
        <Box sx={{ p: 8, width: "100%", backgroundColor: "black" }}>
            <Box sx={{ mt: 8 }}>
                <Typography variant="caption" color="white" textTransform="uppercase">
                    Resumo Mensal
                </Typography>
                <Typography variant="h6" color="white" textTransform="uppercase">
                    Janeiro, 2023
                </Typography>
            </Box>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6} md={2}>
                    <Card sx={{ display: "flex", flexDirection: "column", backgroundColor: "#242528", height: "171px" }}>
                        <CardHeader
                            title={
                                <Grid container flexDirection="row" justifyContent="space-between">
                                    <Typography variant="h4" color="white">
                                        0
                                        <span style={{ color: "#8A9099", fontSize: "18px", marginLeft: 4 }}>
                                            /5
                                        </span>
                                    </Typography>
                                    <CircleGreenCard_01 />
                                </Grid>
                            }
                        />
                        <CardContent sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <Typography variant="body1" mt={-4} width="100px" textTransform="uppercase" color="#8A9099">
                                Pesquisas Em Campo
                            </Typography>
                            <CircleOutlinedCard_01 />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ backgroundColor: "#242528", height: "171px" }}>
                        <CardHeader
                            title={
                                <Grid item xs={12} display="flex" flexDirection="column">
                                    <Typography variant="h4" color="white" alignItems="center" noWrap>
                                        300
                                    </Typography>
                                    <Typography variant="body1" textTransform="uppercase" width="150px" color="#8A9099">
                                        Pesquisas Em Roteirização
                                    </Typography>
                                </Grid>
                            }
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Card sx={{ display: "flex", flexDirection: "column", backgroundColor: "#242528", height: "171px" }}>
                        <CardHeader
                            title={
                                <Grid item xs={12} md={4} display="flex" flexDirection="column">
                                    <Typography variant="h4" color="white" display="flex" alignItems="center">
                                        2.000
                                        <span style={{ color: "#8A9099", fontSize: "18px", marginLeft: 4 }}>
                                            /10.000
                                        </span>
                                    </Typography>
                                    <Typography variant="body1" textTransform="uppercase" width="100%" color="#8A9099">
                                        Disparos Feitos
                                    </Typography>
                                </Grid>
                            }
                        />
                        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <ProgressBar_Card_03 />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ backgroundColor: "#C7B2FF" }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Stack spacing={2} flexDirection="column" alignItems="center">
                                <Image
                                    alt="Gif Animado"
                                    src={GIF}
                                    height={92}
                                    width={92}
                                    priority
                                />
                                <Typography variant="h6" textAlign="center" fontWeight="bold" color="black">
                                    Pronto para conhecer seu cliente?
                                </Typography>
                                <Button
                                    sx={{ marginTop: 3, height: "48px" }}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    endIcon={<ButtonAddIcon />}
                                >
                                    Nova Pesquisa
                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
