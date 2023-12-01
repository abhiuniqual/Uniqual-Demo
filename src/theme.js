import { createTheme } from "@mui/material/styles";

export function responsiveFontSizes({ xs, sm, md, lg }) {
  return {
    "@media (min-width:0px)": {
      fontSize: `${xs}px`,
    },
    "@media (min-width:600px)": {
      fontSize: `${sm}px`,
    },
    "@media (min-width:900px)": {
      fontSize: `${md}px`,
    },
    "@media (min-width:1200px)": {
      fontSize: `${lg}px`,
    },
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#FF2145",
    },
  },
  typography: {
    fontFamily: "Sk-Modernist, sans-serif",
    h2: {
      fontWeight: "700",
      fontSize: "69px",
      ...responsiveFontSizes({ xs: 42, md: 69 }),
    },
    h3: {
      fontWeight: "700",
      fontSize: "26px",
      marginBottom: "10px",
      ...responsiveFontSizes({ xs: 20, md: 26 }),
    },
    h4: {
      fontWeight: "700",
      fontSize: "22px",
      ...responsiveFontSizes({ xs: 18, md: 24 }),
    },
    h5: {
      fontSize: "18px",
      fontWeight: "400",
      display: {
        sm: "block",
        xs: "none",
      },
    },
    h6: {
      fontSize: "16px",
      fontWeight: "400",
      opacity: "0.3",
      ...responsiveFontSizes({ xs: 14, md: 16 }),
    },
  },
  components: {},
});

export default theme;
