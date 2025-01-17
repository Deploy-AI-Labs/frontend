import { useNavigate } from "react-router";
import { shortenAddress } from "../../../lib/utils";
import { Icons } from "../../icon/icons";
import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import { Link } from "lucide-react";

export default function StrategyCard({ data }) {
  const navigate = useNavigate();
  return (
    <div className="p-4 rounded-lg space-y-6 bg-background-150 text-foreground-50/70">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <Badge>Medium</Badge>
          <div className="flex items-center gap-2 text-primary">
            <Icons.message className="size-5" />
            <span className="font-semibold text-sm">
              {data._count.comments}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-secondary-50 font-semibold text-xl text-center">
            {data.explanation.split(" ").slice(0, 4).join(" ")}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            {/* <p>{shortenAddress(address, 4, 3)} use</p> */}
            <p>{data.author} use</p>
            <div className="size-4">
              <img
                src={`/assets/images/${data.assistant.name}.png`}
                alt={data.assistant.name}
                className="size-full rounded-full object-cover"
              />
            </div>
            <p>{data.assistant.name}</p>
          </div>
        </div>
      </div>
      {/* Body */}
      {/* <ul className="space-y-[13px] text-xs">
        <li className="flex items-center justify-between">
          <span>Gas-efficiency</span>
          <span className="font-semibold text-foreground-50">
            {gasEfficiency}
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>Security Score</span>
          <span className="font-semibold text-foreground-50">
            {securityScore}
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>Contract Size</span>
          <span className="font-semibold text-foreground-50">
            {contractSize}
          </span>
        </li>
      </ul> */}
      {/* Footer */}
      <div className="space-y-2">
        <Button
          onClick={() => navigate(`/strategy-feed/${data.id}`)}
          className="w-full text-xs"
        >
          View Contract
        </Button>
        {data.status === "LAUNCHED" && (
          <a
            href={data.externalLink}
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              className: "w-full text-xs",
            })}
          >
            Get Telegram Bot
            <Icons.arrow className="-rotate-45" />
          </a>
        )}
      </div>
    </div>
  );
}
