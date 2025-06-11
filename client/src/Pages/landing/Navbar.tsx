import NavbarImage from "../../assets/logoLight.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <section className="sticky top-0 z-50 px-4 flex justify-center ">
      <div className="mt-5 container max-w-7xl backdrop-blur-xl">
        <motion.div
          className="p-2 sm:px-4 grid grid-cols-2 items-center rounded-full border border-white/25"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
          // whileHover={{glare}}
        >
          {/* Logo & NameTag */}
          <motion.div className="col-span-1 gap-0.5 flex items-center ">
            <motion.img
              src={NavbarImage}
              alt=""
              className=" h-8 md:h-10 w-auto"
              initial={{ opacity: 0, skewX: 10 }}
              animate={{ opacity: 1, skewX: 0 }}
              transition={{ ease: "easeInOut", duration: 3, delay: 0.8 }}
            />
            <span className="text-white font-mono  text-xl md:text-3xl">
              CodeCrunch
            </span>
          </motion.div>

          <div className="gap-4 mr-1 flex justify-end ">
            {/* Hamburger Icon */}
            <GiHamburgerMenu className="text-white md:hidden" />
            {/* Buttons */}
            <button className="py-2 px-3 hidden md:block font-mono cursor-pointer hover:bg-[#333333]/80 text-white  bg-[#333333] rounded-lg " onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="py-2 px-3 hidden md:block  font-mono cursor-pointer hover:bg-[#333333]/80 text-white  bg-[#333333] rounded-lg">
              Register
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Navbar;
