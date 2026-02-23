const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#" className={`flex items-center gap-2 group ${className}`}>
    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-box transition-all duration-300">
      <span className="text-gradient font-display font-bold text-xl">V</span>
    </div>
    <span className="font-display font-semibold text-lg text-foreground">
      Vértice<span className="text-gradient">Studio</span>
    </span>
  </a>
);

export default Logo;
