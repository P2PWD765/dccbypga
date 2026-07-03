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
        text: "Conocemos la radiografía del sistema. Sabemos exactamente cómo piensa la autoridad para identificar riesgos, y sabemos cómo estructuran sus defensas los grandes corporativos a nivel mundial como Shell, FEMSA, Televisa o Navistar—empresas a las que nuestros socios han asesorado y defendido.",
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
};