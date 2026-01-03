import { 
  Search, 
  Menu, 
  Github, 
  Twitter, 
  ChevronRight, 
  ChevronLeft,
  FileText,
  Lightbulb,
  Terminal,
  Layers,
  Component,
  BookOpen
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DocsTemplate = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 h-16">
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-black text-xs">B</div>
              <span className="text-xl font-black tracking-tight hidden md:block">Blaze<span className="text-primary">Docs</span></span>
            </div>
            <div className="hidden lg:flex items-center gap-4 text-sm font-bold text-slate-500">
               <span className="text-primary">Documentation</span>
               <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">Components</span>
               <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">Showcase</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input className="pl-10 h-10 bg-slate-100 dark:bg-white/5 border-none rounded-xl text-sm" placeholder="Search documentation..." />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/10 text-[10px] font-bold text-slate-400 bg-white dark:bg-[#020617]">
                 ⌘ K
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Github className="w-5 h-5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer" />
            <Twitter className="w-5 h-5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer" />
            <Button size="icon" variant="ghost" className="md:hidden"><Menu className="w-5 h-5" /></Button>
          </div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-6 pt-16 flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-72 h-[calc(100vh-4rem)] sticky top-16 border-r border-slate-100 dark:border-white/5 py-10 pr-6 overflow-y-auto">
          <div className="space-y-8">
            <SidebarSection title="Getting Started">
              <SidebarItem icon={Lightbulb} label="Introduction" active />
              <SidebarItem icon={Terminal} label="Installation" />
              <SidebarItem icon={Layers} label="Architecture" />
            </SidebarSection>

            <SidebarSection title="Core Concepts">
              <SidebarItem icon={Component} label="Component Registry" />
              <SidebarItem icon={BookOpen} label="Design System" />
              <SidebarItem icon={FileText} label="Best Practices" />
            </SidebarSection>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-10 md:px-12 max-w-4xl mx-auto">
           <div className="text-xs font-black text-primary tracking-widest uppercase mb-4">Documentation / Getting Started</div>
           <h1 className="text-5xl font-black mb-6 tracking-tight">Introduction</h1>
           <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-10">
              BlazeUI is a modern, high-performance toolkit for building professional 
              documentation and dashboard sites. It's built with accessibility, speed, 
              and design consistency at its core.
           </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <FeatureBox 
                title="Rapid Setup" 
                desc="Initialize your project in under 60 seconds." 
              />
              <FeatureBox 
                title="Themable UI" 
                desc="Full control over colors, spacing, and typography." 
              />
           </div>

           <section className="space-y-6 mb-12">
              <h2 className="text-3xl font-black tracking-tight">Why BlazeUI?</h2>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                 Most UI libraries focus either on simplicity or power. BlazeUI is 
                 uniquely designed to provide both. By using modular architecture 
                 and lazy-loading patterns, we ensure that your site stays fast 
                 regardless of its size.
              </p>
           </section>

           {/* Code Example Preview */}
           <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-900 overflow-hidden mb-12 shadow-2xl">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                 <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                 </div>
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">installation.sh</span>
              </div>
              <div className="p-8 font-mono text-sm text-slate-300 leading-relaxed">
                 <div className="flex gap-4">
                    <span className="text-slate-600 select-none">1</span>
                    <span><span className="text-primary">npm install</span> blaze-ui@latest</span>
                 </div>
                 <div className="flex gap-4">
                    <span className="text-slate-600 select-none">2</span>
                    <span><span className="text-slate-500"># Or using yarn</span></span>
                 </div>
                 <div className="flex gap-4">
                    <span className="text-slate-600 select-none">3</span>
                    <span><span className="text-primary">yarn add</span> blaze-ui</span>
                 </div>
              </div>
           </div>

           {/* Navigation Pager */}
           <div className="flex items-center justify-between pt-10 border-t border-slate-100 dark:border-white/5 mt-20">
              <div className="flex flex-col gap-1 items-start text-left">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Previous</span>
                 <a href="#" className="flex items-center gap-2 text-lg font-black text-primary group">
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Architecture
                 </a>
              </div>
              <div className="flex flex-col gap-1 items-end text-right">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Next</span>
                 <a href="#" className="flex items-center gap-2 text-lg font-black text-primary group">
                    Installation
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>
           </div>
        </main>

        {/* Right TOC */}
        <aside className="hidden xl:block w-64 h-[calc(100vh-4rem)] sticky top-16 border-l border-slate-100 dark:border-white/5 py-10 pl-8 overflow-y-auto">
           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">On this page</h4>
           <nav className="space-y-4 text-sm font-bold">
              <a href="#" className="block text-primary">Overview</a>
              <a href="#" className="block text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Design Goals</a>
              <a href="#" className="block text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Performance</a>
              <a href="#" className="block text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Accessibility</a>
           </nav>
        </aside>
      </div>
    </div>
  );
};

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => (
  <div className="space-y-4">
    <h4 className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{title}</h4>
    <div className="space-y-1">{children}</div>
  </div>
);

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const SidebarItem = ({ icon: Icon, label, active }: SidebarItemProps) => (
  <div className={cn(
    "flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-all font-bold text-sm",
    active 
      ? "bg-primary/10 text-primary border border-primary/20" 
      : "text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
  )}>
    <Icon className="w-4 h-4" />
    {label}
  </div>
);

interface FeatureBoxProps {
  title: string;
  desc: string;
}

const FeatureBox = ({ title, desc }: FeatureBoxProps) => (
  <div className="p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5">
     <h3 className="text-xl font-black mb-2">{title}</h3>
     <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{desc}</p>
  </div>
);

export default DocsTemplate;
