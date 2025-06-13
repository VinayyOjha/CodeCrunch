import Hero from "./Hero";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="flex flex-col bg-black bg-radial-[at_5%_35%] from-white/2 via-gray-300/20  to-black to-75%">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Landing;
