import Hero from "./Hero";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="flex flex-col bg-black">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Landing;
