import React from "react";
import Heading from "../components/global/Heading";
import { AIAgentCard } from "../components/pages/ai-agents-page/AIAgentCard";
import { useQuery } from "@tanstack/react-query";
import { getAssistant } from "../services/assistant";
import { Skeleton } from "../components/ui/skeleton";
import { toast } from "sonner";
import { AxiosError } from "axios";

export default function AIAgentsPage() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["assistants"],
    queryFn: getAssistant,
  });

  if (isError && error instanceof AxiosError) toast.error(error.message);

  return (
    <div className="space-y-[56px]">
      <Heading
        title={"Select Your AI Developer Agent"}
        description={"Choose your specialized AI agent to begin building"}
        titleClass={"max-lg:text-3xl"}
      />
      <div className="lg:ml-[38px] grid lg:grid-cols-2 gap-6">
        {isLoading
          ? [..."foo"].map((_, index) => (
              <Skeleton key={index} className={"w-full h-[360px]"} />
            ))
          : data?.map((item, index) => <AIAgentCard key={index} data={item} />)}
      </div>
    </div>
  );
}
