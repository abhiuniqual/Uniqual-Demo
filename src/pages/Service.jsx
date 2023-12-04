import React from "react";
import { Helmet } from "react-helmet-async";
import { Box } from "@mui/material";
import Hero from "../components/Service/Hero";
import Work from "../components/Service/Work";
import Client from "../components/Service/Client";
import Stages from "../components/Service/Stages";
import Experties from "../components/Service/Experties";
import TechStack from "../components/Service/TechStack";

const Service = () => {
  return (
    <Box
      sx={{
        marginTop: {
          lg: 24,
          md: 20,
          xs: 10,
        },
      }}
    >
      <Helmet>
        <title>Service | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Box
        sx={{
          margin: {
            lg: "60px 120px",
            md: "40px 60px",
            xs: "30px",
          },
        }}
      >
        <Hero />
        <Work />
        <Client />
        <Stages />
        <Experties />
        <TechStack />
      </Box>
    </Box>
  );
};

export default Service;
