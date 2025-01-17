import { Toaster as Sonner } from "sonner";

export const Toaster = ({ ...props }) => {
  return (
    <Sonner
      position="top-center"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background-250 group-[.toaster]:text-foreground group-[.toaster]:border-background-200 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-foreground-100",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-background-250",
          cancelButton:
            "group-[.toast]:bg-background-250 group-[.toast]:text-primary",
        },
      }}
      {...props}
    />
  );
};
