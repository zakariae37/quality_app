import Image from "next/image";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="flex h-[577px] w-full items-center justify-between">
      <div className="h-[577px] w-1/2 overflow-hidden rounded-l-2xl bg-[#194894]">
        <div className="flex flex-col justify-center gap-4 px-12 py-16 text-white">
          <h1 className="mb-4 font-gelasio text-4xl">
            Innovative technology for compounding <br /> excellence.
          </h1>
          <p className="text-lg">
            Tempor ornare sed nulla justo est. Dolor elit morbi ullamcorper
            faucibus egestas sed natoque luctus. Pulvinar sed in ultrices
            porttitor eleifend venenatis morbi scelerisque. Facilisi velit sit
            lectus mauris donec. Dui adipiscing etiam sit lectus quis iaculis
            aliquet. <br />
            <br />
            Commodo nunc facilisis vel arcu et eget augue nisl. Venenatis mattis
            vitae sit sem ut suscipit egestas ut aliquam. Libero proin mauris
            ultrices porttitor quam lacus mi. Condimentum cursus condimentum
            laoreet dignissim amet vestibulum.
          </p>
          <Button className="flex w-[187px] items-center gap-2 rounded-full bg-white text-blue-800 hover:bg-blue-800 hover:text-white">
            More About Us
            <Image
              src="/assets/images/arrow2.png"
              alt="arrow"
              width={16}
              height={16}
            />
          </Button>
        </div>
      </div>
      <div className="h-[577px] w-1/2 overflow-hidden bg-white">
        <Image
          src="/assets/images/banner2.png"
          alt="banner"
          width={577}
          height={577}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
