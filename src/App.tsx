import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import BLive from "./pages/BLive";
import Body from "./pages/Body";
import Error from "./components/Error";
import Playground from "./pages/Playground";
import Footer from "./components/Footer";
import Salesken from "./pages/Salesken";
import GridTest from "./pages/GridTest"; // TEMP: design review only, see V2_DESIGN.md §11a
// import TanishqPortfolio from "./pages/TanishqPortfolio";
// import Brandshark from "./pages/Brandshark";

import { createBrowserRouter, Outlet } from "react-router-dom";

// const Redirect = ({ to }) => {
//   window.location.href = to;
// };

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
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/salesken",
        element: <Salesken />,
      },
      {
        path: "/bLive",
        element: <BLive />,
      },
      // {
      //   path: "/portfolio-project",
      //   element: <TanishqPortfolio />,
      // },
      // {
      //   path: "/brandshark",
      //   element: <Brandshark />,
      // },
      {
        path: "/playground",
        element: <Playground />,
      },
      {
        // TEMP: hand-drawn grid style comparison for design review — remove once decided
        path: "/grid-test",
        element: <GridTest />,
      },
      // {
      //   path: "/pre-onboarding",
      //   element: <Redirect to='https://eejp1kkl8an.typeform.com/to/ZyWjcdcq' />,
      // },
    ],
  },
]);

export default App;
