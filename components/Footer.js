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
    <div className="w-full h-full bg-[#005BC4] flex justify-center py-6">
      <div className="w-4/5 flex flex-col items-center gap-6">
        <div className="w-full flex gap-4 justify-center items-center">
          <div className="w-[100px]">
            <Image
              src="/assets/img/logo.png"
              width={200}
              height={200}
              alt="img"
              className="w-full h-full object-contain brightness-200"
            />
          </div>

          <p className="font-bold text-white text-xl">CIBERTECH</p>
        </div>
        <div className="flex gap-4">
          {sections.map((tx, i) => (
            <a className="font-bold text-white" href="#" key={i}>
              {tx}
            </a>
          ))}
        </div>
        <div>
          <p className="text-white">
            Cotnactanos a:{" "}
            <a className="font-bold" href="mailto:cibertech@cibertech.com">
              cibertech@cibertech.com
            </a>
          </p>
        </div>
        <div>
          <p className="text-white">
            ©2024 Todos los derechos reservados. Cibertech.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
