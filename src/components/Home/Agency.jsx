import React, { useEffect } from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import { ReactComponent as BlackStar } from "../../resources/svgs/blackstar.svg";
import { ReactComponent as ArrowDown } from "../../resources/svgs/ArrowDown.svg";
import theme from "../../theme";
import AOS from "aos";
import "aos/dist/aos.css";

const Agency = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          marginY: {
            md: 10,
            sm: 6,
            xs: 4,
          },
          paddingX: {
            lg: 26,
            md: 14,
            xs: 4,
          },
          paddingY: {
            md: 18,
            sm: 10,
            xs: 8,
          },
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <BlackStar />
                <Typography
                  data-aos="fade-up"
                  sx={{
                    opacity: 1,
                    fontSize: {
                      md: "40px",
                      xs: "30px",
                    },
                    fontWeight: "700",
                  }}
                >
                  Agency
                </Typography>
              </Box>
              <Typography
                data-aos="fade-Right"
                sx={{
                  opacity: 1,
                  fontSize: {
                    lg: "30px",
                    md: "26px",
                    xs: "24px",
                  },
                  fontWeight: "700",
                  marginY: {
                    md: 6,
                    xs: 4,
                  },
                }}
              >
                We create experience and build products together that are
                shaping our future.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <ArrowDown />
                <Link
                  sx={{
                    cursor: "pointer",
                    fontFamily: theme.typography.fontFamily,
                    color: theme.palette.primary.light,
                    textDecorationColor: theme.palette.primary.light,
                    fontSize: {
                      md: "20px",
                      xs: "18px",
                    },
                    fontWeight: "700",
                  }}
                >
                  About Uniqual
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                  md: "center",
                  xs: "start",
                },
              }}
            >
              <Typography
                data-aos="fade-Right"
                sx={{
                  opacity: 1,
                  fontWeight: "700",
                  fontSize: {
                    md: "26px",
                    xs: "22px",
                  },
                }}
              >
                Professionals in team
              </Typography>
              <Typography
                data-aos="fade-Right"
                sx={{
                  opacity: 1,
                  fontSize: {
                    lg: "180px",
                    xs: "120px",
                  },
                  fontWeight: "700",
                }}
              >
                40+
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Agency;
