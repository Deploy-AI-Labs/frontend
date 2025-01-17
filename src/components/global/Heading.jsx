import { cn } from "../../lib/utils";

export default function Heading({
  title,
  description,
  titleClass,
  descriptionClass,
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <Bullet />
        <div
          className={cn("text-primary font-heading text-[32px]", titleClass)}
        >
          {title}
        </div>
      </div>
      <p className={cn("ml-[38px] text-foreground-100", descriptionClass)}>
        {description}
      </p>
    </div>
  );
}

const Bullet = () => {
  return (
    <div className="bg-primary-50/10 rounded-full p-[5px] h-fit">
      <div className="size-3 rounded-full bg-primary" />
    </div>
  );
};
