import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MdOutlineDashboard } from "react-icons/md";
import { HourglassLowIcon } from "@phosphor-icons/react";
import { FileCppIcon } from "@phosphor-icons/react";
import { ChartLineUpIcon } from "@phosphor-icons/react";
import { TrophyIcon } from "@phosphor-icons/react";
import { StarIcon } from "@phosphor-icons/react";

const DashboardLanding = () => {
  return (
    <section
      className="w-full min-h-screen 
  bg-gradient-to-bl from-neutral-800 to-blue-950 

"
    >
      <motion.div className="px-2 py-3 font-mono max-w-6xl mx-auto sm:flex justify-between items-center">
        <div className="flex gap-1 items-center text-3xl">
          <MdOutlineDashboard className="text-amber-400"></MdOutlineDashboard>
          <div className="font-bold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Dashboard
          </div>
        </div>

        {/* Date tag */}
        <Badge className="mr-1 px-2 py-0.5 flex gap-2 rounded-full bg-purple-500/20 border border-purple-600 text-purple-300 items-center">
          {/* <CiCalendar size={36}></CiCalendar> */}
          <div className="flex text-white/80 font-mono">
            <div className="relative">
              <div className="px-0.5 h-2 w-2 rounded-full bg-purple-400"></div>
              <div className="absolute inset-0 animate-ping h-2 w-2 rounded-full bg-purple-400"></div>
            </div>
          </div>
          <span className="text-xs">June 14th, 2025</span>
        </Badge>
      </motion.div>
      <div className="p-4 md:p-3 lg:p-2 gap-3 relative container max-w-6xl mx-auto flex">
        {/* left outer container  */}
        <div className="gap-3 flex-4 flex flex-col">
          {/* top container */}
          <div className="gap-3 flex-1 lg:flex-4 flex flex-col lg:flex-row">
            {/* Problems of the day */}
            <motion.div
              className="p-1  fex-1 lg:flex-6 font-mono rounded-md bg-primary boder border-white/15"
              initial={{ scale: 1, opacity: 0.9 }}
              whileHover={{ scale: 1.01, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.3 }}
            >
              <div className="mx-4 mt-2">
                <div className=" flex items-center gap-1.5 ">
                  <FileCppIcon color="violet" size={32}></FileCppIcon>
                  <p className="text-purple-400 text-xl sm:text-2xl">
                    Problems Of The Day:
                  </p>
                </div>
                <Badge
                  className="sm:mt-1 rounde-sm text-right font-bold text-xs
                 text-gray-400 bg-gray-400/20 "
                >
                  June 14th
                </Badge>
              </div>
              <Card className="bg-primary border-none ">
                <CardContent className="space-y-4 text-md text-white">
                  <div className="flex gap-1 justify-between items-center ">
                    <div className=" text-xl">
                      <a
                        href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Triplet Sum in Array.
                      </a>
                      <div className="mt-1 flex">
                        <div
                          className="mr-1 px-2 py-0.5 flex gap-2 rounded-full 
                      bg-yellow-500/20 hover:bg-primary/80 
                      border border-yellow-300 text-amber-300 items-center"
                        >
                          <span className="text-xs">Medium</span>
                        </div>
                        <p className="text-neutral-400 text-xs">100pts</p>
                      </div>
                    </div>

                    <Checkbox className="h-5 w-5 border data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-800">
                      {" "}
                    </Checkbox>
                  </div>
                  <p className="border border-white/25"></p>
                  <div className="flex gap-1 justify-between items-center">
                    <span className="text-xl">
                      <a
                        href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Longest Span in two Binary Arrays.
                      </a>
                      <div className="mt-1 flex">
                        <div
                          className="mr-1 px-2 py-0.5 flex gap-2 rounded-full 
                      bg-red-500/30 hover:bg-primary/80 
                      border border-red-500/30 text-red-400 items-center"
                        >
                          <span className="text-xs">Hard</span>
                        </div>
                        <p className="text-neutral-400 text-xs">200pts</p>
                      </div>
                    </span>
                    <Checkbox className="h-5 w-5 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500">
                      {" "}
                    </Checkbox>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats */}
            <div className="px-3 py-3 h-full felx-1 lg:flex-4 rounded-md bg-primary border-white/15">
              <div className="flex flex-col h-full">
                {/* Title div */}
                <div className="flex flex-col">
                  <div className="flex gap-1.5">
                    <ChartLineUpIcon
                      color="#60A5FA"
                      size={32}
                    ></ChartLineUpIcon>
                    <p className="text-blue-400 text-xl sm:text-2xl font-mono">
                      Your Analytics:
                    </p>
                  </div>
                  <p className="text-md font-mono text-neutral-500">
                    Welcome Back, Neeraj!
                  </p>
                </div>

                {/* Stats */}
                <div className=" flex gap-6 px-2 mt-6">
                  {/* Rank */}
                  <div className="py-3 text-center font-mono flex-1 rounded-md border bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-purple-400/30">
                    <div className="flex gap-1 items-center justify-center">
                      <TrophyIcon color="#FACC15" size={16} />
                      <p className="text-sm text-white/70">Rank</p>
                    </div>
                    <p className="text-purple-400 text-2xl">#15</p>
                  </div>

                  {/* Score */}
                  <div className="py-3 text-center flex-1 rounded-md border bg-gradient-to-b from-[#60A5FA]/30  border-[#60A5FA]/50">
                    <div className="flex gap-1 items-center justify-center">
                      <StarIcon color="#60A5FA" size={16} />
                      <p className="text-sm text-white/70">Score</p>
                    </div>
                    <p className="text-[#60A5FA] text-2xl">2350</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom container - previous problems  */}
          <motion.div
            className="p-1 flex-1 lg:flex-6  rounded-md bg-[#171717] brder border-white/15"
            initial={{ scale: 1, opacity: 0.9 }}
            whileHover={{ scale: 1.01, opacity: 1 }}
            transition={{ ease: "easeInOut", delay: 0.3 }}
          >
            <div className="mx-6 mt-2 font-mono sm:flex justify-between">
              <div className="flex gap-1 items-center">
                <HourglassLowIcon size={32} color="#4ADE80" />
                <div className="text-[#4ADE80]  text-xl sm:text-2xl">
                  Past problems:
                </div>
              </div>
              <Badge
                className="rounded-full text-right text-xs shadow font-bold border
               border-pink-700/50  text-pink-300 bg-pink-600/20 "
              >
                Questions untill now: <strong>28</strong>
              </Badge>
            </div>
            <Card className="bg-[#171717] border-none font-mono">
              <CardContent className="space-y-4 text-md ">
                <ScrollArea className="px-4  h-[300px] sm:h-[215px] w-full rounded-md bg-[#141111] text-white border border-white/15">
                  <div className="mt-6 flex flex-col">
                    <div>
                      <Badge className="px-4 bg-blue-500/30 text-white  rounded-2xl text-center">
                        12th June
                      </Badge>
                    </div>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                      <span className="text-md sm:text-lg">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Inserting a node in LinkedList.
                        </a>
                      </span>
                    </div>
                    <p className="border border-white/25"></p>
                    <div className="py-2 flex gap-1 justify-between items-center">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Search an element in the LL.
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div>
                      <Badge className="px-4 bg-blue-500/30 text-white  rounded-2xl text-center">
                        11th June
                      </Badge>
                    </div>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Connect `n` ropes with minimal cost.
                        </a>
                      </span>
                    </div>
                    <p className="border border-white/25"></p>
                    <div className="py-2 flex gap-1 justify-between items-center">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Maximum Sum Combination.
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div>
                      <Badge className="px-4 bg-blue-500/30 text-white  rounded-2xl text-center">
                        10th June
                      </Badge>
                    </div>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Program for Shortest Job First (or SJF) CPU
                          Scheduling.
                        </a>
                      </span>
                    </div>
                    <p className="border border-white/25"></p>
                    <div className="py-2 flex gap-1 justify-between items-center">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Longest Span in two Binary Arrays.
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div>
                      <Badge className="px-4 bg-blue-500/30 text-white  rounded-2xl text-center">
                        09th June
                      </Badge>
                    </div>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Check for Children Sum Property.
                        </a>
                      </span>
                    </div>
                    <p className="border border-white/25"></p>
                    <div className="py-2 flex gap-1 justify-between items-center">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Longest Span in two Binary Arrays.
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div>
                      <Badge className="px-4 bg-blue-500/30 text-white  rounded-2xl text-center">
                        08th June
                      </Badge>
                    </div>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Count total Nodes in a COMPLETE Binary Tree.
                        </a>
                      </span>
                    </div>
                    <p className="border border-white/25"></p>
                    <div className="py-2 flex gap-1 justify-between items-center">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Longest Span in two Binary Arrays.
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div>
                      <Badge className="px-4 bg-blue-500/30 text-white  rounded-2xl text-center">
                        07th June
                      </Badge>
                    </div>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Serialize and deserialize Binary Tree.
                        </a>
                      </span>
                    </div>
                    <p className="border border-white/25"></p>
                    <div className="py-2 flex gap-1 justify-between items-center">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Shortest Path in DAG.
                        </a>
                      </span>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* right outer container */}
        <div className="max-h-[600px] hidden md:flex flex-2 rounded-md bg-primary border-white/15"></div>

        {/* Nav Button */}
        <div className="block md:hidden fixed right-8 bottom-8 bg-sky-500 rounded-full h-12 w-12"></div>
      </div>
    </section>
  );
};

export default DashboardLanding;
