"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const Projects = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const numProjects = ["TimeGear", "DocuPro", "SportChoice"];

  return (
    <div className="bg-[#D9D9D9] w-full p-6 flex justify-center py-10">
      <div className="w-3/4 flex justify-center">
        <div className="w-1/2 flex flex-col justify-around">
          <div className="w-full flex justify-between">
            {numProjects.map((i, idx) => (
              <Button
                className={`${
                  idx === currentContent
                    ? "bg-[#485098] font-bold text-white"
                    : "bg-white font-bold"
                } text-lg`}
                variant="bordered"
                size="lg"
                key={idx}
                onClick={() => setCurrentContent(idx)}
              >
                {i}
              </Button>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg">
              Rastrea fácilmente la entrada y salida de equipos con TimeGear,
              simplificando la gestión de inventario y mejorando la eficiencia
              operativa.
            </p>
            <ul className={`list-image-check list-inside px-6 text-lg`}>
              <li>Pro medio de un escáner QR registra entrada y salida</li>
              <li>Genera un QR para cada disporitivo</li>
              <li>Historial de por vida de ingreso y salida</li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src="assets/img/timegear.jpg" className="w-1/2"></img>
        </div>
      </div>
    </div>
  );
};

export default Projects;
