import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const NavBar = () => {
  const menu = ["Inicio", "Acerca de", "Proyectos", "Testimonios", "Equipo"];

  return (
    <div className="padrehader">
      <div className="navBar">
        <div>
          <img className="logito" src={"assets/img/logo.jpg"}></img>
        </div>
        <div className="enlacesnavbar">
          {menu.map((item, idx) => (
            <a key={idx}>{item}</a>
          ))}
          <ButtonPrimary text={"Contactenos"} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
