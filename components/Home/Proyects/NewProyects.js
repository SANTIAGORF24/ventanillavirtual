import React from "react";
import { Tabs, Tab, Card, CardBody, Button, Image } from "@nextui-org/react";

const NewProyects = () => {
  return (
    <>
      <div className="mt-40 w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-8">
          <h2 className="font-extrabold text-5xl w-4/6 text-center">
            Toma la decisión acertada para tu negocio
          </h2>
          <p>Elija Uno de nuestros productos asequibles</p>
        </div>
        <div className="flex justify-between w-5/6 py-20">
          <div className="w-1/3 p-8 border border-blue-500 rounded-lg mr-4">
            <h3 className="text-3xl font-bold mb-4">Landing en WordPress</h3>
            <p className="text-gray-500 text-4xl mb-4">$400 USD</p>
            <p className="mb-4">
              ¿Necesitas una presencia en línea efectiva y atractiva para tu
              negocio? Nuestro servicio de creación de landings en WordPress es
              la solución ideal. Con una combinación de diseño personalizado,
              funcionalidad potente y optimización para motores de búsqueda, te
              ayudaremos a destacar en la web y atraer a tus clientes
              potenciales.
            </p>
            <Button className="bg-blue-200 text-gray-500 mb-4 w-full text-xl">
              Empezar
            </Button>
            <h4 className="font-semibold mb-4">Qué incluye:</h4>
            <ul>
              <li className="mb-2">Desarrollo de diseño personalizado</li>
              <li className="mb-2">Integración de plugins esenciales</li>
              <li className="mb-2">Optimización para SEO</li>
            </ul>
          </div>
          <div className="w-1/3 p-8 border border-blue-500 rounded-lg mr-4 mt-[-40px]">
            <h3 className="text-3xl font-bold mb-4">
              Desarrollo de Aplicaciones Personalizado
            </h3>
            <p className="text-gray-500 text-4xl mb-4">Cotizar</p>
            <p className="mb-4">
              ¿Necesitas una aplicación que se adapte perfectamente a las
              necesidades específicas de tu negocio? Nuestro servicio de
              desarrollo de aplicaciones personalizado es la solución ideal. Con
              una combinación de diseño, desarrollo y pruebas rigurosas, creamos
              aplicaciones robustas y funcionales que potencian tu negocio y
              proporcionan una experiencia óptima para tus usuarios.
            </p>
            <Button className="bg-blue-200 text-gray-500 mb-4 w-full text-xl">
              Cotizar
            </Button>
            <h4 className="font-semibold mb-4">Qué ofrecemos:</h4>
            <ul>
              <li className="mb-2">Análisis de requisitos y consultoría</li>
              <li className="mb-2">
                Diseño de interfaz de usuario personalizada
              </li>
              <li className="mb-2">Desarrollo de funcionalidades a medida</li>
              <li className="mb-2">Pruebas de calidad y rendimiento</li>
              <li className="mb-2">Soporte continuo y mantenimiento</li>
            </ul>
          </div>
          <div className="w-1/3 p-8 border border-blue-500 rounded-lg mr-4">
            <h3 className="text-3xl font-bold mb-4">Landing a Código</h3>
            <p className="text-gray-500 text-4xl mb-4">$600 - $1000 USD</p>
            <p className="mb-4">
              ¿Buscas llevar tu presencia en línea al siguiente nivel con una
              landing totalmente personalizada y única? Nuestro servicio de
              "Landing a Código" ofrece soluciones a medida para tu negocio. Con
              una combinación de diseño personalizado, funcionalidad potente y
              optimización para motores de búsqueda, te ayudaremos a destacar en
              la web y atraer a tus clientes potenciales.
            </p>
            <Button className="bg-blue-200 text-gray-500 mb-4 w-full text-xl">
              Empezar
            </Button>
            <h4 className="font-semibold mb-4">Qué ofrecemos:</h4>
            <ul>
              <li className="mb-2">Desarrollo de diseño personalizado</li>
              <li className="mb-2">
                Integración de funcionalidades específicas
              </li>
              <li className="mb-2">Optimización avanzada para SEO</li>
              <li className="mb-2">Integración de sistemas de pago</li>
              <li className="mb-2">Soporte técnico continuo</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProyects;
