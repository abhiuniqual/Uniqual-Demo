import React from "react";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const FourOhFour = () => {
  return (
    <Box
      sx={{
        marginTop: {
          md: 20,
          xs: 10,
        },
      }}
    >
      <Helmet>
        <title>404 | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Typography>404</Typography>
    </Box>
  );
};

export default FourOhFour;
