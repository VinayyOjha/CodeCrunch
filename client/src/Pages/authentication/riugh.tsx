const Login = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="p-4 sm:p-2 container max-w-md mx-auto flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <span className="mt-12 font-mono font-bold text-3xl bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent inline-block">
            CodeCrunch.
          </span>
          <p className="mt-2 font-mono text-md sm:text-2xl text-white">
            Please sign in to your account.
          </p>
        </div>

        {/* Email & Password */}
        <div className="mt-8 px-4 py-4 sm:py-6 flex flex-col gap-6 rounded-md border border-white/25">
          {/* Email */}
          <div>
            <div className="flex gap-2 items-center">
              <MdOutlineMailOutline className="text-gray-200 h-8 w-8" />
              <span className="font-mono text-lg sm:text-xl text-white">
                Email
              </span>
            </div>
            <input
              type="email"
              placeholder="Enter Email"
              className="mt-4 w-full rounded-md font-mono bg-black border border-white/25 px-4 py-2 text-white focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="">
            <div className="flex gap-2 items-center">
              <RiLockPasswordLine className="text-gray-200 h-8 w-8" />
              <span className="font-mono text-lg sm:text-xl text-white">
                Password
              </span>
            </div>
            <input
              type="email"
              placeholder="Enter Password"
              className="mt-4 w-full rounded-md font-mono bg-black border border-white/25 px-4 py-2 text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-2 p-1">
          <p className="font-mono text-white/80">
            Forgot password?{" "}
            <span className="underline underline-offset-3 hover:text-white">
              Reset here
            </span>
            <span>.</span>
          </p>
        </div>

        {/* Signin */}
        <div className="mt-12 flex justify-center w-full">
          <div className="w-xs text-center border bg-purple-500/80 hover:bg-purple-500 rounded-md">
            <button
              className="p-1  rounded-xl font-mono text=lg sm:text-2xl
              hover:text-white  text-white/90"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
