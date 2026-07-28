import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services, contactoMailto } from "@/data/services";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Nuestros Servicios — DCC Asesores Empresariales" },
      {
        name: "description",
        content:
          "Catálogo de servicios de DCC Asesores Empresariales: asesoría fiscal, cumplimiento y devoluciones, controversia, enfoque holístico y más.",
      },
      { property: "og:title", content: "Nuestros Servicios — DCC Asesores Empresariales" },
      {
        property: "og:description",
        content:
          "Conozca nuestro catálogo de servicios profesionales en materia fiscal, legal y de cumplimiento.",
      },
    ],
  }),
  component: ServiciosPage,
});

const servicios = services;

function ServiciosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-brand sm:text-5xl">
              Nuestros Servicios
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Soluciones profesionales diseñadas a la medida para el cuidado y
              crecimiento del patrimonio de nuestros clientes.
            </p>
            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-brand-teal" />
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s) => (
              <Card
                key={s.title}
                className="flex flex-col overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={576}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-brand">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href={contactoMailto}>Contáctanos</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}