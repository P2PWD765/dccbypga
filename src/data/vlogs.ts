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
      "De la Idea al Éxito: ¿Quién te da dirección cuando emprendes en México?",
    date: "24 de junio, 2026",
    duration: "12:04",
    body: [
      {
        type: "p",
        text: '¿Cuántas veces has estado en tu oficina, frente a la computadora, pensando: "yo podría hacer esto por mi cuenta y ganar el doble"? Todos hemos tenido esa gran idea dándonos vueltas en la cabeza. Pero, ¿por qué la mayoría no da el salto definitivo?',
      },
      {
        type: "p",
        text: "Casi nunca es por falta de ganas o talento. Lo que detiene a muchos profesionales de convertirse en dueños de su propio negocio es la falta de algo fundamental: dirección y estructura.",
      },
      { type: "h2", text: "La brújula que teníamos: El INADEM y el Fondo PYME" },
      {
        type: "p",
        text: "Hace algunos años, la ruta para emprender en México estaba, hasta cierto punto, trazada por el gobierno. Existía el INADEM (creado en 2013), que vino a fortalecer lo que desde 2004 conocíamos como el Fondo PYME.",
      },
      {
        type: "p",
        text: 'El INADEM no solo repartía subsidios; literalmente te daba una brújula. Llegó a apoyar a más de 4.4 millones de emprendedores. Básicamente, existía un ente que te decía: "Aquí tienes un empujón y hacia allá debes caminar". Sin embargo, en 2019 desapareció, dejando a muchos con la idea en la mano, pero sin el mapa para ejecutarla.',
      },
      { type: "h2", text: "El mercado no se detuvo (y tú tampoco deberías)" },
      {
        type: "p",
        text: "¿Significa esto que el emprendimiento en México se apagó? ¡Para nada! El ecosistema está más vivo que nunca:",
      },
      {
        type: "ul",
        items: [
          "Las MiPymes representan más del 99% de las empresas en el país.",
          "Generan el 52% de los ingresos a nivel nacional.",
          "Son responsables de dar empleo a casi el 70% de la fuerza laboral mexicana.",
        ],
      },
      {
        type: "p",
        text: 'El riesgo hoy es que, al no tener un "organismo guía", muchos emprendedores se lanzan al vacío sin una estrategia financiera sólida y sin estructura operativa.',
      },
      { type: "h2", text: "Tu nueva brújula: Estructura real para negocios reales" },
      {
        type: "p",
        text: "Antes podías depender de un fondo gubernamental. Hoy, esa guía tiene que venir de especialistas que entiendan el pulso del mercado real. Así como el INADEM estructuraba proyectos, hoy en DCC Asesores Empresariales tomamos esa estafeta.",
      },
      {
        type: "p",
        text: "No somos un subsidio; somos tus aliados estratégicos. Nuestro objetivo es ayudarte a:",
      },
      {
        type: "ul",
        items: [
          "Aterrizar esa idea que tienes en tu escritorio.",
          "Estructurarla financieramente para que sea viable.",
          "Optimizar tu inversión y mitigar los riesgos.",
          "Crear un plan de crecimiento atractivo y escalable.",
        ],
      },
      {
        type: "p",
        text: "Si estás listo para dejar de ser empleado y construir tu propio camino, no lo hagas a ciegas. Contáctanos hoy mismo y hagamos que tu idea sea el próximo gran caso de éxito en México.",
      },
    ],
  },
};