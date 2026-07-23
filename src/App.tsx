import Navbar from "./components/Navbar";
import About from "./pages/About";
import BLive from "./pages/BLive";
import Body from "./pages/Body";
import Error from "./components/Error";
import Playground from "./pages/Playground";
import Footer from "./components/Footer";
import Salesken from "./pages/Salesken";
import Ticketing from "./pages/Ticketing";

import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <>
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
      { path: "/", element: <Body /> },
      { path: "/ticketing", element: <Ticketing /> },
      { path: "/about", element: <About /> },
      { path: "/salesken", element: <Salesken /> },
      { path: "/bLive", element: <BLive /> },
      { path: "/playground", element: <Playground /> },
    ],
  },
]);

export default App;
