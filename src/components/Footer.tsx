import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import Logo from "./Logo";

const Footer = () => (
  <footer className="border-t border-border py-12 px-4 md:px-8">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="text-sm text-muted-foreground mt-4 max-w-xs">
            Design estratégico que transforma marcas e gera resultados reais.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Links Rápidos</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Início", href: "#hero" },
              { label: "Portfólio", href: "#portfolio" },
              { label: "Serviços", href: "#servicos" },
              { label: "Preços", href: "#precos" },
              { label: "FAQ", href: "#faq" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Contato</h4>
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/5537998469852"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href="mailto:contato@joaootavio.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} /> contato@joaootavio.com
            </a>
          </div>
          <div className="flex gap-3 mt-5">
            {[Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 border border-transparent transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2025 João Otávio. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
