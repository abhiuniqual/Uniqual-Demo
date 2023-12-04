import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ReactComponent as Arrow } from "../../resources/svgs/Arrow.svg";
import { ReactComponent as Dapp } from "../../resources/svgs/Dapp.svg";
import { ReactComponent as HealthFitness } from "../../resources/svgs/HealthFitness.svg";
import { ReactComponent as Healthcare } from "../../resources/svgs/Healthcare.svg";
import { ReactComponent as Marketplace } from "../../resources/svgs/Marketplace.svg";
import { ReactComponent as SocialApps } from "../../resources/svgs/SocialApps.svg";
import { ReactComponent as StreamingApps } from "../../resources/svgs/StreamingApps.svg";
import { ReactComponent as Blockchain } from "../../resources/svgs/Blockchain.svg";
import { ReactComponent as Fintech } from "../../resources/svgs/Fintech.svg";
import { ReactComponent as IoT } from "../../resources/svgs/BLE_NFC_IoT.svg";
import theme from "../../theme";
import AOS from "aos";
import "aos/dist/aos.css";

const menuItems = [
  "ON-DEMAND DELIVERY APPS",
  "FINTECH",
  "HEALTH CARE",
  "SOCIAL APPS",
  "MARKETPLACE",
  "STREAMING APPS",
  "HEALTH & FITNESS",
  "BLOCKCHAIN",
  "BLE, NFC & IoT",
];

const contentData = {
  "ON-DEMAND DELIVERY APPS": {
    image: <Dapp />,
    title: "ON-DEMAND DELIVERY APPS",
    description:
      "Harness the power of technology to transform your on-demand delivery business. Our innovative solutions empower you to streamline operations, optimize routes, and enhance customer satisfaction.",
  },
  FINTECH: {
    image: <Fintech />,
    title: "FINTECH",
    description:
      "Empower your customers with cutting-edge financial technologies. We help you develop innovative fintech solutions that are secure, scalable, and user-friendly.",
  },
  "HEALTH CARE": {
    image: <HealthFitness />,
    title: "HEALTH CARE",
    description:
      "Innovate healthcare with our state-of-the-art software solutions. We help you improve patient care, enhance efficiency, and reduce costs.",
  },
  "SOCIAL APPS": {
    image: <SocialApps />,
    title: "SOCIAL APPS",
    description:
      "Create engaging social apps that bring people together. We help you develop innovative social platforms that are secure, scalable, and user-friendly.",
  },
  MARKETPLACE: {
    image: <Marketplace />,
    title: "MARKETPLACE",
    description:
      "Create a thriving online marketplace where buyers and sellers connect seamlessly. We help you develop robust e-commerce platforms that are secure, scalable, and user-friendly.",
  },
  "STREAMING APPS": {
    image: <StreamingApps />,
    title: "STREAMING APPS",
    description:
      "Create streaming apps that deliver exceptional content experiences. We help you develop cutting-edge streaming platforms that are secure, scalable, and user-friendly.",
  },
  "HEALTH & FITNESS": {
    image: <Healthcare />,
    title: "HEALTH & FITNESS",
    description:
      "Develop innovative health and fitness apps that motivate and inspire users. We help you create engaging and effective fitness tracking, nutrition guidance, and wellness coaching solutions.",
  },
  BLOCKCHAIN: {
    image: <Blockchain />,
    title: "BLOCKCHAIN",
    description:
      "Harness the power of blockchain to revolutionize your business operations. We help you develop secure, transparent, and scalable blockchain solutions.",
  },
  "BLE, NFC & IoT": {
    image: <IoT />,
    title: "BLE, NFC & IoT",
    description:
      "Leverage BLE, NFC, and IoT technologies to create innovative connected experiences. We help you develop smart devices, data analytics platforms, and seamless user interfaces.",
  },
};

const Experties = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [selectedMenu, setSelectedMenu] = useState("ON-DEMAND DELIVERY APPS");
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
        <Typography variant="h2">Experties</Typography>
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
            <Box
              sx={{
                marginTop: {
                  lg: 6,
                  md: 4,
                  xs: 2,
                },
              }}
            >
              <Box>{selectedContent.image}</Box>
              <Typography
                variant="subtitle1"
                sx={{
                  marginY: 3,
                }}
              >
                {selectedContent.title}
              </Typography>
              <Typography variant="h4" sx={{ opacity: 1 }}>
                {selectedContent.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Experties;
