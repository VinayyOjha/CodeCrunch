import { FaCalendar, FaTrophy } from "react-icons/fa";
import { FaCode   } from "react-icons/fa6";

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
        <div className="mt-12 px-2 grid md:grid-cols-3 gap-8 text-white/90">
          {/* First detail */}
            <div className="col-span-1 flex flex-col font-mono justify-between items-center">
              <FaCalendar className="h-16 w-auto mb-4" />
              <h3 className="mb-2 text-xl text-white font-semibold">45 Days</h3>
              <p className="text-center text-[#B3B3B3]">Complete and compete with you batchmates for the top position.</p>
            </div>
          {/* Second detail */}
          <div className="col-span-1 flex flex-col font-mono items-center text-center">
              <FaTrophy className="h-18 w-auto mb-4"/>
              <h3 className="mb-2 text-xl text-white  font-semibold">Win Big</h3>
              <p className="text-center text-[#B3B3B3]">Exciting prizes for finishers and top performers.</p>
          </div>
          {/* Third detail */}
          <div className="col-span-1 flex flex-col font-mono items-center text-center">
              <FaCode className="h-18 w-auto mb-4 font-semibold"/>
              <h3 className="mb-2 text-xl text-white ">Code Daily</h3>
              <p className="text-center text-[#B3B3B3]">Code every day. Challenge yourself. Your consistency is your superpower</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
