import { createFileRoute, Link } from "@tanstack/react-router";
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
  {
    title:
      "Surfeando el Boom de México: Por qué tu negocio necesita a los que diseñaron las reglas del juego",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1200&q=80",
    alt: "Skyline corporativo de Ciudad de México al atardecer",
  },
  {
    title:
      "De los fondos de Fox a tu negocio: por qué emprender en México sí es posible con la guía correcta",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80",
    alt: "Reunión de estrategia de negocio y finanzas",
  },
];

function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
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

            <div className="grid gap-6 sm:grid-cols-2">
              {blogs.map((v, idx) => (
                <Link
                  key={v.title}
                  to="/blog/$slug"
                  params={{ slug: idx === 0 ? "vlog-1" : "vlog-2" }}
                  className="group block cursor-pointer overflow-hidden rounded-2xl ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardBody v={v} idx={idx} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function CardBody({
  v,
  idx,
}: {
  v: { title: string; image: string; alt: string };
  idx: number;
}) {
  return (
    <>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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