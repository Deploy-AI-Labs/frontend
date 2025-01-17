import { Link, useLocation } from "react-router";
import { Icons } from "../../icon/icons";
import { BUY_LINK, CA, GITHUB_LINK, X_LINK } from "../../../../config.js";
import { shortenAddress } from "../../../lib/utils.js";

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="relative max-lg:hidden z-10 flex flex-col items-center justify-between max-w-[264px] w-full h-full px-6 py-8">
      <div className="space-y-8 w-full">
        <Link to={"/"}>
          <div className="w-40">
            <img
              src={`/assets/images/img-deploy.png`}
              alt={"logo"}
              className="size-full object-contain"
            />
          </div>
        </Link>
        <ul className="space-y-4 w-full">
          {NAV_ITEMS.map((item, index) => (
            <ListItem
              pathname={pathname}
              label={item.label}
              url={item.url}
              key={index}
              link={item.link}
              Icon={item.Icon}
            />
          ))}

          {BUY_LINK && CA && <ContractButton />}
        </ul>
      </div>
      {/* <ConnectWalletDialog
        isConnected={isConnected}
        setIsConnected={setIsConnected}
      /> */}
    </aside>
  );
};

const ContractButton = () => {
  return (
    <div
      onClick={() => window.open(BUY_LINK)}
      className="flex flex-row gap-4 p-3 cursor-pointer items-center w-full hover:bg-primary/20 rounded-lg"
    >
      <img
        src="/assets/images/img-pumpfun.png"
        alt="pump"
        className="size-6 object-contain"
      />
      <div className="flex flex-col">
        <h1 className="text-primary">pump.fun</h1>
        <p className="text-primary-200">{shortenAddress(CA)}</p>
      </div>

      <Icons.arrow className="-rotate-45 text-primary ml-auto" />
    </div>
  );
};

const ListItem = ({ label, url, pathname, link, Icon }) => {
  const handleClick = (e) => {
    if (label === "Github" || label === "Twitter") {
      e.preventDefault();
      window.open(link, "_blank");
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
