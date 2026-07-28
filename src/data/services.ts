import asesoriaImg from "@/assets/svc-asesoria.jpg.asset.json";
import cumplimientoImg from "@/assets/svc-cumplimiento.jpg.asset.json";
import controversiaImg from "@/assets/svc-controversia.jpg.asset.json";
import otrosImg from "@/assets/svc-otros.jpg.asset.json";
import consultoriaFiscalImg from "@/assets/svc-consultoria-fiscal.jpg";
import tecnologiaImg from "@/assets/svc-tecnologia.jpg";

// Un solo destinatario principal + copias: más compatible con Gmail/Outlook web,
// donde las listas separadas por comas en el "to" suelen descartarse.
export const contactoMailto =
  "mailto:druiz@dcc-asesores.com" +
  "?cc=cvillegas@dcc-asesores.com,chernandez@dcc-asesores.com" +
  "&subject=CLIENTEPAGINAWEB" +
  "&body=" +
  encodeURIComponent(
    "Hola, me comunico desde la página web de DCC Asesores Empresariales.\n\nNombre:\nEmpresa:\nTeléfono:\nMensaje:",
  );

export type Service = {
  title: string;
  image: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Asesoría Patrimonial",
    image: asesoriaImg.url,
    description:
      "Acompañamos a familias empresarias e inversionistas en el cuidado, ordenamiento y protección de su patrimonio, con soluciones a la medida dentro de un marco legal y considerando sus necesidades particulares.",
  },
  {
    title: "Consultoría Fiscal",
    image: consultoriaFiscalImg,
    description:
      "Analizamos e interpretamos las disposiciones fiscales aplicables a cada operación para brindar certeza y eficiencia, con recomendaciones técnicas sólidas para la toma de decisiones de negocio.",
  },
  {
    title: "Cumplimiento y Devoluciones",
    image: cumplimientoImg.url,
    description:
      "Ejecución oportuna de las obligaciones fiscales, garantizando la correcta aplicación de la normatividad vigente. Gestión y recuperación de saldos a favor ante las autoridades.",
  },
  {
    title: "Controversia",
    image: controversiaImg.url,
    description:
      "Diseñamos estrategias para proteger el patrimonio de los clientes con el acompañamiento en procesos de auditorias, cartas invitación y cualquier acto de fiscalización o disputa ante autoridades fiscales, incluida la materia de comercio exterior.",
  },
  {
    title: "Precios de Transferencia",
    image: otrosImg.url,
    description:
      "Apoyamos en la correcta determinación del valor justo de mercado en operaciones entre partes relacionadas, así como en la aplicación de las normas aplicables en esta materia.",
  },
  {
    title: "Soluciones Tecnológicas",
    image: tecnologiaImg,
    description:
      "Implementamos herramientas tecnológicas (Tax Technology) que facilitan y aseguran el manejo de tu información fiscal y legal para un debido cumplimiento.",
  },
];