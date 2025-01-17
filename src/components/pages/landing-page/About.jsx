import { useInView } from "react-intersection-observer";
import { RandomReveal } from "react-random-reveal";
import { CardBorderGradient } from "../../global/CardBorderGradient";
import Heading from "../../global/Heading";
import { Button } from "../../ui/button";

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      className="relative py-10  px-6 lg:px-[52px] z-0 min-h-screen w-full"
    >
      <CardBorderGradient>
        <div className="flex flex-col gap-[52px] lg:gap-[139px]">
          <div className="flex max-lg:flex-col items-center lg:items-end gap-6 lg:gap-[47px]">
            <img
              data-aos="fade-in"
              src="/assets/images/img-chatbox.png"
              alt="chat box image"
              className="lg:w-[549px]"
            />
            <div className="py-8">
              <h1
                ref={ref}
                className="text-5xl lg:text-[64px] uppercase leading-tight md:w-2/3 font-heading text-secondary-50"
              >
                <RandomReveal
                  isPlaying={inView}
                  duration={2}
                  revealDuration={1.6}
                  characters="WHY DEPLOY AI"
                />
              </h1>
              <p
                data-aos="fade-up"
                className="text-lg lg:text-xl font-light leading-[180%] my-6 lg:mb-[37px] lg:mt-[22px]"
              >
                Our platform empowers you to design and refine your own trading
                strategies using advanced AI tools. Whether you&apos;re a
                beginner or an experienced trader, DEPLOY AI adapts to your
                needs, helping you create strategies that work for you.
              </p>
              <Button data-aos="fade-up" className="text-base w-[116px]">
                TRY NOW
              </Button>
            </div>
          </div>

          <div className="py-8 space-y-6 lg:space-y-[52px]">
            <h1
              ref={ref2}
              className="text-5xl lg:text-[64px] uppercase leading-tight lg:w-2/3 font-heading text-secondary-50"
            >
              <RandomReveal
                isPlaying={inView2}
                duration={2}
                revealDuration={1.6}
                characters="TAKE THE BENEFITS"
              />
            </h1>
            <div
              data-aos="fade-up"
              className="grid lg:grid-cols-3 gap-6 lg:gap-[42px]"
            >
              {BENEFITS.map((item, index) => (
                <Heading
                  key={index}
                  title={item.title}
                  description={item.description}
                  titleClass={"text-xl"}
                  descriptionClass={"text-base font-light text-muted"}
                />
              ))}
            </div>
          </div>
        </div>
      </CardBorderGradient>

      <div
        data-aos="slide-left"
        className="absolute -top-[50px] z-0 -right-[600px] w-[944px]"
      >
        <img
          src="/assets/images/img-decoration-gradient.png"
          alt="app image"
          className="w-full h-[250px] rotate-6"
        />
      </div>
      <div
        data-aos="slide-right"
        className="absolute -top-[50px] z-0 -left-[700px] w-[944px]"
      >
        <img
          src="/assets/images/img-decoration-gradient.png"
          alt="app image"
          className="w-full h-[250px] -rotate-6"
        />
      </div>
      <div
        data-aos="slide-left"
        className="absolute -bottom-[150px] z-0 -right-[600px] w-[944px]"
      >
        <img
          src="/assets/images/img-decoration-gradient.png"
          alt="app image"
          className="w-full h-[250px]"
        />
      </div>
      <div
        data-aos="slide-right"
        className="absolute -bottom-[80px] z-0 -left-[700px] w-[944px]"
      >
        <img
          src="/assets/images/img-decoration-gradient.png"
          alt="app image"
          className="w-full h-[250px] "
        />
      </div>
    </section>
  );
};

const BENEFITS = [
  {
    title: "Personalized Trading",
    description:
      "We provide the tools; you create the strategies that resonate with your unique trading style.",
  },
  {
    title: "Community",
    description:
      "Harness the collective knowledge of a thriving trader community.",
  },
  {
    title: "Dynamic Adaptation",
    description:
      "Adjust your strategies in real-time with AI-driven insights and market analysis.",
  },
];
