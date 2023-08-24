import Image from "next/image";
import Images from "@utils/images";

const Hero = () => {
  return (
    <section className="min-h-[100vh] overflow-hidden mx-[2rem] md:mx-[8rem]">
      <div className="container flex flex-col justify-start items-center">
        <div className="flex flex-row justify-between items-center gap-x-4">
          <h1 className="text-[8rem]">Japanese</h1>
          <p className="text-[0.9rem] text-black w-[33%]">From our organic A grade Japanese Matcha to our handmade aromatherapy candles, all of our packaging is plastic free and plants a tree with your purchase.</p>
        </div>
        
        <div className="flex flex-col justify-normal items-start w-full text-[8rem]">
          <h2 className=" text-black place-self-center text-decoration-wavy underline underline-offset-[0.5rem]">Eco-concious</h2>
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
