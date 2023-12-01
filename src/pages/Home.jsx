import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
    </>
  );
};

export default Home;
