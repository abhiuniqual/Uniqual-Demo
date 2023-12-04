import React from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/Home/HeroSection";
import Agency from "../components/Home/Agency";
import Review from "../components/Home/Review";
import Rock from "../components/Home/Rock";
import Slider from "../components/Home/Slider";

const Home = () => {
  return (
    <Box
      sx={{
        marginTop: {
          md: 12,
          xs: 20,
        },
      }}
    >
      <Helmet>
        <title>{process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <HeroSection />
      <Rock />
      <Slider />
      <Agency />
      <Review />
    </Box>
  );
};

export default Home;
