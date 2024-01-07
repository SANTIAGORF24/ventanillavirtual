import React from "react";
import { Button, Image } from "@nextui-org/react";

const NewBanner = () => {
  return (
    <div className="flex items-center justify-center max-w-full py-10">
      <div className="flex items-center justify-between w-4/5">
        <div>
          <div>
            <h1 className="Newbanner text-8xl font-extrabold ">SIBARTECH</h1>
            <h3 className="text-xl">
              Programamos soluciones, creamos experiencias.
            </h3>
          </div>
          <div className="pt-7">
            <Button className="buton" color="primary">
              Load more
            </Button>
          </div>
        </div>
        <div className="Gif">
          <Image
            isZoomed
            width={750}
            alt="NextUI Fruit Image with Zoom"
            src="assets/img/GIF.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
