"use client";
import React, { useRef, useEffect } from "react";
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
  const slides = [
    { src: "assets/img/react2.png" },
    { src: "assets/img/html.png" },
    { src: "assets/img/css.png" },
    { src: "assets/img/javascript.png" },
    { src: "assets/img/java.png" },
    { src: "assets/img/python2.png" },
    { src: "assets/img/sql.png" },
    { src: "assets/img/tailwind2.png" },
    { src: "assets/img/flutter2.png" },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const autoplayInterval = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 2000); // Cambiar 2000 por el intervalo deseado en milisegundos

    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <div className="mt-10 px-3 -my-12 flex flex-col items-center justify-center max-w-full">
      <div className="w-full lg:w-4/5">
        <h2 className="font-extrabold text-3xl md:text-5xl text-center mb-5">
          Acerca de Nosotros
        </h2>
        <div className="flex flex-col lg:flex-row items-center py-8">
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <Card className="max-w-[400px] mx-auto">
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
          <div className="mb-8 lg:mb-0 lg:w-1/3">
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
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="w-60 h-80 mx-auto"
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false, // Permite que el autoplay continúe incluso si el usuario interactúa con el Swiper
              }}
              ref={swiperRef}
            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center bg-white rounded-2xl text-base font-bold shadow-lg"
                >
                  <div>
                    <Image
                      width={600}
                      alt="NextUI Fruit Image with Zoom"
                      src={slide.src}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
