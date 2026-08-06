import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Shared layout for every route. The route table lives in src/routes.tsx so the
// static build and the client router consume the same definitions.
const App = () => (
  <>
    {/* Restores scroll on back/forward and resets to top on new navigations —
        replaces the `window.scrollTo(0, 0)` effect each page used to run. */}
    <ScrollRestoration />
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default App;
