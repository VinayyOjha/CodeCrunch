import { MdOutlineMailOutline, MdOutlinePerson } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Register = () => {

  return (
    <section className="h-full bg-black">
      <div className="p-6 sm:p-4 gap-2 h-screen flex flex-col justify-center items-center max-w-xl mx-auto">
        {/* Component 1: Prompt to Client */}
        <div className="mb-8 sm:mb-5 text-center text-white">
          <p className="font-mono font-bold text-3xl bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent inline-block">
            CodeCrunch.
          </p>
          <p className="mt-2 font-mono text-md sm:text-2xl text-white">
            Create your account.
          </p>
        </div>

        {/* Component 2: Registration Form */}
        <div className="p-4 flex flex-col gap-6 w-full rounded-md border bg-white/5 border-white/20">
          {/* Name */}
          <div>
            <div className="flex gap-2">
              <MdOutlinePerson className="text-gray-200 h-6 w-auto" />
              <span className="font-mono text-lg sm:text-xl text-white">
                Name
              </span>
            </div>
            
            <input
              type="text"
              placeholder="Enter Full Name"
              className="mt-4 w-full rounded-md font-mono bg-black border border-white/15 px-4 py-2 text-white focus:outline-none"
            />
          </div>

          {/* Course Selection */}
          <div>
            <div className="flex gap-2">
              <svg className="text-gray-200 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-mono text-lg sm:text-xl text-white">
                Course
              </span>
            </div>
            
            <div className="mt-4">
              <Select>
                <SelectTrigger className="w-full rounded-md font-mono bg-black border border-white/15 px-4 py-2 text-white focus:outline-none">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent className="bg-black border border-white/15">
                  <SelectItem value="computer-science" className="text-white hover:bg-white/10">Computer Science</SelectItem>
                  <SelectItem value="web-development" className="text-white hover:bg-white/10">Web Development</SelectItem>
                  <SelectItem value="data-science" className="text-white hover:bg-white/10">Data Science</SelectItem>
                  <SelectItem value="mobile-development" className="text-white hover:bg-white/10">Mobile Development</SelectItem>
                  <SelectItem value="artificial-intelligence" className="text-white hover:bg-white/10">Artificial Intelligence</SelectItem>
                  <SelectItem value="cybersecurity" className="text-white hover:bg-white/10">Cybersecurity</SelectItem>
                  <SelectItem value="software-engineering" className="text-white hover:bg-white/10">Software Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Email */}
          <div>
            <div className="flex gap-2">
              <MdOutlineMailOutline className="text-gray-200 h-6 w-auto" />
              <span className="font-mono text-lg sm:text-xl text-white">
                Email
              </span>
            </div>
            
            <input
              type="email"
              placeholder="Enter Email"
              className="mt-4 w-full rounded-md font-mono bg-black border border-white/15 px-4 py-2 text-white focus:outline-none"
            />
          </div>

          {/* Password Section */}
          <div>
            <div className="flex gap-2">
              <RiLockPasswordLine className="text-gray-200 h-6 w-auto" />
              <span className="font-mono text-lg sm:text-xl text-white">
                Password
              </span>
            </div>
            
            <input
              type="password"
              placeholder="Enter Password"
              className="mt-4 w-full rounded-md font-mono bg-black border border-white/15 px-4 py-2 text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Component 3: Register Button */}
        <div className="w-full mb-4">
          <button className="py-2 font-mono font-bold text-lg w-full rounded-md text-white bg-purple-500">
            Register
          </button>
        </div>

        {/* Component 4: Divider */}
        <div className="flex items-center w-full mb-4">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="px-4 font-mono text-sm text-white/55">or</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Component 5: Google Sign In */}
        <div className="w-full mb-4">
          <button className="py-2 px-4 font-mono font-bold text-lg w-full rounded-md text-white bg-white/10 border border-white/20 flex items-center justify-center gap-3">
            <FaGoogle className="h-5 w-5" />
            Sign in with Google
          </button>
        </div>

        {/* Component 6: Login Link */}
        <div className="font-mono text-sm text-white/55 text-center">
          <p>Already have an account?</p>
          <span className="ml-1 underline underline-offset-auto cursor-pointer hover:text-white/80">Sign in here</span>
          <span>.</span>
        </div>
      </div>
    </section>
  );
};

export default Register;

