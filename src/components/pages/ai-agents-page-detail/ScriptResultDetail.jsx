import { useState } from "react";
import { Button } from "../../ui/button";
import { Icons } from "../../icon/icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { useScriptContext } from "../../../hooks/useScriptContext";
import { toast } from "sonner";

export const ScriptResultDetail = () => {
  const [isScript, setIsScript] = useState(true);
  const { script, message, deploy, isLoading } = useScriptContext();

  // scripts

  const handleCopyScript = () => {
    const newScript = script
      .replaceAll("/n", " ")
      .replaceAll("```", "")
      .replaceAll("pinescript", "");
    navigator.clipboard.writeText(newScript);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="rounded-lg sticky top-0 right-0 p-4 border h-[calc(100vh-20vh)] w-full border-background-50 flex flex-col gap-4">
      <div className="flex max-lg:flex-col gap-2 lg:items-center justify-between lg:h-9">
        <div className="flex gap-2 lg:gap-2">
          <Button
            onClick={() => setIsScript(true)}
            className={` hover:bg-background-200 max-lg:w-full hover:text-primary ${
              isScript
                ? "bg-background-200 text-primary"
                : "bg-background-300 text-muted"
            }`}
            variant="tertiary"
          >
            SCRIPT
          </Button>
          {/* <Button
            onClick={() => setIsScript(false)}
            className={` hover:bg-background-200 max-lg:w-full hover:text-primary ${
              !isScript
                ? "bg-background-200 text-primary"
                : "bg-background-300 text-muted"
            }`}
            variant="tertiary"
          >
            RESULT
          </Button> */}
        </div>
        <div className="flex gap-2">
          {isScript && (
            <Button
              onClick={handleCopyScript}
              disabled={script.length > 0 ? false : true}
              className="max-lg:order-1"
              variant="outline"
            >
              <Icons.copy />
            </Button>
          )}
          <Button
            onClick={deploy}
            className="max-lg:w-full"
            disabled={script.length > 0 ? false : true}
          >
            DEPLOY
            <Icons.arrow className="-rotate-45" />
          </Button>

          <DeployDialog />
        </div>
      </div>
      {isScript ? (
        <>
          <div className="h-full max-w-full w-full rounded-lg overflow-auto">
            <SyntaxHighlighter
              customStyle={{
                backgroundColor: "#000000",
                padding: "24px 24px 48px 24px",
                overflow: "auto",
                height: "100%",
                width: "100%",
              }}
              style={a11yDark}
            >
              {script?.replaceAll("```", "").replaceAll("pinescript", "") ?? ""}
            </SyntaxHighlighter>
          </div>
          {/* <Button
            className="hover:bg-background-150 absolute inset-x-8 bottom-8 w shadow shadow-primary"
            variant="tertiary"
          >
            <Icons.code /> VIEW IN EDITOR
          </Button> */}
        </>
      ) : (
        <div className="size-full flex flex-col lg:gap-[13px] py-2 rounded-lg overflow-auto">
          {message
            .filter((item) => item.role === "assistant")
            .map((item, index) => (
              <AiMessageCard key={index} message={item.content} />
            ))}
        </div>
      )}
    </div>
  );
};

const DeployDialog = () => {
  const [open, setOpen] = useState(false);
  const { script } = useScriptContext();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          disabled={script.length > 0 ? false : true}
          className="max-lg:w-full"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9999 7.31659V5.33325C13.9999 4.97963 13.8594 4.64049 13.6094 4.39044C13.3593 4.1404 13.0202 3.99992 12.6666 3.99992H8.66659V3.12525C8.86992 2.94259 8.99992 2.67992 8.99992 2.38525C8.99992 2.12004 8.89456 1.86568 8.70703 1.67815C8.51949 1.49061 8.26514 1.38525 7.99992 1.38525C7.7347 1.38525 7.48035 1.49061 7.29281 1.67815C7.10528 1.86568 6.99992 2.12004 6.99992 2.38525C6.99992 2.67992 7.12992 2.94259 7.33325 3.12525V3.99992H3.33325C2.97963 3.99992 2.64049 4.1404 2.39044 4.39044C2.14039 4.64049 1.99992 4.97963 1.99992 5.33325V7.33192L1.95192 7.33525C1.7839 7.34738 1.6267 7.42267 1.51193 7.54597C1.39716 7.66928 1.33332 7.83147 1.33325 7.99992V9.33325C1.33325 9.51007 1.40349 9.67963 1.52851 9.80466C1.65354 9.92968 1.82311 9.99992 1.99992 9.99992V13.3333C1.99992 13.6869 2.14039 14.026 2.39044 14.2761C2.64049 14.5261 2.97963 14.6666 3.33325 14.6666H12.6666C13.0202 14.6666 13.3593 14.5261 13.6094 14.2761C13.8594 14.026 13.9999 13.6869 13.9999 13.3333V9.99992C14.1767 9.99992 14.3463 9.92968 14.4713 9.80466C14.5963 9.67963 14.6666 9.51007 14.6666 9.33325V8.04125C14.6744 7.93779 14.658 7.83392 14.6186 7.73792C14.4839 7.41259 14.1953 7.33459 13.9999 7.31659ZM4.66659 7.99992C4.66659 7.26392 5.11459 6.66659 5.66659 6.66659C6.21859 6.66659 6.66659 7.26392 6.66659 7.99992C6.66659 8.73592 6.21859 9.33325 5.66659 9.33325C5.11459 9.33325 4.66659 8.73592 4.66659 7.99992ZM10.6653 11.9999C9.99792 11.9979 5.33325 11.9999 5.33325 11.9999V10.6666C5.33325 10.6666 10.0006 10.6653 10.6679 10.6666L10.6653 11.9999ZM10.3333 9.33325C9.78125 9.33325 9.33325 8.73592 9.33325 7.99992C9.33325 7.26392 9.78125 6.66659 10.3333 6.66659C10.8853 6.66659 11.3333 7.26392 11.3333 7.99992C11.3333 8.73592 10.8853 9.33325 10.3333 9.33325Z"
              fill="black"
            />
          </svg>
          <p className="hidden xl:flex">GENERATE TELEGRAM BOT</p>

          <Icons.arrow className="-rotate-45" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Coming Soon</DialogTitle>
        </DialogHeader>

        <DialogDescription className="text-center">
          This feature will release soon. Please kindly wait
        </DialogDescription>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button className="w-[212px]" variant="outline">
              CLOSE
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
