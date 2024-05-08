import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6"
const Error = () => {
    return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-10">
        <div className="text-5xl font-medium">
            :( Oops! Looks like you stumbled away.
        </div>

        <div className="text-5xl font-medium">
            Here :) Let me help you.
        </div>

        <Link to={'/'}>
        <button
                className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
                id="get-in-touch"
              >
                <FaArrowLeft />
                <span>Go Back</span>
              </button>
        </Link>



    </div>
    )
}

export default Error