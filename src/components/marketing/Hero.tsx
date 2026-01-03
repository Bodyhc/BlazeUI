import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { GlitchText } from "@/components/ui/glitch-text";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          v1.0 is now live
        </motion.div>

        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl lg:text-8xl flex flex-col items-center gap-2 text-center">
          <span>Craft the Future of</span>
          <span className="relative">
             <GlitchText text="Interfaces" className="text-primary italic" />
             <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-sm opacity-50" />
          </span>
        </h1>

        <p className="mt-8 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-medium text-center">
          The most powerful, beautiful, and developer-friendly React component 
          library ever built. Fuel your productivity and build stunning UIs in record time.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold shadow-2xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all">
            <Link to="/components">
              Explore Components <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold border-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all">
            <a href="https://github.com/Bodyhc/BlazeUI.git" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> Star on GitHub
            </a>
          </Button>
        </div>

        {/* Floating Stats or Badges */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {['Speed', 'Accessibility', 'Customizable', 'Lightweight'].map((stat) => (
             <span key={stat} className="text-sm font-bold tracking-widest uppercase">{stat}</span>
           ))}
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;
