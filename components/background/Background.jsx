import Image from "next/image";
import Images from "@utils/images";

const background = () => {
  return (
    <>
      <Image 
        src={Images[7]}
        width={`full`}
        height={`full`}
        alt="cherry blossom"
        className="absolute top-10 pointer-events-none"
      />
    </>
  );
};

export default background;
