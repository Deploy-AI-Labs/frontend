export const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="absolute z-0 top-0 left-0 w-full h-full object-cover"
    >
      <source src="/assets/videos/vid-background.mp4" type="video/mp4" />
    </video>
  );
};
