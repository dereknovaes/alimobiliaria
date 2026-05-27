import { useEffect, useState } from "react";
import { Phone, Search, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Imóveis", href: "#destaques" },
  { label: "Comprar", href: "#destaques" },
  { label: "Alugar", href: "#recentes" },
  { label: "Minha Casa Minha Vida", href: "#minha-casa-minha-vida" },
  { label: "Anuncie", href: "#anunciar" },
  
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-[var(--shadow-card)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="AL Imobiliária"
            className={`h-12 lg:h-14 w-auto transition-all ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-wine after:transition-all hover:after:w-full ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div
            className={`hidden xl:flex items-center gap-2 rounded-full border px-3 py-1.5 transition ${
              scrolled ? "border-border bg-background" : "border-white/30 bg-white/10 backdrop-blur"
            }`}
          >
            <Search className={`w-4 h-4 ${scrolled ? "text-muted-foreground" : "text-white/80"}`} />
            <input
              placeholder="Código do imóvel"
              className={`bg-transparent text-xs outline-none w-32 ${
                scrolled ? "text-foreground placeholder:text-muted-foreground" : "text-white placeholder:text-white/70"
              }`}
            />
          </div>
          <a
            href="tel:+551130001000"
            className={`inline-flex items-center gap-2 text-sm font-medium ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Phone className="w-4 h-4" /> (11) 3000-1000
          </a>
          <a
            href="https://wa.me/5511900000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wine text-wine-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-wine)]"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/80 hover:text-wine"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511900000000"
              className="mt-2 rounded-full bg-wine text-wine-foreground px-4 py-2 text-sm font-medium text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
