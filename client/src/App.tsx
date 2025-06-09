import Hero from "./Pages/landing/Hero";
import Navbar from "./Pages/landing/Navbar";

const App = () => {
  return (
    <div className="flex flex-col bg-black pb-[2000px]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
