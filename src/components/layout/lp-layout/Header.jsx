import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";

export default function Header() {
  const navigate = useNavigate();
  const [isScroll, setIsScroll] = useState(false);

  const handleIsScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 1) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - 70,
        behavior: "smooth",
      });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleIsScroll);

    return () => {
      window.removeEventListener("scroll", handleIsScroll);
    };
  }, []);

  return (
    <header
      data-aos="fade-in"
      className={`flex fixed inset-x-0 z-50 top-0 items-center justify-between py-8 px-6 lg:px-[42px] ${
        isScroll
          ? "bg-background-450/50 backdrop-blur-sm"
          : "bg-background-450/0"
      } text-foreground duration-300`}
    >
      <button onClick={() => scrollTo("hero")} className="outline-none">
        <div className="w-40">
          <img
            src={`/assets/images/img-deploy.png`}
            alt={"logo"}
            className="size-full object-contain"
          />
        </div>
      </button>
      <nav className="flex items-center gap-12 text-lg max-lg:hidden">
        {NAV_ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollTo(item.id)}
            className="text-foreground-50 outline-none hover:text-foreground transition-all"
          >
            {item.label}
          </button>
        ))}
        <Button
          onClick={() => navigate("/strategy-feed")}
          className="w-[119px] text-base"
        >
          TRY NOW
        </Button>
      </nav>
      <div className="lg:hidden">
        <Sidebar scrollTo={scrollTo} />
      </div>
    </header>
  );
}

const Sidebar = ({ scrollTo }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div className="space-y-8">
          <SheetHeader>
            <SheetTitle>
              <div className="w-40">
                <img
                  src={`/assets/images/img-deploy.png`}
                  alt={"logo"}
                  className="size-full object-contain"
                />
              </div>
            </SheetTitle>
            <SheetDescription className="text-left">
              Your Next-Gen Trading Co-Pilot
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setOpen(false);
                  scrollTo(item.id);
                }}
                className="text-foreground-50 text-lg w-fit outline-none hover:text-foreground text-left transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              onClick={() => navigate("/strategy-feed")}
              className="text-base w-full"
            >
              TRY NOW
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const NAV_ITEMS = [
  {
    label: "About",
    id: "about",
  },
  {
    label: "AI Agent",
    id: "footer",
  },
];
