import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MdOutlineDashboard } from "react-icons/md";


const DashboardLanding = () => {
  return (
    <section className="w-full min-h-screen 
  bg-gradient-to-bl from-neutral-800 to-blue-950 

">
      <motion.div className="px-2 py-3 font-mono max-w-7xl mx-auto font-bold text-3xl text-neutral-300 flex gap-1 items-center">
        <MdOutlineDashboard></MdOutlineDashboard>
        <div>Dashboard</div>
      </motion.div>
      <div className="p-4 md:p-3 lg:p-2 gap-3 relative container max-w-5xl mx-auto flex">
        {/* left outer container  */}
        <div className="gap-3 flex-4 flex flex-col">
          {/* top container */}
          <div className="gap-3 flex-1 lg:flex-4 flex flex-col lg:flex-row">
            {/* Problems of the day */}
            <motion.div
              className="p-1  fex-1 lg:flex-6 font-mono rounded-md bg-primary boder border-white/15"
              initial={{ scale: 1, opacity: 0.9 }}
              whileHover={{ scale: 1.03, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.3 }}
            >
              <div className="mx-4 mt-2">
                <div className=" flex items-center gap-1.5 ">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>

                  <p className="text-purple-400 text-xl sm:text-2xl">
                    Problems Of The Day:
                  </p>
                </div>
                <Badge className="sm:mt-1 rounde-sm text-right font-bold text-xs shadow text-white bg-gray-500 ">
                  June 14th
                </Badge>
              </div>
              <Card className="bg-primary border-none ">
                <CardContent className="space-y-4 text-md text-white">
                  <div className="flex gap-1 justify-between items-center ">
                    <span className=" text-xl">
                      <a
                        href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Triplet Sum in Array.
                      </a>
                    </span>

                    <Checkbox className="h-4 w-4 border-gray data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500">
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
                    </span>
                    <Checkbox className="h-4 w-4 border-gray data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500">
                      {" "}
                    </Checkbox>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats */}
            <div className="h-full felx-1 lg:flex-4 rounded-md bg-primary border-white/15"></div>
          </div>

          {/* bottom container - previous problems  */}
          <motion.div
            className="p-1 flex-1 lg:flex-6  rounded-md bg-[#171717] brder border-white/15"
            initial={{ scale: 1, opacity: 0.9 }}
            whileHover={{ scale: 1.03, opacity: 1 }}
            transition={{ ease: "easeInOut", delay: 0.3 }}
          >
            <div className="mx-3 mt-2 font-mono sm:flex justify-between">
              <div className="text-white  text-xl sm:text-2xl">
                Past problems:
              </div>
              <Badge className="sm:mt-1 text-right text-xs shadow
               text-black bg-red-300 ">
                Questions untill now : <strong>28</strong>
              </Badge>
            </div>
            <Card className="bg-[#171717] border-none font-mono">
              <CardContent className="space-y-4 text-md ">
                <ScrollArea className="px-4  h-[300px] sm:h-[215px] w-full rounded-md bg-[#333333] text-white border border-white/15">
                  <div className="mt-6 flex flex-col">
                    <div>
                      <span className="px-4 py-1 bg-yellow-100 text-black  rounded-2xl text-center">
                        12th June
                      </span>
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
                      <span className="px-4 py-1 bg-yellow-100 text-black  rounded-2xl text-center">
                        11th June
                      </span>
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
                      <span className="px-4 py-1 bg-yellow-100 text-black  rounded-2xl text-center">
                        10th June
                      </span>
                    </div>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                      <span className="">
                        <a
                          href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Program for Shortest Job First (or SJF) CPU Scheduling.
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
                      <span className="px-4 py-1 bg-yellow-100 text-black  rounded-2xl text-center">
                        09th June
                      </span>
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
                      <span className="px-4 py-1 bg-yellow-100 text-black  rounded-2xl text-center">
                        08th June
                      </span>
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
                      <span className="px-4 py-1 bg-yellow-100 text-black  rounded-2xl text-center">
                        07th June
                      </span>
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
