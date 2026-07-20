import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, User, Mail } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import davidRuizAsset from "@/assets/david-ruiz.png.asset.json";
import carlosVillegasAsset from "@/assets/carlos-villegas.png.asset.json";
import cesarHernandezAsset from "@/assets/cesar-hernandez.png.asset.json";
import asesoriaImg from "@/assets/svc-asesoria.jpg.asset.json";
import cumplimientoImg from "@/assets/svc-cumplimiento.jpg.asset.json";
import controversiaImg from "@/assets/svc-controversia.jpg.asset.json";

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


const team = [
  {
    name: "David Edgardo Ruiz Enríquez",
    role: "Asesor de Negocios y Especialista Fiscal",
    email: "druiz@dcc-asesores.com",
    contact: "Contacto: druiz@dcc-asesores.com\nTelefono: 442 285 3839",
    shortBio:
      "Especialista en materia fiscal y negocios con más de 30 años de experiencia. Exsocio de Impuestos Internacionales en Ernst & Young y exfuncionario de Grandes Contribuyentes en el SAT. Cuenta con una sólida trayectoria en consultoría nacional e internacional y docencia de posgrado.",
    bio: "Asesor de negocios y especialista en materia fiscal con más de 30 años de experiencia. En la iniciativa privada inició su carrera en la firma Ernst & Young, donde fue Socio en el área de Impuestos Internacionales. Posteriormente colaboró en el despacho GL como Socio Director de la Oficina Noreste de México. En ambas Firmas tuvo la oportunidad de asesorar a Empresas Nacionales e Internacionales. En el Servicio de Administración Tributaria, se desempeñó como Administrador Central de Planeación y Programación en Grandes Contribuyentes, Administrador Central de Auditoría Fiscal Internacional y también fungió como Administrador Central encargado del Programa de Cooperación Voluntaria con Grandes Contribuyentes.",
    photo: davidRuizAsset.url,
  },
  {
    name: "Carlos Alberto Villegas Pérez",
    role: "Especialista en Fiscalización y Controversia",
    email: "cvillegas@dcc-asesores.com",
    contact: "Contacto: cvillegas@dcc-asesores.com\nTelefono: 813 414 0206",
    shortBio:
      "Contador Público y Maestro en Derecho Fiscal con más de 12 años de trayectoria dual en el SAT (Grandes Contribuyentes e Hidrocarburos) y la asesoría privada. Experto en mitigación de riesgos fiscales y atención de auditorías corporativas.",
    bio: "Especialista en materia fiscal con más de 12 años de experiencia en fiscalización y controversia, con una trayectoria que combina su experiencia tanto como autoridad y asesor, lo que le permite abordar los asuntos fiscales desde una perspectiva integral y estratégica. Contador Público por la Escuela Superior de Comercio y Administración (ESCA), cuenta con una maestría en Derecho Fiscal y administrativo por la Universidad Anáhuac.",
    photo: carlosVillegasAsset.url,
  },
  {
    name: "Carlos César Hernandez",
    role: "Consultor de Impuestos Nacionales e Internacionales",
    email: "chernandez@dcc-asesores.com",
    contact: "Contacto: chernandez@dcc-asesores.com\nTelefono: 554 950 7029",
    shortBio:
      "Especialista en consultoría fiscal, fusiones y reestructuras corporativas con más de 20 años de experiencia. Ha asesorado a importantes grupos empresariales como Televisa, Grupo Ángeles y Grupo Bal en diversos sectores comerciales e industriales.",
    bio: "Experiencia profesional de más de 20 años en asesoría de impuestos tanto en el área nacional como internacional, en aspectos como reestructuras corporativas, fusiones, escisiones, costos fiscales, inversiones patrimoniales, diagnósticos tributarios y consultoría fiscal. Contador Público por la Escuela Superior de Comercio y Administración (ESCA), cuenta con una maestría en Derecho Fiscal por la Universidad Panamericana.",
    photo: cesarHernandezAsset.url,
  },
];

const homeServiciosMailto =
  "mailto:druiz@dcc-asesores.com,cvillegas@dcc-asesores.com,chernandez@dcc-asesores.com?subject=CLIENTEPAGINAWEB";

