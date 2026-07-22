import Container from "./Container";
import Card from "./Card";
import { jobsData } from "../constants";

const Work = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <p className="mb-20 text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Work</p>
        <div className="flex flex-col gap-20 sm:gap-28">
          {jobsData.map((job, idx) => (
            <Card key={`${job.headline.highlight}-${idx}`} {...job} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Work;
