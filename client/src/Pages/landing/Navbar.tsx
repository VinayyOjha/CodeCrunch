import NavbarImage from "../../assets/logoLight.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <section className=" py-6 px-4 flex justify-center">
      <div className="container max-w-7xl ">
        <div className="p-2 sm:px-4 grid grid-cols-2 items-center rounded border border-white/25">
          {/* Logo & NameTag */}
          <div className="col-span-1 gap-0.5 flex items-center ">
            <img src={NavbarImage} alt="" className=" h-8 md:h-10 w-auto"/>
            <span className="text-white font-mono  text-xl md:text-3xl">CodeCrunch</span>
          </div>

          <div className="gap-4 mr-1 flex justify-end ">
          {/* Hamburger Icon */}
            <GiHamburgerMenu className="text-white md:hidden"/>
            {/* Buttons */}
            <button className="hidden md:block font-mono text-white border border-white/15 tra rounded-2xl p-3">Login</button>
            <button className="p-3 hidden md:block rounded-2xl font-mono text-white border border-white/15 bg-[#333333]">Register</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
