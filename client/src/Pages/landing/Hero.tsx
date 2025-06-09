// import { CiCalendar } from "react-icons/ci";

const Hero = () => {
  return (
    <section className="p-2 ">
      <div className="container max-w-6xl mx-auto">

        {/* Headings and catchy title */}
        <div className="p-2 flex flex-col justify-center items-center ">
          <p className="p-2 hidden md:block font-mono text-md text-center text-white">
            What you fear is often just a barrier in your mind. Start typing.
            Start building.
          </p>
          <p className="font-mono text-3xl sm:text-4xl md:text-6xl text-white text-center">
            Enhance your Data Structure And Algorithms skills with...
          </p>
          <span className="px-1 pt-2 md:pt-4 font-serif font-bold text-4xl sm:text-5xl md:text-7xl bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            CodeCrunch.
          </span>
          <div className="pt-6">
            <div className="p-2 rounded-sm sm:bg-[#171717] font-mono text-md sm:text-xl text-center text-[#B3B3B3]">
              <span className="text-neutral-500">`CodeCrunch`</span> like a competition but it's 45 days long.
            </div>
          </div>
        </div>

        {/* Details about Code Crunch */}
        <div className="">

        </div>
      </div>
    </section>
  );
};

export default Hero;
