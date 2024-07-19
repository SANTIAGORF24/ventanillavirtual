"use client";
import React, { useState } from "react";

export function ConsultForm() {
  const [tipoIdentificacion, setTipoIdentificacion] = useState("");

  const handleTipoIdentificacionChange = (event) => {
    setTipoIdentificacion(event.target.value);
  };

  return (
    <div className="flex flex-col items-center w-full p-6 space-y-6 bg-white shadow-md rounded">
      <h2 className="text-[#3367d6] text-2xl font-bold text-center">
        Lo invitamos a consultar el estado de su solicitud.
      </h2>
      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg text-center text-sm w-full max-w-lg shadow-md mt-4 mx-auto">
        <p className="leading-relaxed">
          Los campos marcados con{" "}
          <span className="text-red-500 font-bold">*</span> son{" "}
          <span className="font-medium">obligatorios</span>.
        </p>
      </div>

      <div className="w-full max-w-lg space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="no-radicado" className="block text-gray-700">
              No de radicado <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="no-radicado"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="codigo-seguridad" className="block text-gray-700">
              Código de seguridad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="codigo-seguridad"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <button className="bg-[#3367d6] text-white font-bold py-2 px-4 rounded w-full hover:bg-white hover:text-[#3367d6] hover:border-[#3367d6] hover:border-2 transition-colors duration-300">
          Buscar
        </button>

        <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg text-center text-sm w-full shadow-md mt-4">
          <p className="leading-relaxed">
            Si no cuenta con el número de radicado, a través de su correo
            electrónico registrado y con su número de identificación puede
            recuperar los números de radicados asociados a su número de
            identificación.
          </p>
        </div>
      </div>

      <div className="w-full max-w-lg space-y-4 mt-8">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="tipo-identificacion"
              className="block text-gray-700"
            >
              Tipo de identificación <span className="text-red-500">*</span>
            </label>
            <select
              id="tipo-identificacion"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              value={tipoIdentificacion}
              onChange={handleTipoIdentificacionChange}
              required
            >
              <option value="">Seleccione</option>
              <option value="AN">Anónimo</option>
              <option value="CC">Cédula de Ciudadanía (CC)</option>
              <option value="CE">Cédula de Extranjería (CE)</option>
              <option value="TI">Tarjeta de Identidad (TI)</option>
              <option value="NUIP">
                Número Único de Identificación Personal (NUIP)
              </option>
              <option value="NIP">
                Número de Identificación Personal (NIP)
              </option>
              <option value="PA">Pasaporte</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="correo" className="block text-gray-700">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="correo"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        {tipoIdentificacion && tipoIdentificacion !== "AN" && (
          <div>
            <label htmlFor="identificacion" className="block text-gray-700">
              Identificación <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="identificacion"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        )}
        <button className="bg-[#3367d6] text-white font-bold py-2 px-4 rounded w-full hover:bg-white hover:text-[#3367d6] hover:border-[#3367d6] hover:border-2 transition-colors duration-300">
          Recuperar al correo
        </button>
      </div>

      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg text-center text-sm w-full max-w-lg shadow-md mt-6 mx-auto">
        <p className="leading-relaxed">
          En caso de no tener acceso a sus datos de consulta, comuníquese con el
          <span className="font-medium">
            {" "}
            Grupo Interno de Trabajo de Atención al Ciudadano
          </span>{" "}
          al
          <span className="font-medium">
            {" "}
            (57 -1) 4377030 Extensiones 1003 - 1089 - 1006
          </span>{" "}
          en la ciudad de Bogotá o a la{" "}
          <span className="font-medium">
            línea Gratuita Nacional 01 8000 910 237
          </span>{" "}
          y solicite el estado de su petición y datos de consulta.
        </p>
      </div>
    </div>
  );
}
