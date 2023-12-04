import React, { useEffect } from "react";
import { Box, Typography, Grid, Link, TextField } from "@mui/material";
import { ReactComponent as Arrow } from "../resources/svgs/Arrow.svg";
import { ReactComponent as UpArrow } from "../resources/svgs/UpArrow.svg";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "Work with us",
    links: [
      {
        label: "+91 87485 98749",
        url: "tel:+918748598749",
      },
      {
        label: "Contact us",
        url: "https://uniqualitech.com/contact",
      },
    ],
  },
  {
    title: "Follow us",
    links: [
      {
        label: "Twitter",
        url: "https://twitter.com/UniQualiTech9",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/uniqualitech/",
      },
    ],
  },
  {
    title: "Join Us",
    links: [
      {
        label: "Apply now",
        url: "https://uniqualitech.com/apply-now",
      },
    ],
  },
];

const Footer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        margin: {
          md: "60px 0 0",
          xs: "40px 0 0",
        },
      }}
    >
      <Box
        sx={{
          paddingY: 2,
          paddingX: {
            md: "50px",
            xs: "30px",
          },
        }}
      >
        <Typography
          data-aos="fade-right"
          sx={{
            opacity: 1,
            overflow: "hidden !importnat",
            fontWeight: "700",
            fontSize: {
              md: "32px",
              xs: "28px",
            },
          }}
        >
          Looking for something else?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            padding: {
              md: "80px 0 60px 0",
              xs: "60px 0 40px 0",
            },
          }}
        >
          <Box
            sx={{
              width: "40%",
            }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Arrow />
              <Typography variant="subtitle2" data-aos="fade-right">
                Contact
              </Typography>
            </Box>
          </Box>
          <Grid container>
            {data.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    marginTop: {
                      md: 0,
                      xs: 4,
                    },
                  }}
                >
                  <Typography
                    data-aos="fade-right"
                    variant="h3"
                    sx={{
                      padding: "0 0 30px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    data-aos="fade-right"
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    {item.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        color="inherit"
                        sx={{
                          cursor: "pointer",
                          fontFamily: "Sk-Modernist, sans-serif",
                          fontSize: {
                            md: "20px",
                            xs: "18px",
                          },
                          fontWeight: "400",
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            justifyContent: "space-between",
            padding: {
              md: "48px 0",
              xs: "30px 0",
            },
            borderTop: "1px solid #333333",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                sm: "row",
                xs: "column",
              },
              marginBottom: {
                md: 0,
                xs: 4,
              },
            }}
          >
            <Box>
              <Typography
                data-aos="fade-right"
                variant="h3"
                sx={{ marginBottom: 1 }}
                onClick={() => navigate("/service")}
              >
                Services
              </Typography>
              <Typography
                data-aos="fade-right"
                variant="h3"
                sx={{ marginBottom: 1 }}
              >
                Projects
              </Typography>
              <Typography
                data-aos="fade-right"
                variant="h3"
                sx={{ marginBottom: 1 }}
              >
                Team
              </Typography>
              <Typography
                data-aos="fade-right"
                variant="h3"
                sx={{ marginBottom: 1 }}
              >
                About us
              </Typography>
            </Box>
            <Box
              sx={{
                marginLeft: {
                  sm: "100px",
                  xs: 0,
                },
              }}
            >
              <Typography
                data-aos="fade-right"
                variant="h3"
                sx={{ marginBottom: 1 }}
              >
                Engagement model
              </Typography>
              <Typography
                data-aos="fade-right"
                variant="h3"
                sx={{ marginBottom: 1 }}
                onClick={() => navigate("/blog")}
              >
                Blogs
              </Typography>
              <Typography
                data-aos="fade-right"
                variant="h3"
                sx={{ marginBottom: 1 }}
              >
                Contact us
              </Typography>
            </Box>
          </Box>
          <Box>
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #FFFFFF",
                fontSize: "16px",
                fontWeight: "500",
                margin: 0,
                paddingX: { md: "16px", xs: "12px" },
                "& .MuiInputBase-root-MuiOutlinedInput-root": {
                  color: "white",
                  opacity: 1,
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  opacity: 1,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: 0,
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "end",
                marginTop: 2,
              }}
            >
              <UpArrow />
              <Typography
                data-aos="fade-right"
                variant="h4"
                sx={{ opacity: 1, fontWeight: "600" }}
              >
                Join our community
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography variant="body1">
            © 2022 / UniQual iTech. All rights reserved.
          </Typography>
          <Typography variant="body1">SURAT/IND</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
