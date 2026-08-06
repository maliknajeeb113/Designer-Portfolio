import type { RouteRecord } from "vite-react-ssg";
import { Navigate } from "react-router-dom";

import App from "./App";
import Error from "./components/Error";

// Route table, shared by the client router and the static build. Every path here
// is prerendered to real HTML at build time, so crawlers get full page content
// instead of an empty #root div.
//
// Pages are code-split: each `lazy` import becomes its own chunk, so a visitor
// landing on one case study doesn't download the other two. `entry` points the
// SSG build at the source file so it can emit that route's stylesheet links
// up front (without it, prerendered pages can flash unstyled before hydration).
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await import("./pages/Home")).default }),
        entry: "src/pages/Home.tsx",
      },
      {
        path: "ticketing",
        lazy: async () => ({ Component: (await import("./pages/Ticketing")).default }),
        entry: "src/pages/Ticketing.tsx",
      },
      {
        path: "salesken",
        lazy: async () => ({ Component: (await import("./pages/Salesken")).default }),
        entry: "src/pages/Salesken.tsx",
      },
      {
        path: "ezy",
        lazy: async () => ({ Component: (await import("./pages/Ezy")).default }),
        entry: "src/pages/Ezy.tsx",
      },
      {
        path: "about",
        lazy: async () => ({ Component: (await import("./pages/About")).default }),
        entry: "src/pages/About.tsx",
      },
      {
        path: "playground",
        lazy: async () => ({ Component: (await import("./pages/Playground")).default }),
        entry: "src/pages/Playground.tsx",
      },
      // Legacy URL. Vercel also 301s this server-side (see vercel.json); this
      // client route is the fallback for in-app navigation.
      { path: "bLive", element: <Navigate to="/ezy" replace /> },
    ],
  },
];
