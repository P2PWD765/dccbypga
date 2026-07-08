import { createFileRoute, Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Nuestro Blog — DCC Asesores Empresariales" },
      {
        name: "description",
        content:
          "Blogs y contenidos de DCC Asesores Empresariales: estrategia financiera, fiscal y transformación empresarial.",
      },
      { property: "og:title", content: "Nuestro Blog — DCC Asesores" },
      {
        property: "og:description",
        content:
          "Perspectivas y análisis de nuestros consultores sobre estrategia, finanzas y crecimiento empresarial.",
      },
    ],
  }),
  component: BlogsPage,
});

const blogs = [
  { title: "Surfeando el Boom de México: Por qué tu negocio necesita a los que diseñaron las reglas del juego", duration: "12:04" },
  { title: "De los fondos de Fox a tu negocio: por qué emprender en México sí es posible con la guía correcta", duration: "10:47" },
  { title: "Transformación digital empresarial", duration: "15:21" },
  { title: "Gobierno corporativo efectivo", duration: "10:47" },
  { title: "Gestión del talento estratégico", duration: "09:15" },
  { title: "Expansión internacional", duration: "13:58" },
];

function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-teal">
              Conocimiento
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-brand sm:text-5xl">
              Nuestro Blog
            </h1>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((v, idx) => (
              idx === 0 || idx === 1 ? (
              <Link
                key={v.title}
                to="/blog/$slug"
                params={{ slug: idx === 0 ? "vlog-1" : "vlog-2" }}
                className="group block cursor-pointer overflow-hidden rounded-2xl ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardBody v={v} idx={idx} />
              </Link>
              ) : (
              <div
                key={v.title}
                className="group cursor-pointer overflow-hidden rounded-2xl ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardBody v={v} idx={idx} />
              </div>
              )
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function CardBody({
  v,
  idx,
}: {
  v: { title: string; duration: string };
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
                  <p className="mt-2 text-sm text-slate-500">
                    DCC Insights · Episodio {idx + 1}
                  </p>
                </div>
    </>
  );
}