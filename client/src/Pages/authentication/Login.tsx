import { Input } from "@/components/ui/input";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <section className="h-full bg-black">
      <div className="p-6 sm:p-4 gap-2 h-screen flex flex-col justify-center items-center max-w-xl mx-auto \">
        {/* Component 1: Prompt to Client */}
        <div className="mb-12 sm:mb-5 text-center text-white">
          <p className="font-mono font-bold text-3xl bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent inline-block">
            CodeCrunch.
          </p>
          <p className="mt-2 font-mono text-md sm:text-2xl text-white">
            Please sign in to your account.
          </p>
        </div>

        {/* Component 2: Email & Password Section */}
        <div className="p-4 flex flex-col gap-6 w-full rounded-md border bg-white/5 border-white/20">
          {/* Email */}
          <div>
            <div className="flex gap-2">
              <MdOutlineMailOutline className="text-gray-200 h-6 w-auto" />
              <span className="font-mono text-lg sm:text-xl text-white">
                Email
              </span>
            </div>

            {/* <input
              type="email"
              placeholder="Enter Email"
              className="mt-4 w-full rounded-md font-mono bg-black border border-white/15 px-4 py-2 text-white focus:outline-none"
            /> */}
            <Input
              type="email"
              placeholder="Enter Email"
              className=" mt-2 font-mono text-lg"
            />
          </div>

          {/* Password Section */}
          <div className="mt-4">
            <div className="flex gap-2">
              <RiLockPasswordLine className="text-gray-200 h-6 w-auto" />
              <span className="font-mono text-lg sm:text-xl text-white">
                Password
              </span>
            </div>

            {/* <input
              type="email"
              placeholder="Enter Password"
              className="mt-4 w-full rounded-md font-mono bg-black border border-white/15 px-4 py-2 text-white focus:outline-none"
            /> */}
            <Input
              type="password"
              placeholder="Enter Password"
              className=" mt-2 font-mono text-lg"
            />
          </div>
        </div>

        {/* Component 3: Forgot Password Section */}
        <div className="pl-1 flex font-mono text-sm text-white/55 text-start w-full mb-4">
          <p>Forgot Password?</p>
          <span className="ml-1 underline underline-offset-auto">
            Reset here
          </span>
          <span>.</span>
        </div>

        {/* Component 4: Sign In button */}
        <div className="min-w-xs">
          <button
            className="py-2 font-mono font-bold text-lg w-full rounded-md
           text-white bg-purple-500"
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
