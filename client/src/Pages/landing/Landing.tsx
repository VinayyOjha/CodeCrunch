import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="flex flex-col bg-black">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Landing;

// Background Gradient: bg-radial-[at_5%_35%] from-white/2 via-gray-600/20  to-black to-75%