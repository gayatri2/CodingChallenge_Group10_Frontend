import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Security=lazy(() => import("../views/ui/Security/Security.js"));
const CreateSecurity=lazy(() => import("../views/ui/Security/CreateSecurity.js"));
const UpdateSecurity=lazy(() => import("../views/ui/Security/UpdateSecurity.js"));
const TradeWithSecurity=lazy(() => import("../views/ui/Trade/TradeWithSecurity.js"));
const Trade=lazy(() => import("../views/ui/Trade/Trade.js"));
/*****Routes******/


//*****UserProfile Routes******/

const MyAccount=lazy(() => import("../views/userprofile/MyAccount"));

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/security", exact: true, element: <Security /> },
      { path: "/createsecurity", exact: true, element: <CreateSecurity /> },
      { path: "/updatesecurity", exact: true, element: <UpdateSecurity/> },
      { path: "/security/gettradewithsecurity", exact: true, element: <TradeWithSecurity/> }, 
      { path: "/trade", exact: true, element: <Trade /> },
      { path: "/myaccount", exact: true, element: <MyAccount /> },


    ],
  },
];

export default ThemeRoutes;
