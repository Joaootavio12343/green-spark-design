import React, { useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { RainbowButton } from "@/components/ui/rainbow-button";

const WA_LINK =
  "https://wa.me/5537998469852?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20orçamento.";
const DISCORD_LINK = "https://discord.gg/NGBZh2yKk7";

/* ───────────────────────── */
/* BOTÃO MAGNÉTICO APPLE    */
/* ───────────────────────── */

const AppleMagneticButton = ({ href, children }) => {
  const ref = useRef<HTMLAnchorElement>(null);

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
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold shadow-xl transition-all duration-300"
    >
      {children}
    </a>
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

      container.style.transform = `translate(${currentX * 0.05}px, ${
        currentY * 0.05
      }px)`;

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
            <h1 className="font-display text-5xl font-bold mb-6">
              Design que{" "}
              <span className="text-gradient">Converte</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10">
              Identidade visual estratégica que gera resultados reais.
            </p>

            {/* BOTÕES PRINCIPAIS */}
            <div className="flex flex-wrap gap-4">
              
              {/* 🔥 RAINBOW MAIS VISÍVEL */}
              <RainbowButton
                asChild
                className="relative p-[2px] rounded-xl animate-[gradient_4s_linear_infinite] bg-[linear-gradient(90deg,#ff0080,#ff8c00,#40e0d0,#ff0080)] bg-[length:300%_300%] shadow-[0_0_30px_rgba(255,0,128,0.4)]"
              >
                <AppleMagneticButton href={WA_LINK}>
                  <span className="bg-background rounded-xl px-7 py-3.5 flex items-center gap-2">
                    Solicitar Orçamento
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </AppleMagneticButton>
              </RainbowButton>

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
                alt="Portfólio"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔥 ANIMAÇÃO DO GRADIENT */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
