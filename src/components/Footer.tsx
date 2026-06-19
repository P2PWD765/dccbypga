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
              contacto@dccasesores.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-white/60" />
              +52 (55) 1234 5678
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-white/60" />
              Av. Reforma 222, CDMX
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
            Enlaces
          </h4>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="cursor-pointer transition-colors hover:text-white">Servicios</li>
            <li><Link to="/conocenos/historia" className="transition-colors hover:text-white">Nuestra historia</Link></li>
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
