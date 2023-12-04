import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Switch, Box } from "@mui/material";
import theme from "../../theme";
import AOS from "aos";
import "aos/dist/aos.css";

const titles = ["Why", "we", "ROCK?"];

const textContent = [
  <>
    We're{" "}
    <span style={{ backgroundColor: "#FF2145", color: "white" }}>
      not your typical
    </span>{" "}
    software company.{" "}
    <span>
      <img
        src="https://uniqualitech.com/public/front/assets/images/uniqual-logo.svg"
        alt="logo"
      />
    </span>
    {"  "}
    is a fast-growing software firm that empowers humble startups and global
    enterprises. We work in small teams, and make decisions quickly without
    dwelling and over-analyzing – great decisions usually are no brainers. We
    believe in very high standards, and everyone holds up to it, and as a
    result, we are able to accomplish{" "}
    <span style={{ backgroundColor: "#FF2145", color: "white" }}>
      a lot with less!
    </span>
  </>,
  "We're a team with a passion for solving the problem of how organizations share knowledge (time/people/energy/meetings).",
  <>
    <span style={{ backgroundColor: "#FF2145", color: "white" }}>
      Believe it or not,
    </span>{" "}
    but we’ve got clients that have stuck with us since{" "}
    <span style={{ backgroundColor: "#FF2145", color: "white" }}>
      fons et origo?
    </span>{" "}
    If that’s not proof that we’re going the right way,{"   "}
    <span style={{ backgroundColor: "#FF2145", color: "white" }}>
      what is?
    </span>{" "}
  </>,
  "Huuuh, While this may seem radical to how many companies work, it works really well for us. We have very high customer satisfaction, superb code, and great test coverage!",
  <>
    <span style={{ backgroundColor: "#FF2145", color: "white" }}>
      #WeareSavage,
    </span>{" "}
    not Average.
  </>,
];

const Rock = () => {
  const [switchActive, setSwitchActive] = useState(false);

  const handleSwitchChange = () => {
    setSwitchActive(!switchActive);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        color: theme.palette.primary.light,
        marginY: 8,
      }}
    >
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginY: {
                  md: 4,
                  xs: 2,
                },
                marginRight: 4,
              }}
            >
              {titles.map((title, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: {
                      md: "end",
                    },
                  }}
                >
                  <Typography
                    data-aos="fade-left"
                    className="aos-init aos-animate"
                    sx={{
                      fontFamily: "Sk-Modernist, sans-serif",
                      fontSize: {
                        lg: "70px",
                        md: "50px",
                        xs: "40px",
                      },
                      fontWeight: "bold",
                      opacity: 1,
                      lineHeight: {
                        md: 1.2,
                        xs: 1.5,
                      },
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
              ))}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: {
                    md: "flex-end",
                  },
                  marginTop: {
                    md: 2,
                    xs: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    width: {
                      md: "4rem",
                      xs: "2rem",
                    },
                    height: {
                      md: "4rem",
                      xs: "2rem",
                    },
                  }}
                >
                  <img
                    src="https://uniqualitech.com/public/front/assets/images/footer-down.svg"
                    alt="Footer Down"
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
                <Box>
                  <Switch
                    onChange={handleSwitchChange}
                    sx={{
                      "& .MuiSwitch-thumb": {
                        backgroundColor: "white",
                        width: "2.4rem",
                        height: "2.3rem",
                      },
                      "& .Mui-checked": {
                        transform: "translateX(40px)",
                      },
                      "&.MuiSwitch-track": {
                        borderRadius: "25px",
                      },
                      "& .Mui-checked+.MuiSwitch-track ": {
                        backgroundColor: switchActive ? "#FF2145" : "gray",
                        opacity: switchActive ? 1 : 0.5,
                        width: "6rem",
                        borderRadius: "25px",
                      },
                      width: "6rem",
                      height: "3.5rem",
                      padding: "0.5rem",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={8} sx={{ overflow: "hidden" }}>
            <Box
              switchActive={switchActive}
              data-aos="fade-right"
              sx={{
                display: "flex",
                flexDirection: "column",
                marginY: {
                  md: 4,
                  xs: 2,
                },
              }}
            >
              {textContent.map((text, index) => (
                <Typography
                  key={index}
                  variant="p"
                  className="active-title"
                  sx={{
                    fontSize: "20px",
                    marginBottom: 2,
                    position: "relative",
                    filter: switchActive ? "none" : "blur(10px)",
                    zIndex: 1,
                    transition: "0.7s",
                    fontFamily: "Sk-Modernist, sans-serif",
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Rock;
