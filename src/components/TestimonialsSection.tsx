"use client";

import { Star } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "CEO | Empresa de Tecnologia",
    initial: "R",
    content:
      "Implementamos rápido e os resultados apareceram no primeiro mês. Mais organização e mais produtividade.",
  },
  {
    name: "Fernanda Costa",
    role: "CEO | Agência de Marketing Digital",
    initial: "F",
    content:
      "Profissionalismo impecável. A identidade visual que recebi transformou completamente meu negócio.",
  },
  {
    name: "Juliana Santos",
    role: "CEO | E-commerce de Moda",
    initial: "J",
    content:
      "Melhorou a experiência do cliente e aumentou nossa taxa de recompra.",
  },
  {
    name: "Lucas Pereira",
    role: "Empreendedor",
    initial: "L",
    content:
      "Investir na identidade visual foi a melhor decisão que tomei. O retorno foi imediato — meus clientes começaram a me ver de forma totalmente diferente.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-14"
        >
          O que dizem{" "}
          <span className="text-gradient">meus clientes</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl"
            >
              <GlowingEffect
                blur={10}
                inactiveZone={0.7}
                proximity={100}
                spread={20}
                variant="default"
                glow={false}
                disabled={false}
                movementDuration={2}
                borderWidth={2}
                className="rounded-xl"
              />

              <div className="relative z-10 rounded-xl bg-card border border-border p-6 h-full flex flex-col justify-between gap-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  "{t.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-semibold text-sm">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{t.name}</h4>
                    <span className="text-xs text-muted-foreground">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
