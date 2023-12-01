import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as Circle } from "../../resources/svgs/Circle.svg";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Circle />
      <Typography
        sx={{
          paddingY: {
            md: "40px",
            xs: "30px",
          },
          textAlign: "center",
          fontSize: {
            lg: "24px",
            md: "22px",
            sm: "20px",
            xs: "18px",
          },
          fontWeight: "400",
          paddingX: {
            lg: "200px",
            md: "140px",
            sm: "80px",
            xs: "20px",
          },
        }}
      >
        We create design and develop solutions for all types of web and mobile
        products. Our software development company works around the globe. We
        are located in Surat, India with a team of 50 people. We help companies
        at any stage of the product software development cycle: from R&D and
        building MVP from scratch, to scaling, UX analyzing, and improving.
      </Typography>
    </Box>
  );
};

export default Hero;
