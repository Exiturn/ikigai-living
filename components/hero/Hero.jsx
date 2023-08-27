import Image from "next/image";
import Images from "@utils/images";

const Hero = () => {
  return (
    <section className="w-full min-h-[100vh] overflow-hidden sm:px-[2rem] md:px-[8rem] ikigai-background flex flex-col justify-start items-center">
      <div className="container flex flex-col justify-start items-start w-full">
        <div className="flex flex-row justify-start items-center gap-x-4">
          <h1 className="text-[4rem] md:text-[8rem] z-[2] text-black md:text-[#fdfdfd]">Japanese</h1>        
        </div>
        
        <div className="flex flex-col justify-normal items-start w-full text-[4rem] md:text-[8rem]">
          <h2 className="place-self-center z-10 text-[#fdfdfd]">Eco-concious</h2>
          <h2 className="place-self-end text-black">Homeware</h2>
        </div>

        <div className="flex flex-row flex-wrap">
        </div>
      </div>
    </section>
  );
};

export default Hero;
