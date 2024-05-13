"use client";
// Team.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  return (
    <div
      id="equipo"
      className="mt-20 px-3 sm:flex items-center justify-center max-w-full"
    >
      <div className="w-full sm:w-4/5">
        <div className="mb-10 flex flex-col items-center space-y-8">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-center">
            Nuestro Equipo de Desarrolladores
          </h2>
          <p>Más de 500 desarrolladores forman parte de nuestro equipo</p>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center px-12">
            <TeamMemberCard
              name="Santiago Ramírez Forero"
              role="Desarrollador Full Stack"
              imageSrc="./assets/img/Team/ramirez.webp"
              description="Soy Santiago Ramirez Forero. Como Ingeniero de Sistemas,
              he liderado proyectos estratégicos en entidades
              gubernamentales y empresariales, destacándome por mi
              compromiso con la innovación tecnológica y el diseño de
              excelencia. Mi experiencia en el Ministerio del Deporte
              y el Colegio Nacional de Curadores Urbanos ha
              enriquecido mis habilidades en el desarrollo de
              aplicaciones, desde HTML y CSS3 hasta Python, React y
              Flask."
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center px-12">
            <TeamMemberCard
              name="Macjainer Molano Ramos"
              role="Desarrollador Full Stack (WordPress)"
              imageSrc="assets/img/Team/mac.webp"
              description="Soy Macjainer Molano Ramos, Ingeniero de Sistemas,
              apasionado por la ingeniería de software y desarrollo
              web. Con sólida formación académica, destaco en diseño e
              implementación de sistemas informáticos, así como en
              desarrollo Front End (HTML, CSS, JavaScript, React.js) y
              bases de datos (SQL, MySQL, Python). Mi experiencia en
              servicio al cliente fortaleció habilidades
              comunicativas, pero mi enfoque profesional se centra en
              la programación. Activamente en busca de oportunidades
              para contribuir a proyectos desafiantes"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center px-12">
            <TeamMemberCard
              name="Sebastian Sora Pinto"
              role="Desarrollador Full Stack"
              imageSrc="assets/img/Team/Foto_Sebastian.webp"
              description="Soy Johan Sora, desarrollador de front-end con 3 años de
              experiencia en ReactJs, Javascript, HTML, CSS, SASS,
              Redux y NodeJs. Desde los 12 años, mi pasión por la
              tecnología me ha llevado a aprender constantemente.
              Comencé con cursos en línea y un Bootcamp para
              fortalecer mis habilidades. Además del desarrollo, he
              adquirido conocimientos en marketing, destacándome en
              proyectos con habilidades en React Native, Mongo DB,
              Express.js, Django y Python."
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center px-12">
            <TeamMemberCard
              name="Carlos Enrrique Vargas"
              role="Desarrollador Full Stack / Desarrollador Móvil"
              imageSrc="assets/img/Team/Foto_Charles.webp"
              description="Soy Carlos Enrrique Vargas, un desarrollador web full
              stack con más de 6 años de experiencia en sitios web,
              aplicaciones y e-commerce. Mis habilidades abarcan HTML,
              CSS, JavaScript, PHP y bases de datos, con experiencia
              en frameworks como JavaScript, PHP y Python. He
              trabajado en plataformas de cloud como Google Cloud, AWS
              y Digital Ocean, y tengo experiencia en SEO técnico,
              integraciones de datos y diseño de frontend. Mi enfoque
              en estrategias de marketing digital y capacidad para
              adaptarme a situaciones de alta presión me hacen un
              activo valioso. Soy proactivo, orientado a metas y
              siempre listo para aprender y crecer, seguro de aportar
              valor a cualquier equipo o proyecto."
            />
          </SwiperSlide>
          {/* Agrega más SwiperSlides aquí para otros miembros del equipo */}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
