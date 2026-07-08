import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { vlogs } from "@/data/vlogs";

export const Route = createFileRoute("/vlog-1")({
  head: () => ({
    meta: [
      {
        title:
          "De la Idea al Éxito: ¿Quién te da dirección al emprender? — DCC Asesores",
      },
      {
        name: "description",
        content:
          "Descubre cómo estructurar tu idea de negocio en México tras la desaparición del INADEM, con la guía estratégica de DCC Asesores.",
      },
      {
        property: "og:title",
        content: "De la Idea al Éxito — DCC Asesores",
      },
      {
        property: "og:description",
        content:
          "Estrategia y estructura para emprendedores mexicanos que buscan dar el salto definitivo.",
      },
    ],
  }),
  component: Vlog1Page,
});

function Vlog1Page() {
  const post = vlogs["vlog-1"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <article className="mx-auto max-w-5xl px-6 py-16">
          <Link
            to="/home"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-brand/20 px-5 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Regresar
          </Link>

          <div
            className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
            style={{ background: "linear-gradient(135deg,#064E3B,#065F46)" }}
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
              {post.body.map((block, i) => {
                if (block.type === "h2")
                  return (
                    <h2
                      key={i}
                      className="pt-4 text-2xl font-semibold tracking-tight text-brand sm:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );
                if (block.type === "h3")
                  return (
                    <h3
                      key={i}
                      className="pt-2 text-xl font-semibold tracking-tight text-brand"
                    >
                      {block.text}
                    </h3>
                  );
                if (block.type === "ul")
                  return (
                    <ul
                      key={i}
                      className="list-disc space-y-2 pl-6 marker:text-brand-teal"
                    >
                      {block.items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                  );
                return <p key={i}>{block.text}</p>;
              })}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}