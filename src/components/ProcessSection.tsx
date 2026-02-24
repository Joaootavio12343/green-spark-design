import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Lightbulb, PenTool, RefreshCw, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Briefing", desc: "Entendo seu negócio, público e objetivos para alinhar a visão criativa." },
  { icon: Lightbulb, num: "02", title: "Estratégia", desc: "Pesquiso referências e defino o conceito visual mais eficiente." },
  { icon: PenTool, num: "03", title: "Criação", desc: "Desenvolvo as propostas visuais com atenção a cada detalhe." },
  { icon: RefreshCw, num: "04", title: "Ajustes", desc: "Refino o projeto com base no seu feedback até a aprovação final." },
  { icon: Rocket, num: "05", title: "Entrega Final", desc: "Entrego todos os arquivos organizados, prontos para uso." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[200px]" />

      <div className="section-divider mb-20" />

      <div className="container mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Processo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Como <span className="text-gradient">funciona</span>
          </h2>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connection line */}
          <div className="relative mx-auto max-w-5xl mb-0">
            <div className="absolute top-[60px] left-[10%] right-[10%] h-px bg-border" />
            <motion.div
              className="absolute top-[60px] left-[10%] h-px bg-primary origin-left"
              style={{ width: lineHeight }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group flex flex-col items-center text-center"
              >
                {/* Number + icon node */}
                <div className="relative mb-6">
                  <div className="w-[120px] h-[120px] rounded-2xl glass-card flex flex-col items-center justify-center gap-2 group-hover:border-primary/40 group-hover:glow-box transition-all duration-500">
                    <span className="font-display text-2xl font-bold text-primary/40 group-hover:text-primary transition-colors">
                      {s.num}
                    </span>
                    <s.icon size={24} className="text-primary" />
                  </div>
                  {/* Glow dot on timeline */}
                  <div className="absolute -bottom-[30px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-box z-10" />
                </div>

                <h3 className="font-display font-bold text-base mt-6">{s.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 max-w-[160px] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical connected cards */}
        <div className="lg:hidden relative max-w-md mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="absolute left-8 top-0 w-px bg-primary origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="flex gap-6 items-start relative group"
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl glass-card flex flex-col items-center justify-center gap-0.5 group-hover:border-primary/40 group-hover:glow-box transition-all duration-300">
                    <span className="font-display text-xs font-bold text-primary/50">{s.num}</span>
                    <s.icon size={18} className="text-primary" />
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="font-display font-bold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
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
