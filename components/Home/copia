"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

export function Tramites() {
  const [tipoIdentificacion, setTipoIdentificacion] = useState("");

  const handleTipoIdentificacionChange = (e) => {
    setTipoIdentificacion(e.target.value);
  };

  return (
    <div className="w-4/5 mx-auto space-y-8 p-4 border border-gray-300 rounded mb-20">
      <div className="space-y-4">
        <label htmlFor="tipo-solicitud" className="block text-gray-700">
          Subtema{" "}
        </label>
        <select
          id="tipo-solicitud"
          className="block w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Seleccione</option>
          <option value="autorizacion-exencion-impuestos">
            Autorización de exención de impuestos y tasas de salida del país
          </option>
          <option value="uso-terapeutico-sustancias">
            Solicitud de autorización de uso terapéutico de sustancias y métodos
            prohibidos
          </option>
          <option value="tramites">Trámites</option>
          <option value="inclusion-programa-glorias">
            Inclusión al Programa Glorias del Deporte
          </option>
          <option value="inscripcion-miembros-federacion">
            Inscripción de Miembros Federación Deportiva y Clubes Profesionales
            organizados como Corporaciones y Asociaciones
          </option>
          <option value="inscripcion-reformas-estatutarias">
            Inscripción de Reformas Estatutarias de Federaciones Deportivas y
            Clubes Profesionales organizados como Corporaciones y Asociaciones
          </option>
          <option value="licencia-deportistas">
            Licencia Remunerada a Deportistas y Personal de Apoyo a Deportistas
          </option>
          <option value="personeria-juridica-clubes">
            Otorgamiento de personería jurídica de clubes profesionales
            organizados como corporaciones o asociaciones
          </option>
          <option value="personeria-juridica-federaciones">
            Otorgamiento personería jurídica a federaciones
          </option>
          <option value="reconocimiento-clubes-sociedades">
            Otorgamiento reconocimiento deportivo de clubes profesionales
            constituidos como sociedades anónimas
          </option>
          <option value="reconocimiento-federaciones">
            Otorgamiento reconocimiento deportivo de federaciones deportivas
            nacionales
          </option>
          <option value="reconocimiento-ligas">
            Otorgamiento reconocimiento deportivo de ligas y asociaciones
            deportivas departamentales
          </option>
          <option value="permiso-estudiantes">
            Permiso a estudiantes para representar al país en competiciones o
            eventos internacionales oficiales
          </option>
          <option value="prestamo-escenarios">
            Préstamo y/o Alquiler de escenarios deportivos
          </option>
          <option value="registro-libros">
            Registro de Libros de Federaciones Deportiva y Clubes Profesionales
            organizados como Corporaciones y Asociaciones
          </option>
          <option value="renovacion-clubes">
            Renovación reconocimiento deportivo de clubes profesionales
            organizados como Asociaciones o Corporaciones
          </option>
          <option value="renovacion-federaciones">
            Renovación del reconocimiento Deportivo de Federaciones Nacionales
          </option>
          <option value="renovacion-ligas">
            Renovación reconocimiento deportivo de ligas y asociaciones
            deportivas departamentales
          </option>
        </select>
      </div>

      <div className="space-y-4">
        <label htmlFor="descripcion" className="block text-gray-700">
          Descripción
        </label>
        <textarea
          id="descripcion"
          className="block w-full p-2 border border-gray-300 rounded"
          maxLength="1500"
          placeholder="Su solicitud puede contener un máximo de 1500 caracteres, para que realice en forma clara y concreta su petición ante la entidad."
        ></textarea>
        <label htmlFor="respuesta" className="block text-gray-700">
          Respuesta
        </label>
        <textarea
          id="respuesta"
          className="block w-full p-2 border border-gray-300 rounded"
          maxLength="1500"
          placeholder="La respuesta puede contener un máximo de 1500 caracteres."
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
          title="Caracterización de ciudadanos, usuarios y grupos de interés"
          classNames={{ title: "text-[#3367d6] font-bold" }}
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
                <option value="cc">Cédula de Ciudadanía</option>
                <option value="ce">Cédula de Extranjería</option>
                <option value="ti">Tarjeta de Identidad</option>
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
              </>
            )}
          </div>
        </AccordionItem>

        <AccordionItem
          title="Medio de respuesta"
          classNames={{ title: "text-[#3367d6] font-bold" }}
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
                <option value="correo">
                  Página Web Sistema de Gestión de Peticiones
                </option>
                <option value="correo">Correo electrónico</option>
                <option value="fisico">Direccion fisica </option>
                <option value="correo">Presencial / telefonica</option>
                <option value="correo">Chat</option>
              </select>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          title="Código de seguridad"
          classNames={{ title: "text-[#3367d6] font-bold" }}
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
        <button className="w-full bg-[#3367d6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enviar
        </button>
      </div>
    </div>
  );
}
