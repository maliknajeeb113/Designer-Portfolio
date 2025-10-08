import React from 'react';
import { Link } from 'react-router-dom';
import { FaBehance,FaLinkedinIn,FaXTwitter,FaInstagram } from "react-icons/fa6";

const Socials = () => {
    return(
        <div className="flex flex-row items-center gap-x-5">
        <Link to={"https://www.behance.net/avniigarg"} target="_blank"><button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
            <FaBehance className="w-5 h-5 font-semibold"/>
        </button></Link>
        <Link to={"https://www.linkedin.com/in/garg-avni/"} target="_blank"><button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
            <FaLinkedinIn className="w-5 h-5"/>
        </button></Link>
        <Link to={"https://twitter.com/avniigarg"} target="_blank"> <button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
            <FaXTwitter className="w-5 h-5"/>
        </button></Link>
        <Link to={"https://www.instagram.com/avnigarg.ux/"} target="_blank"><button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
            <FaInstagram className="w-5 h-5"/>
        </button></Link>

    </div>
    )
}

export default Socials;