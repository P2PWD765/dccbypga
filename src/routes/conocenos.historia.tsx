import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Compass, Eye, Target } from "lucide-react";

export const Route = createFileRoute("/conocenos/historia")({
  head: () => ({
    meta: [
      { title: "Conócenos — Nuestra Historia — DCC Asesores Empresariales" },
      {
        name: "description",
        content:
          "Descubra la identidad, propósito y compromiso empresarial de DCC Asesores Empresariales.",
      },
      { property: "og:title", content: "Conócenos — DCC Asesores Empresariales" },
      {
        property: "og:description",
        content:
          "Identidad, propósito y compromiso empresarial de DCC Asesores Empresariales.",
      },
    ],
  }),
  component: ConocenosHistoriaPage,
});

function ConocenosHistoriaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Header />
      <CoreIdentity />
      <LinkedInCTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <section className="relative overflow-hidden bg-brand-ice">
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-28 md:py-32">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-brand-mid">
          Conócenos
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-brand sm:text-5xl md:text-6xl">
          Conócenos
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-brand-mid">
          Nuestra identidad, propósito y compromiso empresarial
        </p>
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: Compass,
    title: "Misión",
    text: "Proveer asesoría empresarial de primer nivel que potencie la competitividad, sostenibilidad y cumplimiento normativo de nuestros clientes, mediante un equipo multidisciplinario comprometido con la excelencia y la integridad profesional.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Ser la firma líder de consultoría corporativa en la región, reconocida por transformar organizaciones a través de estrategias innovadoras, prácticas sólidas y relaciones de confianza a largo plazo.",
  },
  {
    icon: Target,
    title: "Objetivo",
    text: "Impulsar el crecimiento y la eficiencia de cada cliente mediante diagnósticos precisos, soluciones a medida y acompañamiento continuo en sus procesos estratégicos, financieros y operativos.",
  },
];

function CoreIdentity() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isMid = idx === 1;
            return (
              <article
                key={pillar.title}
                className={`flex flex-col items-center rounded-2xl p-10 text-center shadow-sm ring-1 transition-all hover:-translate-y-1 hover:shadow-xl ${
                  isMid
                    ? "bg-brand-mid text-white ring-brand-mid/20"
                    : "bg-white text-brand ring-black/5"
                }`}
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${
                    isMid ? "bg-white/15" : "bg-brand-ice"
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 ${isMid ? "text-white" : "text-brand-teal"}`}
                  />
                </div>
                <h3
                  className={`text-2xl font-semibold tracking-tight ${
                    isMid ? "text-white" : "text-brand"
                  }`}
                >
                  {pillar.title}
                </h3>
                <div
                  className={`mx-auto mt-4 h-1 w-12 rounded-full ${
                    isMid ? "bg-white/40" : "bg-brand-teal"
                  }`}
                />
                <p
                  className={`mt-6 text-sm leading-relaxed ${
                    isMid ? "text-white/85" : "text-brand-mid"
                  }`}
                >
                  {pillar.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LinkedInCTA() {
  return (
    <section className="bg-brand-ice py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
          Mantente conectado
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed text-brand-mid">
          Sigue nuestras actualizaciones, insights y oportunidades profesionales
          directamente desde nuestra red corporativa.
        </p>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-brand-teal hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Conecta con nosotros en LinkedIn
        </a>
      </div>
    </section>
  );
}
