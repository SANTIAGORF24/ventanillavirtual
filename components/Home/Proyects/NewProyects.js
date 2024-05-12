"use client";
import React from "react";
import { Button } from "@nextui-org/react";

const ProjectCard = ({ title, price, description, offer }) => {
  const handleButtonClick = () => {
    window.open("https://wa.me/573154852832", "_blank");
  };

  return (
    <div className="w-full md:w-1/3 p-6 md:p-8 border border-blue-500 rounded-lg mb-8 md:mb-0 shadow-md">
      <h3 className="text-xl md:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 text-lg md:text-3xl mb-4">{price}</p>
      <p className="mb-4">{description}</p>
      <Button
        className="w-full bg-blue-200 text-gray-500 mb-4"
        onClick={handleButtonClick}
      >
        Empezar
      </Button>
      <h4 className="font-semibold mb-2">Qué ofrecemos:</h4>
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
            Toma la decisión acertada para tu negocio
          </h2>
          <p>Elija uno de nuestros productos asequibles</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full py-10 space-y-10 md:space-y-0 md:space-x-10 ">
          <ProjectCard
            title="Landing en WordPress"
            price="$400 USD"
            description="¿Necesitas una presencia en línea efectiva y atractiva para tu negocio? Nuestro servicio de creación de landings en WordPress es la solución ideal. Con una combinación de diseño personalizado, funcionalidad potente y optimización para motores de búsqueda, te ayudaremos a destacar en la web y atraer a tus clientes potenciales."
            offer={[
              "Desarrollo de diseño personalizado",
              "Integración de plugins esenciales",
              "Optimización para SEO",
            ]}
          />
          <ProjectCard
            title="Desarrollo de Aplicaciones Personalizado"
            price="Cotizar"
            description="¿Necesitas una aplicación que se adapte perfectamente a las necesidades específicas de tu negocio? Nuestro servicio de desarrollo de aplicaciones personalizado es la solución ideal. Con una combinación de diseño, desarrollo y pruebas rigurosas, creamos aplicaciones robustas y funcionales que potencian tu negocio y proporcionan una experiencia óptima para tus usuarios."
            offer={[
              "Análisis de requisitos y consultoría",
              "Diseño de interfaz de usuario personalizada",
              "Desarrollo de funcionalidades a medida",
              "Pruebas de calidad y rendimiento",
              "Soporte continuo y mantenimiento",
            ]}
          />
          <ProjectCard
            title="Landing a Código"
            price="$600 - $1000 USD"
            description="¿Buscas llevar tu presencia en línea al siguiente nivel con una landing totalmente personalizada y única? Nuestro servicio de Landing a Código ofrece soluciones a medida para tu negocio. Con una combinación de diseño personalizado, funcionalidad potente y optimización para motores de búsqueda, te ayudaremos a destacar en la web y atraer a tus clientes potenciales."
            offer={[
              "Desarrollo de diseño personalizado",
              "Integración de funcionalidades específicas",
              "Optimización avanzada para SEO",
              "Integración de sistemas de pago",
              "Soporte técnico continuo",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
