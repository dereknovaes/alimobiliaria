import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const inputCls =
  "w-full bg-transparent border-0 border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-wine transition-colors";

export function Contact() {
  return (
    <section id="contato" className="py-28 px-6 lg:px-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs tracking-[0.3em] uppercase text-wine font-medium">— Fale conosco</span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display text-foreground">
            Vamos conversar
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=R.%20Prof.%20Guedes%20de%20Miranda%2C%20161A%20-%20Farol%2C%20Macei%C3%B3%20-%20AL%2C%2057055-220&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-wine mt-0.5 shrink-0" /><span>R. Prof. Guedes de Miranda, 161A — Farol, Maceió / AL · 57055-220</span></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 text-wine mt-0.5 shrink-0" />(82) 99329-6248</li>
              <li className="flex gap-3"><MessageCircle className="w-4 h-4 text-wine mt-0.5 shrink-0" />WhatsApp: (82) 99329-6248</li>
              <li className="flex gap-3"><Mail className="w-4 h-4 text-wine mt-0.5 shrink-0" />contato@alimobiliaria.com.br</li>
              <li className="flex gap-3"><Clock className="w-4 h-4 text-wine mt-0.5 shrink-0" />Seg a Sex · 9h às 19h · Sáb 9h às 14h</li>
            </ul>
          </div>

          <form className="lg:col-span-3 bg-secondary rounded-2xl p-8 lg:p-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <input className={inputCls} placeholder="Nome completo" />
              <input className={inputCls} placeholder="Telefone" type="tel" />
            </div>
            <input className={inputCls} placeholder="E-mail" type="email" />
            <textarea className={inputCls + " resize-none"} rows={5} placeholder="Conte um pouco sobre o que você procura..." />
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-wine text-wine-foreground px-8 py-4 font-medium hover:opacity-95 transition shadow-[var(--shadow-wine)]">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
