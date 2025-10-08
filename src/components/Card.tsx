import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";
import { JobData } from "../constants/constant";

const Card = (props: JobData) => {
  const { imgLink, jobTitle, companyName, desc, linkTo } = props;
  return (
    <div className='flex flex-col gap-10' id='cards'>
      <div className='shadow-neu flex flex-col md:flex-row-reverse gap-4 md:gap-20 p-6 md:p-10 rounded-3xl justify-between items-center'>
        <div className='md:w-1/2 ' id='project-image'>
          <img src={imgLink} className='rounded-2xl w-full object-fit' />
        </div>
        <div
          id='project-description'
          className='flex flex-col gap-6 md:w-1/2 justify-between'>
          <div className='flex flex-col gap-4'>
            <div className='text-[rgb(156,156,156)] font-thin'>{companyName}</div>
            <div className='text-2xl'>{jobTitle}</div>
            <div className='text-[rgb(156,156,156)]  md:text-lg font-thin'>
              {desc}
            </div>
          </div>
          <Button to={linkTo}>
            <FaArrowRight />
            <span>View Project</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
