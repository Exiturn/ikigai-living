import Image from "next/image";
import Images from "@utils/images";

const Hero = () => {
  return (
    <section className="min-h-[100vh] overflow-hidden">
      <div className="container">
        <h1 className="text-8xl mx-[1.5rem] md:mx-[7.5rem]">IKIGAI</h1>
        <h2>Japanese Inspired</h2>
        <h2>Eco-concious</h2>
        <h2>Homeware</h2>
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
