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

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

const posts: Record<
  string,
  { title: string; date: string; duration: string; body: Block[] }
> = {
  "vlog-1": {
    title: "De la Idea al Éxito: ¿Quién te da dirección cuando emprendes en México?",
    date: "24 de junio, 2026",
    duration: "12:04",
    body: [
      {
        type: "p",
        text: '¿Cuántas veces has estado en tu oficina, frente a la computadora, pensando: "yo podría hacer esto por mi cuenta y ganar el doble"? Todos hemos tenido esa gran idea dándonos vueltas en la cabeza. Pero, ¿por qué la mayoría no da el salto definitivo?',
      },
      {
        type: "p",
        text: "Casi nunca es por falta de ganas o talento. Lo que detiene a muchos profesionales de convertirse en dueños de su propio negocio es la falta de algo fundamental: dirección y estructura.",
      },
      { type: "h2", text: "La brújula que teníamos: El INADEM y el Fondo PYME" },
      {
        type: "p",
        text: "Hace algunos años, la ruta para emprender en México estaba, hasta cierto punto, trazada por el gobierno. Existía el INADEM (creado en 2013), que vino a fortalecer lo que desde 2004 conocíamos como el Fondo PYME.",
      },
      {
        type: "p",
        text: 'El INADEM no solo repartía subsidios; literalmente te daba una brújula. Llegó a apoyar a más de 4.4 millones de emprendedores. Básicamente, existía un ente que te decía: "Aquí tienes un empujón y hacia allá debes caminar". Sin embargo, en 2019 desapareció, dejando a muchos con la idea en la mano, pero sin el mapa para ejecutarla.',
      },
      { type: "h2", text: "El mercado no se detuvo (y tú tampoco deberías)" },
      {
        type: "p",
        text: "¿Significa esto que el emprendimiento en México se apagó? ¡Para nada! El ecosistema está más vivo que nunca:",
      },
      {
        type: "ul",
        items: [
          "Las MiPymes representan más del 99% de las empresas en el país.",
          "Generan el 52% de los ingresos a nivel nacional.",
          "Son responsables de dar empleo a casi el 70% de la fuerza laboral mexicana.",
        ],
      },
      {
        type: "p",
        text: 'El riesgo hoy es que, al no tener un "organismo guía", muchos emprendedores se lanzan al vacío sin una estrategia financiera sólida y sin estructura operativa.',
      },
      { type: "h2", text: "Tu nueva brújula: Estructura real para negocios reales" },
      {
        type: "p",
        text: "Antes podías depender de un fondo gubernamental. Hoy, esa guía tiene que venir de especialistas que entiendan el pulso del mercado real. Así como el INADEM estructuraba proyectos, hoy en DCC Asesores Empresariales tomamos esa estafeta.",
      },
      {
        type: "p",
        text: "No somos un subsidio; somos tus aliados estratégicos. Nuestro objetivo es ayudarte a:",
      },
      {
        type: "ul",
        items: [
          "Aterrizar esa idea que tienes en tu escritorio.",
          "Estructurarla financieramente para que sea viable.",
          "Optimizar tu inversión y mitigar los riesgos.",
          "Crear un plan de crecimiento atractivo y escalable.",
        ],
      },
      {
        type: "p",
        text: "Si estás listo para dejar de ser empleado y construir tu propio camino, no lo hagas a ciegas. Contáctanos hoy mismo y hagamos que tu idea sea el próximo gran caso de éxito en México.",
      },
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
      body: [{ type: "p", text: "Contenido próximamente." }],
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
      <Footer />
    </div>
  );
}