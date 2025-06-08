import NavbarImage from "../../assets/logoLight.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <section className="py-4 px-2 flex justify-center">
      <div className="container max-w-7xl">
        <div className="p-2 px-4 grid grid-cols-2 items-center rounded-full border border-white/15">
          {/* Logo & NameTag */}
          <div className="col-span-1 gap-0.5 flex items-center ">
            <img src={NavbarImage} alt="" className=" h-8 w-auto"/>
            <span className="text-white font-mono font-semibold text-xl md:text2xl">CodeCrunch</span>
          </div>

          {/* Hamburger Icon */}
          <div className="flex justify-end gap-4 mr-1">
            <GiHamburgerMenu className="text-white md:hidden"/>
            <button className="hidden md:block font-mono text-white border border-white/15 tra rounded-2xl p-3">Log In</button>
            <button className="hidden md:block font-mono text-white border border-white/15 tra rounded-2xl p-3">Register</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
