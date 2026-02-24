import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: "R$ 497",
    desc: "Ideal para começar com o pé direito",
    badge: "Mais Escolhido",
    icon: Sparkles,
    featured: true,
    link: "https://wa.me/5537998469852?text=Olá,%20quero%20contratar%20o%20Plano%20Essencial%20(R$%20497)%20e%20começar%20meu%20projeto.",
    features: [
      "Logo profissional exclusiva",
      "3 variações de conceito",
      "Arquivo vetorial (AI/SVG)",
      "PNG em alta resolução",
      "Paleta de cores básica",
      "2 rodadas de ajustes",
      "Entrega em 5 dias úteis",
      "Suporte por 15 dias",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 1.297",
    desc: "Para marcas que querem se destacar",
    badge: null,
    icon: Crown,
    featured: false,
    link: "https://wa.me/5537998469852?text=Olá,%20tenho%20interesse%20no%20Plano%20Profissional%20(R$%201.297)%20e%20quero%20mais%20informações.",
    features: [
      "Tudo do Essencial +",
      "Identidade visual completa",
      "Paleta de cores + tipografia",
      "Cartão de visita + papelaria",
      "Manual de marca (PDF)",
      "5 rodadas de ajustes",
      "Entrega em 7 dias úteis",
      "Suporte por 30 dias",
    ],
  },
  {
    name: "Premium",
    price: "R$ 2.497",
    desc: "Para marcas que querem dominar",
    badge: null,
    icon: Rocket,
    featured: false,
    link: "https://wa.me/5537998469852?text=Olá,%20quero%20fechar%20o%20Plano%20Premium%20(R$%202.497)%20e%20iniciar%20o%20quanto%20antes.",
    features: [
      "Tudo do Profissional +",
      "Social Media Pack (15 posts)",
      "Destaques do Instagram",
      "Apresentação de marca",
      "Ajustes ilimitados",
      "Entrega em 10 dias úteis",
      "Suporte por 60 dias",
    ],
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="precos" className="section-padding relative">
      <div className="section-divider mb-20" />
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Investimento
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Escolha o pacote{" "}
            <span className="text-gradient">ideal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-2xl p-6 md:p-8 relative transition-all duration-300 ${
                p.featured
                  ? "glass-card border-primary/40 glow-box-strong scale-[1.04] animate-border-glow z-10"
                  : "glass-card hover:border-primary/20"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1 whitespace-nowrap glow-box">
                  <Sparkles size={12} /> {p.badge}
                </div>
              )}

              <div className="flex items-center gap-2 mb-1">
                <p.icon size={18} className="text-primary" />
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>

              <div className="mt-5 mb-6">
                <span className="font-display text-4xl font-bold text-gradient">
                  {p.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 btn-glow ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:glow-box-strong"
                    : "border border-border text-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                Começar Agora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
