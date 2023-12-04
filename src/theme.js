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
      dark: "#141414",
    },
    secondary: {
      main: "#FF2145",
    },
  },
  typography: {
    fontFamily: "Sk-Modernist, sans-serif",
    main: {
      fontSize: "70px",
      fontWeight: "700",
      fontFamily: "Sk-Modernist, sans-serif",
      ...responsiveFontSizes({ xs: 42, md: 52, lg: 70 }),
    },
    subtitle: {
      fontFamily: "Sk-Modernist, sans-serif",
      fontSize: "26px",
      fontWeight: "400",
      opacity: 1,
      ...responsiveFontSizes({ xs: 18, md: 24, lg: 26 }),
    },
    menu: {
      fontFamily: "Sk-Modernist, sans-serif",
      cursor: "pointer",
      fontSize: "52px",
      fontWeight: "600",
      zIndex: 1,
      ...responsiveFontSizes({ xs: 30, md: 40, lg: 52 }),
    },
    h1: {
      textDecorationLine: "underline",
      fontWeight: "700",
      fontSize: "42px",
      ...responsiveFontSizes({ xs: 24, md: 30, lg: 42 }),
    },
    h2: {
      fontSize: "40px",
      fontWeight: "700",
      ...responsiveFontSizes({ xs: 28, md: 40 }),
    },
    h3: {
      fontSize: "22px",
      position: "relative",
      fontWeight: "600",
      cursor: "pointer",
      zIndex: 1,
      opacity: 1,
      "&::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "15px",
        bottom: "3px",
        left: "0px",
        zIndex: -1,
      },
      ...responsiveFontSizes({ xs: 20, md: 22 }),
    },
    h4: {
      fontSize: "20px",
      fontWeight: "400",
      opacity: "0.7",
      ...responsiveFontSizes({ xs: 20 }),
    },
    subtitle1: {
      fontSize: "30px",
      fontWeight: "700",
      ...responsiveFontSizes({ xs: 20, md: 24, lg: 30 }),
    },

    subtitle2: {
      fontSize: "36px",
      fontWeight: "700",
      ...responsiveFontSizes({ xs: 22, md: 36 }),
    },
    body1: {
      fontSize: "20px",
      opacity: "0.3",
      ...responsiveFontSizes({ xs: 16, md: 18, lg: 20 }),
    },
    body2: {
      fontSize: "20px",
      fontWeight: "400",
      ...responsiveFontSizes({ xs: 18, md: 20 }),
    },
  },
});

export default theme;