// import React, { useState } from "react";
// import { MdOutlineMailOutline, MdOutlinePerson } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { FaGoogle } from "react-icons/fa";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     course: "",
//     email: "",
//     password: ""
//   });

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleRegister = () => {
//     console.log("Registration data:", formData);
//   };

//   const handleGoogleSignIn = () => {
//     console.log("Google sign in clicked");
//   };

//   return (
//     <section className="h-full bg-black">
//       <div className="p-6 sm:p-4 gap-2 h-screen flex flex-col justify-center items-center max-w-xl mx-auto">
//         {/* Component 1: Prompt to Client */}
//         <div className="mb-8 sm:mb-5 text-center text-white">
//           <p className="font-mono font-bold text-3xl bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent inline-block">
//             CodeCrunch.
//           </p>
//           <p className="mt-2 font-mono text-md sm:text-2xl text-white">
//             Create your account.
//           </p>
//         </div>

//         {/* Component 2: Registration Form */}
//         <div className="p-4 flex flex-col gap-6 w-full rounded-md border bg-white/5 border-white/20">
//           {/* Name */}
//           <div>
//             <div className="flex gap-2">
//               <MdOutlinePerson className="text-gray-200 h-6 w-auto" />
//               <span className="font-mono text-lg sm:text-xl text-white">
//                 Name
//               </span>
//             </div>
            
//             <input
//               type="text"
//               placeholder="Enter Full Name"
//               value={formData.name}
//               onChange={(e) => handleInputChange("name", e.target.value)}
//               className="mt-4 w-full rounded-md font-mono bg-black border border-white/15 px-4 py-2 text-white focus:outline-none"
//             />
//           </div>

//           {/* Course Selection */}
//           <div>
//             <div className="flex gap-2">
//               <svg className="text-gray-200 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//               </svg>
//               <span className="font-mono text-lg sm:text-xl text-white">
//                 Course
//               </span>
//             </div>
            
//             <div className="mt-4">
//               <Select onValueChange={(value) => handleInputChange("course", value)}>
//                 <SelectTrigger className="w-full rounded-md font-mono bg-black border border-white/15 px-4 py-2 text-white focus:outline-none">
//                   <SelectValue placeholder="Select Course" />
//                 </SelectTrigger>
//                 <SelectContent className="bg-black border border-white/15">
//                   <SelectItem value="computer-science" className="text-white hover:bg-white/10">Computer Science</SelectItem>
//                   <SelectItem value="web-development" className="text-white hover:bg-white/10">Web Development</SelectItem>
//                   <SelectItem value="data-science" className="text-white hover:bg-white/10">Data Science</SelectItem>
//                   <SelectItem value="mobile-development" className="text-white hover:bg-white/10">Mobile Development</SelectItem>
//                   <SelectItem value="artificial-intelligence" className="text-white hover:bg-white/10">Artificial Intelligence</SelectItem>
//                   <SelectItem value="cybersecurity" className="text-white hover:bg-white/10">Cybersecurity</SelectItem>
//                   <SelectItem value="software-engineering" className="text-white hover:bg-white/10">Software Engineering</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <div className="flex gap-2">
//               <MdOutlineMailOutline className="text-gray-200 h-6 w-auto" />
//               <span className="font-mono text-lg sm:text-xl text-white">
//                 Email
//               </span>
//             </div>
            
//             <input
//               type="email"
//               placeholder="Enter Email"
//               value={formData.email}
//               onChange={(e) => handleInputChange("email", e.target.value)}
//               className="mt-4 w-full rounded-md font-mono bg-black border border-white/15 px-4 py-2 text-white focus:outline-none"
//             />
//           </div>

//           {/* Password Section */}
//           <div>
//             <div className="flex gap-2">
//               <RiLockPasswordLine className="text-gray-200 h-6 w-auto" />
//               <span className="font-mono text-lg sm:text-xl text-white">
//                 Password
//               </span>
//             </div>
            
//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={formData.password}
//               onChange={(e) => handleInputChange("password", e.target.value)}
//               className="mt-4 w-full rounded-md font-mono bg-black border border-white/15 px-4 py-2 text-white focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Component 3: Register Button */}
//         <div className="w-full mb-4">
//           <button 
//             onClick={handleRegister}
//             className="py-2 font-mono font-bold text-lg w-full rounded-md text-white bg-purple-500 hover:bg-purple-600 transition-colors"
//           >
//             Register
//           </button>
//         </div>

//         {/* Component 4: Divider */}
//         <div className="flex items-center w-full mb-4">
//           <div className="flex-1 h-px bg-white/20"></div>
//           <span className="px-4 font-mono text-sm text-white/55">or</span>
//           <div className="flex-1 h-px bg-white/20"></div>
//         </div>

//         {/* Component 5: Google Sign In */}
//         <div className="w-full mb-4">
//           <button 
//             onClick={handleGoogleSignIn}
//             className="py-2 px-4 font-mono font-bold text-lg w-full rounded-md text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-colors flex items-center justify-center gap-3"
//           >
//             <FaGoogle className="h-5 w-5" />
//             Sign in with Google
//           </button>
//         </div>

//         {/* Component 6: Login Link */}
//         <div className="font-mono text-sm text-white/55 text-center">
//           <p>Already have an account?</p>
//           <span className="ml-1 underline underline-offset-auto cursor-pointer hover:text-white/80">Sign in here</span>
//           <span>.</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Registration;