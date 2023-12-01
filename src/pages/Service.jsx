import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Service/Hero";
import Work from "../components/Service/Work";
import Client from "../components/Service/Client";
import { Box } from "@mui/material";

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Service | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Box
        sx={{
          margin: {
            lg: "60px 120px",
            md: "40px 60px",
            xs: "20px",
          },
        }}
      >
        <Hero />
        <Work />
        <Client />
      </Box>
    </>
  );
};

export default Service;
