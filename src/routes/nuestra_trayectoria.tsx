import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/nuestra_trayectoria")({
  head: () => ({
    meta: [
      { title: "Nuestra Trayectoria — DCC Asesores Empresariales" },
      {
        name: "description",
        content:
          "Conozca la trayectoria de DCC Asesores Empresariales: décadas de experiencia acompañando a nuestros clientes.",
      },
      { property: "og:title", content: "Nuestra Trayectoria — DCC Asesores Empresariales" },
      {
        property: "og:description",
        content:
          "Décadas de experiencia acompañando a nuestros clientes.",
      },
    ],
  }),
  component: NuestraTrayectoriaPage,
});

function NuestraTrayectoriaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section
        className="relative overflow-hidden"
        style={{ background: "#064E3B" }}
      >
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28 md:py-32 text-center">
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl text-white">
            Nuestra Trayectoria
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white">
            Décadas construyendo confianza y resultados.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 min-h-[40vh]" />
      </section>

      <Footer />
    </div>
  );
}