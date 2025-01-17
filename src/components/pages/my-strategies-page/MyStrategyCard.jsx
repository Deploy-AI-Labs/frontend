import { useState } from "react";
import { Icons } from "../../icon/icons";
import { Button } from "../../ui/button";
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
import { useNavigate } from "react-router";

export const MyStrategyCard = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-background-150 flex max-lg:flex-col lg:items-center justify-between gap-4 rounded-lg">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-secondary-50 font-semibold text-xl">
            ETH - BTC Long Swing
          </h1>
          <div className="lg:hidden">
            <DeleteStrategyDialog />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="size-4">
            <img
              src={"/assets/images/img-agent-1.png"}
              alt={"agent"}
              className="size-full rounded-full object-cover"
            />
          </div>
          <p>Mikasa Agent</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          className="max-lg:w-full"
          onClick={() => navigate("/ai-agents/1")}
        >
          VIEW DETAILS
        </Button>
        <div className="max-lg:hidden">
          <DeleteStrategyDialog />
        </div>
      </div>
    </div>
  );
};

const DeleteStrategyDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-primary outline-none">
          <Icons.threeDot className="text-primary max-lg:rotate-90" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirmation</DialogTitle>
        </DialogHeader>

        <DialogDescription className="text-center">
          Are you sure want to delete this startegy? This action cannot be
          undone
        </DialogDescription>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button className="w-[102px]" variant="outline">
              CANCEL
            </Button>
          </DialogClose>
          <Button className="w-[102px]">DELETE</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
