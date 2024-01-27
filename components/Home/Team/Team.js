"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Divider } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Team = () => {
  // import required modules

  return (
    <div className="px-3 sm:flex items-center justify-center max-w-full">
      <div className="w-full sm:w-4/5 ">
        <h2 className="text-3xl font-bold py-10"> Team</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="sm:flex items-center max-w-8xl">
                  <div className="flex justify-center">
                    <img
                      className="max-sm:w-3/4 rounded-md"
                      src="./assets/img/ramirez.jpeg"
                    />
                  </div>
                  <div className="flex-colum max-sm:py-3">
                    <div>
                      <p>
                        Soy Santiago Ramirez Forero. Estudiante de Ingeniería de
                        Sistemas con experiencia estratégica en el ámbito
                        gubernamental y nacional, destacándome en proyectos con
                        HTML, CSS3, Python, MySQL, Flutter, Java, React, Nextjs
                        y Tailwind. Como Especialista en Soporte de Aplicaciones
                        en el Ministerio de Deporte, lideré el soporte técnico
                        de GESDOC, implementando funciones y garantizando
                        eficiencia. Combino habilidades en soporte técnico y
                        diseño multimedia para contribuir al éxito operativo y
                        creativo en entornos profesionales. Busco nuevos
                        desafíos para seguir creciendo en la ingeniería de
                        sistemas.
                      </p>
                    </div>
                    <div className="sm:flex justify-between items-center p-10">
                      <div>
                        <h3 className="font-bold">CEO Inspirador</h3>
                        <p>Santiago Ramírez Forero</p>
                      </div>
                      <div>
                        <div className="max-w-md max-sm:py-3">
                          <div className="space-y-1">
                            <h4 className="text-medium font-medium">
                              Social Media
                            </h4>
                            <p className="text-small text-default-400">
                              No dudes en segirnos en nuestras redes
                            </p>
                          </div>
                          <Divider className="my-4" />
                          <div className="flex h-5 items-center space-x-8 text-small">
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/facebook.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/linked.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/twitter.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/instagram.png"}
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="sm:flex items-center max-w-8xl">
                  <div className="flex justify-center items-center">
                    <img
                      className="max-sm:w-3/4 rounded-md"
                      src="assets/img/Foto_Mac.jpeg"
                    />
                  </div>
                  <div className="flex-colum max-sm:py-3">
                    <div>
                      <p>
                        Soy Macjainer Molano Ramos, estudiante de Ingeniería de
                        Sistemas, apasionado por la ingeniería de software y
                        desarrollo web. Con sólida formación académica, destaco
                        en diseño e implementación de sistemas informáticos, así
                        como en desarrollo Front End (HTML, CSS, JavaScript,
                        React.js) y bases de datos (SQL, MySQL, Python). Mi
                        experiencia en servicio al cliente fortaleció
                        habilidades comunicativas, pero mi enfoque profesional
                        se centra en la programación. Activamente en busca de
                        oportunidades para contribuir a proyectos desafiantes
                      </p>
                    </div>
                    <div className="sm:flex justify-between items-center p-10">
                      <div>
                        <h3 className="font-bold">CEO Transformador</h3>
                        <p>Macjainer Molano Ramos</p>
                      </div>
                      <div>
                        <div className="max-w-md max-sm:py-3">
                          <div className="space-y-1">
                            <h4 className="text-medium font-medium">
                              Social Media
                            </h4>
                            <p className="text-small text-default-400">
                              No dudes en segirnos en nuestras redes
                            </p>
                          </div>
                          <Divider className="my-4" />
                          <div className="flex h-5 items-center space-x-8 text-small">
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/facebook.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/linked.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/twitter.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/instagram.png"}
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="sm:flex items-center max-w-8xl">
                  <div className="flex justify-center items-center">
                    <img
                      className="max-sm:w-3/4 rounded-md"
                      src="assets/img/Foto_Sebastian.jfif"
                    />
                  </div>
                  <div className="flex-colum max-sm:py-3">
                    <div>
                      <p>
                        Soy Johan Sora, desarrollador de front-end con 3 años de
                        experiencia en ReactJs, Javascript, HTML, CSS, SASS,
                        Redux y NodeJs. Desde los 12 años, mi pasión por la
                        tecnología me ha llevado a aprender constantemente.
                        Comencé con cursos en línea y un Bootcamp para
                        fortalecer mis habilidades. Además del desarrollo, he
                        adquirido conocimientos en marketing, destacándome en
                        proyectos con habilidades en React Native, Mongo DB,
                        Express.js, Django y Python.
                      </p>
                    </div>
                    <div className="sm:flex justify-between items-center p-10">
                      <div>
                        <h3 className="font-bold">CEO Innovador</h3>
                        <p>Sebastian Sora Pinto</p>
                      </div>
                      <div>
                        <div className="max-w-md max-sm:py-3">
                          <div className="space-y-1">
                            <h4 className="text-medium font-medium">
                              Social Media
                            </h4>
                            <p className="text-small text-default-400">
                              No dudes en segirnos en nuestras redes
                            </p>
                          </div>
                          <Divider className="my-4" />
                          <div className="flex h-5 items-center space-x-8 text-small">
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/facebook.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/linked.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/twitter.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/instagram.png"}
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="sm:flex items-center max-w-8xl">
                  <div className="flex justify-center items-center">
                    <img
                      className="max-sm:w-3/4 rounded-md"
                      src="assets/img/Foto_Charles.jfif"
                    />
                  </div>
                  <div className="flex-colum max-sm:py-3">
                    <div>
                      <p>
                        Soy Carlos Enrrique Vargas, un desarrollador web full
                        stack con más de 6 años de experiencia en sitios web,
                        aplicaciones y e-commerce. Mis habilidades abarcan HTML,
                        CSS, JavaScript, PHP y bases de datos, con experiencia
                        en frameworks como JavaScript, PHP y Python. He
                        trabajado en plataformas de cloud como Google Cloud, AWS
                        y Digital Ocean, y tengo experiencia en SEO técnico,
                        integraciones de datos y diseño de frontend. Mi enfoque
                        en estrategias de marketing digital y capacidad para
                        adaptarme a situaciones de alta presión me hacen un
                        activo valioso. Soy proactivo, orientado a metas y
                        siempre listo para aprender y crecer, seguro de aportar
                        valor a cualquier equipo o proyecto.
                      </p>
                    </div>
                    <div className="sm:flex justify-between items-center p-10">
                      <div>
                        <h3 className="font-bold">CEO Colaborativo</h3>
                        <p>Carlos Enrrique Vargas</p>
                      </div>
                      <div>
                        <div className="max-w-md max-sm:py-3">
                          <div className="space-y-1">
                            <h4 className="text-medium font-medium">
                              Social Media
                            </h4>
                            <p className="text-small text-default-400">
                              No dudes en segirnos en nuestras redes
                            </p>
                          </div>
                          <Divider className="my-4" />
                          <div className="flex h-5 items-center space-x-8 text-small">
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/facebook.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/linked.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/twitter.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/instagram.png"}
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
