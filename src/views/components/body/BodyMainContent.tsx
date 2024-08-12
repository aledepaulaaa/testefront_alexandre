import React from "react"
import { cardsData } from "@/@core/cardData"
import CardMdSlider from "./CardMdSlider"
import CardMobileSlider from "./CardMobileSlider"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Button, Grid, MobileStepper, useMediaQuery, Typography, Box } from "@mui/material"

export default function BodyMainContent() {
    const [activeStep, setActiveStep] = React.useState(0)
    const isMobile = useMediaQuery("(max-width: 998px)")

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleStepChange = (step: number) => {
        setActiveStep(step)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={7} ml={1} mt={4} display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h6" color="black" fontWeight="bold">
                    Minhas Pesquisas
                </Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Box position="relative" display="flex" alignItems="center">
                    <Button
                        size="large"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        sx={{
                            position: 'absolute',
                            left: -50,
                            zIndex: 1,
                            backgroundColor: activeStep === 0 ? 'gray' : 'black',
                            color: 'white',
                            padding: '8px',
                            "&:hover": {
                                backgroundColor: "black",
                            },
                            display: isMobile ? 'none' : 'flex'
                        }}
                    >
                        <KeyboardArrowLeft />
                    </Button>
                    <Box mx={isMobile ? 0 : 4} flexGrow={1}>
                        {isMobile ? (
                            <CardMobileSlider activeStep={activeStep} />
                        ) : (
                            <CardMdSlider activeStep={activeStep} />
                        )}
                    </Box>
                    <Button
                        size="large"
                        onClick={handleNext}
                        disabled={isMobile ? activeStep === cardsData.length - 1 : activeStep === Math.ceil(cardsData.length / 3) - 1}
                        sx={{
                            position: 'absolute',
                            right: -50,
                            zIndex: 1,
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '8px',
                            "&:hover": {
                                backgroundColor: "black",
                            },
                            display: isMobile ? 'none' : 'flex'
                        }}
                    >
                        <KeyboardArrowRight />
                    </Button>
                </Box>
                <MobileStepper
                    steps={isMobile ? cardsData.length : Math.ceil(cardsData.length / 3)}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                    nextButton={
                        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                            <Button
                                onClick={handleNext}
                                disabled={isMobile ? activeStep === cardsData.length - 1 : activeStep === Math.ceil(cardsData.length / 3) - 1}
                                sx={{
                                    mt: -42,
                                    mr: -40,
                                    display: isMobile ? 'flex' : 'none',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    padding: '8px',
                                    "&:hover": {
                                        backgroundColor: "black",
                                    },
                                }}
                            >
                                <KeyboardArrowRight />
                            </Button>
                        </Grid>
                    }
                    backButton={
                        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                            <Button
                                onClick={handleBack}
                                disabled={activeStep === 0}
                                sx={{
                                    mr: 42,
                                    mt: -40,
                                    display: isMobile ? 'flex' : 'none',
                                    backgroundColor: activeStep === 0 ? 'gray' : 'black',
                                    color: 'white',
                                    padding: '8px',
                                    "&:hover": {
                                        backgroundColor: "black",
                                    },
                                }}
                            >
                                <KeyboardArrowLeft />
                            </Button>
                        </Grid>
                    }
                />
            </Grid>
        </Grid>
    )
}
