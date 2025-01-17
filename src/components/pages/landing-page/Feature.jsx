import { CardBorderGradient } from "../../global/CardBorderGradient";
import Heading from "../../global/Heading";

export const Feature = () => {
  return (
    <section id="feature" className="relative py-10 px-6 lg:px-[52px] w-full">
      <CardBorderGradient>
        <div className="flex max-lg:flex-col gap-[52px] lg:gap-[121px]">
          <div
            data-aos="fade-right"
            className="grid gap-6 lg:gap-[56px] max-lg:order-1 w-full max-w-[550px]"
          >
            {FEATURES.map((item, index) => (
              <Heading
                key={index}
                title={item.title}
                description={item.description}
                titleClass={"text-xl"}
                descriptionClass={"text-base font-light text-muted text-xl"}
              />
            ))}
          </div>

          <div className="flex flex-col lg:items-end justify-between gap-6 lg:gap-[47px] lg:text-right">
            <p
              data-aos="fade-left"
              className="text-xl font-light leading-[180%] max-lg:order-1"
            >
              Our platform empowers you to design and refine your own trading
              strategies using advanced AI tools.
            </p>
            <h1
              data-aos="fade-left"
              className="text-5xl lg:text-[64px] text-wrap uppercase leading-tight lg:w-4/5 font-heading text-secondary-50"
            >
              Create, Deploy, and Profit
            </h1>
          </div>
        </div>
      </CardBorderGradient>
    </section>
  );
};

const FEATURES = [
  {
    title: "Create Your Strategy",
    description:
      "Leverage our AI assistant to forge a trading approach that matches your risk tolerance and objectives.",
  },
  {
    title: "Optimize With AI",
    description:
      "Get real-time advice from DEPLOY AI to fine-tune your strategy for optimal performance.",
  },
  {
    title: "Automate Your Success",
    description:
      "Once perfected, let our automated system execute your strategy in the market.",
  },
];
