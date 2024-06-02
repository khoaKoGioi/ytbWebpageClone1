// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/videi2.mp4";
export const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Viturelr build tools
        {/* bg-clip-text means to crop an element's background to match the shape of the text
        it means the background color will only be visible where the text is */}
        <span
          className="bg-gradient-to-r from-orange-500 to-orange-800
          text-transparent bg-clip-text"
        >
          {" "}
          for developers
        </span>
      </h1>
      <span className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </span>
    </div>
  );
};
export default Hero;
