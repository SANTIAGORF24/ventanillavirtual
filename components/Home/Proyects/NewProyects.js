import React from "react";
import { Button } from "@nextui-org/react";

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
          <div className="w-full md:w-1/3 p-6 md:p-8 border border-blue-500 rounded-lg mb-8 md:mb-0 shadow-md ">
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              Landing en WordPress
            </h3>
            <p className="text-gray-500 text-lg md:text-3xl mb-4">$400 USD</p>
            <p className="mb-4">
              ¿Necesitas una presencia en línea efectiva y atractiva para tu
              negocio? Nuestro servicio de creación de landings en WordPress es
              la solución ideal. Con una combinación de diseño personalizado,
              funcionalidad potente y optimización para motores de búsqueda, te
              ayudaremos a destacar en la web y atraer a tus clientes
              potenciales.
            </p>
            <Button className="w-full bg-blue-200 text-gray-500 mb-4">
              Empezar
            </Button>
            <h4 className="font-semibold mb-2">Qué incluye:</h4>
            <ul className="text-sm">
              <li>Desarrollo de diseño personalizado</li>
              <li>Integración de plugins esenciales</li>
              <li>Optimización para SEO</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-6 md:p-8 border border-blue-500 rounded-lg mb-8 md:mb-0 shadow-md bg-blue-200">
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              Desarrollo de Aplicaciones Personalizado
            </h3>
            <p className="text-gray-500 text-lg md:text-3xl mb-4">Cotizar</p>
            <p className="mb-4">
              ¿Necesitas una aplicación que se adapte perfectamente a las
              necesidades específicas de tu negocio? Nuestro servicio de
              desarrollo de aplicaciones personalizado es la solución ideal. Con
              una combinación de diseño, desarrollo y pruebas rigurosas, creamos
              aplicaciones robustas y funcionales que potencian tu negocio y
              proporcionan una experiencia óptima para tus usuarios.
            </p>
            <Button className="w-full bg-white text-black mb-4">Cotizar</Button>
            <h4 className="font-semibold mb-2">Qué ofrecemos:</h4>
            <ul className="text-sm">
              <li>Análisis de requisitos y consultoría</li>
              <li>Diseño de interfaz de usuario personalizada</li>
              <li>Desarrollo de funcionalidades a medida</li>
              <li>Pruebas de calidad y rendimiento</li>
              <li>Soporte continuo y mantenimiento</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-6 md:p-8 border border-blue-500 rounded-lg mb-8 md:mb-0 shadow-md">
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              Landing a Código
            </h3>
            <p className="text-gray-500 text-lg md:text-3xl mb-4">
              $600 - $1000 USD
            </p>
            <p className="mb-4">
              ¿Buscas llevar tu presencia en línea al siguiente nivel con una
              landing totalmente personalizada y única? Nuestro servicio de
              Landing a Código ofrece soluciones a medida para tu negocio. Con
              una combinación de diseño personalizado, funcionalidad potente y
              optimización para motores de búsqueda, te ayudaremos a destacar en
              la web y atraer a tus clientes potenciales.
            </p>
            <Button className="w-full bg-blue-200 text-gray-500 mb-4">
              Empezar
            </Button>
            <h4 className="font-semibold mb-2">Qué ofrecemos:</h4>
            <ul className="text-sm">
              <li>Desarrollo de diseño personalizado</li>
              <li>Integración de funcionalidades específicas</li>
              <li>Optimización avanzada para SEO</li>
              <li>Integración de sistemas de pago</li>
              <li>Soporte técnico continuo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
