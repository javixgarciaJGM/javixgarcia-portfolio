# BRIEF TÉCNICO — Landing Page Portfolio Profesional
**Javier García Monrabal**

Este documento es la especificación completa para construir la landing page. Incluye contenido final, dirección visual, estructura, interacciones y requisitos técnicos. Todo el contenido de este brief es definitivo y debe usarse tal cual — no reescribir ni parafrasear salvo indicación expresa.

---

## 1. OBJETIVO Y CONTEXTO

Landing page de portfolio profesional para Javier García Monrabal, Business Analyst especializado en automatización de procesos e IA aplicada. Audiencia: recruiters de consultoras de digitalización/automatización (España y mercado US) y potenciales clientes freelance. Objetivo de conversión: contacto directo (email/teléfono) o visita a GitHub.

Hosting final: GitHub Pages. Página única (no multi-page).

---

## 2. DIRECCIÓN VISUAL

**Paleta:**
- Base neutra: grises cálidos y blancos rotos (evitar gris frío tipo Bootstrap), un negro suave en vez de negro puro para textos principales
- Azul como **acento puntual**, no como color dominante: usar en CTAs, iconos, detalles de hover, bordes activos — nunca como fondo de secciones grandes ni headers
- Evitar explícitamente el "azul corporativo" genérico (tipo #1e3a8a como color principal) — el azul debe sentirse minimalista y deliberado, no plantilla de empresa

**Tipografía:**
- Sans-serif moderna y limpia para cuerpo de texto
- Los títulos pueden tener algo más de carácter/peso, sin llegar a decorativa

**Principios generales:**
- Minimalismo funcional, mucho espacio en blanco
- Modo claro únicamente (no dark mode en esta versión)
- Debe transmitir "producto tech bien diseñado", no "plantilla de consultora"

---

## 3. ESTRUCTURA DE PÁGINA

Single-page con scroll continuo. Navegación superior fija (sticky) con anclas internas a: Proyectos, Sobre mí, Contacto.

Orden de secciones:

1. Hero
2. Sobre mí
3. Proyectos (4, en el orden fijo indicado abajo)
4. Stack técnico
5. Contacto
6. Footer

---

## 4. INTERACCIONES Y COMPORTAMIENTO

- **Tarjetas de proyecto:** tipo acordeón — al hacer clic, la tarjeta se expande in-place (empujando el contenido siguiente hacia abajo), no modal ni redirección a otra sección. Solo una tarjeta expandida a la vez es aceptable pero no obligatorio.
- **Animaciones:** sutiles, activadas al hacer scroll (fade-in / slide-up al entrar en viewport). Nada agresivo ni que retrase la lectura.
- **Micro-interacciones:** hover states claros en botones, tarjetas y links (leve cambio de color/sombra/escala).
- **Responsive:** debe funcionar bien en móvil — el acordeón y el nav sticky tienen que adaptarse correctamente.

---

## 5. CONTENIDO — HERO

**Titular (H1):**
> Business Analyst que convierte procesos manuales en sistemas de trabajo reales.

**Subtítulo:**
> Automatización de procesos e IA aplicada a negocio — 4 proyectos reales, implantados y medidos, no solo teoría.

**CTAs:**
- Botón primario: "Ver proyectos" → ancla a sección Proyectos
- Botón secundario: "Contactar" → ancla a sección Contacto

---

## 6. CONTENIDO — SOBRE MÍ

> Soy Javier García Monrabal, perfil híbrido entre negocio y tecnología con base en Valencia. Combino mi formación en Administración de empresas y Finanzas con ejecución técnica real: no me quedo en detectar dónde falla un proceso, construyo el sistema que lo arregla.
>
> He automatizado gestión de citas, bases de datos y seguimiento operativo con n8n, APIs de IA y SQL, siempre desde un problema de negocio concreto, no desde la implementación de tecnología por moda.
>
> Actualmente ampliando el perfil con certificaciones en AWS, Azure, Power BI y Business Analysis.

---

## 7. CONTENIDO — PROYECTOS

Orden fijo: Estética → Citas WhatsApp → Taller mecánico → SQL Análisis financiero.

Cada tarjeta muestra siempre: título, resumen breve, tags de herramientas, métrica destacada. Al expandir (acordeón) se muestra el detalle completo.

### Proyecto 1 — Base de datos automatizada para centro de estética

**Tarjeta resumen:**
> Chat automatizado en n8n conectado a Google Sheets para gestionar de forma inteligente 130+ registros de clientas, sustituyendo el mantenimiento manual por una interfaz conversacional con detección automática de duplicados.

Tags: `n8n` `Telegram` `Google Sheets` `Google Cloud Console`
Métrica destacada: **De 4-5 min a 1-2 min por actualización de registro**

**Detalle expandido:**
- **Problema:** Base de datos de clientas mantenida manualmente, sin formato uniforme — duplicados, inconsistencias y actualizaciones que no se hacían por falta de tiempo.
- **Solución:** Flujo en n8n que conecta Telegram con Google Sheets. El sistema interpreta el mensaje, identifica la acción (alta, consulta, edición, baja) y la ejecuta, con aviso automático si detecta que la clienta ya existe.
- **Mi rol:** Análisis de la necesidad con la propietaria, diseño del flujo, desarrollo y pruebas.
- **Impacto:** De 160 registros con ~30 duplicados/nulos a 130 registros limpios y estructurados. Alta de nueva clienta reducida de 5-10 min a 2-3 min.

### Proyecto 2 — Asistente de gestión de citas por WhatsApp

**Tarjeta resumen:**
> Asistente con IA que opera 24/7 vía WhatsApp: interpreta la consulta del cliente, valida disponibilidad en Google Calendar y gestiona citas sin intervención humana, manteniéndose siempre dentro de su ámbito definido.

Tags: `n8n` `WhatsApp API (Meta)` `Google Calendar` `OpenAI Platform`
Métrica destacada: **20-30 min diarios de gestión manual eliminados** (negocios con 20-25 citas/semana)

**Detalle expandido:**
- **Problema:** Negocios de servicios pierden tiempo no facturable gestionando citas, consultas repetitivas y recordatorios manualmente.
- **Solución:** El asistente recibe el mensaje, interpreta la intención con OpenAI, y ejecuta la acción sobre Google Calendar (crear, modificar, consultar, eliminar) validando disponibilidad y evitando solapes. Fuera de su alcance, redirige al cliente al contacto directo con el negocio.
- **Mi rol:** Diseño de la lógica conversacional, integración entre herramientas y pruebas de funcionamiento.
- **Impacto:** Respuesta inmediata 24/7, reducción de errores de agenda por solapes u olvidos, y experiencia de atención más ágil sin depender del horario del negocio.

### Proyecto 3 — Sistema de expedientes para taller mecánico

**Tarjeta resumen:**
> Sistema implantado en un taller real que digitaliza la apertura de expedientes por formulario, clasifica automáticamente el tipo de avería y da visibilidad total del estado de cada vehículo al equipo.

Tags: `n8n` `Google Forms` `Google Sheets`
Métrica destacada: **De 10-15 min a localización inmediata de información**

**Detalle expandido:**
- **Problema:** Registro en papel, sin estructura ni trazabilidad — retrasos, información perdida y dependencia de "preguntar al compañero" para saber el estado de una reparación.
- **Solución:** Formulario digital con categorías predefinidas (avería mecánica, mantenimiento, chapa/pintura, avería eléctrica). n8n clasifica y registra automáticamente en Sheets; los mecánicos actualizan el estado en tiempo real.
- **Mi rol:** Análisis con los responsables del taller, diseño e implantación del sistema, y formación inicial a dueños y mecánicos.
- **Impacto:** Recepción de vehículo de 20-30 min a registro guiado. Tiempos de reparación reducidos 1-2 días por vehículo. Capacidad para atender 1-3 vehículos adicionales/semana. **Proyecto en producción activa.**

### Proyecto 4 — Análisis de riesgo financiero con SQL

**Tarjeta resumen:**
> Modelo relacional en SQL sobre facturación, deuda y cashflow de una empresa simulada, con vistas analíticas y KPIs orientados a detectar riesgo de impago y patrones financieros — con dashboard interactivo publicado.

Tags: `SQL` `GitHub` `Looker Studio`
Métrica destacada: **Dashboard interactivo con KPIs financieros en tiempo real**

**Detalle expandido:**
- **Problema/objetivo:** Simular un entorno empresarial real para estudiar la diferencia entre facturación e ingresos reales, y detectar riesgo de cobro por cliente.
- **Solución:** Esquema relacional, carga de datos, vistas analíticas y KPIs sobre facturación, deuda vencida, concentración de clientes y evolución del cashflow.
- **Mi rol:** Diseño de la lógica del caso, construcción de las vistas SQL e interpretación de resultados desde negocio.
- **Enlaces:** [Dashboard en Looker Studio](https://datastudio.google.com/s/pVcntIJ9TmI) · [Código en GitHub](https://github.com/javixgarciaJGM/financial-risk-analysis-sql)

---

## 8. CONTENIDO — STACK TÉCNICO

Presentar de forma visual (iconos/badges agrupados), no como lista plana de texto.

- **Automatización:** n8n, Make, Zapier
- **Datos & Análisis:** SQL, Excel, Google Sheets, Power BI, Looker Studio
- **IA aplicada:** ChatGPT, Claude, Gemini, OpenAI Platform, Microsoft Copilot
- **Gestión y productividad:** Google Workspace, Microsoft 365, Notion, Git

---

## 9. CONTENIDO — CONTACTO

- Email: javixcontact@gmail.com
- Teléfono: 625 48 74 27
- LinkedIn: pendiente de crear — **no incluir enlace activo**; mostrar como próximamente o dejar el bloque preparado pero deshabilitado/oculto hasta que se active
- GitHub: https://github.com/javixgarciaJGM

---

## 10. REQUISITOS TÉCNICOS DE ENTREGA

- HTML/CSS/JS (o el stack que Claude Code considere más adecuado para GitHub Pages, sin frameworks pesados innecesarios)
- Todo el contenido debe quedar embebido y fácilmente editable (evitar hardcodear estilos inline dispersos; centralizar en CSS)
- Optimizado para carga rápida — sin dependencias innecesarias
- Compatible con despliegue directo en GitHub Pages
- Accesibilidad básica: contraste correcto, textos alternativos en iconos/imágenes si se usan

---

## 11. FUERA DE ALCANCE (por ahora)

- Modo oscuro
- Multi-idioma
- Blog o sección de noticias
- Formulario de contacto con backend (el contacto es directo vía email/teléfono/enlaces)
