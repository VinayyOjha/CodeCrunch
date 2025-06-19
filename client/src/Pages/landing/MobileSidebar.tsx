import {
  Sheet,
  SheetContent,
  SheetTitle
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

function MobileSidebar({isSidebarOpen, setIsSidebarOpen}: {isSidebarOpen:boolean, setIsSidebarOpen:(x:boolean)=>void}) {
  const navigate = useNavigate();
  return (
    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}> 
        <SheetContent side="left" className="w-[200px] p-2  bg-[#171717]">
          <SheetTitle className="text-white/70 border-none mt-1">CodeCrunch 25'</SheetTitle>
          <div className=" text-center flex flex-col font-mono text-white space-y-5">
            {/* <div className="mt-8 text-start text-lg">
            <p></p>
          </div> */}
          <div>
            <p>Prizes & Rewards</p>
          </div>
          <div>
            <p>Competiton Rules</p>
          </div>
          <div>
            <p className="py-1 border border-white/15 rounded-md" onClick={()=> navigate("/login")}>Login</p>
          </div>
          <div>
            <p className="py-1 rounded-md bg-white/35" onClick={()=> navigate("/register")}>Register</p>
          </div>
          </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar