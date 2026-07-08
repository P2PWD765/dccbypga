import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/dcc-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DCC Asesores Empresariales" },
      { name: "description", content: "Asesoría empresarial estratégica para impulsar el crecimiento de su empresa." },
      { property: "og:title", content: "DCC Asesores Empresariales" },
      { property: "og:description", content: "Asesoría empresarial estratégica para impulsar el crecimiento de su empresa." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-ice px-6">
      <main className="flex flex-col items-center gap-10 text-center animate-in fade-in zoom-in-95 duration-700">
        <img
          src={logo}
          alt="DCC Asesores Empresariales"
          width={420}
          height={420}
          className="h-auto w-[280px] sm:w-[360px] md:w-[420px] select-none"
        />
        <Link
          to="/home"
          className="inline-flex items-center justify-center rounded-full bg-brand-teal px-12 py-4 text-base font-medium tracking-wide text-white shadow-lg shadow-brand-teal/20 transition-all hover:bg-brand hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          Entrar
        </Link>
        <p className="text-xs uppercase tracking-[0.3em] text-brand">
          Asesoría Empresarial
        </p>
      </main>
    </div>
  );
}
