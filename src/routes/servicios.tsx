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
import asesoriaImg from "@/assets/svc-asesoria.jpg.asset.json";
import cumplimientoImg from "@/assets/svc-cumplimiento.jpg.asset.json";
import controversiaImg from "@/assets/svc-controversia.jpg.asset.json";
import holisticoImg from "@/assets/svc-holistico.jpg.asset.json";
import otrosImg from "@/assets/svc-otros.jpg.asset.json";

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

const sharedMailto =
  "mailto:druiz@dcc-asesores.com,cvillegas@dcc-asesores.com,chernandez@dcc-asesores.com?subject=CLIENTEPAGINAWEB";

const servicios = [
  {
    title: "Asesoría",
    image: asesoriaImg.url,
    description:
      "Te brindamos tranquilidad a través de soluciones efectuadas a la medida en un marco legal en la aplicación de las disposiciones fiscales considerando las necesidades particulares, con un enfoque principal en el cuidado del patrimonio de nuestros clientes.",
    mailto: sharedMailto,
  },
  {
    title: "Cumplimiento y Devoluciones",
    image: cumplimientoImg.url,
    description:
      "Ejecución oportuna de las obligaciones fiscales, garantizando la correcta aplicación de la normatividad vigente. Gestión y recuperación de saldos a favor ante las autoridades.",
    mailto: sharedMailto,
  },
  {
    title: "Controversia",
    image: controversiaImg.url,
    description: "Diseñamos estrategias legales sólidas para proteger tu patrimonio y resolver cualquier disputa con seguridad y respaldo experto, en auditorías, cartas invitación o cualquier acto de fiscalización.",
    mailto: sharedMailto,
  },
  {
    title: "Enfoque Holístico",
    image: holisticoImg.url,
    description:
      "La experiencia de nuestra Firma, permite tener un enfoque holístico, que conlleva a un servicio integral, basado en el entendimiento del modelo de negocio de cada uno de nuestros clientes.",
    mailto: sharedMailto,
  },
  {
    title: "Otros Servicios",
    image: otrosImg.url,
    description:
      "Precios de Transferencia, apoyamos en la correcta determinación del valor justo de mercado, así como asesoramos en la aplicación de las normas aplicables en esta materia. Tax Technology implementamos herramientas tecnológicas que facilitan y aseguran el manejo de tu información fiscal, legal, etc, para un debido cumplimiento.",
    mailto: sharedMailto,
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
                    <a href={s.mailto}>Contáctanos</a>
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