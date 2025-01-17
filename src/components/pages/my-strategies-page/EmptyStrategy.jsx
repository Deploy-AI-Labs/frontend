import { Icons } from "../../icon/icons";
import { Button } from "../../ui/button";

export const EmptyStrategy = (props) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-[92px] text-center">
      <Icons.folder className="text-secondary-50" />
      <p>You haven&apos;t created your own strategy</p>
      <Button>CREATE STRATEGY</Button>
    </div>
  );
};
