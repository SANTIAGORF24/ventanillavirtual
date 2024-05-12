// CardComponent.js
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

function CardComponent({ title, subtitle, body, footer }) {
  return (
    <Card className="max-w-[400px] mx-auto">
      <CardHeader className="flex gap-3 items-center">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="/assets/img/logo.png"
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
        <Link href="#" color="primary" underline="hover">
          {footer}
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardComponent;
