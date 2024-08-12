import { cardsData } from "@/@core/cardData"
import CardTwoIconStar from "../assets/CardTwoIconStar"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CircleGreenCard_01 from "../assets/CircleGreenCard_01"
import { ICardSliderProps } from "@/@core/interfaces/ICardSliderProps"
import { Box, Card, CardContent, CardHeader, Divider, Grid, Stack, Typography } from "@mui/material"

export default function CardMdSlider({ activeStep }: ICardSliderProps) {
    const startIndex = activeStep * 3
    const endIndex = startIndex + 3

    return (
        <Stack direction="row" spacing={2} alignItems="center">
            {cardsData.slice(startIndex, endIndex).map((card, index) => (
                <Box key={card.id}>
                    {index < cardsData.length - 1 ? (
                        <Card
                            sx={{
                                marginBottom: 2,
                                border: "2px solid black",
                                borderRadius: 2,
                                height: "262px",
                                width: "230px",
                                borderBottom: "20px solid black",
                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    "& .MuiTypography-root": {
                                        color: "#FF5D55",
                                    },
                                },
                            }}
                        >
                            <CardHeader
                                title={
                                    <Grid item xs={12} display="flex">
                                        <Grid item xs={12} display="flex" justifyContent="start" alignItems="start">
                                            <Grid item xs={1}>
                                                <Divider
                                                    orientation="vertical"
                                                    sx={{
                                                        height: "50px",
                                                        width: "2px",
                                                        backgroundColor: "black",
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Typography variant="body2" color="black">
                                                    {card.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    fontWeight="bold"
                                                    color={card.subtitle === "Pesquisa sem título" ? "#8A9099" : "black"}
                                                >
                                                    {card.subtitle}
                                                </Typography>
                                            </Grid>
                                            {card.subtitle === "Pesquisa sem título" ? (
                                                <CardTwoIconStar className="CardTwoIconStar" color="#C7B2FF" />
                                            ) : (
                                                <CircleGreenCard_01 />
                                            )}
                                        </Grid>
                                    </Grid>
                                }
                            />
                            <CardContent>
                                {/* Conteúdo do Card */}
                            </CardContent>
                        </Card>
                    ) : (
                        <Card
                            sx={{
                                marginBottom: 2,
                                border: "2px solid black",
                                borderRadius: 2,
                                height: "262px",
                                width: "230px",
                                backgroundColor: "black",
                                color: "white",
                                borderBottom: "20px solid black",
                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    "& .MuiTypography-root": {
                                    },
                                },
                            }}
                        >
                            <CardHeader
                                title={
                                    <Grid
                                        item
                                        xs={12}
                                        mt={10}
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="space-around"
                                    >
                                        <Grid item xs={12} md={6} display="flex" flexDirection="column">
                                            <Typography variant="body2" color="white">
                                                {card.title === "Ver todas" && "VER TODAS"}
                                            </Typography>
                                        </Grid>
                                        <ArrowForwardIcon sx={{ position: "relative", left: "30px" }} />
                                    </Grid>
                                }
                            />
                        </Card>
                    )}
                </Box>
            ))}
        </Stack>
    )
}