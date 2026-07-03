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

const servicios = [
  {
    title: "Asesoría",
    description:
      "Te brindamos tranquilidad a través de soluciones efectuadas a la medida en un marco legal en la aplicación de las disposiciones fiscales considerando las necesidades particulares, con un enfoque principal en el cuidado del patrimonio de nuestros clientes.",
    email: "asesoria@dcc-asesores.com",
  },
  {
    title: "Cumplimiento y Devoluciones",
    description:
      "Ejecución oportuna de las obligaciones fiscales, garantizando la correcta aplicación de la normatividad vigente. Gestión y recuperación de saldos a favor ante las autoridades.",
    email: "cumplimiento@dcc-asesores.com",
  },
  {
    title: "Controversia",
    description:
      "Diseñamos estrategias legales sólidas para proteger tu patrimonio y resolver cualquier disputa con seguridad y respaldo experto, en auditorías, cartas invitación o cualquier acto de fiscalización.",
    email: "controversia@dcc-asesores.com",
  },
  {
    title: "Enfoque Holístico",
    description:
      "La experiencia de nuestra Firma, permite tener un enfoque holístico, que conlleva a un servicio integral, basado en el entendimiento del modelo de negocio de cada uno de nuestros clientes.",
    email: "consultoria@dcc-asesores.com",
  },
  {
    title: "Otros Servicios",
    description:
      "Precios de Transferencia, apoyamos en la correcta determinación del valor justo de mercado, así como asesoramos en la aplicación de las normas aplicables en esta materia. Tax Technology implementamos herramientas tecnológicas que facilitan y aseguran el manejo de tu información fiscal, legal, etc, para un debido cumplimiento.",
    email: "servicios@dcc-asesores.com",
  },
];

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
                className="flex flex-col border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
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
                    <a
                      href={`mailto:${s.email}?subject=${encodeURIComponent(
                        `Consulta sobre ${s.title} — DCC Asesores`,
                      )}`}
                    >
                      Contáctanos
                    </a>
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