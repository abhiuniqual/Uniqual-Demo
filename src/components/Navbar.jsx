import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../resources/svgs/Logo.svg";
import { ReactComponent as Humburger } from "../resources/svgs/Humburger.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(40px)",
          zIndex: 999,
          top: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: {
              md: "20px 48px",
              xs: "15px 30px",
            },
          }}
        >
          <Link to="https://uniqualitech.com/" sx={{ cursor: "pointer" }}>
            <Logo />
          </Link>
          <Typography variant="h5">
            Maverick Software Development House - Surat<sup>/IND</sup>
          </Typography>
          <Paper sx={{ cursor: "pointer", backgroundColor: "transparent" }}>
            <Humburger />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
