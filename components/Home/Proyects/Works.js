"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

const Works = () => {
  return (
    <div className="flex items-center justify-center max-w-full py-10">
      <div className="flex items-center justify-between space-x-5 w-4/5">
        <div>
          <Card className="max-w-2/5">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="/assets/img/logo.png"
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-xl font-semibold leading-none text-default-600">
                    ¿Perdiste tu informacion?
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    !La recuperamos¡
                  </h5>
                </div>
              </div>
              <Button color="primary" radius="full" size="sm">
                Contactanos
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-base text-default-400">
              <p>
                En Cibertech, especializamos en la recuperación de archivos y
                fotos eliminadas de discos duros, USB y más. Devolvemos tus
                datos con precisión y confiabilidad.
              </p>
              <span className="pt-2">
                #Cibertech
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">4</p>
                <p className=" text-default-400 text-small">Especialistas</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">97</p>
                <p className="text-default-400 text-small">Casos exitosos</p>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="max-w-2/5">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="/assets/img/logo.png"
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-xl font-semibold leading-none text-default-600">
                    Cuida la información de tu empresa
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    !Estamos listos¡
                  </h5>
                </div>
              </div>
              <Button color="primary" radius="full" size="sm">
                Contactanos
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-base text-default-400">
              <p>
                En Cibertech, protegemos tu empresa ajustando permisos,
                asegurando hardware y optimizando software. Mantenimiento
                completo para un entorno informático seguro y eficiente.
              </p>
              <span className="pt-2">
                #Cibertech
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small"></p>
                <p className=" text-default-400 text-small">linux sever</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small"></p>
                <p className="text-default-400 text-small">Windows server</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Works;
