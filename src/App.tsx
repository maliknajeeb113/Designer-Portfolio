import { createBrowserRouter, Navigate, Outlet, ScrollRestoration } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Playground from "./pages/Playground";
import Ticketing from "./pages/Ticketing";
import Salesken from "./pages/Salesken";
import Ezy from "./pages/Ezy";

function App() {
  return (
    <>
      {/* Restores scroll on back/forward and resets to top on new navigations —
          replaces the `window.scrollTo(0, 0)` effect each page used to run. */}
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/ticketing", element: <Ticketing /> },
      { path: "/salesken", element: <Salesken /> },
      { path: "/ezy", element: <Ezy /> },
      { path: "/about", element: <About /> },
      { path: "/playground", element: <Playground /> },
      // Legacy URL — kept so previously shared /bLive links keep working.
      { path: "/bLive", element: <Navigate to="/ezy" replace /> },
    ],
  },
]);

export default App;
