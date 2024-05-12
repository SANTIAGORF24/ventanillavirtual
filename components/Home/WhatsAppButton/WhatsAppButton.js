"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Abrir WhatsApp Web con el mensaje predefinido
    window.open(
      "https://wa.me/573154852832?text=Hola%20quiero%20saber%20m%C3%A1s%20de",
      "_blank"
    );
  };

  return (
    <button
      className="fixed bottom-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md hover:bg-green-600 focus:outline-none"
      onClick={handleClick}
      aria-label="Enviar mensaje por WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="w-full" />
    </button>
  );
};

export default WhatsAppButton;
