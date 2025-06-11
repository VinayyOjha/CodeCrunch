import { FaCalendar, FaTrophy } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { motion } from "motion/react";
import { FaUserGroup } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import AnimatedSection from "../../components/animations/ComponentAnimation";
import BlurText from "../../blocks/TextAnimations/BlurText/BlurText";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="p-3 mt-6">
      <div className="mb-10 container max-w-6xl mx-auto">
        {/* Headings and catchy title */}
        <div className="p-2 flex flex-col justify-center items-center  ">
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

          <div className="pt-4 mb-6">
            <div className="p-2 rounded-sm sm:bg-[#171717] font-mono text-md sm:text-xl text-center text-[#B3B3B3] ">
              <span className="text-neutral-300/60">"CodeCrunch</span> feels
              like a competition which lasts 45 days."
            </div>
          </div>
        </div>

        {/* Explore Now Button */}
        <div onClick={() => navigate("/login")} className="flex justify-center">
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
          <div className="py-6 mt-14 px-2 grid md:grid-cols-3 gap-12 sm:gap-8 text-white/90 ">
            {/* First detail */}

            <motion.div
              className="p-2 py-6 col-span-1 flex flex-col items-center font-mono 
            hover:border border-white/15 bg-white/5 rounded-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              whileInView={{}}
            >
              <FaCalendar className="h-16 w-auto mb-4" />
              <h3 className="mb-2 text-xl text-white font-semibold">45 Days</h3>
              <p className="text-center text-[#B3B3B3]">
                Compete with your batchmates for the top position.
              </p>
            </motion.div>

            {/* Second detail */}

            <motion.div
              className="px-2 py-6 col-span-1 flex flex-col font-mono items-center 
            hover:border border-white/15 bg-white/5 rounded-xl"
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
            hover:border border-white/15 text-center bg-white/5 rounded-xl"
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
        <AnimatedSection>
          <div className="mt-12 mb-20 w-full flex flex-col justify-center items-center text-white">
            <span className="mt-16 mb-12 font-mono font-bold text-center text-4xl lg:text-5xl">
              Prizes & Rewards
            </span>
            <div className="w-full max-w-4xl rounded-lg bg-white/5 border-white/10">
              <div className="p-6 flex flex-col justify-center text-center">
                <FaUserGroup className="mb-5 h-12 w-auto text-purple-400 " />
                <p className="font-mono font-bold text-2xl text-white mb-2">
                  Top coders rise
                </p>
                <p className="mb-2 font-mono  text-2xl text-purple-400 ">
                  1-on-1 Mock Interviews.
                </p>
                <p className="font-mono font-semibold text-md text-white/40">
                  Stand out as a top coder and unlock exclusive mock interviews
                  with industry experts.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Competition rules */}
        <AnimatedSection>
          <div className="mb-20 mt-10">
            <p className="mb-10 text-center text-4xl lg:text-5xl text-white font-bold font-mono">
              Competition Rules
            </p>

            <div className="p-6 max-w-4xl mx-auto rounded-lg bg-white/5">
              <div className="space-y-6 font-mono">
                <div className="flex gap-3 items-start ">
                  <IoCheckmarkDoneOutline className=" shrink-0 h-6 w-6 text-purple-400" />
                  <p className="text-white/60">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Facilis, reprehenderit!
                  </p>
                </div>

                <div className="flex gap-3 items-start ">
                  <IoCheckmarkDoneOutline className=" shrink-0 h-6 w-6 text-green-400" />
                  <p className="text-white/60">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consectetur adipisicing
                  </p>
                </div>

                <div className="flex gap-3 items-start ">
                  <IoCheckmarkDoneOutline className=" shrink-0 h-6 w-6 text-red-400" />
                  <p className="text-white/60">Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="flex gap-3 items-start ">
                  <IoCheckmarkDoneOutline className=" shrink-0 h-6 w-6 text-blue-400" />
                  <p className="text-white/60">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                  </p>
                </div>

                <div className="flex gap-3 items-start ">
                  <IoCheckmarkDoneOutline className=" shrink-0 h-6 w-6 text-yellow-400" />
                  <p className="text-white/60">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Ready to compete */}
        <div className="mt-10 max-w-3xl mx-auto">
          {/* <BlurText /> */}
          <div className="flex justify-center">
            <BlurText
              text="Ready to compete?"
              delay={150}
              animateBy="words"
              direction="top"
              // onAnimationComplete={handleAnimationComplete}
              className="mt-10 mb-5 justify-center text-center text-3xl sm:text-4xl lg:text-5xl text-white font-bold font-mono"
            />
          </div>

          {/* <p className="mb-5 text-center text-4xl lg:text-5xl text-white font-bold font-mono">
            Ready to compete?
          </p> */}

          <p className="mb-4 text-center text-xl sm:text-2xl text-white/50 font-mono">
            Join the 45 days CodeCrunch competition and elevate your coding
            problem solving apprpach.
          </p>
          <div onClick={() => navigate("/login")} className="flex justify-center">
            <button className="p-2 rounded-md items-center font-mono text-xl text-white bg-violet-700">
              Register Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
