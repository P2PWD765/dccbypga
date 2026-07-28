import { MessageCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export const whatsappContacts = [
  { name: "David Edgardo Ruíz Enríquez", phone: "524422853839", display: "+52 442 285 3839" },
  { name: "Carlos Alberto Villegas Pérez", phone: "528134140206", display: "+52 813 414 0206" },
  { name: "Carlos César Hernández", phone: "525549507029", display: "+52 554 950 7029" },
];

export function waLink(phone: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hola, me comunico desde la página web de DCC Asesores Empresariales.",
  )}`;
}

export function WhatsAppMenu({ triggerClassName }: { triggerClassName?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={
          triggerClassName ??
          "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-[#10B981] hover:bg-[#10B981]/15 hover:text-[#6EE7B7] focus:outline-none"
        }
        aria-label="Chatear por WhatsApp con un socio"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-72">
        <DropdownMenuLabel>Chatea con un socio</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {whatsappContacts.map((c) => (
          <DropdownMenuItem
            key={c.phone}
            className="cursor-pointer flex-col items-start gap-0.5"
            onClick={() => window.open(waLink(c.phone), "_blank", "noopener,noreferrer")}
          >
            <span className="text-sm font-medium text-brand">{c.name}</span>
            <span className="text-xs text-muted-foreground">{c.display}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function WhatsAppFloatingMenu() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          aria-label="Abrir menú de WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="top" className="w-72">
          <DropdownMenuLabel>Chatea con un socio</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {whatsappContacts.map((c) => (
            <DropdownMenuItem
              key={c.phone}
              className="cursor-pointer flex-col items-start gap-0.5"
              onClick={() => window.open(waLink(c.phone), "_blank", "noopener,noreferrer")}
            >
              <span className="text-sm font-medium text-brand">{c.name}</span>
              <span className="text-xs text-muted-foreground">{c.display}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}