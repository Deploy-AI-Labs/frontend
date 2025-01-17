import { useNavigate } from "react-router";
import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";
import { X_LINK } from "../../../../config.js";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      id="footer"
      className="relative flex bg-background-450 lg:min-h-[111vh] pt-10 pb-20 px-6 lg:px-[52px] w-full"
    >
      <div className="relative z-10 flex flex-col gap-[35px] items-center justify-center w-full">
        <div data-aos="fade-up" className="flex gap-6 lg:gap-[149px]">
          <AgentsCard
            image={"/assets/images/Quantis.png"}
            name={"Quantis"}
            animation={"animate-float"}
          />
          <AgentsCard
            image={"/assets/images/Foresight.png"}
            name={"Foresight"}
            order="-order-1"
            animation={"animate-floatReverse"}
          />
          <AgentsCard
            image={"/assets/images/Guardis.png"}
            name={"Guardis"}
            animation={"animate-float"}
          />
        </div>
        <h1
          data-aos="fade-up"
          className="font-heading uppercase text-3xl lg:text-5xl text-center text-secondary-50 max-w-[1027px]"
        >
          Start Crafting Your Ideal Trading Strategy Today
        </h1>
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-6"
        >
          <Button
            onClick={() => window.open(X_LINK)}
            className="w-full min-w-[102px] px-6 text-base uppercase"
            variant="outline"
          >
            Meet us on
          </Button>
          <Button
            onClick={() => navigate("/strategy-feed")}
            className="w-full min-w-[102px] px-6 text-base"
          >
            Try now
          </Button>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="absolute z-0 left-0 px-6 lg:px-[52px] w-full"
      >
        <img
          src="/assets/images/img-decoration-footer.png"
          alt="app image"
          className="w-full"
        />
      </div>
      <div className="absolute bottom-0 lg:-bottom-10 z-0 left-0">
        <img
          src="/assets/images/img-decoration-footer-2.png"
          alt="app image"
          className="w-full"
        />
      </div>
      <div
        data-aos="slide-right"
        className="absolute -bottom-[200px] z-0 -left-[650px] w-[944px]"
      >
        <img
          src="/assets/images/img-decoration-gradient.png"
          alt="app image"
          className="w-full h-[300px] -rotate-45"
        />
      </div>
      <div
        data-aos="slide-left"
        className="absolute top-[200px] z-0 -right-[600px] w-[944px]"
      >
        <img
          src="/assets/images/img-decoration-gradient.png"
          alt="app image"
          className="w-full h-[300px] "
        />
      </div>
    </footer>
  );
};

const AgentsCard = ({ name, image, order = "", animation }) => {
  return (
    <div className={cn("flex gap-2 flex-col", animation)}>
      <div className="flex items-center font-heading text-primary gap-2">
        <Bullet />
        {name}
      </div>
      <div className={`max-w-[157px] w-full lg:h-[192px] ${order}`}>
        <img src={image} alt="agent" className="rounded-2xl" />
      </div>
    </div>
  );
};

const Bullet = () => {
  return (
    <div className="bg-primary-50/10 rounded-full p-[2.5px] h-fit">
      <div className="size-[6px] rounded-full bg-primary" />
    </div>
  );
};
