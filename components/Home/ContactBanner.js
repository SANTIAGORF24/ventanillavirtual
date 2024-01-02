import React from "react";

const ContactBanner = () => {
  const socialMediaImg = ["facebook", "twitter", "instagram", "linked"];

  return (
    <div className="contactbanner pb-10">
      <div className="contactbannerpadre">
        <div className="lemita">
          <p>Inovamos en cada</p>
          <h3>Línea de código</h3>
          <p>Soportamos en cada desafio</p>
        </div>
        <div className="socialmedia">
          <div className="mailphone">
            <div className="phone">
              <img className="phoneimg" src={"assets/img/phone.png"}></img>
              <p>+57 3154852832</p>
            </div>
            <div className="mail">
              <img className="mailimg" src={"assets/img/mail.png"}></img>
              <p>cibertech@cibertech.com</p>
            </div>
          </div>
          <div className="media">
            <div>Social media</div>
            <div className="mediaimg">
              {socialMediaImg.map((i, idx) => (
                <img
                  key={idx}
                  className="mediaimg"
                  src={`assets/img/${i}.png`}
                ></img>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
