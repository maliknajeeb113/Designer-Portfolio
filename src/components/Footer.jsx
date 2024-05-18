import { FaCat } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
    return(
    <div className="flex w-screen items-center justify-between px-6 md:px-[10rem] mx-auto shadow-neu py-6 md:py-8">
        <div className="text-[rgb(156,156,156)] ">© Avni Garg</div>
        <Link to={"http://www.linkedin.com/in/maliknajeeb133"} target="_blank">
        <div className="text-[rgb(156,156,156)] flex items-center gap-1">Developed by <FaCat/></div>
        </Link>
       
    </div>)
}

export default Footer