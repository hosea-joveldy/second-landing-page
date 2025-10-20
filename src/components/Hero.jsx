import heroPhoto from "../assets/hero-photo.png"

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-white text-center px-4 pb-10 mt-[5rem] mx-auto max-w-6xl"
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23ffffff' fill-opacity='0.35'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
        WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",

      }}
    >
      <div 
        className="flex flex-col items-center justify-center w-full max-w-[70rem] py-8"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-[Montserrat] font-bold mb-[2rem]">
          Work Smarter. <br/>Together.
        </h1>
        <p className="text-sm sm:text-md md:text-lg leading-relaxed text-gray-300 mb-[2rem] max-w-2xl">
          Taskly is the all-in-one productivity app that helps you organize projects, collaborate with your team, and hit your goals — all in one place.
        </p>

        <div className="space-x-3">
          <a href="#pricing">
            <button className="bg-blue-800 hover:bg-blue-700 px-6 py-2 tmd:px-8 md:py-3 rounded-[5rem] font-semibold transition-colors duration-200">Start Free Trial</button>
          </a>

          <a href="https://www.youtube.com">
            <button className="bg-gray-600 hover:bg-gray-500 px-6 py-2 md:px-8 md:py-3 rounded-[5rem] font-semibold transition-colors duration-200">Watch Demo</button>
          </a>
        </div>
      </div>

      <div
        className="w-full max-w-3xl h-[36rem] md:h-[48rem] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroPhoto})` }}
      ></div>
    </div>
  )
}

export default Hero