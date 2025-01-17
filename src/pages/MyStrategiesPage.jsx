import React from "react";
import Heading from "../components/global/Heading";
import { Icons } from "../components/icon/icons";
import { Button } from "../components/ui/button";
import { MyStrategyCard } from "../components/pages/my-strategies-page/MyStrategyCard";
import { EmptyStrategy } from "../components/pages/my-strategies-page/EmptyStrategy";
import { useNavigate } from "react-router";

export default function MyStrategiesPage() {
  const navigate = useNavigate();
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
          CREATE NEW STRATEGY
          <Icons.arrow className="group-hover:translate-x-1 transition-all" />
        </Button>
      </div>
      <div className="lg:ml-[38px] flex flex-col gap-4">
        {/* <EmptyStrategy /> */}
        <MyStrategyCard />
        <MyStrategyCard />
        <MyStrategyCard />
      </div>
    </div>
  );
}
