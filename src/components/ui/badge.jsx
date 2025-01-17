import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva("px-2 py-[6px] rounded-lg font-semibold text-xs", {
  variants: {
    variant: {
      default: "bg-secondary-200 text-secondary",
      secondary: "bg-secondary-150 text-secondary-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Badge = ({ children, className, variant, props }) => {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
};
