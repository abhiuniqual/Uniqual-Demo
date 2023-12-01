import React from "react";
import { Box, Typography, Grid, Link, TextField } from "@mui/material";
import { ReactComponent as Arrow } from "../resources/svgs/Arrow.svg";
import { ReactComponent as UpArrow } from "../resources/svgs/UpArrow.svg";
import { useNavigate } from "react-router-dom";

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
          sx={{
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
              <Typography
                sx={{
                  fontSize: {
                    md: "36px",
                    xs: "28px",
                  },
                  fontWeight: "700",
                }}
              >
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
                    variant="h3"
                    sx={{
                      padding: "0 0 30px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
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
                            md: "18px",
                            xs: "16px",
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
              <Typography variant="h3" onClick={() => navigate("/service")}>
                Services
              </Typography>
              <Typography variant="h3">Projects</Typography>
              <Typography variant="h3">Team</Typography>
              <Typography variant="h3">About us</Typography>
            </Box>
            <Box
              sx={{
                marginLeft: {
                  sm: "100px",
                  xs: 0,
                },
              }}
            >
              <Typography variant="h3">Engagement model</Typography>
              <Typography variant="h3" onClick={() => navigate("/blog")}>
                Blogs
              </Typography>
              <Typography variant="h3">Contact us</Typography>
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
                "& .MuiInputBase-input": {
                  color: "white",
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
              <Typography variant="h4">Join our community</Typography>
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
          <Typography variant="h6">
            © 2022 / UniQual iTech. All rights reserved.
          </Typography>
          <Typography variant="h6">SURAT/IND</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
