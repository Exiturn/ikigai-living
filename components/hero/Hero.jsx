import Image from "next/image";
import Images from "@utils/images";

const Hero = () => {
  return (
    <section className="w-full min-h-[100vh] overflow-hidden px-[2rem] md:px-[8rem] ikigai-background">
      <div className="container flex flex-col justify-start items-start">
        <div className="flex flex-row justify-start items-center gap-x-4">
          <h1 className="text-[8rem] z-[2]">Japanese</h1>        
        </div>
        
        <div className="flex flex-col justify-normal items-start w-full text-[8rem]">
          <h2 className=" text-black place-self-center">Eco-concious</h2>
          <h2 className=" place-self-end">Homeware</h2>
        </div>

        <div className="flex flex-row flex-wrap">
          {}

          {/* <Image
          src={Images[0]}
          width={400}
          height={400}
          alt="loader image 1"
        />
        <Image 
          src={Images[1]}
          width={400}
          height={400}
          alt="loader image 2"
        />
        <Image 
          src={Images[2]}
          width={400}
          height={400}
          alt="loader image 3"
        />
        <Image 
          src={Images[3]}
          width={400}
          height={400}
          alt="loader image 4"
        /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
