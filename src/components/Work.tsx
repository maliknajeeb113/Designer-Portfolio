import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Card from "./Card";
import { jobsData } from "../constants";

const Work = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Eyebrow className="mb-20">Work</Eyebrow>
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
