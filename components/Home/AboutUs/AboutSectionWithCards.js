// AboutSectionWithCards.js
import React from "react";
import AboutSection from "./AboutSection";

const slides = [
  { src: "assets/img/Lenguajes/react2.webp" },
  { src: "assets/img/Lenguajes/html.webp" },
  { src: "assets/img/Lenguajes/css.webp" },
  { src: "assets/img/Lenguajes/javascript.webp" },
  { src: "assets/img/Lenguajes/java.webp" },
  { src: "assets/img/Lenguajes/python2.webp" },
  { src: "assets/img/Lenguajes/sql.webp" },
  { src: "assets/img/Lenguajes/tailwind2.webp" },
  { src: "assets/img/Lenguajes/flutter2.webp" },
];

function AboutSectionWithCards() {
  return (
    <>
      <AboutSection slides={slides} />
    </>
  );
}

export default AboutSectionWithCards;
