import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

function MobileSidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (x: boolean) => void;
}) {
  const navigate = useNavigate();
  return (
    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <SheetContent side="left" className="w-60 border-none bg-[#171717]">
        <SheetTitle className=" border-none" >
          <div className="px-4 pt-2 text-2xl bg-gradient-to-t from-white/70 to-transparent bg-clip-text text-transparent">
            CodeCrunch 25'
          </div>
        </SheetTitle>

        {/* Separator */}
        <div className="relative w-full">
          <p className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent  "></p>
        </div>

        {/* Container Div */}
        <div className="px-4 text-start flex flex-col font-mono text-lg text-white space-y-4">
          <div>About CC'25</div>
          {/* About */}

          {/* Prizes and rewards */}

          <div>Prizes And Rewards</div>
          {/* Rules */}
          <div>Rules</div>

          {/* Login */}
          <div
            onClick={() => navigate("/login")}
            className="px-3 py-1 text-center rounded-sm border border-white/30 bg-white/15"
          >
            Login
          </div>

          {/* Register */}
          <div
            onClick={() => navigate("/register")}
            className="px-3 py-1 text-center rounded-sm border border-white/35 bg-white text-black"
          >
            Register
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
