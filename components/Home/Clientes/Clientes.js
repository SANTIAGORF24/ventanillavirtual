import React from "react";

const Clientes = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl flex flex-col justify-center items-center px-4">
        <div className="flex flex-col justify-center items-center space-y-8">
          <p>500 personas han dicho que nos prefieren</p>
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-center">
            Nuestros clientes felices dicen sobre nosotros
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between mt-8">
          <div className="bg-blue-200 rounded-lg p-6 text-center w-full md:w-96 mx-4 mb-8 md:mb-0">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.333l4.472 2.682-1.083-5.93 3.472-3.327-5.833-.85L10 2.167l-2.028 5.739-5.833.85 3.472 3.327-1.083 5.93L10 15.333z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="text-lg font-semibold">
              Colegio Nacional De Curadores Urbanos
            </p>
            <p className="text-xs mb-2">
              Excelente trabajo en la creación de nuestra landing en WordPress.
              ¡Gracias por tu esfuerzo!
            </p>
            <p className="text-sm">Colegio Nacional De Curadores Urbanos</p>
          </div>
          <div className="bg-blue-200 rounded-lg p-6 text-center w-full md:w-96 mx-4 mb-8 md:mb-0">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.333l4.472 2.682-1.083-5.93 3.472-3.327-5.833-.85L10 2.167l-2.028 5.739-5.833.85 3.472 3.327-1.083 5.93L10 15.333z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="text-lg font-semibold">Flow-inc</p>
            <p className="text-xs mb-2">
              Estamos muy contentos con la landing que desarrollaste desde cero.
              El código es limpio y eficiente.
            </p>
            <p className="text-sm">Flow-inc</p>
          </div>
          <div className="bg-blue-200 rounded-lg p-6 text-center w-full md:w-96 mx-4">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.333l4.472 2.682-1.083-5.93 3.472-3.327-5.833-.85L10 2.167l-2.028 5.739-5.833.85 3.472 3.327-1.083 5.93L10 15.333z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="text-lg font-semibold">AppReview</p>
            <p className="text-xs mb-2">
              Estoy muy impresionado con el trabajo que realizaste en nuestro
              proyecto de desarrollo personalizado. La forma en que pudiste
              materializar nuestras ideas en código fue realmente impresionante.
              Gracias por tu profesionalismo y dedicación.
            </p>
            <p className="text-sm">John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
