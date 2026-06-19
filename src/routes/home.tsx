import { createFileRoute } from "@tanstack/react-router";
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
    tag: "Anuncio",
    title: "Nueva oficina en Ciudad de México",
    excerpt:
      "Ampliamos nuestra presencia para atender mejor a nuestros clientes corporativos.",
    date: "12 Jun 2026",
  },
  {
    tag: "Noticia",
    title: "Reforma fiscal 2026: lo que debe saber",
    excerpt:
      "Análisis ejecutivo de las nuevas disposiciones y su impacto en su empresa.",
    date: "03 Jun 2026",
  },
  {
    tag: "Evento",
    title: "Foro de liderazgo empresarial",
    excerpt:
      "Acompáñenos al encuentro anual de directores y socios estratégicos.",
    date: "28 May 2026",
  },
  {
    tag: "Publicación",
    title: "Reporte sectorial Q2",
    excerpt:
      "Indicadores clave y proyecciones para los próximos seis meses.",
    date: "15 May 2026",
  },
];

const blogs = [
  { title: "Estrategia financiera para PyMEs", duration: "12:04" },
  { title: "Optimización fiscal 2026", duration: "08:32" },
  { title: "Transformación digital empresarial", duration: "15:21" },
  { title: "Gobierno corporativo efectivo", duration: "10:47" },
  { title: "Gestión del talento estratégico", duration: "09:15" },
  { title: "Expansión internacional", duration: "13:58" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Noticias />
      <Blogs />
      <Footer />
    </div>
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
                <div className="group cursor-pointer overflow-hidden rounded-2xl ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div
                    className="relative flex aspect-video items-center justify-center overflow-hidden"
                    style={{
                      background:
                        idx % 3 === 0
                          ? "linear-gradient(135deg,#13396F,#2A5B84)"
                          : idx % 3 === 1
                          ? "linear-gradient(135deg,#015B67,#2A5B84)"
                          : "linear-gradient(135deg,#2A5B84,#13396F)",
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
                </div>
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
