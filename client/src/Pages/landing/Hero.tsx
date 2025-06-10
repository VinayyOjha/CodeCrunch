import { FaCalendar, FaTrophy } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { motion } from "motion/react";
import AnimatedSection from "../../components/animations/ComponentAnimation";

const Hero = () => {
  return (
    <section className="p-3 sm:p-2 mt-6">
      <div className="container max-w-6xl mx-auto">
        {/* Headings and catchy title */}
        <div className="p-2 flex flex-col justify-center items-center ">
          <motion.p
            className="p-2 hidden md:block font-mono text-md text-center text-white/60"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
          >
            What you fear is often just a barrier in your mind. Start typing.
            Start building.
          </motion.p>
          <p className="font-mono text-3xl sm:text-4xl md:text-6xl text-white text-center">
            Enhance your Data Structure And Algorithms skills with...
          </p>

          {/* Code Crunch animation */}

          <motion.span
            className="px-1 pt-2 md:pt-4 font-serif font-bold text-4xl sm:text-5xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 2 }}
          >
            <motion.span
              className="bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              CodeCrunch.
            </motion.span>
          </motion.span>

          <div className="pt-4 sm:pt-6 mb-8">
            <div className="p-2 rounded-sm sm:bg-[#171717] font-mono text-md sm:text-xl text-center text-[#B3B3B3] ">
              <span className="text-neutral-300/60">"CodeCrunch</span> feels
              like a competition which lasts 45 days."
            </div>
          </div>
        </div>

        {/* Explore Now Button */}
        <div className="flex justify-center">
          <motion.button
            className="p-2 px-4 text-center rounded-lg cursor-pointer font-mono border border-white/25 hover:bg-[#333333]/70 hover:text-white/80  text-white"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Now
          </motion.button>
        </div>

        {/* Details about Code Crunch */}
        <AnimatedSection>
          <div className="mt-14 px-2 grid md:grid-cols-3 gap-12 sm:gap-8 text-white/90">
            {/* First detail */}

            <motion.div
              className="p-2 py-6 col-span-1 flex flex-col items-center font-mono 
            hover:border border-white/15 bg-[#333333]/40 rounded-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              whileInView={{}}
            >
              <FaCalendar className="h-16 w-auto mb-4" />
              <h3 className="mb-2 text-xl text-white font-semibold">45 Days</h3>
              <p className="text-center text-[#B3B3B3]">
                Complete and compete with you batchmates for the top position.
              </p>
            </motion.div>

            {/* Second detail */}

            <motion.div
              className="px-2 py-6 col-span-1 flex flex-col font-mono items-center 
            hover:border border-white/15 bg-[#333333]/40 rounded-xl"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaTrophy className="h-18 sm:h-16 w-auto mb-4 " />
              <h3 className="mb-2 text-xl text-white font-semibold">Win Big</h3>
              <p className="text-center text-[#B3B3B3]">
                Exciting prizes for finishers and top performers.
              </p>
            </motion.div>

            {/* Third detail */}

            <motion.div
              className="p-2 py-6 col-span-1 flex flex-col font-mono items-center 
            hover:border border-white/15 text-center bg-[#333333]/40 rounded-xl"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaCode className="h-16 w-auto mb-4 " />
              <h3 className="mb-2 text-xl text-white font-semibold">
                Code Daily
              </h3>
              <p className="text-center text-[#B3B3B3]">
                Code every day. Challenge yourself. Your consistency is your
                superpower.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Finalists and Top Finsihers */}
        <div className=" border-0 ">
            <div className="max-w-5xl flex justify-center border border-amber-100 text-white">
                <div className="flex flex-col">
                  
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// Best one so far..
// initial={{opacity:0, y:20}}
// animate={{opacity:1, y:0}}
// transition={{ ease: "easeInOut", delay: 0.6, duration: 2 }}

// Second One
// initial={{ opacity: 0, skewY: 7 }}
// animate={{ opacity: 1, skewY: 0 }}

// Third One
