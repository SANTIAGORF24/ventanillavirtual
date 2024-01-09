"use client";
import React, { useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "../../../app/globals.css";

export function NewAbout() {
  return (
    <div className="px-2 -my-12 sm:flex items-center justify-center max-w-full">
      <div className="w-4/5 max-sm:w-3/4">
        <h2 className="text-3xl font-bold py-10 max-sm:text-2xl"> Acerca de</h2>
        <div className="-my-8 sm:flex items-center py-8">
          <div className="full-w">
            <Card className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="/assets/img/logo.png"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Sobre Nosotros</p>
                  <p className="text-small text-default-500">
                    Transformando Ideas en Realidad
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  En Sibartech, nos apasiona la creación y el desarrollo de
                  soluciones innovadoras a través de la programación. Somos una
                  empresa líder en el campo de la tecnología, especializada en
                  el diseño, desarrollo y mantenimiento de proyectos a medida.
                  Nuestra misión es simple pero poderosa: transformar tus ideas
                  en realidades digitales que superen tus expectativas.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link isExternal showAnchorIcon href="#">
                  Puedes contactarnos
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="w-2/4 max-sm:w-full my-3">
            <Accordion variant="splitted">
              <AccordionItem
                data-open="true"
                aria-label="¿Qué Hacemos?"
                title="¿Qué Hacemos?"
              >
                <p>
                  Desde el corazón de la programación, creamos soluciones que
                  impulsan el progreso. En Sibartech, no solo construimos líneas
                  de código, construimos puentes digitales entre conceptos y
                  ejecución. Nos especializamos en el desarrollo de proyectos a
                  medida que abarcan desde aplicaciones web y móviles hasta
                  sistemas complejos de gestión. Cada proyecto es una
                  oportunidad para demostrar nuestra destreza técnica y
                  creativa.
                </p>
              </AccordionItem>
              <AccordionItem
                aria-label="Comprometidos con tu Éxito"
                title="Comprometidos con tu Éxito"
              >
                <p>
                  En Sibartech, entendemos que el desarrollo de software no
                  termina con la entrega del proyecto. Nos comprometemos a
                  brindar un soporte excepcional que garantice el rendimiento
                  continuo y la adaptabilidad de nuestras soluciones. Nuestro
                  equipo de expertos está siempre disponible para abordar
                  cualquier desafío y garantizar que tu sistema funcione sin
                  problemas, permitiéndote centrarte en lo que haces mejor:
                  hacer crecer tu negocio.
                </p>
              </AccordionItem>
              <AccordionItem
                aria-label="Nuestra Filosofía"
                title="Nuestra Filosofía"
              >
                <p>
                  En el mundo dinámico de la tecnología, la innovación es clave.
                  En Sibartech, abrazamos la filosofía de la mejora continua.
                  Mantenemos nuestros conocimientos actualizados con las últimas
                  tendencias y tecnologías para ofrecerte soluciones
                  vanguardistas que te posicionen a la vanguardia de tu
                  industria.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-1/4 max-sm:px-5">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
