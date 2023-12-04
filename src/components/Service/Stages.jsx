import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ReactComponent as Arrow } from "../../resources/svgs/Arrow.svg";
import { ReactComponent as Process } from "../../resources/svgs/Process.svg";
import { ReactComponent as UX } from "../../resources/svgs/UX.svg";
import { ReactComponent as Dev } from "../../resources/svgs/Dev.svg";
import { ReactComponent as QA } from "../../resources/svgs/QA.svg";
import { ReactComponent as Deliver } from "../../resources/svgs/Deliver.svg";
import theme from "../../theme";
import AOS from "aos";
import "aos/dist/aos.css";

const menuItems = [
  "DISCOVER",
  "UX/UI DESIGN",
  "DEVELOPMENT",
  "QA & TESTING",
  "DELIVER",
];

const contentData = {
  DISCOVER: {
    title: "Discovery Stage",
    description: "We find out what your customers want, and how to build it.",
    points: ["Ideation", "Customer interviews", "Roadmapping"],
    image: <Process />,
  },
  "UX/UI DESIGN": {
    title: "UX/UI Design Stage",
    description: "We create a seamless and user-friendly experience.",
    points: ["Wireframing", "Prototyping", "Usability testing"],
    image: <UX />,
  },
  DEVELOPMENT: {
    title: "Development Stage",
    description: "We bring your ideas to life with code.",
    points: ["Coding", "Testing", "Deployment"],
    image: <Dev />,
  },
  "QA & TESTING": {
    title: "QA & Testing Stage",
    description: "We ensure your product is bug-free and reliable.",
    points: ["Manual testing", "Automated testing", "Performance testing"],
    image: <QA />,
  },
  DELIVER: {
    title: "Deliver Stage",
    description: "We launch your product and provide ongoing support.",
    points: ["Deployment", "Maintenance", "User feedback"],
    image: <Deliver />,
  },
};

const Stages = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [selectedMenu, setSelectedMenu] = useState("DISCOVER");
  const [selectedContent, setSelectedContent] = useState(
    contentData[selectedMenu]
  );

  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem);
    setSelectedContent(contentData[menuItem]);
  };

  return (
    <Box
      data-aos="fade-up"
      sx={{
        marginY: {
          lg: 16,
          md: 10,
          xs: 4,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          marginBottom: {
            lg: 8,
            md: 6,
            sm: 2,
          },
          marginTop: 4,
        }}
      >
        <Arrow />
        <Typography variant="h2">Our Process</Typography>
      </Box>
      <Box
        sx={{
          marginTop: {
            lg: 6,
            md: 4,
            xs: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            justifyContent: "space-between",
            marginBottom: {
              lg: 6,
              md: 4,
              sm: 2,
            },
          }}
        >
          {menuItems.map((menuItem) => (
            <Typography
              key={menuItem}
              variant="h3"
              sx={{
                width: "max-content",
                paddingX: 1,
                marginY: 1,
                "&::after": {
                  backgroundColor:
                    selectedMenu === menuItem
                      ? theme.palette.secondary.main
                      : null,
                },
              }}
              onClick={() => handleMenuClick(menuItem)}
            >
              {menuItem}
            </Typography>
          ))}
        </Box>
        <Box sx={{ marginY: 3 }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={8}>
              <Box sx={{ marginY: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    marginBottom: 3,
                  }}
                >
                  {selectedContent.title}
                </Typography>
                <Box>
                  <Typography variant="h4" sx={{ opacity: 1 }}>
                    {selectedContent.description}
                  </Typography>
                  <Box marginTop={2}>
                    {selectedContent.points.map((point) => (
                      <Typography key={point} variant="h4" sx={{ opacity: 1 }}>
                        - {point}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {selectedContent.image}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Stages;
