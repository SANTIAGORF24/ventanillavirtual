"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, Button, Image } from "@nextui-org/react";

const NewProyects = () => {
  return (
    <div className="px-3 my-2 sm:flex items-center justify-center max-w-full pb-10 sm:my-10 sm:-mx-10">
      <div className="flex flex-col justify-between sm:w-3/4">
        <h2 className="text-3xl font-bold py-10"> Proyectos</h2>
        <div className="flex w-full flex-col">
          <Tabs color="primary" aria-label="Options">
            <Tab key="TimeGear" title="TimeGear">
              <Card className="p-5">
                <div className="flex justify-center max-sm:flex-wrap">
                  <div>
                    <Image
                      className="max-w-60
                    "
                      isZoomed
                      alt="NextUI Fruit Image with Zoom"
                      src="assets/img/input.jpeg"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <CardBody>
                        EquipInOut, nuestra aplicación líder, redefine la
                        gestión de activos al ofrecer un sistema integral para
                        registrar la entrada y salida de equipos. Desde
                        dispositivos tecnológicos hasta herramientas físicas,
                        EquipInOut simplifica el seguimiento y la administración
                        de inventario. Con funciones avanzadas de informes y
                        alertas, la aplicación asegura una visibilidad completa
                        de los activos en tiempo real. Optimiza la eficiencia
                        operativa, minimiza las pérdidas y maximiza el
                        rendimiento del equipo. EquipInOut, tu socio confiable
                        para una gestión de activos sin complicaciones
                        <ul className="pl-5 pt-5 list-disc">
                          <li>
                            {
                              " Por medio de un escáner QR registra entrada y salida"
                            }
                          </li>
                          <li>{" Genera un QR para cada dispositivo"}</li>
                          <li>
                            {" Historial de por vida de ingreso y salida"}
                          </li>
                        </ul>
                      </CardBody>
                    </div>
                    <div className=" px-10">
                      <Button color="primary" variant="ghost">
                        Obtener
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Tab>
            <Tab key="DocuPro" title="DocuPro">
              <Card className="p-5">
                <div className="flex justify-center max-sm:flex-wrap">
                  <div>
                    <Image
                      className="max-w-60
                    "
                      isZoomed
                      alt="NextUI Fruit Image with Zoom"
                      src="assets/img/docupro.jpeg"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <CardBody>
                        DocuPro redefine la gestión documental, proporcionando
                        una plataforma integral para la organización,
                        colaboración y seguridad de la información. Desde la
                        captura hasta la archivación, nuestra solución garantiza
                        eficiencia y confidencialidad con funciones avanzadas de
                        control de acceso y encriptación. Facilitamos la
                        colaboración entre equipos, agilizando flujos de trabajo
                        y mejorando la toma de decisiones. DocuPro no solo
                        gestiona documentos, sino que transforma procesos,
                        ahorrando tiempo y recursos para construir un entorno de
                        trabajo más eficiente y seguro. Descubre la revolución
                        en la gestión documental con DocuPro.
                      </CardBody>
                    </div>
                    <div className=" px-10">
                      <Button className="w-10 " color="primary" variant="ghost">
                        Obtener
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Tab>
            <Tab key="WebSite" title="WebSite">
              <Card className="p-5">
                <div className="flex justify-center max-sm:flex-wrap">
                  <div>
                    <Image
                      className="max-w-60
                    "
                      isZoomed
                      alt="NextUI Fruit Image with Zoom"
                      src="assets/img/carro.jpeg"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <CardBody>
                        En IVC, especializamos en el desarrollo de la página web
                        para servicios de asistencia en carretera para vehículos
                        pesados. Nuestra plataforma intuitiva destaca los
                        servicios de reparación y asistencia para aquellos
                        vehículos que quedan varados en carreteras remotas.
                        Desde la presentación de servicios hasta la facilidad de
                        contacto y ubicación, creamos una experiencia digital
                        que refleja la urgencia y profesionalismo de los
                        servicios de asistencia en carretera para vehículos
                        pesados. Con un diseño centrado en el usuario y una
                        navegación sencilla, garantizamos que la presencia en
                        línea de IVC sea tan eficiente como sus servicios de
                        rescate en carretera. Descubre la innovación en el
                        desarrollo web con IVC.
                      </CardBody>
                    </div>
                    <div className=" px-10">
                      <Button className="w-10 " color="primary" variant="ghost">
                        Obtener
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default NewProyects;
