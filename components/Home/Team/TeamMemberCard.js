// TeamMemberCard.js
import React from "react";
import { Card, Divider } from "@nextui-org/react";

const TeamMemberCard = ({ name, role, imageSrc, description }) => {
  return (
    <Card className="p-5 flex items-center justify-center">
      <div className="sm:flex items-center max-w-8xl">
        <div className="flex justify-center">
          <img
            className="max-w-64 rounded-md"
            src={imageSrc}
            alt={`Desarrollador ${name}`}
            width={400} // Ancho deseado
            height={400} // Altura deseada
          />
        </div>
        <div className="flex-colum max-sm:py-3">
          <div>
            <p>{description}</p>
          </div>
          <div className="sm:flex justify-between items-center p-10">
            <div>
              <h3 className="font-bold">{role}</h3>
              <p>{name}</p>
            </div>
            <div>
              <div className="max-w-md max-sm:py-3">
                <div className="space-y-1">
                  <h4 className="text-medium font-medium">Social Media</h4>
                  <p className="text-small text-black">
                    No dudes en seguirnos en nuestras redes
                  </p>
                </div>
                <Divider className="my-4" />
                <div className="flex h-5 items-center space-x-8 text-small">
                  <img
                    className="phoneimg"
                    src={"assets/img/Contact/facebook.webp"}
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                  <Divider orientation="vertical" />
                  <img
                    className="phoneimg"
                    src={"assets/img/Contact/linked.webp"}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                  <Divider orientation="vertical" />
                  <img
                    className="phoneimg"
                    src={"assets/img/Contact/twitter.webp"}
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                  <Divider orientation="vertical" />
                  <img
                    className="phoneimg"
                    src={"assets/img/Contact/instagram.webp"}
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
