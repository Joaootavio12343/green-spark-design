import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* BG glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto leading-tight">
          Pronto para{" "}
          <span className="text-gradient glow-text">elevar sua marca</span> ao
          próximo nível?
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
          Vamos transformar sua visão em uma identidade visual que
          impressiona e converte.
        </p>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:glow-box-strong transition-all duration-300 animate-glow-pulse"
        >
          Quero Elevar Minha Marca
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default CTASection;
