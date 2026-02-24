import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const WA_LINK = "https://wa.me/5537998469852?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20orçamento.";
const DISCORD_LINK = "https://discord.gg/NGBZh2yKk7";

/* ───────────────────────── */
/* BOTÃO MAGNÉTICO APPLE    */
/* ───────────────────────── */

function AppleMagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.25;

    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.05)`;
  }, []);

  const handleLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "translate3d(0,0,0) scale(1)";
    }
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold btn-glow transition-all duration-300 will-change-transform overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
}

/* ───────────────────────── */
/* HERO ORIGINAL COMPLETO   */
/* ───────────────────────── */

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-grid opacity-40" />
    <div className="absolute inset-0 bg-noise" />
    <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px]" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[200px]" />

    <div className="container mx-auto px-4 md:px-8 pt-28 pb-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-semibold tracking-wider uppercase mb-6 glow-box"
          >
            Designer Gráfico Profissional
          </motion.span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6">
            Design que{" "}
            <span className="text-gradient glow-text">Converte</span> e{" "}
            <span className="text-gradient glow-text">Impressiona</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Transformo marcas em experiências visuais memoráveis. Identidade
            visual estratégica que gera resultados reais para o seu negócio.
          </p>

          {/* BOTÕES PRINCIPAIS */}
          <div className="flex flex-wrap gap-4">

            <AppleMagneticButton href={WA_LINK}>
              Solicitar Orçamento
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </AppleMagneticButton>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Play size={16} />
              Ver Portfólio
            </a>
          </div>

          {/* CONTACT BUTTONS (MANTIDOS) */}
          <div className="flex items-center gap-3 mt-8">
            <a
              href="https://wa.me/5537998469852"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 hover:glow-box transition-all duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 hover:glow-box transition-all duration-300"
            >
              <MessageCircle size={16} />
              Discord
            </a>
          </div>

          {/* STATS */}
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

        {/* IMAGE (INALTERADA) */}
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
        </motion.div>

      </div>
    </div>
  </section>
);

export default HeroSection;
