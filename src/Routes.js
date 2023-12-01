import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { retry } from "./common/utils/CommonFunctions";
import Blog from "./pages/Blog";
import Service from "./pages/Service";

const Home = lazy(() => retry(() => import("./pages/Home")));
const FourOhFour = lazy(() => retry(() => import("./pages/FourOhFour")));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/* ",
      element: <Navigate to="/404" />,
    },
    {
      path: "/404",
      element: <FourOhFour />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);

  return routes;
};

export default Routes;
