"use client";
import React, { useState } from "react";
import { Button, Input, Image } from "@nextui-org/react";
import emailjs from "emailjs-com";

const NewBanner = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const templateParamsToUser = { to_email: email };
    const templateParamsToSibartech = { from_email: email };

    try {
      // Send email to SIBARTECH
      await emailjs.sendForm(
        "service_2akmeui",
        "template_wbj7c5o",
        e.target,
        "eY3p1SSZJisXlHKqw",
        templateParamsToSibartech
      );

      // Send email to the user
      await emailjs.send(
        "service_2akmeui",
        "template_rqppcj1",
        templateParamsToUser,
        "eY3p1SSZJisXlHKqw"
      );
    } catch (error) {
      setSubmitError("Error al enviar el correo electrónico");
      console.error("Error al enviar el correo electrónico:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="inicio"
      className="px-3 sm:flex items-center justify-center max-w-full py-10"
    >
      <div className="sm:flex items-center flex-col sm:flex-row space-x-6 w-full sm:w-4/5">
        <div className="sm:w-3/6 w-full">
          <div>
            <h1 className="Newbanner text-xl font-extrabold sm:text-6xl mb-5">
              FELICES DOS MESES
            </h1>
            <h2 className="text-md sm:text-xl">
              Enamorándonos más cada día: Dos meses de pura magia.{" "}
            </h2>
            <h2 className="text-md sm:text-xl pt-10">
              Con este holiii comenzo todo xd
            </h2>
          </div>
        </div>
        <div className="flex justify-center w-full sm:w-auto pt-5 sm:pt-0">
          <Image
            width={600}
            height={600}
            alt="Desarrollo Web con sibartech"
            src="assets/img/Interno/inicio.jpeg"
            loading="lazy" // Lazy Loading
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
