import { 
  ArrowRight, 
  Globe, 
  Zap, 
  Shield, 
  Smartphone,
  MessageCircle,
  Play
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-black text-xs">B</div>
            <span className="text-xl font-black tracking-tight">BlazeUI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <NavLink label="Features" />
            <NavLink label="Solutions" />
            <NavLink label="Developers" />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="font-bold text-sm">Login</Button>
            <Button className="rounded-full px-6 font-bold shadow-xl shadow-primary/20">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-wider mb-8"
          >
            <Zap className="w-3 h-3" />
            V2.0 NOW AVAILABLE FOR EVERYONE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            Build apps at the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-indigo-500">speed of thought.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-12"
          >
            BlazeUI is a revolutionary UI collection that gives you the tools to create
            stunning, production-ready interfaces in seconds, not weeks.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="h-14 px-10 rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 group">
              Start Building <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 rounded-2xl font-black text-lg border-2 border-slate-200 dark:border-white/10 flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" /> Watch Preview
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-24 pt-10 border-t border-slate-100 dark:border-white/5"
          >
            <p className="text-xs font-black tracking-[0.2em] uppercase text-slate-400 mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-xl font-black italic">LINEAR</span>
               <span className="text-xl font-black tracking-widest uppercase">vercel</span>
               <span className="text-xl font-black tracking-tighter uppercase">uber</span>
               <span className="text-xl font-black">replicate</span>
               <span className="text-xl font-black italic">RAILWAY</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#020617]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap}
              title="Instant Deployment"
              description="Deploy your UI directly to Vercel or Netlify with zero configuration required."
            />
            <FeatureCard 
              icon={Smartphone}
              title="Truly Responsive"
              description="Every component is mathematically optimized to look perfect on any screen size."
            />
            <FeatureCard 
              icon={Shield}
              title="Enterprise Security"
              description="Built-in accessible components that comply with global security standards."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-primary relative overflow-hidden flex flex-col items-center text-center text-white">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/50 to-transparent" />
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
             
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 relative z-10">Ready to transform your workflow?</h2>
             <p className="text-xl text-primary-foreground/80 font-medium mb-12 max-w-xl relative z-10">
               Join 5,000+ developers building with BlazeUI. No credit card required.
             </p>
             <Button size="lg" variant="secondary" className="h-16 px-12 rounded-2xl font-black text-xl shadow-2xl relative z-10 hover:scale-105 transition-transform">
                Get BlazeUI Free
             </Button>
          </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#020617]">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-white font-black text-[10px]">B</div>
              <span className="font-black tracking-tight">BlazeUI</span>
            </div>
            <p className="text-sm font-medium text-slate-500">© 2025 BlazeUI Technologies Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
               <Globe className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
               <MessageCircle className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
            </div>
         </div>
      </footer>
    </div>
  );
};

const NavLink = ({ label }: { label: string }) => (
  <a href="#" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">{label}</a>
);

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="p-10 rounded-[2.5rem] bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all group scale-100 hover:scale-[1.02] cursor-default">
    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-2xl font-black mb-4">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{description}</p>
  </div>
);

export default LandingPage;
