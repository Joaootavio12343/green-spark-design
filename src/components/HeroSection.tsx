import React, { useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, MessageCircle } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import heroImage from "@/assets/hero-image.jpg";

const WA_LINK =
  "https://wa.me/5537998469852?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20orçamento.";
const DISCORD_LINK = "https://discord.gg/NGBZh2yKk7";

/* ───────────────────────── */
/* BOTÃO MAGNÉTICO + RAINBOW */
/* ───────────────────────── */

const MagneticRainbowButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 will-change-transform"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <RainbowButton className="px-7 py-3.5 text-base font-semibold shadow-xl">
          {children}
        </RainbowButton>
      </a>
    </div>
  );
};

/* ───────────────────────── */
/* HERO COMPLETO            */
/* ───────────────────────── */

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.08;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left - rect.width / 2;
      mouseY = e.clientY - rect.top - rect.height / 2;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      container.style.transform = `translate(${currentX * 0.05}px, ${currentY * 0.05}px)`;
      requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-noise" />

      <div className="container mx-auto px-4 md:px-8 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              Designer Gráfico Profissional
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Design que{" "}
              <span className="text-gradient">Converte</span> e{" "}
              <span className="text-gradient">Impressiona</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10">
              Transformo marcas em experiências visuais memoráveis.
              Identidade visual estratégica que gera resultados reais para
              o seu negócio.
            </p>

            {/* BOTÕES PRINCIPAIS */}
            <div className="flex flex-wrap gap-4 items-center">
              <MagneticRainbowButton href={WA_LINK}>
                Solicitar Orçamento
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticRainbowButton>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                <Play size={16} />
                Ver Portfólio
              </a>
            </div>

            {/* CONTACT BUTTONS COM MOVIMENTO */}
            <div
              ref={containerRef}
              className="flex items-center gap-3 mt-8 will-change-transform"
            >
              <a
                href="https://wa.me/5537998469852"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Discord
              </a>
            </div>

            {/* STATS */}
            <div className="flex items-center gap-8 mt-10">
              <div>
                <span className="block text-2xl font-bold text-gradient">150+</span>
                <span className="text-xs text-muted-foreground">Projetos</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gradient">98%</span>
                <span className="text-xs text-muted-foreground">Satisfação</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gradient">5+</span>
                <span className="text-xs text-muted-foreground">Anos exp.</span>
              </div>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Portfólio de design gráfico profissional"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
