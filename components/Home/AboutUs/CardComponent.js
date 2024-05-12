import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import Link from "next/link";

function CardComponent({ title, subtitle, body, footer }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Card className="max-w-[400px] mx-auto">
      <CardHeader className="flex gap-3 items-center">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="/assets/img/Interno/logo.webp"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-semibold">{title}</p>
          <p className="text-small text-default-500">{subtitle}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-sm">{body}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        {isMounted ? (
          <Link
            href="#contacto"
            color="primary"
            underline="hover"
            legacyBehavior
          >
            {footer}
          </Link>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export default CardComponent;
