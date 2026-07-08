export type VlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type Vlog = {
  title: string;
  date: string;
  duration: string;
  body: VlogBlock[];
};

export const vlogs: Record<string, Vlog> = {
  "vlog-1": {
    title:
      "Surfeando el Boom de México: Por qué tu negocio necesita a los que diseñaron las reglas del juego",
    date: "24 de junio, 2026",
    duration: "12:04",
    body: [
      { type: "h2", text: "El momento histórico de México" },
      {
        type: "p",
        text: "Abre cualquier periódico o portal de finanzas y la palabra es la misma: Nearshoring. México está atravesando un momento histórico. La inversión extranjera directa está rompiendo récords, las cadenas de suministro globales se están reubicando en nuestro país y las oportunidades de negocio están explotando en sectores como la manufactura, el comercio, la construcción y los servicios.",
      },
      {
        type: "p",
        text: "Es la era dorada para hacer negocios, ¿cierto? Sí, pero hay una trampa que nadie te cuenta.",
      },
      {
        type: "p",
        text: "Mientras esta ola económica levanta a muchos, la fiscalización en México también ha pisado el acelerador. El SAT es más riguroso, tecnológico y agresivo que nunca. Hoy, crecer un negocio o emprender a gran escala no se trata solo de vender más; se trata de saber estructurarte corporativamente para no ahogarte en un mar de contingencias fiscales y legales.",
      },
      { type: "h2", text: "El secreto de los gigantes" },
      {
        type: "p",
        text: "¿Cómo le hacen los corporativos gigantes para navegar este entorno, optimizar sus inversiones y salir victoriosos en auditorías complejas? Tienen un secreto: no contratan a un contador tradicional; se alían con estrategas que conocen las reglas desde adentro.",
      },
      {
        type: "p",
        text: "Ahí es exactamente donde entra el valor de DCC Asesores Empresariales.",
      },
      {
        type: "p",
        text: 'Nosotros no solo leemos la ley, nosotros hemos estado en los dos lados de la mesa. Nuestro equipo directivo cuenta con más de 30 años de experiencia que respaldan nuestra visión. No somos teóricos; venimos de las "Big 4" como Ernst & Young, manejando impuestos internacionales y reestructuras corporativas.',
      },
      {
        type: "p",
        text: "Pero nuestra verdadera ventaja competitiva, la que ponemos a tu disposición, es nuestra trayectoria dentro de la autoridad. Formamos parte de las Administraciones Generales de Grandes Contribuyentes, Hidrocarburos y Normatividad Internacional del SAT. Literalmente, participamos en el diseño e implementación de los programas de fiscalización a los que hoy se enfrentan las empresas. Fuimos la autoridad que alcanzó los primeros acuerdos de entendimiento internacional en México.",
      },
      { type: "h2", text: "¿Por qué necesitas a DCC en tu esquina?" },
      {
        type: "p",
        text: "Conocemos la radiografía del sistema. Sabemos exactamente cómo piensa la autoridad para identificar riesgos, y sabemos cómo estructuran sus defensas los grandes corporativos a nivel mundial como Shell, FEMSA, Televisa o Navistar, empresas a las que nuestros socios han asesorado y defendido.",
      },
      {
        type: "p",
        text: "Tener a DCC como tu firma asesora significa que tu empresa, sin importar si está en fase de crecimiento o si ya es una corporación consolidada, tendrá acceso a estrategias de nivel internacional.",
      },
      {
        type: "p",
        text: "Te damos dirección integral para:",
      },
      {
        type: "ul",
        items: [
          "Blindar tu empresa: Evaluamos y mitigamos riesgos antes de que la autoridad toque a tu puerta.",
          "Estructurar para crecer: Te guiamos en fusiones, escisiones y optimización de costos fiscales para que aproveches el boom económico sin frenos legales.",
          "Defender tu patrimonio: Diseñamos estrategias de atención ante facultades de comprobación con la precisión de quien conoce el manual del auditor.",
        ],
      },
      { type: "h2", text: "El siguiente paso" },
      {
        type: "p",
        text: "Aprovechar el crecimiento económico de México requiere más que una buena idea; requiere una estructura blindada. No dejes el futuro de tu patrimonio a la suerte ni a estrategias obsoletas.",
      },
      {
        type: "p",
        text: "Si quieres jugar en las grandes ligas, necesitas en tu esquina a los que conocen el juego desde adentro. Acércate a DCC Asesores Empresariales y construyamos la ruta más sólida y rentable para tu negocio.",
      },
    ],
  },
  "vlog-2": {
    title:
      "De los fondos de Fox a tu negocio: por qué emprender en México sí es posible con la guía correcta",
    date: "8 de julio, 2026",
    duration: "10:47",
    body: [
      {
        type: "p",
        text: "A finales de los años noventa, México era un país de emprendedores sin red de seguridad. Las micro, pequeñas y medianas empresas representaban el 99.7% de los negocios del país, generaban casi la mitad del PIB y daban empleo a millones de familias. Pero la mayoría operaba sin acceso al crédito, sin capacitación y sin las herramientas para competir en un mercado que se abría al mundo.",
      },
      {
        type: "p",
        text: "Entonces algo cambió. Vicente Fox llegó a la presidencia con una visión clara: no combatir la pobreza regalando dependencia, sino generando riqueza desde abajo desde el hogar, desde la comunidad, desde el negocio. Esa visión se convirtió en una de las políticas de fomento empresarial más ambiciosas de la historia reciente de México.",
      },
      {
        type: "p",
        text: "Y aquí está la lección que sigue vigente hoy: emprender en México sí es posible. Pero no porque el gobierno lo resuelva todo sino porque quien tiene la guía correcta puede convertir oportunidades en crecimiento real.",
      },
      { type: "h2", text: "Cuando un presidente apostó por las PyMEs" },
      {
        type: "p",
        text: "Durante el sexenio foxista (2000–2006), el gobierno federal destinó más de 12,000 millones de pesos al fomento de las PyMEs. Fue casi la mitad del presupuesto de la Secretaría de Economía dedicado a apoyar a quienes construyen el tejido productivo del país.",
      },
      { type: "p", text: "De esa apuesta nacieron instrumentos que marcaron una generación:" },
      {
        type: "ul",
        items: [
          "FONDO PYME: para impulsar competitividad, innovación y acceso a mercados.",
          "PRONAFIM: microcréditos para quienes no tenían acceso a la banca tradicional.",
          "FONAES: apoyo a emprendimientos sociales en comunidades rurales y urbanas.",
          "FOMMUR: financiamiento dirigido a mujeres emprendedoras del campo.",
        ],
      },
      {
        type: "p",
        text: "El resultado fue contundente: cerca de 372,000 PyMEs beneficiadas, más de 1 millón de microcréditos otorgados y cientos de miles de empleos generados. Los beneficiarios de esos programas incrementaron sus ingresos hasta en un 46% en promedio.",
      },
      {
        type: "p",
        text: "México demostró que, con estructura y apoyo, el emprendimiento puede transformar vidas.",
      },
      { type: "h2", text: "La trampa que nadie te cuenta" },
      { type: "p", text: "Pero hay algo que esos números no revelan por sí solos." },
      {
        type: "p",
        text: "La mayoría de los apoyos gubernamentales eran subsidios, no acompañamiento estratégico. Muchos empresarios no sabían que existían. Otros presentaban proyectos sin planeación sólida. Y cuando llegaba el apoyo, no siempre sabían cómo convertirlo en crecimiento sostenible.",
      },
      {
        type: "p",
        text: "De hecho, estudios de la época mostraron que el 67% de los beneficiarios consideraba que los apoyos tuvieron poco o ningún impacto en sus utilidades. No porque la intención fuera mala — sino porque tener acceso a recursos sin asesoría especializada es como tener gasolina sin mapa.",
      },
      {
        type: "p",
        text: "La lección es clara: los fondos abren puertas, pero quien te guía determina si entras al lugar correcto.",
      },
      { type: "h2", text: "Emprender hoy: más oportunidades, más complejidad" },
      {
        type: "p",
        text: "México sigue siendo un país de emprendedores. Hoy existen más herramientas que nunca: programas de apoyo, fintech, incubadoras, esquemas de financiamiento y un mercado en expansión impulsado por el nearshoring.",
      },
      {
        type: "p",
        text: "Pero también hay más competencia, más regulación y una autoridad fiscal más rigurosa. Crecer un negocio ya no se trata solo de vender más — se trata de estructurarte con inteligencia para no ahogarte en contingencias fiscales, legales y financieras.",
      },
      {
        type: "p",
        text: "Ahí es donde la historia de los fondos de Fox cobra relevancia actual: aquella política demostró que el emprendimiento escala cuando existe acompañamiento profesional — alguien que entienda el ecosistema, conozca los mecanismos de apoyo y sepa traducir oportunidades en resultados medibles.",
      },
      { type: "h2", text: "Por qué DCC es el aliado que tu PyME necesita" },
      {
        type: "p",
        text: "En DCC Asesores Empresariales no solo conocemos la teoría del emprendimiento: entendemos cómo funciona el sistema desde adentro.",
      },
      {
        type: "p",
        text: "Nuestro equipo cuenta con más de 30 años de experiencia en las \"Big 4\", en la autoridad fiscal y en la asesoría a corporativos de primer nivel. Hemos estado en los dos lados de la mesa: diseñando las reglas y defendiendo a quienes las navegan.",
      },
      {
        type: "p",
        text: "Eso significa que tu empresa —ya sea una PyME en crecimiento o un emprendimiento que busca consolidarse— tiene acceso a:",
      },
      {
        type: "ul",
        items: [
          "Planeación estratégica que alinea tu negocio con las oportunidades reales del mercado.",
          "Estructura fiscal y financiera que te permite crecer sin exponerte a riesgos innecesarios.",
          "Acceso inteligente a recursos — porque sabemos identificar qué esquemas de apoyo aplican a tu situación y cómo presentarlos correctamente.",
          "Acompañamiento continuo — no un trámite puntual, sino una ruta de crecimiento con visión de largo plazo.",
        ],
      },
      {
        type: "p",
        text: "Los fondos de Fox le dieron a México la infraestructura. DCC te da la dirección para aprovecharla.",
      },
      { type: "h2", text: "El siguiente paso" },
      {
        type: "p",
        text: "Vicente Fox demostró que un país puede apostar por sus emprendedores. Los números lo confirman: millones de microcréditos, cientos de miles de empresas apoyadas, empleos generados desde la base de la pirámide productiva.",
      },
      { type: "p", text: "Pero la historia también enseña que el recurso sin guía se desperdicia." },
      {
        type: "p",
        text: "Si tienes un negocio o estás por emprender, no necesitas solo información — necesitas un equipo que conozca el camino, anticipe los riesgos y construya contigo la ruta más sólida hacia el crecimiento.",
      },
      { type: "p", text: "Emprender en México sí es posible. Con la guía correcta, es inevitable." },
      {
        type: "p",
        text: "Acércate a DCC Asesores Empresariales y descubre cómo podemos ayudarte a convertir tu idea en una empresa que crece con inteligencia.",
      },
    ],
  },
};