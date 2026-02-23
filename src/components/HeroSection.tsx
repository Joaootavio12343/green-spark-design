import { motion } from "framer-motion";
import { ArrowRight, Play, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const DiscordIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-grid opacity-30" />
    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
    <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />

    <div className="container mx-auto px-4 md:px-8 pt-28 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
            Designer Gráfico Profissional
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6">
            Design que{" "}
            <span className="text-gradient glow-text">Converte</span> e{" "}
            <span className="text-gradient glow-text">Impressiona</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Transformo marcas em experiências visuais memoráveis. Identidade
            visual estratégica que gera resultados reais para o seu negócio.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-box-strong transition-all duration-300"
            >
              Solicitar Orçamento
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Play size={16} />
              Ver Portfólio
            </a>
          </div>

          {/* Contact buttons */}
          <div className="flex items-center gap-3 mt-8">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="https://discord.gg/SEU-LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <DiscordIcon size={16} />
              Discord
            </a>
          </div>

          {/* Stats inline */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-border">
            {[
              { num: "150+", label: "Projetos" },
              { num: "98%", label: "Satisfação" },
              { num: "5+", label: "Anos exp." },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-gradient">{s.num}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden gradient-border">
            <img
              src={heroImage}
              alt="Portfólio de design gráfico profissional"
              className="w-full h-auto rounded-2xl"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/20 blur-[60px] animate-float" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
