import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/dcc-logo.png";

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
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-white/60" />
              contacto
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-white/60" />
              TKTK
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-white/60" />
              TKTK
            </li>
          </ul>
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
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-[#10B981] hover:bg-[#10B981]/15 hover:text-[#6EE7B7]"
          >
            <svg
              className="h-5 w-5 transition-colors group-hover:text-[#6EE7B7]"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Conecta con nosotros en LinkedIn
          </a>
        </div>
        <div className="border-t border-white/10" />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/60 sm:flex-row">
          <span>© 2026 DCC Asesores Empresariales. Todos los derechos reservados.</span>
          <span>Aviso de privacidad · Términos</span>
        </div>
      </div>
    </footer>
  );
}
