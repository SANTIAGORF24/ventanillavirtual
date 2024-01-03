import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo.jsx";

export function NewNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "",
    "Inicio",
    "Acerca de",
    "Proyectos",
    "Testimonios",
    "Equipo",
  ];
  return (
    <Navbar
      className="pt-5 w-full "
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <AcmeLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem className="space-x-4 ">
          <Link color="foreground" href="#">
            Inicio
          </Link>
          <Link color="foreground" href="#">
            Acerca de
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem className="space-x-4 ">
          <Link color="foreground" href="#">
            Testimonios
          </Link>
          <Link color="foreground" href="#">
            Equipo
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contactanos
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "foreground"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
