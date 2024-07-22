"use client";
import React, { useState } from "react";
import { ConsultForm } from "@/components/Home/ConsultForm";
import { NewBanner } from "@/components/Home/NewBanner";
import { RegisterPetitionForm } from "@/components/Home/RegisterPetitionForm";
import { Consultas } from "@/components/Home/Consultas";
import { Denuncias } from "@/components/Home/Denuncias";
import { Solicitudes } from "@/components/Home/Solicitudes";
import { Opas } from "@/components/Home/Opas";
import { Tramites } from "@/components/Home/Tramites";

export default function Home() {
  const [activeForm, setActiveForm] = useState(null);

  const handleFormChange = (formName) => {
    setActiveForm(activeForm === formName ? null : formName);
  };

  return (
    <>
      <NewBanner
        onConsultClick={() => handleFormChange("consult")}
        onRegisterClick={() => handleFormChange("register")}
        onPqrsClick={() => handleFormChange("pqrs")}
        onTramitesClick={() => handleFormChange("tramites")}
        onOpasClick={() => handleFormChange("opas")}
        onConsultasClick={() => handleFormChange("consultas")}
        onDenunciasClick={() => handleFormChange("denuncias")}
        onSolicitudesClick={() => handleFormChange("solicitudes")}
      />
      {activeForm === "consult" && <ConsultForm />}
      {activeForm === "pqrs" && <RegisterPetitionForm />}
      {activeForm === "tramites" && <Tramites />}
      {activeForm === "opas" && <Opas />}
      {activeForm === "consultas" && <Consultas />}
      {activeForm === "denuncias" && <Denuncias />}
      {activeForm === "solicitudes" && <Solicitudes />}
    </>
  );
}
