import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ReactComponent as Arrow } from "../../resources/svgs/Arrow.svg";
import { ReactComponent as Agile } from "../../resources/svgs/Agile.svg";
import { ReactComponent as Book } from "../../resources/svgs/Book.svg";
import { ReactComponent as Chat } from "../../resources/svgs/Chat.svg";
import { ReactComponent as Data } from "../../resources/svgs/Data.svg";
import { ReactComponent as Deep } from "../../resources/svgs/Deep.svg";
import { ReactComponent as Product } from "../../resources/svgs/Product.svg";
import theme from "../../theme";

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
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
            marginLeft: "10px",
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
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          marginBottom: 4,
        }}
      >
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
          How We Work
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {WorkApproch.map((work, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box sx={{ paddingY: 1 }}>
              <Box sx={{ display: "flex", gap: 4, paddingY: 2 }}>
                {work.image}
                <Typography
                  sx={{
                    fontSize: { md: "30px", xs: "24px" },
                    fontWeight: 700,
                  }}
                >
                  {work.title}
                </Typography>
              </Box>
              <Typography
                sx={{
                  width: "60%",
                  fontSize: "20px",
                  opacity: "0.7",
                  display: "inline-block",
                  alignItems: "center",
                }}
              >
                {work.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Work;
