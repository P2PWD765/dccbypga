import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/dcc-logo.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/home" className="flex items-center gap-3">
          <div className="rounded bg-white px-2 py-1">
            <img src={logo} alt="DCC" className="h-7 w-auto" />
          </div>
          <span className="hidden text-sm font-medium uppercase tracking-[0.18em] sm:inline">
            DCC Asesores
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/servicios"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
            activeProps={{ className: "bg-white/15" }}
          >
            Servicios
          </Link>

          <Link
            to="/nosotros"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
            activeProps={{ className: "bg-white/15" }}
          >
            Nosotros
          </Link>

          <Link
            to="/blogs"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
            activeProps={{ className: "bg-white/15" }}
          >
            Blogs
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:outline-none">
              Conócenos <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuItem asChild>
                <Link to="/conocenos/cultura" className="cursor-pointer">
                  Nuestra cultura organizacional
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Nuestra trayectoria</DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/location" className="cursor-pointer">
                  Ubicación
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
