import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex font-heading items-center justify-center gap-2 whitespace-nowrap rounded-lg text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary uppercase text-background-250 hover:bg-primary/80 transition-all py-[10.5px]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        tertiary: "text-primary uppercase bg-background-250 hover:bg-background-250/80 transition-all",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-background-200 bg-background text-primary hover:border-primary transition-all",

        ghost: "text-primary uppercase bg-transparent hover:bg-background-250/80 transition-all",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "p-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
