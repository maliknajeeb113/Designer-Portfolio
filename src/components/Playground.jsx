import car_gif from "../assets/gifs/car.gif";
import { useEffect } from "react";

const Playground = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
    <div className="bg-primary w-screen top-[120px] flex flex-col font-poppins items-center px-6 md:px-[10rem] mx-auto mt-[150px] min-h-screen">
        <div className="text-[rgb(182,154,137)] text-5xl font-medium">Playground</div>
        {/* Contact me */}

      <div
        id="contact"
        className="container text-2xl md:text-5xl flex flex-col mb-10 my-16 shadow-neu rounded-3xl items-center justify-center text-center py-10 md:py-20 px-8 gap-8 font-medium"
      >
            <img src={car_gif} alt="loading..." />
      </div>

      {/* contact me */}
    </div>
    )
}

export default Playground