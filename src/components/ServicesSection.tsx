import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gem, Layers, Share2, Monitor, Check } from "lucide-react";

const services = [
  {
    icon: Gem,
    title: "Criação de Logo",
    benefits: ["Logo original e exclusiva", "Variações de cor e fundo", "Arquivo vetorial (AI, SVG, PNG)", "Manual básico de uso"],
    result: "Uma marca memorável que transmite profissionalismo e confiança.",
  },
  {
    icon: Layers,
    title: "Identidade Visual Completa",
    benefits: ["Logo + sub-marcas", "Paleta de cores estratégica", "Tipografia personalizada", "Papelaria completa", "Manual de identidade"],
    result: "Posicionamento visual coeso que eleva sua marca no mercado.",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    benefits: ["Templates para feed e stories", "Destaques do Instagram", "Capas para redes sociais", "Kit de posts semanais"],
    result: "Presença digital profissional que atrai e engaja seu público.",
  },
  {
    icon: Monitor,
    title: "Landing Pages",
    benefits: ["Design responsivo", "Otimizado para conversão", "Layout moderno e profissional", "Entrega em Figma ou código"],
    result: "Páginas que transformam visitantes em clientes reais.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Soluções visuais que{" "}
            <span className="text-gradient">geram resultado</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 hover-glow hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow-box transition-all duration-300">
                <s.icon size={22} className="text-primary" />
              </div>

              <h3 className="font-display text-xl font-bold mb-4">{s.title}</h3>

              <ul className="space-y-2 mb-6">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                  Resultado
                </p>
                <p className="text-sm text-muted-foreground">{s.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
