import { useNavigate } from "react-router";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Progress } from "../../ui/progress";

export const AIAgentCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 rounded-lg bg-background-150 space-y-6">
      <div className="flex gap-6 min-h-[181px]">
        <div className="h-[181px] max-w-[148px] w-full">
          <img
            src={`/assets/images/${data.name}.png`}
            alt="agent"
            className="size-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col justify-between h-[172px] w-full">
          <h1 className="text-lg font-semibold text-secondary-50">
            {data.name}
          </h1>
          {data.skills.map((item, index) => (
            <StatusBar key={index} data={item} />
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="text-foreground-50/70 text-xs">Personality</h2>
        <div className="flex items-center gap-3 flex-wrap">
          {data.personalities.map((item, index) => (
            <Badge key={index} variant={"secondary"}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
      <Button
        onClick={() => navigate(`/ai-agents/${data.id}`)}
        className="w-full"
      >
        START
      </Button>
    </div>
  );
};

const StatusBar = ({ data }) => {
  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-foreground-50/70 text-xs">{data.skill.name}</h2>
        <p className="text-[10px] font-medium text-secondary-50">
          {data.value}%
        </p>
      </div>
      <Progress value={data.value} />
    </div>
  );
};
