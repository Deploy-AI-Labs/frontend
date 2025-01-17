import { cn } from "../../lib/utils";

export const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-background-150", className)}
      {...props}
    />
  );
};
