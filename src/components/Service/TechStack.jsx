import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ReactComponent as Arrow } from "../../resources/svgs/Arrow.svg";
import { ReactComponent as Kotlin } from "../../resources/svgs/kotlin.svg";
import { ReactComponent as Android } from "../../resources/svgs/and.svg";
import { ReactComponent as FireBase } from "../../resources/svgs/firebase.svg";
import theme from "../../theme";
import AOS from "aos";
import "aos/dist/aos.css";

const menuItems = [
  "ANDROID APP",
  "IOS APP",
  "HYBRID APP",
  "WEB FRONTEND",
  "BACKEND",
  "DATABASES",
  "INFASTRUCTURE",
  "UX/UI DESIGN",
];

const contentData = {
  "ANDROID APP": {
    title: "Android App",
    description:
      "We use Clean Architecture and Redux approaches to build reliable and extendable applications that solve business needs and that users fall in love with. Following Google design and UX guidelines we build the apps that are subsequently featured on Google Play.",
  },
  "IOS APP": {
    title: "Ios App",
    description:
      "We use the latest technologies and approaches to build ios app applications that solve business needs and that users fall in love with.",
  },
  "HYBRID APP": {
    title: "Hybrid App",
    description:
      "We use the latest technologies and approaches to build hybrid app applications that solve business needs and that users fall in love with.",
  },
  "WEB FRONTEND": {
    title: "Web Frontend",
    description:
      "We use the latest technologies and approaches to build web frontend applications that solve business needs and that users fall in love with.",
  },
  BACKEND: {
    title: "Backend",
    description:
      "We use the latest technologies and approaches to build backend applications that solve business needs and that users fall in love with.",
  },
  DATABASES: {
    title: "Databases",
    description:
      "We use the latest technologies and approaches to build databases applications that solve business needs and that users fall in love with.",
  },
  INFASTRUCTURE: {
    title: "Infastructure",
    description:
      "We use the latest technologies and approaches to build infastructure applications that solve business needs and that users fall in love with.",
  },
  "UX/UI DESIGN": {
    title: "UX/UI Design",
    description:
      "We use the latest technologies and approaches to build ux/ui design applications that solve business needs and that users fall in love with.",
  },
};

const Tech = [
  {
    image: <Kotlin />,
    name: "Kotlin",
  },
  {
    image: <FireBase />,
    name: "FireBase",
  },
  {
    image: <Android />,
    name: "Android Studio",
  },
];

const TechStack = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [selectedMenu, setSelectedMenu] = useState("ANDROID APP");
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
        }}
      >
        <Arrow />
        <Typography variant="h2">Technology Stack</Typography>
      </Box>
      <Box sx={{ marginY: 2 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginY: {
                  md: 0,
                  xs: 2,
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
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                {selectedContent.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  marginY: 3,
                  opacity: 1,
                }}
              >
                {selectedContent.description}
              </Typography>
              {selectedMenu === "ANDROID APP" && (
                <Box
                  sx={{
                    display: "flex",
                    width: "50%",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {Tech.map((t, i) => (
                    <Box key={i} sx={{ diaplay: "flex" }}>
                      <Box sx={{ width: "40px", height: "40px", marginY: 4 }}>
                        {t.image}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: {
                            md: "20px",
                            xs: "18px",
                          },
                          opacity: 1,
                        }}
                      >
                        {t.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TechStack;
