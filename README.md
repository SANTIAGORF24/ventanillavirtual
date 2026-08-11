# 🏛️ Ventanilla Virtual — Atención ciudadana del Ministerio del Deporte

> Portal de trámites y peticiones ciudadanas (PQRSD) para el **Ministerio del Deporte de
> Colombia**. Formularios dinámicos por tipo de solicitud, radicación en línea y consulta
> del estado del trámite.

---

## 🎯 Contexto

En Colombia, toda entidad pública está obligada a ofrecer un canal de **PQRSD**
—peticiones, quejas, reclamos, sugerencias y denuncias— y a permitir su consulta posterior.
Este portal es ese canal para el Ministerio del Deporte.

El reto técnico no es el formulario en sí, sino que **cada tipo de trámite pide campos
distintos** y esos tipos cambian con la normativa. La solución es un motor de formularios
dirigido por configuración (`DynamicForm.js`) en lugar de un formulario codificado por
cada trámite.

---

## ✨ Módulos

| Sección | Función |
| --- | --- |
| **Trámites** | Catálogo de trámites disponibles ante la entidad |
| **OPAS** | Otros procedimientos administrativos |
| **Solicitudes** | Registro de peticiones con formulario dinámico según el tipo |
| **Denuncias** | Canal específico de denuncias |
| **Consultas** | Consulta del estado de un radicado |
| **Formulario dinámico** | Genera los campos a partir de la definición del trámite |

---

## 🧱 Stack

- **Next.js** (App Router) · **React**
- **NextUI** — sistema de componentes
- **Tailwind CSS**
- Formularios dirigidos por configuración

---

## 🚀 Ejecutar

```bash
git clone https://github.com/SANTIAGORF24/ventanillavirtual.git
cd ventanillavirtual
npm install
npm run dev      # http://localhost:3000
```

---

## 📂 Estructura

```
app/
├── layout.js · page.js
└── globals.css
components/
├── Home/
│   ├── DynamicForm.js           motor de formularios por configuración
│   ├── RegisterPetitionForm.js  radicación de peticiones
│   ├── ConsultForm.js           consulta de radicado
│   ├── Tramites.js · Opas.js    catálogos
│   ├── Solicitudes.js · Denuncias.js · Consultas.js
│   └── NewBanner.js
├── NewNav.js · Footer.js
```

---

## 📌 Estado

Proyecto entregado. Se conserva como referencia del trabajo realizado para la entidad.

---

## 👤 Autor

**Santiago Ramírez Forero** — Desarrollador Full Stack
[LinkedIn](https://www.linkedin.com/in/santiago-ramírez-forero) · [GitHub](https://github.com/SANTIAGORF24)
