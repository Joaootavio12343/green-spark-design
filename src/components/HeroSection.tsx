import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center overflow-hidden"
  >
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
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Play size={16} />
              Ver Portfólio
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
                <p className="font-display text-2xl font-bold text-gradient">
                  {s.num}
                </p>
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
