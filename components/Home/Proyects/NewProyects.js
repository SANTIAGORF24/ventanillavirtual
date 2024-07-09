"use client";
import React from "react";
import { Button, Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

const ProjectCard = ({ title, price, description, offer }) => {
  const handleButtonClick = () => {
    window.open("https://wa.me/573154852832", "_blank");
  };

  return (
    <div className="w-full md:w-1/3 p-6 md:p-8 border border-blue-500 rounded-lg mb-8 md:mb-0 shadow-md">
      <h3 className="text-xl md:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 text-lg md:text-3xl mb-4">{price}</p>
      <p className="mb-4">{description}</p>
      <Button className="w-full bg-blue-200 mb-4" onClick={handleButtonClick}>
        Empezar
      </Button>
      <h4 className="font-semibold mb-2">Qué ofrecemos para {title}:</h4>
      <ul className="text-sm">
        {offer.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const NewProjects = () => {
  return (
    <div className="mt-20 w-full flex flex-col justify-center items-center px-4">
      <div className="w-5/6 flex flex-col justify-center items-center">
        <div className="mt-10 flex flex-col w-4/6 justify-center items-center space-y-8">
          <h2
            id="cotizar"
            className="font-extrabold text-3xl md:text-5xl text-center"
          >
            MOMENTOS INOLVIDABLES CONTIGO
          </h2>
          <p>Cada momento a tu lado me llena de felicidad el alma</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full py-10 space-y-10 md:space-y-0 md:space-x-10">
          <Accordion>
            <AccordionItem title="Primer prueblito">
              <Image
                src="/assets/img/horizontal/v1.jpeg"
                alt="Primer prueblito"
                width={600}
                height={400}
              />
              <p className="text-black">
                Fue muy lindo visitar el primer pueblito juntos. Disfruté mucho
                el día paseando contigo y conociendo Tabio, compartiendo estos
                momentos con mi familia. ¡Uno de muchos más por descubrir!
              </p>
            </AccordionItem>
            <AccordionItem title="Primer te amo">
              <Image
                src="/assets/img/horizontal/v2.jpeg"
                alt="Primer te amo"
                width={600}
                height={400}
              />
              <p className="text-black">
                Es imposible olvidar la primera vez que te dije que te amaba.
                Fue un momento muy especial y sincero, porque realmente lo
                sentía y simplemente me nació decírtelo.
              </p>
            </AccordionItem>
            <AccordionItem title="Primera vez en el gym juntos">
              <Image
                src="/assets/img/horizontal/v3.jpeg"
                alt="Primera vez en el gym juntos"
                width={600}
                height={400}
              />
              <p className="text-black">
                Adoro cuando vamos al gym juntos. Me alegra mucho que compartas
                conmigo mi hobby y me hace muy feliz cuando me acompañas y
                compartimos momentos divertidos entrenando.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
