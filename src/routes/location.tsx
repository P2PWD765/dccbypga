import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
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

const offices = [
  {
    code: "CDMX",
    city: "Ciudad de México",
    address: "TKTK",
    phone: "TKTK",
    email: "contacto",
    image: cdmxImg,
    focus:
      "Enfoque regulatorio y cumplimiento: Al ser el epicentro financiero y corporativo, la prioridad está en el cumplimiento regulatorio ante instituciones como la Comisión Nacional Bancaria y de Valores (CNBV) y el Banco de México. Servicios corporativos: Fuerte demanda en fusiones y adquisiciones, reestructuración de pasivos y consultoría forense.",
  },
  {
    code: "QRTO",
    city: "Querétaro",
    address: "TKTK",
    phone: "TKTK",
    email: "contacto",
    image: qroImg,
    focus:
      "Expansión y Nearshoring: Las estrategias financieras se centran en el desarrollo de modelos de negocio para el crecimiento de PyMEs, expansión de franquicias y gestión de suministros. Levantamiento de capital: Asesoría dirigida a la optimización del flujo de efectivo y obtención de créditos bancarios.",
  },
  {
    code: "MTY",
    city: "Monterrey",
    address: "TKTK",
    phone: "TKTK",
    email: "contacto",
    image: mtyImg,
    focus:
      "Finanzas corporativas: En el hub industrial del norte, los servicios giran en torno a la optimización del capital para proyectos a gran escala y comercio internacional. Visión estructurada: Existen firmas enfocadas en la gobernabilidad, el riesgo empresarial y el escalamiento de la rentabilidad.",
  },
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
          <p className="mt-6 text-lg text-white/90">
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
              <dl className="mt-2 space-y-3 text-sm" style={{ color: "#344E41" }}>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#344E41" }} />
                  <dd>{o.address}</dd>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#344E41" }} />
                  <dd>{o.phone}</dd>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#344E41" }} />
                  <dd>{o.email}</dd>
                </div>
              </dl>
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