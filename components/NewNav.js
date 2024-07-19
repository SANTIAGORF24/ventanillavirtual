import React from "react";
import Image from "next/image";

export function NewNav() {
  return (
    <nav className="bg-[#3367d6] flex items-center justify-between p-2">
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-start w-3/4">
          <Image
            src="/assets/img/GOVCO.svg"
            alt="GOV.CO logo"
            width={150}
            height={32}
          />
        </div>
      </div>
    </nav>
  );
}
