"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react"; // Usando Tooltip de NextUI

import Image from "next/image";

export function Denuncias() {
  const [tipoIdentificacion, setTipoIdentificacion] = useState("");

  const handleTipoIdentificacionChange = (e) => {
    setTipoIdentificacion(e.target.value);
  };

  return (
    <div className="w-4/5 mx-auto space-y-8 p-4 border border-gray-300 rounded mb-20">
      <div className="space-y-4">
        <label htmlFor="tipo-solicitud" className="block text-gray-700">
          Subtema
        </label>
        <select
          id="tipo-solicitud"
          className="block w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Seleccione</option>
          <option value="denuncias-general">Denuncias en general</option>
          <option value="denuncias-violencia-genero">
            Denuncias de Violencia basada en género en el Deporte
          </option>
          <option value="denuncias-corrupcion">Denuncias por Corrupción</option>
        </select>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <label htmlFor="descripcion" className="block text-gray-700">
            Descripción
          </label>
          <Tooltip
            content="Ingrese la descripción de su solicitud. Recuerde que su solicitud puede contener un máximo de 1500 caracteres."
            placement="right"
          >
            <div className="relative flex items-center justify-center ml-2 w-8 h-8 bg-white text-blue-600 rounded-full cursor-pointer">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M12 4a8 8 0 100 16 8 8 0 000-16z"
                />
              </svg>
            </div>
          </Tooltip>
        </div>
        <textarea
          id="descripcion"
          className="block w-full p-2 border border-gray-300 rounded"
          maxLength="1500"
          placeholder="Su solicitud puede contener un máximo de 1500 caracteres, para que realice en forma clara y concreta su solicitud ante la entidad."
        ></textarea>

        <label htmlFor="anexos" className="block text-gray-700">
          Anexos
        </label>
        <input
          type="file"
          id="anexos"
          className="block w-full p-2 border border-gray-300 rounded"
          accept=".pdf, .doc, .docx, .jpg, .png, .xls, .xlsx, .zip, .rar, .mp3, .mp4"
        />
        <p className="text-gray-600">
          Cuando requiera o sea de su interés presentar algún documento que
          soporte su petición puede adjuntarlo en esta sección. Nota: Los
          documentos permitidos deben ser de tipo .PDF .DOC .DOCX .JPG .PNG .XLS
          .XLSX .ZIP .RAR .MP3 .MP4, Tamaño máximo permitido de archivo 25 MB.
        </p>
      </div>

      <Accordion>
        <AccordionItem
          title={
            <div className="flex items-center">
              Registre sus datos personales
              <Tooltip
                content="Ingrese sus datos personales para continuar con el trámite. En dado caso de no querer identificarse, seleccione la opción de anónimo."
                placement="right"
              >
                <div className="relative flex items-center justify-center ml-2 w-10 h-10 bg-white text-blue-600 rounded-full cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M12 4a8 8 0 100 16 8 8 0 000-16z"
                    />
                  </svg>
                </div>
              </Tooltip>
            </div>
          }
          classNames={{ title: "text-[#4b569c] font-bold" }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="tipo-identificacion"
                className="block text-gray-700"
              >
                Tipo de identificación
              </label>
              <select
                id="tipo-identificacion"
                className="block w-full p-2 border border-gray-300 rounded"
                value={tipoIdentificacion}
                onChange={handleTipoIdentificacionChange}
              >
                <option value="">Seleccione</option>
                <option value="anonimo">Anónimo</option>
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
            {tipoIdentificacion && tipoIdentificacion !== "anonimo" && (
              <>
                <div>
                  <label
                    htmlFor="identificacion"
                    className="block text-gray-700"
                  >
                    Identificación
                  </label>
                  <input
                    id="identificacion"
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="primer-nombre"
                    className="block text-gray-700"
                  >
                    Primer nombre *
                  </label>
                  <input
                    id="primer-nombre"
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="segundo-nombre"
                    className="block text-gray-700"
                  >
                    Segundo nombre
                  </label>
                  <input
                    id="segundo-nombre"
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="primer-apellido"
                    className="block text-gray-700"
                  >
                    Primer apellido *
                  </label>
                  <input
                    id="primer-apellido"
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="segundo-apellido"
                    className="block text-gray-700"
                  >
                    Segundo apellido
                  </label>
                  <input
                    id="segundo-apellido"
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="direccion" className="block text-gray-700">
                    Dirección
                  </label>
                  <input
                    id="direccion"
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-gray-700">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono-movil"
                    className="block text-gray-700"
                  >
                    Teléfono móvil
                  </label>
                  <input
                    id="telefono-movil"
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="correo" className="block text-gray-700">
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    type="email"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmar-correo"
                    className="block text-gray-700"
                  >
                    Confirmar correo electrónico
                  </label>
                  <input
                    id="confirmar-correo"
                    type="email"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="pais" className="block text-gray-700">
                    País
                  </label>
                  <select
                    id="pais"
                    className="block w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="colombia">Colombia</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="departamento" className="block text-gray-700">
                    Departamento
                  </label>
                  <select
                    id="departamento"
                    className="block w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="municipio" className="block text-gray-700">
                    Municipio
                  </label>
                  <select
                    id="municipio"
                    className="block w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione</option>
                  </select>
                </div>
                <div className="col-span-2 bg-gray-100 border border-gray-300 p-4 rounded-lg text-left text-sm w-full">
                  <p className="w-full">
                    MINDEPORTE está comprometido en permitir el ejercicio
                    efectivo de los derechos de todas las poblaciones, de ahí
                    nuestro interés en identificar características relevantes
                    que nos permitan adecuar nuestra oferta institucional. Si
                    pertenece o se identifica con algún grupo poblacional
                    específico a continuación podrá indicarlo asi en formato
                    como
                  </p>
                </div>
                <div className="col-span-1">
                  <label htmlFor="edad" className="block text-gray-700">
                    Edad
                  </label>
                  <select
                    id="edad"
                    className="block w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione</option>
                    <option value="0-5">Primera infancia de 0 a 5 años</option>
                    <option value="6-11">Infancia de 6 a 11 años</option>
                    <option value="12-17">Adolescencia de 12 a 17 años</option>
                    <option value="18-28">Jóvenes 18 a 28 años</option>
                    <option value="29-59">Adultos 29 a 59 años</option>
                    <option value="60+">Adulto mayores - 60 años o más</option>
                    <option value="prefiero-no-decirlo">
                      Prefiero no decirlo
                    </option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="sexo-nacimiento"
                    className="block text-gray-700"
                  >
                    Sexo de Nacimiento
                  </label>
                  <select
                    id="sexo-nacimiento"
                    className="block w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione</option>
                    <option value="mujer">Mujer</option>
                    <option value="hombre">Hombre</option>
                    <option value="intersexo">Intersexo</option>
                    <option value="prefiero-no-decirlo">
                      Prefiero no decirlo
                    </option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="identidad-genero"
                    className="block text-gray-700"
                  >
                    Identidad de género
                  </label>
                  <select
                    id="identidad-genero"
                    className="block w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione</option>
                    <option value="femenino">Femenino</option>
                    <option value="masculino">Masculino</option>
                    <option value="transgenero">Transgénero</option>
                    <option value="no-binario">No binario</option>
                    <option value="prefiero-no-decirlo">
                      Prefiero no decirlo
                    </option>
                    <option value="otra">Otra</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="orientacion-sexual"
                    className="block text-gray-700"
                  >
                    Orientación sexual
                  </label>
                  <select
                    id="orientacion-sexual"
                    className="block w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione</option>
                    <option value="heterosexual">Heterosexual</option>
                    <option value="gay">Gay</option>
                    <option value="lesbiana">Lesbiana</option>
                    <option value="bisexual">Bisexual</option>
                    <option value="prefiero-no-decirlo">
                      Prefiero no decirlo
                    </option>
                    <option value="otra">Otra</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="personas-discapacidad"
                    className="block text-gray-700"
                  >
                    Personas con Discapacidad
                  </label>
                  <select
                    id="personas-discapacidad"
                    className="block w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione</option>
                    <option value="auditiva">Auditiva</option>
                    <option value="fisica">Física</option>
                    <option value="intelectual">Intelectual (cognitiva)</option>
                    <option value="multiple">Múltiple</option>
                    <option value="psicosocial">Psicosocial (mental)</option>
                    <option value="visual">Visual</option>
                    <option value="sordo-ceguera">Sordo-ceguera</option>
                    <option value="ninguna">Ninguna</option>
                    <option value="otra">Otra</option>
                    <option value="prefiero-no-decirlo">
                      Prefiero no decirlo
                    </option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="grupos-etnicos"
                    className="block text-gray-700"
                  >
                    Grupos Étnicos y Otros
                  </label>
                  <select
                    id="grupos-etnicos"
                    className="block w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione</option>
                    <option value="comunidades-campesinas">
                      Comunidades campesinas
                    </option>
                    <option value="negro-mulato-afrodescendiente">
                      Negro(a), mulato(a), afrodescendiente, afrocolombiano(a)
                    </option>
                    <option value="palenquero">Palenquero/a</option>
                    <option value="pueblos-indigenas">Pueblos indígenas</option>
                    <option value="gitano">Gitano/a (Rrom)</option>
                    <option value="raizales">Raizales</option>
                    <option value="prefiero-no-decirlo">
                      Prefiero no decirlo
                    </option>
                    <option value="ninguna">Ninguna de las anteriores</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="victimas-violencia"
                    className="block text-gray-700"
                  >
                    Víctimas de Violencia o Desplazamiento
                  </label>
                  <select
                    id="victimas-violencia"
                    className="block w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="priorizacion" className="block text-gray-700">
                    Priorización
                  </label>
                  <select
                    id="priorizacion"
                    className="block w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione</option>
                    <option value="mujeres-embarazo">
                      Mujeres en estado de embarazo
                    </option>
                    <option value="adultos-mayores">
                      Personas adultas mayores
                    </option>
                    <option value="periodistas">Periodistas</option>
                    <option value="ninos-adolescentes">
                      Niños, niñas y adolescentes
                    </option>
                    <option value="personas-discapacidad">
                      Personas con Discapacidad
                    </option>
                    <option value="veteranos-fuerza-publica">
                      Veteranos de la fuerza pública
                    </option>
                    <option value="ninguno">Ninguno</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </AccordionItem>

        <AccordionItem
          title="Medio de respuesta"
          classNames={{ title: "text-[#4b569c] font-bold" }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg text-left text-sm w-4/6">
                <p>
                  De acuerdo a lo establecido en el artículo 56 de la Ley 1437
                  de 2011, autorizó bajo mi responsabilidad me envíen respuesta
                  a través de
                </p>
              </div>
              <label
                htmlFor="medio-respuesta"
                className="block text-gray-700 pt-5"
              >
                Medio de respuesta
              </label>
              <select
                id="medio-respuesta"
                className="block w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Seleccione</option>

                <option value="correo">Correo electrónico</option>
                <option value="fisico">Direccion fisica </option>
              </select>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          title="Código de seguridad"
          classNames={{ title: "text-[#4b569c] font-bold" }}
        >
          <div className="space-y-4">
            <p className="text-gray-600">
              Ingrese el código de seguridad mostrado en la imagen:
            </p>
            <div>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <img
              src="https://via.placeholder.com/150"
              alt="Captcha"
              width={150}
              height={50}
            />
            <p className="text-gray-600">
              Si no puede leer el código, haga clic en la imagen para generar
              uno nuevo.
            </p>
          </div>
        </AccordionItem>
      </Accordion>

      <div className="text-center mt-8">
        <button className="w-full bg-[#4b569c] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enviar
        </button>
      </div>
    </div>
  );
}
