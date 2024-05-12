// AboutSectionWithCards.js
import React from "react";
import AboutSection from "./AboutSection";

const slides = [
  { src: "assets/img/Lenguajes/react2.jpg" },
  { src: "assets/img/Lenguajes/html.jpg" },
  { src: "assets/img/Lenguajes/css.jpg" },
  { src: "assets/img/Lenguajes/javascript.jpg" },
  { src: "assets/img/Lenguajes/java.jpg" },
  { src: "assets/img/Lenguajes/python2.jpg" },
  { src: "assets/img/Lenguajes/sql.jpg" },
  { src: "assets/img/Lenguajes/tailwind2.jpg" },
  { src: "assets/img/Lenguajes/flutter2.jpg" },
];

function AboutSectionWithCards() {
  return (
    <>
      <AboutSection slides={slides} />
    </>
  );
}

export default AboutSectionWithCards;
