import Heading from "../components/global/Heading";
import { Icons } from "../components/icon/icons";
import StrategyCard from "../components/pages/strategy-feed-page/StrategyCard";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import { Skeleton } from "../components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { getCustomScripts } from "../services/script";
import { toast } from "sonner";

export default function StrategyFeedPage() {
  const navigate = useNavigate();

  const deployed = useQuery({
    queryKey: ["deployed"],
    queryFn: () => getCustomScripts("DEPLOYED", 1, 10),
  });

  const launched = useQuery({
    queryKey: ["launched"],
    queryFn: () => getCustomScripts("LAUNCHED", 1, 10),
  });

  if (deployed.isError && deployed.error instanceof AxiosError)
    toast.error(deployed.error.message);

  if (launched.isError && launched.error instanceof AxiosError)
    toast.error(deployed.error.message);

  return (
    <div className="space-y-[56px]">
      <div className="flex max-lg:flex-col gap-4 lg:items-center justify-between">
        <Heading
          title={"Strategy Feed"}
          description={"Choose your specialized AI agent to begin building"}
          titleClass={"max-lg:text-3xl"}
        />
        <Button
          onClick={() => navigate("/ai-agents")}
          variant={"tertiary"}
          className="group text-sm"
        >
          CREATE YOUR OWN STRATEGY
          <Icons.arrow className="group-hover:translate-x-1 transition-all" />
        </Button>
      </div>
      <div className="space-y-6 lg:ml-[38px] ">
        <div className="space-y-[10px]">
          <h1 className="font-heading text-2xl text-secondary-50">Deployed</h1>
          <p>
            Discover strategies that are currently automated using Telegram
            bots.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {launched.isLoading
            ? [..."foo"].map((_, index) => (
                <Skeleton key={index} className={"w-full h-[360px]"} />
              ))
            : launched.data?.data?.map((item, index) => (
                <StrategyCard key={index} data={item} />
              ))}
        </div>
      </div>
      <div className="space-y-6 lg:ml-[38px] ">
        <div className="space-y-[10px]">
          <h1 className="font-heading text-2xl text-secondary-50">Explore</h1>
          <p>Explore a collection of strategies presented as scripts.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {deployed.isLoading
            ? [..."foo"].map((_, index) => (
                <Skeleton key={index} className={"w-full h-[360px]"} />
              ))
            : deployed.data?.data?.map((item, index) => (
                <StrategyCard key={index} data={item} />
              ))}
        </div>
      </div>
    </div>
  );
}
