import PageShell from "../components/PageShell";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Seo from "../components/Seo";
import { PAGE_SEO, personJsonLd } from "../config/seo";

// Landing page. Navbar + Footer come from the App layout.
const Home = () => (
  <PageShell>
    <Seo seo={PAGE_SEO.home} jsonLd={personJsonLd} />
    <Hero />
    <Work />
  </PageShell>
);

export default Home;
