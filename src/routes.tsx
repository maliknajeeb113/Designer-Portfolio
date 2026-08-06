import type { RouteRecord } from "vite-react-ssg";
import { Navigate } from "react-router-dom";

import App from "./App";
import Error from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Playground from "./pages/Playground";
import Ticketing from "./pages/Ticketing";
import Salesken from "./pages/Salesken";
import Ezy from "./pages/Ezy";

// Route table, shared by the client router and the static build. Every path
// here is prerendered to real HTML at build time (see `vite-react-ssg build`),
// so crawlers get full page content instead of an empty #root div.
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "ticketing", element: <Ticketing /> },
      { path: "salesken", element: <Salesken /> },
      { path: "ezy", element: <Ezy /> },
      { path: "about", element: <About /> },
      { path: "playground", element: <Playground /> },
      // Legacy URL. Vercel also 301s this server-side (see vercel.json); this
      // client route is the fallback for in-app navigation.
      { path: "bLive", element: <Navigate to="/ezy" replace />, entry: undefined },
    ],
  },
];
