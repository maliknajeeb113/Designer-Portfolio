import { MdOutlineWork } from "react-icons/md";
const WorkExperienceCard = ({ company, period, title, description }) => {
  return (
    <div className="shadow-neu flex flex-col gap-4 p-8 rounded-3xl justify-between">
      <div className="text-[rgb(156,156,156)]">
        {company} | {period}
        </div>
        <div className="text-2xl">{title}</div>
        <div className="text-[rgb(156,156,156)] md:text-lg font-thin ">
        {description}
      </div>     
    </div>
  );
};

export default WorkExperienceCard;
