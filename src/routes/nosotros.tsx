import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { User } from "lucide-react";

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
  {
    name: "Juan Rulfo\u00a0",
    role: "Contacto",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nulla sed consectetur malesuada. Maecenas scelerisque erat quis maximus sagittis.",
  },
];

function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Header />
      <TeamGrid />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "#13396F" }}
    >
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28 md:py-32 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-white/70">
          Nosotros
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Nuestro Equipo
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/80">
          Conoce a los expertos detrás de DCC asesores empresariales
        </p>
      </div>
    </section>
  );
}

function TeamGrid() {
  return (
    <section className="bg-brand-ice py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
