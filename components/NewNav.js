import React, { useState, useEffect } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const menuItems = [
    "",
    "Inicio",
    "Acerca de",
    "Proyectos",
    "Testimonios",
    "Equipo",
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Lógica para determinar la sección actual basada en el desplazamiento de la página
      // Aquí asumo que tienes IDs únicos para las secciones
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.id;
        }
      });

      setCurrentSection(current);
    };

    // Agregar el listener de scroll cuando se monta el componente
    window.addEventListener("scroll", handleScroll);
    // Limpiar el listener cuando se desmonta el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className="pt-5 w-full"
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
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={item}>
            <Link
              color={
                currentSection === item.toLowerCase() ? "primary" : "foreground"
              }
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#contacto" variant="flat">
            Contactanos
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item}>
            <Link
              color={
                currentSection === item.toLowerCase() ? "primary" : "foreground"
              }
              className="w-full"
              href={`#${item.toLowerCase()}`}
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
