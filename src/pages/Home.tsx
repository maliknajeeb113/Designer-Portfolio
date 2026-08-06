import PageShell from "../components/PageShell";
import Hero from "../components/Hero";
import Work from "../components/Work";

// Landing page. Navbar + Footer come from the App layout.
const Home = () => (
  <PageShell>
    <Hero />
    <Work />
  </PageShell>
);

export default Home;
