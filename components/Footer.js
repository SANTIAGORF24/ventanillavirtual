import Image from "next/image";
import React from "react";

const Footer = () => {
  const sections = [
    "Inicio",
    "Acerca de",
    "Proyectos",
    "Testimonios",
    "Equipo",
    "Contáctanos",
  ];

  return (
    <div className="w-full h-full bg-[#005BC4] flex sm:justify-center py-6 max-sm:px-12">
      <div className="w-4/5 flex flex-col items-center gap-6 max-sm:w-full">
        <div className="w-full flex gap-4 justify-center items-center">
          <div className="w-[50px]">
            <Image
              src="/assets/img/logo.png"
              width={70}
              height={70}
              alt="img"
              className="w-full h-full object-contain brightness-200"
            />
          </div>

          <p className="font-bold text-white text-xl">SIBARTECH</p>
        </div>
        <div className="flex gap-4 max-sm:w-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-8 max-sm:gap-x-20 max-sm:px-10">
          {sections.map((tx, i) => (
            <a className="font-bold text-white" href="#" key={i}>
              {tx}
            </a>
          ))}
        </div>
        <div>
          <p className="text-white">
            Cotactanos a:{" "}
            <a className="font-bold" href="mailto:sibartec@sibartech.com">
              sibartech@gmail.com
            </a>
          </p>
        </div>
        <div>
          <p className="text-white max-sm:px-5">
            ©2024 Todos los derechos reservados. Sibartech.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
