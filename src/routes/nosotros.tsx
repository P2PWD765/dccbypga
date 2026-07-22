import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { User, Mail } from "lucide-react";
import davidRuizAsset from "@/assets/david-ruiz.png.asset.json";
import carlosVillegasAsset from "@/assets/carlos-villegas.png.asset.json";
import cesarHernandezAsset from "@/assets/cesar-hernandez.png.asset.json";
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
    role: "Asesor de Negocios y Especialista Fiscal",
    email: "druiz@dcc-asesores.com",
    contact: "Contacto: druiz@dcc-asesores.com\nTelefono: 442 285 3839",
    shortBio:
      "Especialista en materia fiscal y negocios con más de 30 años de experiencia. Con trayectoria en consultoría fiscal internacional y en la administración tributaria de grandes contribuyentes. Cuenta con una sólida experiencia en asesoría nacional e internacional y docencia de posgrado.",
    bio: "Asesor de negocios y especialista en materia fiscal con más de 30 años de experiencia. En la práctica privada desarrolló diversas actividades económicas en las industrias de consultoría fiscal internacional y asesoría corporativa, donde participó como socio y director de oficinas regionales, atendiendo empresas nacionales e internacionales. En la administración pública federal, se desempeñó en distintas responsabilidades directivas en materia de planeación, auditoría fiscal internacional, normatividad internacional y programas de cooperación voluntaria con grandes contribuyentes, contribuyendo a los primeros acuerdos de entendimiento de México con otros países en procedimientos de mutuo acuerdo. Ha participado como ponente en foros de América Latina sobre tributación internacional y forma parte de comisiones fiscales empresariales. Cuenta con experiencia docente en programas de posgrado en derecho internacional e impuestos, así como en diplomados especializados en tributación internacional. Es Contador Público egresado de la Escuela Superior de Comercio y Administración (ESCA) y cuenta con diplomado en Impuestos Internacionales.",
    photo: davidRuizAsset.url,
  },
  {
    name: "Carlos Alberto Villegas Pérez",
    role: "Especialista en Fiscalización y Controversia",
    email: "cvillegas@dcc-asesores.com",
    contact: "Contacto: cvillegas@dcc-asesores.com\nTelefono: 813 414 0206",
    shortBio:
      "Contador Público y Maestro en Derecho Fiscal con más de 12 años de trayectoria dual en la administración tributaria (Grandes Contribuyentes e Hidrocarburos) y la asesoría privada. Experto en mitigación de riesgos fiscales y atención de auditorías corporativas.",
    bio: "Especialista en materia fiscal con más de 12 años de experiencia en fiscalización y controversia, con una trayectoria que combina su experiencia tanto en la administración tributaria como en la asesoría privada, lo que le permite abordar los asuntos fiscales desde una perspectiva integral y estratégica. Inició su carrera en la autoridad fiscal, dentro de las administraciones de hidrocarburos y grandes contribuyentes, donde participó en el diseño e implementación de programas de fiscalización, análisis de estructuras corporativas complejas y la identificación de esquemas fiscales agresivos. Se especializa en la evaluación y mitigación de riesgos fiscales, así como en el diseño e implementación de estrategias para la atención de facultades de comprobación, atendiendo a empresas de sectores como hidrocarburos, construcción, industrial, alimenticio, farmacéutico, comercio y servicios, entre otros. Contador Público por la Escuela Superior de Comercio y Administración (ESCA), cuenta con una maestría en Derecho Fiscal y administrativo.",
    photo: carlosVillegasAsset.url,
  },
  {
    name: "Carlos César Hernandez",
    role: "Consultor de Impuestos Nacionales e Internacionales",
    email: "chernandez@dcc-asesores.com",
    contact: "Contacto: chernandez@dcc-asesores.com\nTelefono: 554 950 7029",
    shortBio:
      "Especialista en consultoría fiscal, fusiones y reestructuras corporativas con más de 20 años de experiencia. Ha asesorado a importantes grupos empresariales en diversos sectores comerciales e industriales.",
    bio: "Experiencia profesional de más de 20 años en asesoría de impuestos tanto en el área nacional como internacional, en aspectos como reestructuras corporativas, fusiones, escisiones, costos fiscales, inversiones patrimoniales, diagnósticos tributarios y consultoría fiscal. Ha desarrollado diversas actividades económicas en sectores como inmobiliario, comercial, transformación, minero y salud, asesorando a grupos empresariales de diversos tamaños. Contador Público por la Escuela Superior de Comercio y Administración (ESCA), cuenta con una maestría en Derecho Fiscal y ha sido expositor en cursos fiscales internos y externos para diversas instituciones.",
    photo: cesarHernandezAsset.url,
  },
];

function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Header />
        <Overview />
        <TeamGrid />
      </main>
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
          className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white"
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
