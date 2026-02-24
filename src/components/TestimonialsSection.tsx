"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect"; // ajuste o caminho se necessário

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "CEO | Empresa de Tecnologia",
    text: "Implementamos rápido e os resultados apareceram no primeiro mês. Mais organização e mais produtividade.",
  },
  {
    name: "Fernanda Costa",
    role: "CEO | Agência de Marketing Digital",
    text: "Profissionalismo impecável. A identidade visual que recebi transformou completamente meu negócio.",
  },
  {
    name: "Juliana Santos",
    role: "CEO | E-commerce de Moda",
    text: "Melhorou a experiência do cliente e aumentou nossa taxa de recompra.",
  },
  {
    name: "Lucas Pereira",
    role: "Empreendedor",
    text: "Investir na identidade visual foi a melhor decisão que tomei. O retorno foi imediato — meus clientes começaram a me ver de forma totalmente diferente.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            O que dizem <span className="text-gradient">meus clientes</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative group rounded-2xl"
            >
              {/* Efeito RGB */}
              <GlowingEffect
                disabled={false}
                proximity={80}
                spread={40}
                blur={0}
                movementDuration={0.6}
                borderWidth={2}
                className="rounded-2xl"
              />

              {/* Card */}
              <div className="relative z-10 rounded-2xl p-6 bg-zinc-900/80 backdrop-blur-2xl border border-white/5 shadow-xl shadow-black/30 transition-all duration-300">
                {/* Estrelas */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
