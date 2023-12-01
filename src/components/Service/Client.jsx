import React from "react";
import BR from "../../resources/flags/BR.svg";
import US from "../../resources/flags/us.svg";
import G from "../../resources/flags/G.svg";
import JAP from "../../resources/flags/JAP.svg";
import IND from "../../resources/flags/IND.svg";
import NZ from "../../resources/flags/NZ.svg";
import UAE from "../../resources/flags/UAE.svg";
import CA from "../../resources/flags/can.svg";
import FR from "../../resources/flags/france.svg";
import GE from "../../resources/flags/germany.svg";
import ND from "../../resources/flags/ned.svg";
import NR from "../../resources/flags/norway.svg";
import SP from "../../resources/flags/spain.svg";
import SW from "../../resources/flags/swd.svg";
import theme from "../../theme";
import { Box, Typography, Grid } from "@mui/material";
import { ReactComponent as Arrow } from "../../resources/svgs/Arrow.svg";

const FlagData = [
  {
    Flag: US,
    country: "USA",
  },
  {
    Flag: CA,
    country: "CANADA",
  },
  {
    Flag: SP,
    country: "SPAIN",
  },
  {
    Flag: SW,
    country: "SWEDEN",
  },
  {
    Flag: ND,
    country: "NETHERLAND",
  },
  {
    Flag: NR,
    country: "NORWAY",
  },
  {
    Flag: FR,
    country: "FRANCE",
  },
  {
    Flag: GE,
    country: "GERMANY",
  },
  {
    Flag: NZ,
    country: "NEW ZEALAND",
  },
  {
    Flag: BR,
    country: "INDIA",
  },
  {
    Flag: IND,
    country: "UAE ",
  },
  {
    Flag: UAE,
    country: "JAPAN",
  },
  {
    Flag: JAP,
    country: "GUATEMALA",
  },
  {
    Flag: G,
    country: "SOUTH AFRICA",
  },
];

const Client = () => {
  const gridItems = [];

  for (let i = 0; i < FlagData.length; i += 4) {
    const currentGridData = FlagData.slice(i, i + 4);
    gridItems.push(
      <Grid item xs={12} sm={6} md={3}>
        {currentGridData.map((item, index) => (
          <Box key={item.country} sx={{ display: "flex", marginY: 2, gap: 2 }}>
            <img src={item.Flag} alt={item.country} />
            <Typography variant="body2" color={theme.palette.primary.light}>
              {item.country}
            </Typography>
          </Box>
        ))}
      </Grid>
    );
  }
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
          We serve worldwide
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {gridItems}
        </Grid>
      </Box>
    </>
  );
};

export default Client;
