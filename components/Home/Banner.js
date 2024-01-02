import React from "react";
import ButtonPrimary from "../ButtonPrimary";

const Banner = () => {
  return (
    <div className="baner">
      <div className="padretextobaner">
        <div className="textobaner">
          <h1 className="cibertech">CIBERTERCH</h1>
          <h3 className="lema">
            Programamos soluciones, creamos experiencias.
          </h3>
          <ButtonPrimary className="loadmore" text="Load more" />
        </div>
        <div className="imagenbaner">
          <img className="gif" src={"assets/img/GIF.gif"}></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
