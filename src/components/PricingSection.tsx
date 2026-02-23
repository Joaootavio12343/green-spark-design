import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: "R$ 497",
    desc: "Ideal para quem está começando",
    featured: false,
    features: [
      "Logo profissional",
      "3 variações de conceito",
      "Arquivo vetorial (AI/SVG)",
      "PNG em alta resolução",
      "2 rodadas de ajustes",
      "Entrega em 5 dias úteis",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 1.297",
    desc: "O mais escolhido pelos clientes",
    featured: true,
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
    featured: false,
    features: [
      "Tudo do Profissional +",
      "Social Media Pack (15 posts)",
      "Destaques do Instagram",
      "Apresentação de marca",
      "Landing page design",
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
            Escolha o plano <span className="text-gradient">ideal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-2xl p-6 md:p-8 relative transition-all duration-300 ${
                p.featured
                  ? "glass-card border-primary/30 glow-box scale-[1.02]"
                  : "glass-card hover:border-primary/15"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1">
                  <Star size={12} /> Mais Popular
                </div>
              )}

              <h3 className="font-display text-lg font-bold">{p.name}</h3>
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
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
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
