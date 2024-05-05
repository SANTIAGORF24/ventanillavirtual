import React from "react";
import { Button, Image, Input } from "@nextui-org/react";

const NewBanner = () => {
  return (
    <div
      id="inicio"
      className="px-3 sm:flex items-center justify-center max-w-full py-10"
    >
      <div className="sm:flex items-center space-x-6 w-full sm:w-4/5">
        <div>
          <div>
            <h1 className="Newbanner text-6xl font-extrabold sm:text-8xl ">
              SIBARTECH
            </h1>
            <h3 className="text-md sm:text-xl">
              Programamos soluciones, creamos experiencias.
            </h3>
          </div>
          <div className="pt-7 flex flex-col sm:flex-row items-center">
            <Input
              type="email"
              label="Email"
              variant="bordered"
              className="h-12 mb-2 sm:mr-2 sm:mb-0"
            />
            <Button className="buton h-12" color="primary">
              Contactanos
            </Button>
          </div>
        </div>
        <div className="hidden sm:flex max-sm:py-5 pl-40">
          <Image
            width={500} // Establece el ancho deseado en píxeles
            height={500} // Establece la altura deseada en píxeles
            alt="NextUI Fruit Image with Zoom"
            src="assets/img/logo.png"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
