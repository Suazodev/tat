import { Box, Paper, useTheme } from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "/assets/images/tattoo_studio/Piercing01.png",
  },
  {
    label: "Bird",
    imgPath: "/assets/images/tattoo_studio/Piercing02.png",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "/assets/images/tattoo_studio/TattooStudio01.png",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath: "/assets/images/tattoo_studio/TattooStudio02.png",
  },
  {
    label: "Goč, Serbia",
    imgPath: "/assets/images/tattoo_studio/TattooStudio03.png",
  },
  {
    label: "Goč, Serbia",
    imgPath: "/assets/images/tattoo_studio/TattooStudio04.png",
  },
  {
    label: "Goč, Serbia",
    imgPath: "/assets/images/tattoo_studio/TattooStudio05.png",
  },
  {
    label: "Goč, Serbia",
    imgPath: "/assets/images/tattoo_studio/TattooStudio06.png",
  },
];

export const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Paper
        square
        elevation={0}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  height: "50vh",
                  objectFit: "cover",
                  filter: "blur(3px) brightness(0.4)",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};
