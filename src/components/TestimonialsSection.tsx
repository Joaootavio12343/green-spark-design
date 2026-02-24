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
      role: "Designer",
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
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Depoimentos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden"
            >
              {/* Glow */}
              <GlowingEffect
                blur={8}
                inactiveZone={0.7}
                proximity={120}
                spread={25}
                variant="default"
                glow={false}
                disabled={false}
                movementDuration={1.5}
                borderWidth={2}
              />

              {/* Card */}
              <div className="relative z-10 bg-card rounded-xl p-6 h-full border border-border">
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
