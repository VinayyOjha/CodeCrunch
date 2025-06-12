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


const Register = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-auto">
      <div className=" px-6 sm:pt-0 sm:p-4 gap-1  flex flex-col justify-center items-center max-w-xl mx-auto">
        {/* Component 1 */}
        <div className="mt-6 mb-4 sm:mb-2 text-center text-white">
          <p className="font-mono font-bold text-3xl bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent inline-block">
            CodeCrunch.
          </p>
          <p className="mt-2 font-mono text-md sm:text-2xl text-white">
            Please sign in to your account.
          </p>
        </div>

        {/* Component 2 */}
        <div className="p-4 flex flex-col gap-4 w-full rounded-md border bg-white/5 border-white/20 ">
          {/* Name */}
          <div>
            <div className="flex gap-2 items-center">
              <IoMdPerson className="text-green-400 h-6 w-auto" />
              <span className="font-mono text-md sm:text-lg text-white">
                Enter Name
              </span>
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
              <span className="font-mono text-md sm:text-lg text-white ">
                Enter Colg MailId
              </span>
            </div>

            <Input
              type="email"
              placeholder="Eg:2024pgcsca011@nitjsr.ac.in"
              className=" mt-2 font-mono text-sm sm:text-md"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex gap-2 items-center">
              <RiLockPasswordLine className="text-teal-600 h-6 w-auto" />
              <span className="font-mono text-md sm:text-lg text-white ">
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
          <div>
            <div className="flex gap-2 items-center">
              <RiTeamLine className="text-pink-400 h-6 w-auto" />
              <span className="font-mono text-md sm:text-lg text-white ">
                Your pre-Tic
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
      </div>
    </section>
  );
};

export default Register;
