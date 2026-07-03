import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Linkedin, ChevronDown } from "lucide-react";
import logo from "@/assets/dcc-logo.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const officeRoutes = [
  {
    city: "Monterrey",
    url: "https://www.google.com/maps/dir/?api=1&destination=Dr.+Roberto+J.+Cant%C3%BA+2777,+Ampliaci%C3%B3n+Comercial+Doctores,+64710+Monterrey,+N.L.",
  },
  {
    city: "Ciudad de México",
    url: "https://www.google.com/maps/dir/?api=1&destination=Paseo+de+la+Reforma+250,+Juárez,+06600+Ciudad+de+México,+CDMX",
  },
  {
    city: "Querétaro",
    url: "https://www.google.com/maps/dir/?api=1&destination=Blvd.+Bernardo+Quintana,+Centro+Sur,+76090+Santiago+de+Querétaro,+Qro.",
  },
];

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="mb-5 inline-block rounded bg-white px-3 py-2">
            <img src={logo} alt="DCC" className="h-10 w-auto" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Asesoría empresarial estratégica, financiera y fiscal para
            empresas que buscan crecer con visión a largo plazo.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
            Contacto
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/5210000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-[#10B981] hover:bg-[#10B981]/15 hover:text-[#6EE7B7]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/company/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-[#10B981] hover:bg-[#10B981]/15 hover:text-[#6EE7B7]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-[#10B981] hover:bg-[#10B981]/15 hover:text-[#6EE7B7] focus:outline-none">
                <MapPin className="h-4 w-4" />
                Nuestras Oficinas
                <ChevronDown className="h-4 w-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {officeRoutes.map((o) => (
                  <DropdownMenuItem key={o.city} asChild>
                    <a href={o.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                      <MapPin className="h-4 w-4 text-brand" />
                      {o.city}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
            Enlaces
          </h4>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="cursor-pointer transition-colors hover:text-white">Servicios</li>
            <li><Link to="/conocenos/cultura" className="transition-colors hover:text-white">Nuestra cultura organizacional</Link></li>
            <li className="cursor-pointer transition-colors hover:text-white">Nuestra trayectoria</li>
            <li className="cursor-pointer transition-colors hover:text-white">Ubicación</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/60 sm:flex-row">
          <span>© 2026 DCC Asesores Empresariales. Todos los derechos reservados.</span>
          <span>Aviso de privacidad · Términos</span>
        </div>
      </div>
    </footer>
  );
}
