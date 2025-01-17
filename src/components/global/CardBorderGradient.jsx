import { cn } from "../../lib/utils";
export const CardBorderGradient = ({ children, className }) => {
  return (
    <div className="p-px relative z-10 rounded-2xl bg-gradient-to-br from-secondary-50 to-30% to-background-200">
      <div
        className={cn(
          "w-full p-6 lg:p-[54px] overflow-hidden bg-background-400 rounded-2xl",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
