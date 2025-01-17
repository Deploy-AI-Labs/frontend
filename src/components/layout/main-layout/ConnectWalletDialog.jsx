import { Button } from "../../ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { shortenAddress } from "../../../lib/utils";
import { Icons } from "../../icon/icons";

export const ConnectWalletDialog = ({ setIsConnected, isConnected }) => {
  const [open, setOpen] = useState(false);
  const handleConnect = () => {
    setIsConnected(!isConnected);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isConnected ? (
          <button className="p-[10px] w-full flex items-center justify-between border border-background-300 bg-background-100 hover:bg-background-250 transition-all font-heading gap-[10px] rounded-lg">
            <div className="flex items-center text-sm gap-2">
              <img
                src="/assets/images/img-phantom-logo.png"
                alt="phantom logo"
                className="size-8"
              />
              {shortenAddress("0x23xdsajdii7362g", 4, 3)}
            </div>
            <Icons.power className="text-primary" />
          </button>
        ) : (
          // </button>
          <Button className="w-full">
            <Icons.walet className="mb-[2px]" /> Connect Wallet
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isConnected ? "Confirmation" : "Connect Wallet"}
          </DialogTitle>
        </DialogHeader>
        {isConnected ? (
          <DialogDescription className="text-center">
            I&apos;ve added flying mechanics to the car! You can now press
            &apos;space&apos;
          </DialogDescription>
        ) : (
          <div className="flex flex-col gap-2">
            <button
              onClick={handleConnect}
              className="p-[10px] border border-background-300 bg-background-100 hover:bg-background-250 transition-all font-heading flex items-center gap-[10px] rounded-2xl"
            >
              <img
                src="/assets/images/img-metatmask-logo.png"
                alt="metamask logo"
                className="size-8"
              />
              Metamask
            </button>
            <button
              onClick={handleConnect}
              className="p-[10px] border border-background-300 bg-background-100 hover:bg-background-250 transition-all font-heading flex items-center gap-[10px] rounded-2xl"
            >
              <img
                src="/assets/images/img-phantom-logo.png"
                alt="phantom logo"
                className="size-8"
              />
              Phantom
            </button>
          </div>
        )}
        {isConnected && (
          <DialogFooter>
            <DialogClose asChild>
              <Button className="w-[102px]" variant="outline">
                CANCEL
              </Button>
            </DialogClose>
            <Button onClick={handleConnect} className="w-[102px]">
              DISCONECT
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
