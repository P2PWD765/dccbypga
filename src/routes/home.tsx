import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "DCC Asesores Empresariales — Inicio" },
      {
        name: "description",
        content:
          "DCC Asesores Empresariales — consultoría estratégica, financiera y operativa para empresas en crecimiento.",
      },
      { property: "og:title", content: "DCC Asesores Empresariales" },
      {
        property: "og:description",
        content:
          "Consultoría estratégica, financiera y operativa para empresas en crecimiento.",
      },
    ],
  }),
  component: HomePage,
});


const noticias = [
  {
    tag: "Cultura",
    title: "Capacitación Continua para Nuestro Equipo",
    excerpt:
      "El éxito de nuestros clientes comienza con el desarrollo de nuestra gente. Hemos implementado nuevos programas de formación estratégica y actualización constante para asegurar que nuestro equipo ofrezca soluciones con la más alta visión de negocio.",
    date: "12 Jun 2026",
  },
  {
    tag: "Cultura",
    title: "Innovación Estratégica",
    excerpt:
      "Impulsamos nuevas ideas y metodologías para transformar los retos de nuestros clientes en oportunidades.",
    date: "03 Jun 2026",
  },
  {
    tag: "Cultura",
    title: "Integridad Empresarial",
    excerpt:
      "Actuamos con ética, transparencia y responsabilidad en cada decisión y relación profesional.",
    date: "28 May 2026",
  },
  {
    tag: "Cultura",
    title: "Orientación a Resultados",
    excerpt:
      "Enfocamos cada proyecto en generar valor medible y sostenible para nuestros clientes.",
    date: "15 May 2026",
  },
];

const blogs = [
  {
    title: "Surfeando el Boom de México: Por qué tu negocio necesita a los que diseñaron las reglas del juego",
    duration: "12:04",
    description:
      "México está atravesando un momento histórico con el nearshoring. Descubre por qué tu negocio necesita estrategas que conocieron las reglas del juego desde adentro.",
  },
  {
    title:
      "De los fondos de Fox a tu negocio: por qué emprender en México sí es posible con la guía correcta",
    duration: "10:47",
    description:
      "Vicente Fox impulsó más de 12,000 millones de pesos en fondos para PyMEs. La lección no es solo histórica: hoy, con el asesor correcto, tu empresa puede crecer con estrategia.",
  },
  { title: "Transformación digital empresarial", duration: "15:21" },
  { title: "Gobierno corporativo efectivo", duration: "10:47" },
  { title: "Gestión del talento estratégico", duration: "09:15" },
  { title: "Expansión internacional", duration: "13:58" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Noticias />
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, #064E3B 0%, #0B5E48 45%, #10B981 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36 md:py-44">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-white">
          Consultoría Empresarial
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Estrategia, claridad y resultados para empresas que buscan crecer con
          inteligencia.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white">
          En DCC Asesores Empresariales acompañamos a líderes y directivos con
          asesoría financiera, fiscal y estratégica diseñada para transformar
          retos en oportunidades sostenibles.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-brand transition-all hover:bg-brand-ice hover:-translate-y-0.5"
          >
            Conozca nuestros servicios <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
            Contáctenos
          </button>
        </div>
      </div>
    </section>
  );
}

function Noticias() {
  return (
    <section className="bg-brand-ice py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-teal">
              Actualidad
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
              Anuncios
            </h2>
          </div>
          <a className="hidden text-sm font-medium text-brand-teal hover:underline sm:inline">
            Ver todo →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {noticias.map((n, i) => (
            <Link
              key={n.title}
              to="/nuestra_trayectoria"
              className={`group flex flex-col rounded-2xl p-7 shadow-sm ring-1 transition-all hover:-translate-y-1 hover:shadow-xl ${
                i % 2 === 0
                  ? "bg-white ring-black/5"
                  : "bg-brand-mid text-white ring-transparent"
              }`}
            >
              <span
                className={`mb-5 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider ${
                  i % 2 === 0
                    ? "bg-brand-ice text-brand"
                    : "bg-white/15 text-white"
                }`}
              >
                {n.tag}
              </span>
              <h3
                className={`mb-3 text-lg font-semibold leading-snug ${
                  i % 2 === 0 ? "text-brand" : "text-white"
                }`}
              >
                {n.title}
              </h3>
              <p
                className={`mb-6 text-sm leading-relaxed ${
                  i % 2 === 0 ? "text-slate-600" : "text-white"
                }`}
              >
                {n.excerpt}
              </p>
              <div
                className={`mt-auto flex items-center justify-between text-xs ${
                  i % 2 === 0 ? "text-slate-500" : "text-white"
                }`}
              >
                <span>{n.date}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blogs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-teal">
            Conocimiento
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
            Blogs Destacados
          </h2>
        </div>

        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent className="-ml-6">
            {blogs.map((v, idx) => (
              <CarouselItem
                key={v.title}
                className="pl-6 md:basis-1/2 lg:basis-1/3"
              >
                {idx === 0 || idx === 1 ? (
                <Link
                  to="/blog/$slug"
                  params={{ slug: idx === 0 ? "vlog-1" : "vlog-2" }}
                  className="group block cursor-pointer overflow-hidden rounded-2xl ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <BlogCardInner v={v} idx={idx} />
                </Link>
                ) : (
                <div className="group cursor-pointer overflow-hidden rounded-2xl ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <BlogCardInner v={v} idx={idx} />
                </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 border-brand/20 text-brand hover:bg-brand hover:text-white" />
          <CarouselNext className="-right-4 border-brand/20 text-brand hover:bg-brand hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}

function BlogCardInner({
  v,
  idx,
}: {
  v: { title: string; duration: string; description?: string };
  idx: number;
}) {
  return (
    <>
                  <div
                    className="relative flex aspect-video items-center justify-center overflow-hidden"
                    style={{
                      background:
                        idx % 3 === 0
                          ? "linear-gradient(135deg,#064E3B,#065F46)"
                          : idx % 3 === 1
                          ? "linear-gradient(135deg,#10B981,#065F46)"
                          : "linear-gradient(135deg,#065F46,#064E3B)",
                    }}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110">
                      <Play className="h-6 w-6 translate-x-0.5 fill-brand-teal text-brand-teal" />
                    </div>
                    <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
                      {v.duration}
                    </span>
                  </div>
                  <div className="bg-white p-6">
                    <h3 className="text-base font-semibold text-brand">
                      {v.title}
                    </h3>
                    {v.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {v.description}
                      </p>
                    ) : (
                      <p className="mt-2 text-sm text-slate-500">
                        DCC Insights · Episodio {idx + 1}
                      </p>
                    )}
                    {(idx === 0 || idx === 1) && (
                      <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-xs font-medium text-white transition-colors group-hover:bg-brand-teal">
                        Ver Vlog <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
    </>
  );
}
