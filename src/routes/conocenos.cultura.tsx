import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeartHandshake, Award, Crosshair, Users, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/conocenos/cultura")({
  head: () => ({
    meta: [
      { title: "Nuestra Cultura Organizacional — DCC Asesores Empresariales" },
      {
        name: "description",
        content:
          "Conozca los pilares culturales de DCC Asesores Empresariales: servicio, experiencia, especialización, equipo e innovación.",
      },
      {
        property: "og:title",
        content: "Nuestra Cultura Organizacional — DCC Asesores Empresariales",
      },
      {
        property: "og:description",
        content:
          "Compromiso con la excelencia, la mitigación de riesgos y la generación de valor.",
      },
    ],
  }),
  component: CulturaPage,
});

const pillars = [
  {
    icon: HeartHandshake,
    title: "Servicio centrado en el cliente",
    text: "Construimos relaciones de largo plazo basadas en la escucha activa, la cercanía y la entrega de soluciones a la medida de cada cliente.",
  },
  {
    icon: Award,
    title: "Experiencia",
    text: "Décadas acumuladas de práctica empresarial nos permiten anticipar escenarios y acompañar decisiones con perspectiva sólida y probada.",
  },
  {
    icon: Crosshair,
    title: "Enfoque especializado",
    text: "Diseñamos estrategias precisas para cada industria, atendiendo las particularidades regulatorias, financieras y operativas de cada sector.",
  },
  {
    icon: Users,
    title: "Equipo altamente capacitado",
    text: "Profesionales multidisciplinarios en formación continua, comprometidos con los más altos estándares técnicos y éticos.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    text: "Incorporamos metodologías y herramientas modernas para crear valor sostenible y mantener a nuestros clientes a la vanguardia.",
  },
];

function CulturaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1: Header */}
      <section className="bg-brand-ice">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-28 md:py-32">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-brand-mid">
            Conócenos
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-brand sm:text-5xl md:text-6xl">
            Nuestra Cultura Organizacional
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-brand-mid">
            Compromiso con la excelencia, la mitigación de riesgos y la
            generación de valor.
          </p>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-brand-teal" />
          <p className="text-balance text-center text-lg leading-relaxed text-brand sm:text-xl">
            En DCC Asesores Empresariales somos una firma dedicada a la
            asesoría de negocios. Asesoramos a personas, inversionistas y
            grupos corporativos sobre el cumplimiento normativo y la
            implementación de estrategias integrales para la mitigación de
            riesgos y la optimización de sus recursos. Nuestro compromiso es
            brindar servicios con los más altos estándares de calidad,
            respaldados por fundamentos sólidos.
          </p>
        </div>
      </section>

      {/* Section 3: 5 Pillars */}
      <section className="bg-brand-ice py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-brand-teal">
              Pilares
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
              Los 5 pilares de nuestra cultura
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              const featured = idx === 0;
              return (
                <article
                  key={p.title}
                  className={`group relative flex flex-col rounded-2xl p-8 shadow-sm ring-1 transition-all hover:-translate-y-1 hover:shadow-xl ${
                    featured
                      ? "bg-brand-mid text-white ring-brand-mid/20 lg:row-span-2"
                      : "bg-white text-brand ring-black/5 border-l-4 border-l-brand-teal"
                  }`}
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${
                      featured ? "bg-white/15" : "bg-brand-ice"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        featured ? "text-white" : "text-brand-teal"
                      }`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3
                    className={`text-xl font-semibold tracking-tight ${
                      featured ? "text-white" : "text-brand"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      featured ? "text-white" : "text-brand-mid"
                    }`}
                  >
                    {p.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}