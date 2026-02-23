import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo leva para entregar um projeto?",
    a: "O prazo depende do plano escolhido. Projetos de logo são entregues em até 5 dias úteis, enquanto identidades visuais completas levam de 7 a 10 dias úteis.",
  },
  {
    q: "Quais formatos de arquivo receberei?",
    a: "Você receberá os arquivos em AI, SVG, PNG e PDF — todos em alta resolução e prontos para uso digital e impresso.",
  },
  {
    q: "Posso solicitar alterações no projeto?",
    a: "Sim! Cada plano inclui rodadas de ajustes. O plano Premium oferece ajustes ilimitados para garantir que tudo fique perfeito.",
  },
  {
    q: "Você trabalha com contrato?",
    a: "Sim, trabalho com um termo de serviço simples e transparente que protege ambas as partes. Tudo muito profissional e seguro.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento pode ser feito via Pix, transferência bancária ou cartão de crédito. Projetos maiores podem ser parcelados em até 3x.",
  },
  {
    q: "Atende empresas de qualquer segmento?",
    a: "Sim! Já atendi mais de 150 empresas de diversos segmentos — de startups de tecnologia a restaurantes e clínicas.",
  },
  {
    q: "Posso ver mais exemplos do seu trabalho?",
    a: "Claro! Você pode ver meu portfólio completo na seção acima ou me chamar no WhatsApp para receber cases específicos do seu segmento.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl px-6 border-primary/5 data-[state=open]:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