const servicios = [
  {
    title: "Asesoría",
    image: asesoriaImg.url,
    description:
      "Te brindamos tranquilidad a través de soluciones efectuadas a la medida en un marco legal en la aplicación de las disposiciones fiscales considerando las necesidades particulares, con un enfoque principal en el cuidado del patrimonio de nuestros clientes.",
  },
  {
    title: "Cumplimiento y Devoluciones",
    image: cumplimientoImg.url,
    description:
      "Ejecución oportuna de las obligaciones fiscales, garantizando la correcta aplicación de la normatividad vigente. Gestión y recuperación de saldos a favor ante las autoridades.",
  },
  {
    title: "Controversia",
    image: controversiaImg.url,
    description:
      "Diseñamos estrategias legales sólidas para proteger tu patrimonio y resolver cualquier disputa con seguridad y respaldo experto, en auditorías, cartas invitación o cualquier acto de fiscalización.",
  },
];

const blogs = [
  {
    title: "Surfeando el Boom de México: Por qué tu negocio necesita a los que diseñaron las reglas del juego",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1200&q=80",
    alt: "Skyline corporativo de Ciudad de México al atardecer",
    description:
      "México está atravesando un momento histórico con el nearshoring. Descubre por qué tu negocio necesita estrategas que conocieron las reglas del juego desde adentro.",
  },
  {
    title:
      "De los fondos de Fox a tu negocio: por qué emprender en México sí es posible con la guía correcta",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80",
    alt: "Reunión de estrategia de negocio y finanzas",
    description:
      "Vicente Fox impulsó más de 12,000 millones de pesos en fondos para PyMEs. La lección no es solo histórica: hoy, con el asesor correcto, tu empresa puede crecer con estrategia.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TeamSection />
        <ServiciosSection />
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, #064E3B 0%, #0B5E48 45%, #10B981 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36 md:py-44">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-white">
          Consultoría Empresarial
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Estrategia, claridad y resultados para empresas que buscan crecer con
          inteligencia.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white">
          En DCC Asesores Empresariales acompañamos a líderes y directivos con
          asesoría financiera, fiscal y estratégica diseñada para transformar
          retos en oportunidades sostenibles.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-brand transition-all hover:bg-brand-ice hover:-translate-y-0.5"
          >
            Conozca nuestros servicios <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
            Contáctenos
          </button>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-brand-ice py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-teal">
              Equipo
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
              Conoce a nuestro equipo
            </h2>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Dialog key={member.name}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-brand-ice ring-4 ring-white shadow-md">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-12 w-12 text-brand-mid" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-brand">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-teal">
                    {member.role}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-brand-teal transition-colors hover:bg-brand-ice hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                    aria-label={`Enviar correo a ${member.name}`}
                    title="Enviar correo"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <p className="mt-4 text-sm leading-relaxed text-brand-mid">
                    {member.shortBio}
                  </p>
                  <span className="mt-6 inline-flex items-center rounded-full border border-brand-teal px-4 py-1.5 text-xs font-semibold text-brand-teal transition-colors group-hover:bg-brand-teal group-hover:text-white">
                    Ver perfil completo
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <div className="mx-auto mb-4 flex h-44 w-44 items-center justify-center rounded-full bg-brand-ice ring-4 ring-white shadow-md">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-14 w-14 text-brand-mid" />
                    )}
                  </div>
                  <DialogTitle className="text-center text-2xl text-brand">
                    {member.name}
                  </DialogTitle>
                  <p className="mt-1 text-center text-sm font-semibold text-brand-teal">
                    {member.role}
                  </p>
                  <p className="mt-2 text-center text-xs text-brand-mid whitespace-pre-line">
                    {member.contact}
                  </p>
                </DialogHeader>
                <div className="mt-4 max-h-[50vh] overflow-y-auto px-2 text-sm leading-relaxed text-brand-mid">
                  {member.bio}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiciosSection() {
  return (
    <section className="bg-brand-ice py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-teal">
              Servicios
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
              Nuestros Servicios
            </h2>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  <a href={homeServiciosMailto}>Contáctanos</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
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
                className="pl-6 md:basis-1/2"
              >
                <Link
                  to="/blog/$slug"
                  params={{ slug: idx === 0 ? "vlog-1" : "vlog-2" }}
                  className="group block cursor-pointer overflow-hidden rounded-2xl ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <BlogCardInner v={v} idx={idx} />
                </Link>
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

function BlogCardInner({
  v,
  idx,
}: {
  v: { title: string; image: string; alt: string; description?: string };
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
                    {v.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {v.description}
                      </p>
                    ) : (
                      <p className="mt-2 text-sm text-slate-500">
                        DCC Insights · Episodio {idx + 1}
                      </p>
                    )}
                    <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-xs font-medium text-white transition-colors group-hover:bg-brand-teal">
                      Ver Vlog <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
    </>
  );
}
