import hero from "../assets/hero.jpeg";
const Body = () => {
    console.log("body")
    return (
    <main className="bg-primary top-[120px] absolute flex flex-col justify-center items-center px-16 md:px-10 mx-auto" id="body">
        <div className="container flex flex-col md:flex-row-reverse gap-10 items-center" id="hero">
            <div id="hero-img" className="flex items-center justify-center rounded-full overflow-hidden md:w-6/12">
                <img src={hero} alt="" className="" />
            </div>
            <div id="hero-text">
                <div className="text-5xl font-medium font-poppins leading-snug">
                    Hi, I'm Avni. A UX/UI designer based in Bangalore.
                </div>
            </div>

        </div>
        
    </main>
    )
}

export default Body