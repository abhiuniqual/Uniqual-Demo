import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Home from "../../resources/svgs/Home.svg";
import { ReactComponent as Star } from "../../resources/svgs/Star.svg";
import theme from "../../theme";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  "Triumph",
  "Creativity",
  "Passion",
  <>
    Respect
    <Box
      sx={{
        color: theme.palette.secondary.main,
        fontSize: {
          lg: "70px",
          md: "52px",
          xs: "32px",
          width: "max-content",
        },
        marginLeft: "5px",
      }}
    >
      .
    </Box>
  </>,
];

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        paddingX: {
          md: 0,
          xs: 2,
        },
        height: {
          md: "80vh",
          xs: "100vh",
        },
        display: "flex",
        flexDirection: {
          md: "row",
          xs: "column",
        },
        justifyContent: "center",
        alignItems: "center",
        gap: {
          lg: 20,
          md: 16,
          xs: 10,
        },
      }}
    >
      <Box data-aos="fade-up">
        <img src={Home} width={"100%"} />
      </Box>
      <Box data-aos="fade-up" sx={{ display: "flex", flexDirection: "column" }}>
        <Star />
        {data.map((item, i) => (
          <Typography
            variant="main"
            key={i}
            sx={{
              display: "flex",
              marginY: {
                md: 0,
                xs: 1,
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
