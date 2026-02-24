import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const categories = ["Todos", "Logo", "Social Media", "Identidade Visual"];

const projects = [
  { id: 1, title: "Logo Premium", cat: "Logo", desc: "Marca moderna com gradiente para startup de tecnologia.", img: portfolio1 },
  { id: 2, title: "Social Media Pack", cat: "Social Media", desc: "Pack completo de templates para Instagram e stories.", img: portfolio2 },
  { id: 3, title: "Identidade Visual Completa", cat: "Identidade Visual", desc: "Papelaria completa, cartões, envelope e manual de marca.", img: portfolio3 },
  { id: 4, title: "Logo Minimalista", cat: "Logo", desc: "Logotipo clean e sofisticado para marca premium.", img: portfolio4 },
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Projetos que <span className="text-gradient">falam por si</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === c
                  ? "bg-primary text-primary-foreground glow-box"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setSelected(p)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer gradient-border glass-card"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {p.cat}
                  </p>
                  <p className="font-display text-lg font-bold text-foreground mt-1">
                    {p.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-2xl max-w-2xl w-full overflow-hidden border-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {selected.cat}
                  </p>
                  <h3 className="font-display text-xl font-bold mt-1">
                    {selected.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {selected.desc}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <a
                href="https://wa.me/5537998469852?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm btn-glow"
              >
                Quero algo similar
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
