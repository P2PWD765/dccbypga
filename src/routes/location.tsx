import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { offices as officeData } from "@/data/offices";
import cdmxImg from "@/assets/city-cdmx.jpg";
import mtyImg from "@/assets/city-mty.jpg";
import qroImg from "@/assets/city-qro.jpg";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Ubicación — DCC Asesores Empresariales" },
      {
        name: "description",
        content:
          "Encuentra nuestras oficinas en Ciudad de México, Querétaro y Monterrey.",
      },
      { property: "og:title", content: "Ubicación — DCC Asesores Empresariales" },
      {
        property: "og:description",
        content:
          "Encuentra nuestras oficinas en Ciudad de México, Querétaro y Monterrey.",
      },
    ],
  }),
  component: LocationPage,
});

const meta: Record<string, { code: string; image: string; focus: string }> = {
  cdmx: {
    code: "CDMX",
    image: cdmxImg,
    focus:
      "Enfoque regulatorio y cumplimiento: Al ser el epicentro financiero y corporativo, la prioridad está en el cumplimiento regulatorio ante instituciones como la Comisión Nacional Bancaria y de Valores (CNBV) y el Banco de México. Servicios corporativos: Fuerte demanda en fusiones y adquisiciones, reestructuración de pasivos y consultoría forense.",
  },
  queretaro: {
    code: "QRTO",
    image: qroImg,
    focus:
      "Expansión y Nearshoring: Las estrategias financieras se centran en el desarrollo de modelos de negocio para el crecimiento de PyMEs, expansión de franquicias y gestión de suministros. Levantamiento de capital: Asesoría dirigida a la optimización del flujo de efectivo y obtención de créditos bancarios.",
  },
  monterrey: {
    code: "MTY",
    image: mtyImg,
    focus:
      "Finanzas corporativas: En el hub industrial del norte, los servicios giran en torno a la optimización del capital para proyectos a gran escala y comercio internacional. Visión estructurada: Existen firmas enfocadas en la gobernabilidad, el riesgo empresarial y el escalamiento de la rentabilidad.",
  },
};

const offices = [
  { ...officeData.find((o) => o.id === "cdmx")!, ...meta.cdmx },
  { ...officeData.find((o) => o.id === "queretaro")!, ...meta.queretaro },
  { ...officeData.find((o) => o.id === "monterrey")!, ...meta.monterrey },
];

function LocationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section style={{ background: "#064E3B" }}>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-28">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Ubicación
          </h1>
          <p className="mt-6 text-lg text-white">
            Nuestras oficinas en México a tu servicio.
          </p>
        </div>
      </section>

      <section className="bg-brand-ice py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((o) => (
            <article
              key={o.code}
              className="flex flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: "#A3B18A", color: "#344E41" }}
            >
              <img
                src={o.image}
                alt={`Vista de ${o.city}`}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/40">
                  <MapPin className="h-6 w-6" style={{ color: "#344E41" }} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#344E41" }}>
                    {o.code}
                  </p>
                  <h2 className="truncate text-xl font-bold" style={{ color: "#344E41" }}>
                    {o.city}
                  </h2>
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#344E41" }}>
                {o.address}
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={o.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#344E41" }}
                >
                  <MapPin className="h-4 w-4" />
                  Ver ubicación
                </a>
                <a
                  href={o.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#344E41" }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Contactar
                </a>
                <a
                  href={`mailto:${o.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#344E41" }}
                >
                  <Mail className="h-4 w-4" />
                  Enviar correo
                </a>
              </div>
              <Accordion type="single" collapsible className="mt-6">
                <AccordionItem value="focus" className="border-t border-[#344E41]/30">
                  <AccordionTrigger
                    className="text-sm font-semibold uppercase tracking-wider hover:no-underline"
                    style={{ color: "#344E41" }}
                  >
                    Ver enfoque regional
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-sm leading-relaxed"
                    style={{ color: "#344E41" }}
                  >
                    {o.focus}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}