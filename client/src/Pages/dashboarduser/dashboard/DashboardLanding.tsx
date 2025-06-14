import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const DashboardLanding = () => {
  return (
    <section className="w-full min-h-screen bg-black">
      <motion.div className="py-2 font-mono font-bold text-3xl text-center text-neutral-300">
        {" "}
        Dashboard
      </motion.div>
      <div className="p-4 md:p-3 lg:p-2 gap-3 relative container max-w-5xl mx-auto flex ">
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
              <Card className="bg-primary border-none ">
                <CardTitle className="gap-2 fle justify-between items-center font-mono">
                  <div className="mx-4">
                    <div className=" flex items-center gap-1.5 ">
                      {/* <div className="h-3 w-3 rounded-full  bg-purple-500"></div> */}

                      <p className="text-white  bg-blue-500 px-2 py-1 rounded-sm text-md sm:text-xl">
                        Problems Of The Day:
                      </p>
                    </div>
                    <Badge className="mt-1 rounde-sm text-right font-bold text-xs shadow text-white bg-gray-500 ">
                      June 14th
                    </Badge>
                  </div>
                </CardTitle>

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
          <div className="p-1 flex-1 lg:flex-6  rounded-md bg-[#171717] brder border-white/15">
            <Card className="bg-[#171717] border-none font-mono">
              {/* <CardHeader>
                <CardTitle
                  className="pb-1 gap-2 flex justify-between items-center font-mono text-white border-b border-b-white/5"
                  style={{
                    borderBottomStyle: "dashed",
                    borderBottomWidth: "2px",
                    borderImage:
                      "repeating-linear-gradient(90deg, #fff 0 6px, transparent 6px 12px) 10",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full  bg-gradient-to-br from-black to-yellow-500"></div>
                    <p className="text-md sm:text-xl">Previous Problems:</p>
                  </div>
                  <Badge className="text-right text-xs shadow text-black bg-red-300 ">
                    Questions untill now : <strong>28</strong>
                  </Badge>
                </CardTitle>
              </CardHeader> */}
              <CardContent className="space-y-4 text-md ">
                <ScrollArea className=" h-[300px] sm:h-[150px] w-full rounded-md text-white border border-white/15 p-4 pt-1">
                  <div className="flex flex-col">
                    <p className="py-1 bg-[#262626] rounded-2xl text-center">13th June</p>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                    <span className="">
                      <a
                        href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Triplet Sum in Array.
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
                  <div className="flex flex-col">
                    <p className="py-1 bg-[#262626] rounded-2xl text-center">13th June</p>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                    <span className="">
                      <a
                        href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Triplet Sum in Array.
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
                  <div className="flex flex-col">
                    <p className="py-1 bg-[#262626] rounded-2xl text-center">13th June</p>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                    <span className="">
                      <a
                        href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Triplet Sum in Array.
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
                  <div className="flex flex-col">
                    <p className="py-1 bg-[#262626] rounded-2xl text-center">13th June</p>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                    <span className="">
                      <a
                        href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Triplet Sum in Array.
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
                  <div className="flex flex-col">
                    <p className="py-1 bg-[#262626] rounded-2xl text-center">13th June</p>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                    <span className="">
                      <a
                        href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Triplet Sum in Array.
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
                  <div className="flex flex-col">
                    <p className="py-1 bg-[#262626] rounded-2xl text-center">13th June</p>
                    <div className="py-2 flex gap-1 justify-between items-center ">
                    <span className="">
                      <a
                        href="https://youtube.com/shorts/NLFoSt4Iuxc?feature=shared"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Triplet Sum in Array.
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
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* right outer container */}
        <div className="hidden md:flex flex-2 rounded-md bg-primary border-white/15"></div>

        {/* Nav Button */}
        <div className="block md:hidden fixed right-8 bottom-8 bg-sky-500 rounded-full h-12 w-12"></div>
      </div>
    </section>
  );
};

export default DashboardLanding;
