import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ReactComponent as Arrow } from "../../resources/svgs/Arrow.svg";
import { ReactComponent as Agile } from "../../resources/svgs/Agile.svg";
import { ReactComponent as Book } from "../../resources/svgs/Book.svg";
import { ReactComponent as Chat } from "../../resources/svgs/Chat.svg";
import { ReactComponent as Data } from "../../resources/svgs/Data.svg";
import { ReactComponent as Deep } from "../../resources/svgs/Deep.svg";
import { ReactComponent as Product } from "../../resources/svgs/Product.svg";
import theme from "../../theme";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkApproch = [
  {
    image: <Agile />,
    title: (
      <>
        AGILE <br /> APPROACH
      </>
    ),
    description: "An iterative approach to achieve the best results",
  },
  {
    image: <Product />,
    title: (
      <>
        PRODUCT <br /> MANAGEMENT
      </>
    ),
    description: "We treat your products like our own",
  },
  {
    image: <Book />,
    title: (
      <>
        FULL <br /> TRANSPARNCY
      </>
    ),
    description: "Full transparency over the development process",
  },
  {
    image: <Deep />,
    title: (
      <>
        DEEP <br /> TECH EXPERISE
      </>
    ),
    description: (
      <>
        Best engineering practices in our DNA and
        <span
          style={{
            color: theme.palette.secondary.main,
            borderBottom: `2px solid ${theme.palette.secondary.main}`,
            marginLeft: "10px",
            fontWeight: "700",
          }}
        >
          Github
        </span>
      </>
    ),
  },
  {
    image: <Chat />,
    title: (
      <>
        SMOOTH <br /> COMMUNICATION
      </>
    ),
    description: "Direct chat with team members in fluent English",
  },
  {
    image: <Data />,
    title: (
      <>
        DATA <br /> AND IP PROTECTION
      </>
    ),
    description: "High security standards, GDPR compliance",
  },
];

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
        <Typography variant="h2">How We Work</Typography>
      </Box>
      <Grid container spacing={4}>
        {WorkApproch.map((work, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box sx={{ paddingY: 1 }}>
              <Box sx={{ display: "flex", gap: 4, paddingY: 2 }}>
                {work.image}
                <Typography sx={{ lineHeight: 1.5, opacity: 1 }}>
                  {work.title}
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  width: "80%",
                  display: "inline-block",
                  alignItems: "center",
                  opacity: 1,
                }}
              >
                {work.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
