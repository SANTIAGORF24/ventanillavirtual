"use client";
import React, { useState } from "react";
import { Button, Image, Input } from "@nextui-org/react";
import emailjs from "emailjs-com";

const NewBanner = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const templateParamsToUser = {
      to_email: email,
    };

    const templateParamsToSibartech = {
      from_email: email,
    };

    try {
      // Enviar correo a SIBARTECH
      await emailjs.sendForm(
        "service_2akmeui",
        "template_wbj7c5o",
        e.target,
        "eY3p1SSZJisXlHKqw",
        templateParamsToSibartech
      );

      // Enviar correo al usuario
      await emailjs.send(
        "service_2akmeui",
        "template_rqppcj1", // Reemplaza con el ID de tu nueva plantilla
        templateParamsToUser,
        "eY3p1SSZJisXlHKqw"
      );
    } catch (error) {
      setSubmitError(error.message);
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
      <div className="sm:flex items-center space-x-6 w-full sm:w-4/5">
        <div>
          <div>
            <h1 className="Newbanner text-6xl font-extrabold sm:text-8xl">
              SIBARTECH
            </h1>
            <h3 className="text-md sm:text-xl">
              Programamos soluciones, creamos experiencias.
            </h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="pt-7 flex flex-col sm:flex-row items-center"
          >
            <Input
              type="email"
              label="Email"
              variant="bordered"
              className="h-12 mb-2 sm:mr-2 sm:mb-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="from_email"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              className="buton h-12"
              color="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Contactanos"}
            </Button>
            {submitError && <p className="text-red-500">{submitError}</p>}
          </form>
        </div>
        <div className="hidden sm:flex max-sm:py-5 pl-40">
          <Image
            width={500}
            height={500}
            alt="NextUI Fruit Image with Zoom"
            src="assets/img/logo.png"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
