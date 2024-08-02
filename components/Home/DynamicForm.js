import { useState } from "react";

const DynamicForm = () => {
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState(0);
  const [fields, setFields] = useState([]);
  const [capacitacion, setCapacitacion] = useState("");

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setParticipants(0);
    setFields([]);
  };

  const handleParticipantsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setParticipants(num);
    setFields(
      Array.from({ length: num }, () => ({
        cargo: "",
        nombreCompleto: "",
        tipoDocumento: "",
        documento: "",
        eps: "",
      }))
    );
  };

  const handleFieldChange = (index, field, value) => {
    const newFields = [...fields];
    newFields[index][field] = value;
    setFields(newFields);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <label className="block mb-2">
        Tipo:
        <select
          value={type}
          onChange={handleTypeChange}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        >
          <option value="">Seleccione...</option>
          <option value="visita">Visita</option>
          <option value="capacitacion">Capacitación</option>
        </select>
      </label>

      {type && (
        <div className="mt-4">
          {type === "capacitacion" && (
            <label className="block mb-2">
              Capacitacion:
              <select
                value={capacitacion}
                onChange={(e) => setCapacitacion(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              >
                <option value="">Seleccione...</option>
                <option value="MEDICINA DEL DEPORTE">
                  MEDICINA DEL DEPORTE
                </option>
                <option value="PSICOLOGIA DEL DEPORTE">
                  PSICOLOGIA DEL DEPORTE
                </option>
                <option value="NUTRICION">NUTRICION</option>
                <option value="FISIOTERAPIA">FISIOTERAPIA</option>
                <option value="LABORATORIO NEUROCIENCIAS">
                  LABORATORIO NEUROCIENCIAS
                </option>
                <option value="LABORATORIO BIOMECANICA">
                  LABORATORIO BIOMECANICA
                </option>
                <option value="LABORATORIO FISIOLOGIA">
                  LABORATORIO FISIOLOGIA
                </option>
                <option value="LABORATORIO CINEANTROPOMETRIA">
                  LABORATORIO CINEANTROPOMETRIA
                </option>
              </select>
            </label>
          )}

          <label className="block mb-2">
            Cantidad de Integrantes:
            <select
              value={participants}
              onChange={handleParticipantsChange}
              className="mt-1 block w-full border border-gray-300 rounded-md"
            >
              <option value="">Seleccione...</option>
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </label>

          {fields.length > 0 && (
            <div className="mt-4">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">#</th>
                    <th className="py-2 px-4 border-b">Cargo</th>
                    <th className="py-2 px-4 border-b">Nombre Completo</th>
                    <th className="py-2 px-4 border-b">Tipo de Documento</th>
                    <th className="py-2 px-4 border-b">Documento</th>
                    <th className="py-2 px-4 border-b">EPS</th>
                  </tr>
                </thead>
                <tbody>
                  {fields.map((field, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b text-center">
                        {index + 1}
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={field.cargo}
                          onChange={(e) =>
                            handleFieldChange(index, "cargo", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={field.nombreCompleto}
                          onChange={(e) =>
                            handleFieldChange(
                              index,
                              "nombreCompleto",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded-md"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={field.tipoDocumento}
                          onChange={(e) =>
                            handleFieldChange(
                              index,
                              "tipoDocumento",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded-md"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={field.documento}
                          onChange={(e) =>
                            handleFieldChange(
                              index,
                              "documento",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded-md"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          value={field.eps}
                          onChange={(e) =>
                            handleFieldChange(index, "eps", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DynamicForm;
