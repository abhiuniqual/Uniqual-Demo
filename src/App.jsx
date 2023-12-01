import "./App.css";
import { Suspense } from "react";
import Routes from "./Routes";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <ScrollToTop />
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
          <Footer />
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
