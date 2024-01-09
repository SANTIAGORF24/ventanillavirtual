import React from "react";
import { Divider } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from "@nextui-org/react";

const NewContactBanner = () => {
  return (
    <div className="px-2 sm:flex items-center justify-center max-w-full pb-10">
      <div className="sm:flex items-center justify-between w-4/5">
        <div>
          <p>Inovamos en cada</p>
          <h4 className="font-bold text-xl">Línea de código</h4>
          <p>Soportamos en cada desafio</p>
        </div>
        <div className="py-5 sm:flex justify-between items-center w-3/6">
          <div>
            <div className="max-w-md">
              <div className="space-y-1 flex items-center">
                <img className="phoneimg" src={"assets/img/phone.png"}></img>
                <p className="text-small text-default-400 px-3">
                  +57 3154852832
                </p>
              </div>
              <Divider className="my-4 " />
              <div className="space-y-2 flex items-center">
                <img className="phoneimg" src={"assets/img/mail.png"}></img>
                <p className="text-small text-default-400 px-3">
                  sibartech@sibartech.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-md max-sm:py-5">
              <div className="space-y-1">
                <h4 className="text-lg font-medium">Social Media</h4>
                <p className="text-sm text-default-400">
                  No dudes en segirnos en nuestras redes
                </p>
              </div>
              <Divider className="my-4" />
              <div className="flex h-5 items-center space-x-4 text-small">
                <div>
                  <img
                    className="phoneimg"
                    src={"assets/img/facebook.png"}
                  ></img>
                </div>
                <Divider orientation="vertical" />
                <div>
                  <img className="phoneimg" src={"assets/img/linked.png"}></img>
                </div>
                <Divider orientation="vertical" />
                <div>
                  <img
                    className="phoneimg"
                    src={"assets/img/twitter.png"}
                  ></img>
                </div>
                <Divider orientation="vertical" />
                <div>
                  <img
                    className="phoneimg"
                    src={"assets/img/instagram.png"}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContactBanner;
