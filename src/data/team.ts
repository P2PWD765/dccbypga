import davidRuizAsset from "@/assets/david-ruiz.png.asset.json";
import carlosVillegasAsset from "@/assets/carlos-villegas.png.asset.json";
import cesarHernandezAsset from "@/assets/cesar-hernandez.png.asset.json";

export type TeamMember = {
  name: string;
  role: string;
  email: string;
  contact: string;
  shortBio: string;
  bio: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    name: "David Edgardo Ruíz Enríquez",
    role: "Asesor de Negocios y Especialista Fiscal",
    email: "druiz@dcc-asesores.com",
    contact: "Contacto: druiz@dcc-asesores.com\nTelefono: 442 285 3839",
    shortBio:
      "Asesor de negocios y especialista en materia fiscal con más de 30 años de experiencia. Ha liderado prácticas de impuestos internacionales en destacadas firmas del sector privado y ocupado altos cargos estratégicos en la administración tributaria gubernamental.",
    bio: "Asesor de negocios y especialista en materia fiscal con más de 30 años de experiencia. En la iniciativa privada desarrolló diversas actividades económicas en la industria de consultoría e impuestos, ocupando el rol de Socio en el área de Impuestos Internacionales. Posteriormente colaboró en otra destacada firma del sector legal y fiscal como Socio Director de la Oficina Noreste de México. En ambas organizaciones asesoró a empresas nacionales e internacionales. En el sector público, desarrolló diversas actividades económicas en la administración tributaria gubernamental, desempeñándose como Administrador Central de Planeación y Programación en Grandes Contribuyentes, y Administrador Central de Auditoría Fiscal Internacional. Fungió como Administrador Central encargado del Programa de Cooperación Voluntaria con Grandes Contribuyentes e integró el equipo de la Central de Normatividad Internacional que alcanzó los primeros acuerdos de entendimiento en México con otros países. Ha sido miembro del Comité de Estudios Científicos de IFA México, A.C., ponente en América Latina (Colombia y República Dominicana), y es miembro de la Comisión Fiscal de la Coparmex, Capítulo Querétaro. Es profesor en la Maestría de Derecho Internacional de la Universidad Panamericana y de Impuestos en la Universidad La Salle, participando también en el Diplomado de Impuestos Internacionales del Colegio de Contadores Públicos de Guadalajara. Es Contador Público egresado del Instituto Politécnico Nacional (ESCA) con un Diplomado en Impuestos Internacionales por el ITAM en colaboración con la Universidad de Duke.",
    photo: davidRuizAsset.url,
  },
  {
    name: "Carlos Alberto Villegas Pérez",
    role: "Especialista en Fiscalización y Controversia",
    email: "cvillegas@dcc-asesores.com",
    contact: "Contacto: cvillegas@dcc-asesores.com\nTelefono: 813 414 0206",
    shortBio:
      "Especialista fiscal con más de 12 años de experiencia en fiscalización y controversia. Destaca por su trayectoria dual evaluando y mitigando riesgos fiscales tanto en la administración pública tributaria como en el sector corporativo.",
    bio: "Especialista en materia fiscal con más de 12 años de experiencia en fiscalización y controversia. Su trayectoria combina experiencia como autoridad y asesor, permitiéndole abordar asuntos fiscales con una perspectiva integral y estratégica. Inició su carrera desarrollando diversas actividades en el sector público de la administración tributaria, participando en el diseño e implementación de programas de fiscalización, análisis de estructuras corporativas y detección de esquemas fiscales agresivos en las áreas de hidrocarburos y grandes contribuyentes. Se especializa en la evaluación y mitigación de riesgos fiscales, así como en el diseño e implementación de estrategias para la atención de facultades de comprobación. A lo largo de su carrera, desarrolló diversas actividades económicas para importantes entidades en las industrias automotriz, energética, de construcción, comercio minorista, de bienes de consumo y farmacéutica. Es Contador Público por la Escuela Superior de Comercio y Administración (ESCA) y tiene una maestría en Derecho Fiscal y administrativo por la Universidad Anáhuac.",
    photo: carlosVillegasAsset.url,
  },
  {
    name: "Carlos César Hernández",
    role: "Consultor de Impuestos y Asesor Patrimonial",
    email: "chernandez@dcc-asesores.com",
    contact: "Contacto: chernandez@dcc-asesores.com\nTelefono: 554 950 7029",
    shortBio:
      "Especialista con más de 20 años de experiencia en asesoría de impuestos, reestructuras corporativas y fusiones. Ha atendido sectores clave como el inmobiliario, comercial, de transformación, minero y de salud.",
    bio: "Cuenta con una experiencia profesional de más de 20 años en asesoría de impuestos a nivel nacional e internacional. Su especialidad abarca reestructuras corporativas, fusiones, escisiones, costos fiscales, inversiones patrimoniales, diagnósticos tributarios y consultoría fiscal. Atiende a diversos sectores de la industria como el inmobiliario, comercial, de transformación, minero y de salud. En su trayectoria, desarrolló diversas actividades económicas prestando servicios para corporativos líderes en las industrias de telecomunicaciones, desarrollo de infraestructura, comercio minorista, salud y finanzas. Es Contador Público por la Escuela Superior de Comercio y Administración (ESCA) y cuenta con una maestría en Derecho Fiscal por la Universidad Panamericana. Además, ha sido expositor en diversos cursos fiscales tanto internos como externos para múltiples instituciones.",
    photo: cesarHernandezAsset.url,
  },
];