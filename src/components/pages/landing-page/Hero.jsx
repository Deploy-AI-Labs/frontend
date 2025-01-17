import { RandomReveal } from "react-random-reveal";

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full px-6 lg:px-[52px]">
      <div className="relative z-10 h-screen flex flex-col justify-end">
        <div className="mb-10">
          <h2 data-aos="fade-in" className="text-xl lg:text-2xl font-light">
            Your Next-Gen Trading Co-Pilot
          </h2>
          <h1 className="text-5xl lg:text-[64px] uppercase font-heading text-secondary-50">
            <RandomReveal
              isPlaying
              duration={2}
              revealDuration={1.6}
              characters="WELCOME TO DEPLOY AI"
            />
          </h1>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute z-0 top-0 left-0 w-full h-screen object-cover"
      >
        <source src="/assets/videos/vid-background-lp.mp4" type="video/mp4" />
      </video>
      <div className="bg-gradient-to-t from-background-450 to-transparent absolute bottom-0 right-0 w-full h-20"></div>
    </section>
  );
};
