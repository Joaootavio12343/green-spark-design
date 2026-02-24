"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "João Silva",
      role: "CEO - Tech Solutions",
      content:
        "Excelente trabalho! Profissionalismo e qualidade acima do esperado.",
    },
    {
      name: "Mariana Costa",
      role: "Loja Online",
      content:
        "O resultado final superou minhas expectativas. Recomendo muito!",
    },
    {
      name: "Carlos Mendes",
      role: "Empreendedor",
      content:
        "Atendimento rápido, entrega impecável e suporte incrível.",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Depoimentos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-xl"
            >
              {/* Glow Layer */}
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

              {/* Card */}
              <div className="relative z-10 rounded-xl bg-card border border-border p-6">
                <p className="text-muted-foreground mb-4">
                  "{testimonial.content}"
                </p>

                <div>
                  <h3 className="font-semibold">
                    {testimonial.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
