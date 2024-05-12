// AboutSectionWithCards.js
import React from "react";
import AboutSection from "./AboutSection";
import CardComponent from "./CardComponent";

const slides = [
  { src: "assets/img/react2.png" },
  { src: "assets/img/html.png" },
  { src: "assets/img/css.png" },
  { src: "assets/img/javascript.png" },
  { src: "assets/img/java.png" },
  { src: "assets/img/python2.png" },
  { src: "assets/img/sql.png" },
  { src: "assets/img/tailwind2.png" },
  { src: "assets/img/flutter2.png" },
];

function AboutSectionWithCards() {
  return (
    <>
      <AboutSection slides={slides} />
    </>
  );
}

export default AboutSectionWithCards;
