import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Palette, Clock } from "lucide-react";
import designerPhoto from "@/assets/designer-photo.jpg";

const stats = [
  { icon: Palette, title: "+150 Projetos", desc: "Entregues com excelência" },
  { icon: Clock, title: "Atendimento Rápido", desc: "Respostas em até 2h" },
  { icon: Target, title: "Foco em Conversão", desc: "Design estratégico" },
  { icon: Zap, title: "Identidade Única", desc: "Marcas memoráveis" },
];

const AuthoritySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="autoridade" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden gradient-border">
              <img
                src={designerPhoto}
                alt="Designer gráfico profissional"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-primary/10 blur-[80px]" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Sobre Mim
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
              Criatividade com{" "}
              <span className="text-gradient">propósito estratégico</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sou designer gráfico especializado em criar identidades visuais
              que não apenas impressionam, mas que convertem. Cada projeto é
              tratado como único, com foco total em transmitir a essência da
              sua marca e gerar resultados mensuráveis.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 hover-glow hover:border-primary/30"
                >
                  <s.icon size={20} className="text-primary mb-2" />
                  <p className="font-display font-semibold text-sm text-foreground">
                    {s.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
