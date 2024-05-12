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
    <div
      id="equipo"
      className="mt-20 px-3 sm:flex items-center justify-center max-w-full"
    >
      <div className="w-full sm:w-4/5 ">
        <div className="mb-10 flex flex-col items-center space-y-8">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-center">
            Nuestro Equipo de Desarrolladores
          </h2>
          <p>Más de 500 desarrolladores forman parte de nuestro equipo</p>
        </div>

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
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center px-12">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="sm:flex items-center max-w-8xl">
                  <div className="flex justify-center">
                    <img
                      className="max-w-64 rounded-md"
                      src="./assets/img/Team/ramirez.jpg"
                      alt="Desarrollador de sibartech"
                    />
                  </div>
                  <div className="flex-colum max-sm:py-3">
                    <div>
                      <p>
                        Soy Santiago Ramirez Forero. Como Ingeniero de Sistemas,
                        he liderado proyectos estratégicos en entidades
                        gubernamentales y empresariales, destacándome por mi
                        compromiso con la innovación tecnológica y el diseño de
                        excelencia. Mi experiencia en el Ministerio del Deporte
                        y el Colegio Nacional de Curadores Urbanos ha
                        enriquecido mis habilidades en el desarrollo de
                        aplicaciones, desde HTML y CSS3 hasta Python, React y
                        Flask.
                      </p>
                    </div>
                    <div className="sm:flex justify-between items-center p-10">
                      <div>
                        <h3 className="font-bold"> Desarrollador Full Stack</h3>
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
                                src={"assets/img/Contact/facebook.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/linked.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/twitter.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/instagram.jpg"}
                                alt="Desarrollo Web con sibartech"
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
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center px-12">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="sm:flex items-center max-w-8xl">
                  <div className="flex justify-center items-center">
                    <img
                      className="max-w-64 rounded-md"
                      src="assets/img/Team/mac.jpg"
                      alt="Desarrollador de sibartech"
                    />
                  </div>
                  <div className="flex-colum max-sm:py-3">
                    <div>
                      <p>
                        Soy Macjainer Molano Ramos, Ingeniero de Sistemas,
                        apasionado por la ingeniería de software y desarrollo
                        web. Con sólida formación académica, destaco en diseño e
                        implementación de sistemas informáticos, así como en
                        desarrollo Front End (HTML, CSS, JavaScript, React.js) y
                        bases de datos (SQL, MySQL, Python). Mi experiencia en
                        servicio al cliente fortaleció habilidades
                        comunicativas, pero mi enfoque profesional se centra en
                        la programación. Activamente en busca de oportunidades
                        para contribuir a proyectos desafiantes
                      </p>
                    </div>
                    <div className="sm:flex justify-between items-center p-10">
                      <div>
                        <h3 className="font-bold">
                          {" "}
                          Desarrollador Full Stack (WordPress)
                        </h3>
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
                                src={"assets/img/Contact/facebook.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/linked.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/twitter.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/instagram.jpg"}
                                alt="Desarrollo Web con sibartech"
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
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center px-12">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="sm:flex items-center max-w-8xl">
                  <div className="flex justify-center items-center">
                    <img
                      className="max-w-64 rounded-md"
                      src="assets/img/Team/Foto_Sebastian.jpg"
                      alt="Desarrollador de sibartech"
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
                        <h3 className="font-bold"> Desarrollador Full Stack</h3>
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
                                src={"assets/img/Contact/facebook.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/linked.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/twitter.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/instagram.jpg"}
                                alt="Desarrollo Web con sibartech"
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
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center px-12">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="sm:flex items-center max-w-8xl">
                  <div className="flex justify-center items-center">
                    <img
                      className="max-w-64 rounded-md"
                      src="assets/img/Team/Foto_Charles.jpg"
                      alt="Desarrollador de sibartech"
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
                        <h3 className="font-bold">
                          {" "}
                          Desarrollador Full Stack / Desarrollador Movil
                        </h3>
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
                                src={"assets/img/Contact/facebook.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/linked.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/twitter.jpg"}
                                alt="Desarrollo Web con sibartech"
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/Contact/instagram.jpg"}
                                alt="Desarrollo Web con sibartech"
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
