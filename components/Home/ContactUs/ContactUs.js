import { Button, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div
      id="contacto"
      className="mt-10 px-3 sm:flex items-center flex-col justify-center max-w-full pb-10"
    >
      <div className="flex flex-col justify-between w-4/5">
        <h2 className="font-extrabold text-3xl md:text-5xl text-center mb-10">
          contactanos
        </h2>
      </div>
      <div className="w-4/5 sm:flex justify-between">
        <div className="w-1/3 flex items-center h-[350px] gap-6 max-sm:-my-10">
          <p className="text-4xl font-extrabold">
            Construimos para{" "}
            <strong className="text-cyan-600">crecer juntos</strong>,
            contactanos para saber más
          </p>
          <Image
            src="/assets/img/Interno/contactimg.jpg"
            width={400}
            height={400}
            alt="img"
            className="w-full h-full object-contain"
          />
        </div>
        <form className="w-1/2 flex flex-col gap-4 max-sm:w-full max-sm:mx-10 sm:px-3">
          <Input type="email" variant="underlined" label="Correo Electrónico" />
          <Input type="email" variant="underlined" label="Nombre Completo" />
          <Input type="email" variant="underlined" label="Teléfono" />
          <Textarea
            variant="underlined"
            labelPlacement="outside"
            placeholder="Enter your description"
            defaultValue="Hola! Quiero saber más de..."
          />
          <Button color="primary" variant="ghost">
            Quiero más información
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
