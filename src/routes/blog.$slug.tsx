import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Vlog ${params.slug} — DCC Asesores` },
      {
        name: "description",
        content:
          "Análisis editorial de DCC Asesores sobre estrategia, finanzas y crecimiento empresarial.",
      },
    ],
  }),
  component: BlogDetail,
});

const posts: Record<
  string,
  { title: string; date: string; duration: string; body: string[] }
> = {
  "vlog-1": {
    title: "Estrategia financiera para PyMEs",
    date: "24 de junio, 2026",
    duration: "12:04",
    body: [
      "En un entorno económico marcado por la volatilidad, las pequeñas y medianas empresas requieren una brújula financiera que traduzca la estrategia en decisiones concretas. En este episodio conversamos sobre cómo construir un tablero financiero simple, útil y accionable para la dirección general.",
      "Abordamos tres pilares fundamentales: la disciplina en la administración del flujo de efectivo, la estructura de capital adecuada al ciclo del negocio y la lectura oportuna de los indicadores de rentabilidad. Cada uno de estos elementos, cuando se integran correctamente, permite anticipar riesgos y aprovechar oportunidades de crecimiento con mayor claridad.",
      "Cerramos con una serie de recomendaciones prácticas para directores y socios que buscan profesionalizar su gestión financiera sin perder la agilidad que caracteriza a las empresas en expansión.",
    ],
  },
};

function BlogDetail() {
  const { slug } = Route.useParams();
  const post =
    posts[slug] ?? {
      title: "Vlog",
      date: "2026",
      duration: "00:00",
      body: ["Contenido próximamente."],
    };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <article className="mx-auto max-w-5xl px-6 py-16">
        <Link
          to="/blogs"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-brand/20 px-5 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Regresar a Blogs
        </Link>

        <div
          className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
          style={{
            background: "linear-gradient(135deg,#064E3B,#065F46)",
          }}
        >
          <button
            aria-label="Reproducir video"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform hover:scale-110"
          >
            <Play className="h-8 w-8 translate-x-0.5 fill-brand-teal text-brand-teal" />
          </button>
          <span className="absolute bottom-4 right-4 rounded bg-black/60 px-3 py-1 text-xs font-medium text-white">
            {post.duration}
          </span>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-teal">
            DCC Insights
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-brand sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-slate-500">{post.date}</p>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-700">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}