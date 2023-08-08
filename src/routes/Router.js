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
const Trades = lazy(() => import("../views/ui/Trade/Trade.js"));
const Security = lazy(() => import("../views/ui/Security/Security.js"));
const CreateSecurity = lazy(() => import("../views/ui/Security/CreateSecurity.js"));
const UpdateSecurity = lazy(() => import("../views/ui/Security/UpdateSecurity.js"));
const TradeWithSecurity = lazy(() => import("../views/ui/Trade/TradeWithSecurity.js"));
const CreateTrade = lazy(() => import("../views/ui/Trade/CreateTrade.js"));
const Register = lazy(() => import("../views/Regiser"));
// const Security=lazy(() => import("../views/ui/Security"));
const Login = lazy(() => import("../views/login"));
/*****Routes******/


//*****UserProfile Routes******/

const MyAccount = lazy(() => import("../views/userprofile/MyAccount"));

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
      { path: "/login", exact: true, element: <Login /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/security", exact: true, element: <Security /> },
      { path: "/createsecurity", exact: true, element: <CreateSecurity /> },
      { path: "/updatesecurity", exact: true, element: <UpdateSecurity /> },
      { path: "/security/gettradewithsecurity/:id", exact: true, element: <TradeWithSecurity /> },
      { path: "/trade", exact: true, element: <Trades /> },
      { path: "/updatesecurity/:id", exact: true, element: <UpdateSecurity/> },
      { path: "/register", exact: true, element: <Register /> },
      { path: "/myaccount", exact: true, element: <MyAccount /> },
      { path: "/createtrade", exact: true, element: <CreateTrade /> },


    ],
  },
];

export default ThemeRoutes;
