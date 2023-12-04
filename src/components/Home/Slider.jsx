import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  SvgIcon,
  Paper,
  Box,
} from "@mui/material";
import theme from "../../theme";
import { ReactComponent as Star } from "../../resources/svgs/Star.svg";
import ArrowComponent from "../common/ArrowComponent";

const textData = ["Our", "industry", "experties."];
const industries = [
  {
    title: "Health Care",
    description:
      "Custom EHR, EMR, ERX, and other software solutions for healthcare and Medicine.",
    additionalInfo:
      "We help established businesses such as hospitals, laboratories, and pharmacies, create turnkey products and simplify digital transformation.",
  },
  {
    title: "Education",
    description:
      "Educational platforms LMS, AR/VR experience, and all the digitals to learn and teach.",
    additionalInfo:
      "We help startups and organizations globally create solutions that solve the target audience's problems and make education easy and exciting.",
  },
  {
    title: "Logistics",
    description: "LMS, TMS, SCM, ERP, and other software and mobile apps.",
    additionalInfo:
      "Customs solutions to lower operational expense, optimize supply chains, and improve workflows of warehousing, transportation, cargo, delivery, etc.",
  },
  {
    title: "Marketplace",
    description: "B2B, B2C, and C2C marketplaces of any complexity and focus.",
    additionalInfo:
      "We create e-commerce products that help SMBs and big brands to achieve goal sets and increase business value.",
  },
  {
    title: "Media",
    description: "",
    additionalInfo:
      "We create audio and video streaming (OTT, VOD), entertainment, and similar solutions following the latest technology trends.",
  },
  {
    title: "Retail",
    description:
      "Complex CRM, POS, RMS, and other software for stores and large retail chains.",
    additionalInfo:
      "We help our clients introduce effective workflows, improve back-office operations, and optimize performance on all levels.",
  },
  {
    title: "Fintech",
    description:
      "Digital solutions and mobile apps for established businesses and startups.",
    additionalInfo:
      "We develop software that facilitates online payments, financials analytics, banking and ensures security, legal compliance, and data protection.",
  },
  {
    title: "Travel",
    description:
      "Booking platforms, HMS, TMS software solutions for the industry of hospitality and tourism.",
    additionalInfo:
      "We help companies and startups to optimize management, improve efficiency and meet higher custom services expectations.",
  },
];

const Slider = () => {
  //   const [isSticky, setIsSticky] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const component = document.getElementById("slider-component");
  //       if (component) {
  //         const rect = component.getBoundingClientRect();
  //         setIsSticky(rect.top <= 0);

  //         const scrollPercentage =
  //           window.scrollY /
  //           (document.documentElement.scrollHeight - window.innerHeight);

  //         const translateXValue = `${scrollPercentage * 100}px`;

  //         component.style.transform = `translateX(-${translateXValue})`;
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <Box
      id="slider-component"
      sx={{
        // position: "relative",
        // width: "100%",
        // minHeight: "100vh",
        marginY: {
          md: 20,
          xs: 10,
        },
      }}
    >
      {/* <Box sx={{ maxWidth: "100%", padding: "0 120px" }}>
        <Box sx={{ position: "relative", width: "100%" }}> */}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: theme.palette.primary.main,
          //   position: "sticky",
          //   top: 0,
          //   height: "100vh",
          //   width: "100%",
          overflowX: "hidden",
          //   position: isSticky ? "sticky" : "relative",
          //   top: 0,
          //   zIndex: isSticky ? 999 : "auto",
        }}
      >
        <Container
        //   sx={{
        //     position: "absolute",
        //     height: "100%",
        //     transform: "translateX(0px)",
        //   }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box sx={{ marginRight: "75px" }}>
              <Box
                data-aos="fade-up"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Star />
                {textData.map((item, i) => (
                  <Typography
                    variant="main"
                    key={i}
                    sx={{
                      display: "flex",
                      color: theme.palette.primary.light,
                      marginY: {
                        md: 0,
                        xs: 1,
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
            {industries.map((industry, index) => (
              <Box key={index} sx={{ minWidth: "446px", flexShrink: 0 }}>
                <Card
                  sx={{
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.primary.light,
                    position: "relative",
                    marginRight: "75px",
                    height: "486px",
                    width: "446px",
                    padding: 6,
                    "&:hover": {
                      opacity: 0.9,
                      "&:after": {
                        transform: "scaleY(1)",
                      },
                    },
                    "&:after": {
                      display: "block",
                      width: "100%",
                      height: "100%",
                      content: `" "`,
                      backgroundColor: theme.palette.secondary.main,
                      position: "absolute",
                      left: 0,
                      top: 0,
                      transformOrigin: "50% 100%",
                      transform: "scaleY(0)",
                      transition: "transform 0.3s",
                      zIndex: -1,
                    },
                  }}
                >
                  <CardContent>
                    <SvgIcon
                      sx={{
                        marginBottom: 8,
                        "&:hover .arrow-icon": {
                          color: theme.palette.primary.main,
                        },
                      }}
                      className="arrow-icon"
                    >
                      <ArrowComponent color={theme.palette.secondary.main} />
                    </SvgIcon>
                    <Typography
                      style={{
                        fontSize: "36px",
                        fontWeight: "bold",
                        opacity: 1,
                      }}
                    >
                      {industry.title}
                    </Typography>
                    <Typography
                      style={{
                        margin: "25px 0px",
                        fontWeight: "bold",
                        opacity: 1,
                      }}
                    >
                      {industry.description}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        opacity: 1,
                      }}
                    >
                      {industry.additionalInfo}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Paper>
    </Box>
    //   </Box>
    // </Box>
  );
};

export default Slider;
