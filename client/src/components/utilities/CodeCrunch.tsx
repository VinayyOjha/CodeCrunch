import { cn } from "@/lib/utils";

const CodeCrunch = ({className} : {className: string}) => {
  return (
    <div>
      <p className={cn("font-mono font-bold text-3xl bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent inline-block", 
      className
      )}>
        CodeCrunch.
      </p>
    </div>
  );
};

export default CodeCrunch;
