import { motion } from "framer-motion";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Globe, 
  Smartphone,
  Cpu,
  Layers
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SparklesCore as Sparkles } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PortfolioTemplate = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 h-16 flex items-center justify-between px-6 md:px-12">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <Code2 className="w-5 h-5" />
           </div>
           BLAZE.DEV
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#hero" className="hover:text-primary transition-colors">Home</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#stack" className="hover:text-primary transition-colors">Stack</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <Button className="rounded-full px-6">Hire Me</Button>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-16">
          <div className="absolute inset-0 z-0">
             <Sparkles
               background="transparent"
               minSize={0.4}
               maxSize={1}
               particleDensity={100}
               className="w-full h-full"
               particleColor="#3b82f6"
             />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center space-y-8 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase">
               Available for new projects
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Full-stack developer specializing in building high-fidelity interfaces 
              and robust backend architectures with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold shadow-xl shadow-primary/20">
                  View My Work
               </Button>
               <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-bold border-2">
                  Learn More
               </Button>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
             <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-white/20 flex justify-center p-1">
                <div className="w-1 h-2 bg-primary rounded-full" />
             </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Selected <span className="text-slate-400">Work</span></h2>
               <p className="text-slate-500 font-medium max-w-md">Detailed projects that showcase creative problem solving and technical excellence.</p>
            </div>
            <Link to="/templates" className="text-sm font-bold flex items-center gap-2 text-primary hover:gap-3 transition-all">
               VIEW ALL PROJECTS <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <SpotlightCard className="aspect-video bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-0 overflow-hidden flex flex-col group cursor-pointer">
                   <div className="flex-1 overflow-hidden relative">
                      <img 
                         src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?auto=format&fit=crop&q=60&w=500`} 
                         className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                         alt="Project"
                         loading="lazy"
                         decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <Button variant="secondary" className="rounded-full px-6">View Project</Button>
                      </div>
                   </div>
                   <div className="p-8 space-y-2">
                      <div className="flex items-center justify-between">
                         <h3 className="text-2xl font-bold">Project Name {i}</h3>
                         <span className="text-xs font-bold text-slate-400 tracking-widest">2023</span>
                      </div>
                      <p className="text-slate-500 font-medium line-clamp-1">Web design & Development for high-end boutique agency.</p>
                   </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="stack" className="py-32 bg-slate-50 dark:bg-slate-900/50">
           <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-20 text-center">My Tech <span className="text-primary">Universe</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                 {[
                   { name: "React", icon: Globe },
                   { name: "Node.js", icon: Cpu },
                   { name: "Typescript", icon: Code2 },
                   { name: "Tailwind", icon: Palette },
                   { name: "Mobile", icon: Smartphone },
                   { name: "Testing", icon: Layers }
                 ].map((tech) => (
                   <div key={tech.name} className="flex flex-col items-center gap-4 group">
                      <div className="w-20 h-20 rounded-3xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 border border-slate-200 dark:border-white/5">
                         <tech.icon className="w-10 h-10" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest text-slate-500">{tech.name}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
           <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-white text-center space-y-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent)]" />
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter relative z-10 leading-tight">
                 Let's build something <br /> remarkable together.
              </h2>
              <p className="text-xl md:text-2xl font-medium opacity-80 relative z-10 max-w-2xl mx-auto">
                 Currently open for freelance opportunities and full-time roles.
                 Drop me a line and let's chat.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10 pt-6">
                 <Button variant="secondary" size="lg" className="rounded-full px-10 h-16 text-lg font-bold">
                    Start a Conversation
                 </Button>
                 <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer border border-white/20">
                       <Linkedin className="w-6 h-6" />
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer border border-white/20">
                       <Github className="w-6 h-6" />
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer border border-white/20">
                       <Twitter className="w-6 h-6" />
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-white/10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            © 2024 BlazeUI Labs. All Rights Reserved.
         </div>
         <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="mailto:hello@blaze.dev" className="flex items-center gap-2 group">
               <Mail className="w-4 h-4 group-hover:text-primary" />
               HELLO@BLAZE.DEV
            </a>
         </div>
      </footer>
    </div>
  );
};

export default PortfolioTemplate;
