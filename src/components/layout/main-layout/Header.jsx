import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Icons } from "../../icon/icons";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { GITHUB_LINK, X_LINK } from "../../../../config.js";

export const Header = () => {
  return (
    <header className="lg:hidden w-full flex items-center gap-5">
      <SidebarDialog />
      <div className="w-40">
        <img
          src={`/assets/images/img-deploy.png`}
          alt={"logo"}
          className="size-full object-contain"
        />
      </div>
    </header>
  );
};

const SidebarDialog = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col justify-between">
        <div className="space-y-8">
          <SheetHeader>
            <Link to={"/"}>
              <SheetTitle className="font-bold font-paragraph text-left text-[32px] text-foreground">
                <div className="w-40">
                  <img
                    src={`/assets/images/img-deploy.png`}
                    alt={"logo"}
                    className="size-full object-contain"
                  />
                </div>
              </SheetTitle>
            </Link>
            <SheetDescription className="text-left">
              Your Next-Gen Trading Co-Pilot
            </SheetDescription>
          </SheetHeader>
          <ul className="space-y-4">
            {NAV_ITEMS.map((item, index) => (
              <ListItem
                pathname={pathname}
                setOpen={setOpen}
                label={item.label}
                url={item.url}
                key={index}
                link={item.link}
                Icon={item.Icon}
              />
            ))}
          </ul>
        </div>
        {/* <SheetFooter>
          <DialogClose asChild>
            <ConnectWalletDialog
              isConnected={isConnected}
              setIsConnected={setIsConnected}
            />
          </DialogClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

const ListItem = ({ label, url, pathname, setOpen, link, Icon }) => {
  const handleClick = (e) => {
    if (label === "Github" || label === "Twitter") {
      e.preventDefault();
      window.open(link, "_blank");
    } else {
      setOpen(false);
    }
  };

  return (
    <li>
      <Link
        to={url}
        onClick={handleClick}
        className={`p-3 rounded-lg flex gap-4 hover:text-secondary hover:bg-secondary-100 transition-all ${
          pathname === url
            ? "text-secondary bg-secondary-100"
            : "text-muted bg-transparent"
        }`}
      >
        {Icon} {label}
      </Link>
    </li>
  );
};

const NAV_ITEMS = [
  {
    Icon: <Icons.target />,
    url: "/strategy-feed",
    label: "Strategy Feed",
  },
  {
    Icon: <Icons.ai />,
    url: "/ai-agents",
    label: "AI Agents",
  },
  // {
  //   url: "/my-strategies",
  //   label: "My Strategies",
  // },
  {
    Icon: <Icons.github />,
    url: "#",
    label: "Github",
    link: GITHUB_LINK,
  },
  {
    Icon: <Icons.xMenu />,
    url: "#",
    label: "Twitter",
    link: X_LINK,
  },
];
