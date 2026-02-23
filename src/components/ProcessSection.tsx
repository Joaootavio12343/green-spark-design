import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Lightbulb, PenTool, RefreshCw, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Briefing", desc: "Entendo seu negócio, público e objetivos para alinhar a visão criativa." },
  { icon: Lightbulb, title: "Estratégia", desc: "Pesquiso referências e defino o conceito visual mais eficiente." },
  { icon: PenTool, title: "Criação", desc: "Desenvolvo as propostas visuais com atenção a cada detalhe." },
  { icon: RefreshCw, title: "Ajustes", desc: "Refino o projeto com base no seu feedback até a aprovação final." },
  { icon: Rocket, title: "Entrega Final", desc: "Entrego todos os arquivos organizados, prontos para uso." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Processo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Como <span className="text-gradient">funciona</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="flex gap-5 items-start relative"
              >
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-secondary flex items-center justify-center border border-primary/20 flex-shrink-0">
                  <s.icon size={22} className="text-primary" />
                </div>
                <div className="pt-1 md:pt-3">
                  <h3 className="font-display font-bold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
