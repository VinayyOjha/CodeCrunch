import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="p-2 w-full">
      <div className=" p-4 sm:max-w-7xl flex sm:justify-between justify-center mx-auto border-t border-t-white/35">
        {/* Socials */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://x.com/OjhaVinaya95890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-2xl text-white hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-ojha-9910a831a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-white hover:text-blue-700 transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/VinayyOjha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-white hover:text-blue-700 transition-colors duration-300" />
          </a>
        </div>

        {/* Msg to audience */}
        <div className="text-sm sm:text-md md:text-lg">
          <div className="flex text-white/80 font-mono">
            Made with <div className="relative">
                <div className="px-0.5">❤️</div>
                <div className="absolute inset-0 animate-ping">❤️</div>
                </div> by Vinay Ojha.
          </div>
        </div>
      </div>
      {/* <div className="py-2 text-center font-mono text-md text-white/60">
        2025 Copyright CodeCrunch.
      </div> */}
    </section>
  );
};

export default Footer;
