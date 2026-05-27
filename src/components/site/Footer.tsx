import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const linkCls = "text-background/65 hover:text-background transition-colors";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-background/10">
          <div>
            <div className="text-2xl font-display mb-4">AL <span className="text-wine">Imobiliária</span></div>
            <p className="text-sm text-background/65 leading-relaxed">
              Conectando pessoas aos imóveis dos seus sonhos com excelência, transparência e sofisticação desde 2008.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-5">Links rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#inicio" className={linkCls}>Início</a></li>
              <li><a href="#destaques" className={linkCls}>Imóveis</a></li>
              
              <li><a href="#anunciar" className={linkCls}>Anuncie</a></li>
              <li><a href="#contato" className={linkCls}>Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-5">Tipos de imóveis</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className={linkCls}>Apartamentos</a></li>
              <li><a href="#" className={linkCls}>Casas</a></li>
              <li><a href="#" className={linkCls}>Coberturas</a></li>
              <li><a href="#" className={linkCls}>Comerciais</a></li>
              <li><a href="#" className={linkCls}>Terrenos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-5">Contato</h4>
            <ul className="space-y-3 text-sm text-background/65">
              <li>R. Prof. Guedes de Miranda, 161A</li>
              <li>Farol, Maceió / AL · 57055-220</li>
              <li>(11) 3000-1000</li>
              <li>contato@alimobiliaria.com.br</li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, MessageCircle, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:bg-wine hover:border-wine transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/50">
          <div>© 2025 AL Imobiliária. Todos os direitos reservados.</div>
          <div>CRECI-SP 00000-J</div>
        </div>
      </div>
    </footer>
  );
}
