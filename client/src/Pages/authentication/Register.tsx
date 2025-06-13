import { Input } from "@/components/ui/input";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen bg-black">
      <div className="max-w-xl mx-auto  ">
        
        <div className="p-2 gap-2 min-h-screen flex flex-col  items-center justify-center border-4 border-black">
          {/* Component 1 */}
          <div className="w-full text-center text-white">
            <p className="font-mono font-bold text-3xl bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent inline-block">
              CodeCrunch.
            </p>
            <p className="mt-2 font-mono text-md sm:text-2xl text-white">
              Create your account.
            </p>
          </div>

          {/* Component 2 */}
          
          <div
            className="p-4 gap-6 w-full flex flex-col rounded-md 
        border bg-white/5 border-white/20 "
          >
            {/* Name */}
            <div>
              <div className="flex gap-2 items-center">
                <IoMdPerson className="text-green-400 h-6 w-auto" />
                <span className="font-mono text-md text-white">Enter Name</span>
              </div>

              <Input
                type="text"
                placeholder="Neeraj Pepsodent"
                className=" mt-2 font-mono text-sm sm:text-md"
              />
            </div>

            {/* Email */}
            <div>
              <div className="flex gap-2 items-center">
                <MdOutlineMailOutline className="text-yellow-400 h-6 w-auto" />
                <span className="font-mono text-md text-white ">
                  Enter Colg MailId
                </span>
              </div>
              
              <Label htmlFor = "email"></Label>
              <Input
                id="email"
                type="email"
                placeholder="Eg:2024pgcsca011@nitjsr.ac.in"
                className=" mt-2 font-mono text-sm sm:text-md"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex gap-2 items-center">
                <RiLockPasswordLine className="text-red-500 h-6 w-auto" />
                <span className="font-mono text-md text-white text-md">
                  Enter password
                </span>
              </div>

              <Input
                type="password"
                placeholder="3takle3takle1212"
                className=" mt-2 font-mono text-sm sm:text-md"
              />
            </div>

            {/* Choose pre-IC */}
            <div className="">
              <div className="mb-2 flex gap-2 items-center">
                <RiTeamLine className="text-pink-400 h-6 w-auto" />
                <span className="font-mono text-md text-white ">
                  Your pre-TIC
                </span>
              </div>

              <Select>
                <SelectTrigger className="w-full rounded-md font-mono bg-black border border-white/15 px-4 py-2 text-white focus:outline-none">
                  <SelectValue placeholder="Select pre-TIC" />
                </SelectTrigger>
                <SelectContent className="bg-black border border-white/15">
                  <SelectItem
                    value="computer-science"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Aashu Gangster
                  </SelectItem>
                  <SelectItem
                    value="web-development"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Aman Singh
                  </SelectItem>
                  <SelectItem
                    value="data-science"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Amandeep Kaur
                  </SelectItem>
                  <SelectItem
                    value="mobile-development"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Shahrukh
                  </SelectItem>
                  <SelectItem
                    value="artificial-intelligence"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Deepak Deloitte
                  </SelectItem>
                  <SelectItem
                    value="cybersecurity"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Priya Brahma
                  </SelectItem>
                  <SelectItem
                    value="yea"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Rahul Kumar
                  </SelectItem>
                  <SelectItem
                    value="machine-learning"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Swati Thakur
                  </SelectItem>
                  <SelectItem
                    value="cloud-computing"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Taher Malik
                  </SelectItem>
                  <SelectItem
                    value="blockchain"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Aaditya Aryan
                  </SelectItem>
                  <SelectItem
                    value="ui-ux"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Suruchi Sagar
                  </SelectItem>
                  <SelectItem
                    value="devops"
                    className="font-mono text-white hover:bg-white/10"
                  >
                    Vinay Ojhahahaa
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
         
          {/* Alread have an account*/}
          <div className="w-full flex flex-col  font-mono text-white/35 text-left text-xs cursor-pointer">
            <div className="w-full flex justify-end ">
              <p className="">Have an account?</p>
              <span  onClick={() => navigate("/login")} className="underline text-neutral-300/70">Sign in</span>
              <span>.</span>
            </div>

            {/* Let's GO! */}
            <div
             
              className="text-center mt-4 sm:mt-2"
            >
              <button className="px-6 py-2 rounded-md items-center font-mono text-lg text-white bg-purple-500 hover:bg-purple-600">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
