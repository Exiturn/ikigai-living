import Image from "next/image";
import Images from "@utils/images";

const background = () => {
  return (
    <div className="hidden md:block">
      <Image 
        src={Images[7]}
        width={`1000`}
        height={`1000`}
        layout="responsive"
        alt="cherry blossom"
        className="absolute top-10 xl:top-[0.25rem] pointer-events-none flex-none xl:w-[90vw]"
      />
    </div>
  );
};

export default background;
