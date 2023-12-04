import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Circle from "../../resources/svgs/Circle.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      data-aos="fade-up"
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <img src={Circle} width={"100%"} />
      </Box>
      <Typography
        sx={{
          paddingY: {
            md: "40px",
            xs: "30px",
          },
          textAlign: "center",
          fontSize: {
            md: "24px",
            xs: "20px",
          },
          fontWeight: "400",
          opacity: 1,
          paddingX: {
            lg: "200px",
            md: "120px",
            sm: "60px",
            xs: "15px",
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
