import { Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

const FourOhFour = () => {
  return (
    <>
      <Helmet>
        <title>Home | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Typography>Home</Typography>
    </>
  );
};

export default FourOhFour;
