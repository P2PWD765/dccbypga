import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nuestro Equipo — DCC Asesores Empresariales" },
      {
        name: "description",
        content:
          "Conozca al equipo de expertos de DCC Asesores Empresariales. Profesionales en consultoría estratégica, financiera y operativa.",
      },
      { property: "og:title", content: "Nuestro Equipo — DCC Asesores Empresariales" },
      {
        property: "og:description",
        content:
          "Conozca al equipo de expertos de DCC Asesores Empresariales.",
      },
    ],
  }),
  component: NosotrosPage,
});

const team = [
  {
    name: "David Edgardo Ruiz Enríquez",
    role: "Contacto: druiz@dcc-asesores.com\nTelefono: 442 285 3839",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nulla sed consectetur malesuada. Maecenas scelerisque erat quis maximus sagittis.",
  },
  {
    name: "Carlos Alberto Villegas Pérez",
    role: "Contacto: cvillegas@dcc-asesores.com\nTelefono: 813 414 0206",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nulla sed consectetur malesuada. Maecenas scelerisque erat quis maximus sagittis.",
  },
  {
    name: "César Hernandez",
    role: "Contacto: chernandez@dcc-asesores.com\nTelefono: 554 950 7029",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nulla sed consectetur malesuada. Maecenas scelerisque erat quis maximus sagittis.",
  },
];

function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Header />
      <Overview />
      <TeamGrid />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#064E3B" }}
    >
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28 md:py-32 text-center">
        <h1
          className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl text-white"
        >
          Sobre nosotros
        </h1>
        <p
          className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/90"
        >
          Experiencia, estrategia y seguridad jurídica.
        </p>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p
          className="text-base sm:text-lg leading-relaxed text-justify"
          style={{ color: "#064E3B" }}
        >
          Somos una firma conformada por profesionales con una trayectoria de
          más de 30 años de experiencia en el ámbito fiscal y de negocios.
          Hemos participado en diversos sectores, tales como farmacéutico,
          automotriz, tecnológico, energético, construcción, alimenticio y de
          servicios, entre otros, brindando asesoría estratégica a grupos
          corporativos e inversionistas, tanto en materia patrimonial como en
          temas relacionados con la eficiencia fiscal. Así mismo, nos distingue
          el ser conciliadores en materia de controversia fiscal, a través de
          la combinación de conocimiento técnico, visión estratégica y
          capacidad para lograr acuerdos que brinden seguridad jurídica a las
          empresas e individuos.
        </p>
      </div>
    </section>
  );
}

function TeamGrid() {
  return (
    <section className="bg-brand-ice py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: "#064E3B" }}
          >
            Nuestro Equipo
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Dialog key={member.name}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-brand-ice ring-4 ring-white shadow-md">
                    <User className="h-12 w-12 text-brand-mid" />
                  </div>
                  <h3 className="text-lg font-bold text-brand">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-teal whitespace-pre-line">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-brand-mid">
                    {member.bio}
                  </p>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-brand-ice ring-4 ring-white shadow-md">
                    <User className="h-14 w-14 text-brand-mid" />
                  </div>
                  <DialogTitle className="text-center text-2xl text-brand">
                    {member.name}
                  </DialogTitle>
                  <p className="mt-2 text-center text-sm font-medium text-brand-teal whitespace-pre-line">
                    {member.role}
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
