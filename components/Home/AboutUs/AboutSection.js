// AboutSection.js
"use client";
import React, { useRef, useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import CardComponent from "./CardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const cardClasses = "mb-8 lg:mb-0 lg:w-1/3";
const slideClasses =
  "flex items-center justify-center bg-white rounded-2xl text-base font-bold shadow-lg";

function AboutSection({ slides }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;

    const autoplayInterval = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 2000);

    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <>
      <div
        id="acerca"
        className="mt-10 px-3 -my-12 flex flex-col items-center justify-center max-w-full"
      >
        <div className="w-full lg:w-4/5">
          <h1 className="font-extrabold text-3xl md:text-5xl text-center mb-5">
            Desarrollo Web por Sibartech
          </h1>
          <div className="flex flex-col lg:flex-row items-center py-8">
            <div className={cardClasses}>
              <CardComponent
                title="Sobre Nosotros"
                subtitle="Transformando Ideas en Realidad"
                body="En Sibartech, nos apasiona la creación y el desarrollo de soluciones innovadoras a través de la programación. Somos una empresa líder en el campo de la tecnología, especializada en el diseño, desarrollo y mantenimiento de proyectos a medida. Nuestra misión es simple pero poderosa: transformar tus ideas en realidades digitales que superen tus expectativas."
                footer={<a href="#contacto">Puedes contactarnos</a>}
              />
            </div>
            <div className={cardClasses}>
              <Accordion variant="splitted">
                {accordionItems.map((item, index) => (
                  <AccordionItem key={index} {...item} />
                ))}
              </Accordion>
            </div>
            <div className={`${cardClasses} hidden lg:block`}>
              {/* ^^^ Añade la clase 'hidden lg:block' para ocultar en dispositivos móviles */}
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-60 h-80 mx-auto"
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                ref={swiperRef}
              >
                {slides &&
                  slides.map((slide, index) => (
                    <SwiperSlide key={index} className={slideClasses}>
                      <div>
                        <img
                          width={600}
                          height={600}
                          alt="Desarrollo Web por Sibartech"
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
    </>
  );
}

const accordionItems = [
  {
    "data-open": true,
    "aria-label": "¿Qué Hacemos?",
    title: "¿Qué Hacemos?",
    children: (
      <p>
        Desde el corazón de la programación, creamos soluciones que impulsan el
        progreso. En Sibartech, no solo construimos líneas de código,
        construimos puentes digitales entre conceptos y ejecución. Nos
        especializamos en el desarrollo de proyectos a medida que abarcan desde
        aplicaciones web y móviles hasta sistemas complejos de gestión. Cada
        proyecto es una oportunidad para demostrar nuestra destreza técnica y
        creativa.
      </p>
    ),
  },
  {
    "aria-label": "Comprometidos con tu Éxito",
    title: "Comprometidos con tu Éxito",
    children: (
      <p>
        En Sibartech, entendemos que el desarrollo de software no termina con la
        entrega del proyecto. Nos comprometemos a brindar un soporte excepcional
        que garantice el rendimiento continuo y la adaptabilidad de nuestras
        soluciones. Nuestro equipo de expertos está siempre disponible para
        abordar cualquier desafío y garantizar que tu sistema funcione sin
        problemas, permitiéndote centrarte en lo que haces mejor: hacer crecer
        tu negocio.
      </p>
    ),
  },
  {
    "aria-label": "Nuestra Filosofía",
    title: "Nuestra Filosofía",
    children: (
      <p>
        En el mundo dinámico de la tecnología, la innovación es clave. En
        Sibartech, abrazamos la filosofía de la mejora continua. Mantenemos
        nuestros conocimientos actualizados con las últimas tendencias y
        tecnologías para ofrecerte soluciones vanguardistas que te posicionen a
        la vanguardia de tu industria.
      </p>
    ),
  },
];

export default AboutSection;
