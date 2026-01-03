import React from "react";
import {
  LayoutDashboard,
  Globe,
  Briefcase,
  FileText,
  ArrowRight,
  Layers,
  Search,
  Settings,
  Bell,
  BarChart3,
  Code2,
  ExternalLink,
  Users,
  ShieldCheck,
  ShoppingBag,
  Settings as SettingsIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DashboardPreview = () => (
    <div className="w-full h-full bg-white dark:bg-[#0f172a] rounded-2xl border-2 border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col">
       <div className="h-12 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#020617] flex items-center justify-between px-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="w-32 h-6 bg-slate-200 dark:bg-slate-800 rounded-full" />
          <div className="flex gap-2">
             <Bell className="w-4 h-4 text-slate-400" />
             <Settings className="w-4 h-4 text-slate-400" />
          </div>
       </div>
       <div className="flex-1 flex">
          <div className="w-16 h-full border-r border-slate-200 dark:border-white/10 flex flex-col items-center py-6 gap-6">
             <div className="w-8 h-8 rounded-xl bg-primary shadow-lg shadow-primary/20" />
             {[Layers, BarChart3, Users, Briefcase].map((Icon, i) => (
               <Icon key={i} className="w-5 h-5 text-slate-400" />
             ))}
          </div>
          <div className="flex-1 p-6 space-y-6 overflow-hidden">
             <div className="grid grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                   <div key={i} className="h-24 rounded-2xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-[#020617]/50 p-4">
                      <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-800 rounded mb-4" />
                      <div className="h-6 w-3/4 bg-primary/20 dark:bg-primary/10 rounded-lg" />
                   </div>
                ))}
             </div>
             <div className="flex-1 h-32 rounded-3xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-[#020617]/50 p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded" />
                    <div className="h-6 w-20 bg-emerald-500/20 rounded-full" />
                </div>
                <div className="flex items-end gap-1 h-12">
                   {[40, 70, 45, 90, 65, 80, 55].map((hVal, i) => (
                     <div key={i} style={{ height: hVal + "%" }} className="flex-1 bg-primary/30 rounded-t-sm" />
                   ))}
                </div>
             </div>
          </div>
       </div>
    </div>
);

const LandingPagePreview = () => (
    <div className="w-full h-full bg-white dark:bg-[#020617] rounded-3xl border-2 border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-12 gap-6 relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent)]" />
       <div className="absolute top-0 w-full h-14 border-b border-slate-100 dark:border-white/5 flex items-center justify-between px-8">
          <div className="w-20 h-4 bg-slate-100 dark:bg-slate-900 rounded" />
          <div className="flex gap-4">
             <div className="w-10 h-1 bg-slate-100 dark:bg-slate-900 rounded" />
             <div className="w-10 h-1 bg-slate-100 dark:bg-slate-900 rounded" />
          </div>
       </div>
       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-[10px] font-bold">
          NEW FEATURES RELEASED
       </div>
       <div className="space-y-3 text-center">
          <div className="h-6 w-56 bg-slate-900 dark:bg-white rounded-full mx-auto" />
          <div className="h-4 w-40 bg-slate-400 dark:bg-slate-600 rounded-full mx-auto" />
       </div>
       <div className="flex gap-3 mt-4">
          <div className="h-10 w-32 bg-primary rounded-2xl shadow-xl shadow-primary/20 border-t border-white/20" />
          <div className="h-10 w-10 border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center">
             <Globe className="w-4 h-4 text-slate-400" />
          </div>
       </div>
    </div>
);

const DocsPreview = () => (
    <div className="w-full h-full bg-white dark:bg-[#0f172a] rounded-2xl border-2 border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
       <div className="w-32 bg-slate-50 dark:bg-[#020617] border-r border-slate-200 dark:border-white/10 p-5 space-y-6">
          <div className="h-3 w-16 bg-primary/20 rounded-full" />
          <div className="space-y-3">
             {[...Array(5)].map((_, i) => (
                <div key={i} className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded" />
             ))}
          </div>
          <div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded-full pt-4 border-t border-slate-100 dark:border-white/5" />
          <div className="space-y-3">
             {[...Array(3)].map((_, i) => (
                <div key={i} className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded" />
             ))}
          </div>
       </div>
       <div className="flex-1 p-8 space-y-6">
          <div className="flex items-center justify-between">
             <Search className="w-4 h-4 text-slate-300" />
             <div className="w-24 h-4 bg-slate-100 dark:bg-slate-800 rounded" />
          </div>
          <div className="space-y-4">
             <div className="h-8 w-48 bg-slate-950 dark:bg-white rounded-xl" />
             <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded" />
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded" />
                <div className="h-2 w-2/3 bg-slate-100 dark:bg-slate-800 rounded" />
             </div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-900 border border-white/5 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-3xl rounded-full" />
             <div className="flex gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-400/50" />
                <div className="w-2 h-2 rounded-full bg-amber-400/50" />
             </div>
             <div className="h-2 w-1/3 bg-slate-700 rounded mb-2" />
             <div className="h-2 w-full bg-slate-800 rounded" />
          </div>
       </div>
    </div>
);

const PortfolioPreview = () => (
    <div className="w-full h-full bg-white dark:bg-[#030712] rounded-2xl border-2 border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 gap-4">
       <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-primary/20" />
       <div className="h-4 w-32 bg-slate-900 dark:bg-white rounded-full" />
       <div className="h-2 w-48 bg-slate-200 dark:bg-slate-800 rounded-full" />
       <div className="grid grid-cols-3 gap-2 w-full mt-4">
          {[...Array(3)].map((_, i) => (
             <div key={i} className="aspect-square bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 rounded-xl" />
          ))}
       </div>
    </div>
);

const BlogPreview = () => (
    <div className="w-full h-full bg-[#fafafa] dark:bg-[#020617] rounded-2xl border-2 border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden p-8 space-y-6">
       <div className="flex items-center gap-2">
          <div className="h-2 w-12 bg-primary/20 rounded-full" />
          <div className="h-2 w-20 bg-slate-200 dark:bg-slate-800 rounded-full" />
       </div>
       <div className="space-y-3">
          <div className="h-6 w-full bg-slate-900 dark:bg-white rounded-lg" />
          <div className="h-6 w-2/3 bg-slate-900 dark:bg-white rounded-lg" />
       </div>
       <div className="aspect-[21/9] bg-slate-100 dark:bg-slate-800 rounded-2xl" />
       <div className="space-y-2">
          <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full" />
          <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full" />
          <div className="h-1.5 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-full" />
       </div>
    </div>
);

const AuthPreview = () => (
    <div className="w-full h-full bg-white dark:bg-[#020617] rounded-2xl border-2 border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex">
       <div className="w-1/3 bg-slate-900 dark:bg-black p-4 flex flex-col gap-2">
          <div className="w-6 h-6 rounded bg-primary/20" />
          <div className="flex-1" />
          <div className="h-1 w-full bg-white/10 rounded" />
          <div className="h-1 w-2/3 bg-white/10 rounded" />
       </div>
       <div className="flex-1 p-8 space-y-4">
          <div className="h-4 w-24 bg-slate-900 dark:bg-white rounded" />
          <div className="h-2 w-32 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-10 w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl" />
          <div className="h-10 w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl" />
          <div className="h-10 w-full bg-primary rounded-xl" />
       </div>
    </div>
);

const EcommercePreview = () => (
   <div className="w-full h-full bg-white dark:bg-[#020617] rounded-2xl border-2 border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex p-6 gap-6">
      <div className="w-1/2 h-full bg-slate-100 dark:bg-slate-800 rounded-xl" />
      <div className="w-1/2 space-y-4">
         <div className="h-6 w-3/4 bg-slate-900 dark:bg-white rounded" />
         <div className="h-4 w-1/4 bg-rose-500 rounded" />
         <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded" />
         <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded" />
         <div className="h-10 w-full bg-rose-500 rounded-lg mt-4" />
      </div>
   </div>
);

const SettingsPreview = () => (
   <div className="w-full h-full bg-slate-50 dark:bg-[#0f172a] rounded-2xl border-2 border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex">
      <div className="w-16 bg-white dark:bg-[#1e293b] border-r border-slate-200 dark:border-white/5 flex flex-col items-center py-4 gap-4">
         <div className="w-8 h-8 rounded-full bg-indigo-500/20" />
         <div className="w-4 h-4 rounded bg-slate-200 dark:bg-slate-700" />
         <div className="w-4 h-4 rounded bg-slate-200 dark:bg-slate-700" />
      </div>
      <div className="flex-1 p-6 space-y-4">
         <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="space-y-2">
               <div className="h-3 w-32 bg-slate-900 dark:bg-white rounded" />
               <div className="h-2 w-20 bg-slate-400 dark:bg-slate-600 rounded" />
            </div>
         </div>
         <div className="h-8 w-full bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5" />
         <div className="h-8 w-full bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5" />
      </div>
   </div>
);

const items = [
  {
    title: "Modern SaaS Dashboard",
    description: "A powerhouse of data visualization and management. Featuring modular widgets, advanced CRM views, and a fully reactive notification system.",
    preview: <DashboardPreview />,
    icon: <LayoutDashboard className="h-7 w-7" />,
    link: "/templates/saas-dashboard",
    sourceCode: `// SaaSDashboard Template for BlazeUI
import { LayoutDashboard, Users, Activity, Settings } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-black">
      <aside className="w-64 border-r p-6">
        <h2 className="text-xl font-bold mb-8 italic">BlazeDash</h2>
        <nav className="space-y-2">
          <NavItem icon={LayoutDashboard} label="Overview" active />
          <NavItem icon={Activity} label="Analytics" />
          <NavItem icon={Users} label="Customers" />
          <NavItem icon={Settings} label="Settings" />
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Good morning!</h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg">New Project</button>
        </header>
        <div className="grid grid-cols-3 gap-6">
           <Card title="Traffic" value="2.4k" />
           <Card title="Revenue" value="$12,840" />
           <Card title="Conversion" value="3.2%" />
        </div>
      </main>
    </div>
  );
}`
  },
  {
    title: "Premium Landing Page",
    description: "Built for billion-dollar companies. Modern glassmorphism aesthetics with abstract background effects and high-fidelity component layouts.",
    preview: <LandingPagePreview />,
    icon: <Globe className="h-7 w-7" />,
    link: "/templates/landing-page",
    sourceCode: `// LandingPage Template for BlazeUI
import { ArrowRight, Zap, Globe } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <nav className="h-16 border-b flex items-center justify-between px-8">
        <span className="font-bold">BlazeUI</span>
        <button className="bg-primary text-white px-6 py-2 rounded-full">Sign Up</button>
      </nav>
      <section className="py-20 text-center">
        <h1 className="text-6xl font-black mb-6">Build Faster Than Ever.</h1>
        <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
          The ultimate component library for high-performing teams.
        </p>
        <button className="bg-primary text-white text-lg px-8 py-4 rounded-2xl flex items-center gap-2 mx-auto">
          Get Started <ArrowRight />
        </button>
      </section>
    </div>
  );
}`
  },
   {
     title: "Product Documentation",
     description: "The ultimate documentation starter. Includes multi-level navigation, floating command search, and beautiful code playground integration.",
     preview: <DocsPreview />,
     icon: <FileText className="h-7 w-7" />,
     link: "/templates/docs-site",
     sourceCode: `// DocsTemplate for BlazeUI... (Truncated for space)`
   },
   {
    title: "Developer Portfolio",
    description: "A high-fidelity personal portfolio for world-class developers. Features project spotlights, intersection-aware animations, and dark-mode optimization.",
    preview: <PortfolioPreview />,
    icon: <Briefcase className="h-7 w-7" />,
    link: "/templates/portfolio",
    sourceCode: `// PortfolioTemplate for BlazeUI... (Truncated for space)`
  },
  {
    title: "Premium Personal Blog",
    description: "Content-centric design with exceptional typography. Includes reading progress indicators, newsletter integration, and SEO-optimized structures.",
    preview: <BlogPreview />,
    icon: <Layers className="h-7 w-7" />,
    link: "/templates/blog",
    sourceCode: `// BlogTemplate for BlazeUI... (Truncated for space)`
  },
  {
    title: "Auth & Onboarding",
    description: "Bulletproof authentication flows with stunning abstract backgrounds. Ready-to-use login, signup, and reset templates for your next app.",
    preview: <AuthPreview />,
    icon: <ShieldCheck className="h-7 w-7" />,
    link: "/templates/auth",
    sourceCode: `// AuthTemplate for BlazeUI... (Truncated for space)`
  },
  {
    title: "E-Commerce Product",
    description: "High-conversion product detail page with image gallery, sticky cart, and review sections. Optimized for speed and mobile responsiveness.",
    preview: <EcommercePreview />,
    icon: <ShoppingBag className="h-7 w-7" />,
    link: "/templates/ecommerce",
    sourceCode: `// EcommerceTemplate for BlazeUI... (Truncated for space)`
  },
  {
    title: "Settings Dashboard",
    description: "Comprehensive settings management interface with sidebar navigation, profile forms, and preference toggles. Clean and organized layout.",
    preview: <SettingsPreview />,
    icon: <SettingsIcon className="h-7 w-7" />,
    link: "/templates/settings",
    sourceCode: `// SettingsTemplate for BlazeUI... (Truncated for space)`
  },
];

const Templates = () => {
  const [sourceModalOpen, setSourceModalOpen] = React.useState(false);
  const [currentSource, setCurrentSource] = React.useState<{ title: string; code: string } | null>(null);

  const handleViewSource = (item: typeof items[0]) => {
     setCurrentSource({
        title: item.title,
        code: item.sourceCode
     });
     setSourceModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            PRODUCTION READY TEMPLATES
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-7xl mb-8 leading-[1.1]"
          >
            Zero to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-indigo-500">Live</span> in Minutes
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl leading-relaxed text-slate-600 dark:text-slate-400 font-medium"
          >
            Kickstart your next big idea with our production-ready, beautifully crafted 
            templates. Optimized for DX, performance, and conversion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={cn(
                "group relative bg-white dark:bg-[#0f172a]/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col",
                i === 0 && "lg:col-span-2"
              )}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-50 dark:bg-[#020617] group-hover:bg-white dark:group-hover:bg-[#0f172a] transition-colors duration-500">
                {/* Preview Overlay */}
                <div className="absolute inset-x-0 bottom-0 py-8 px-8 bg-gradient-to-t from-slate-50 dark:from-[#020617] to-transparent z-10 opacity-60 group-hover:opacity-0 transition-opacity" />
                
                <div className="w-full h-full p-6 flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                  {item.preview}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-primary/80 dark:bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 z-20">
                    <Link to={item.link}>
                        <Button variant="secondary" className="rounded-full px-8 h-12 font-bold shadow-2xl flex items-center gap-2">
                             Live Preview <ExternalLink className="w-4 h-4" />
                        </Button>
                    </Link>
                    <Button 
                      onClick={() => handleViewSource(item)}
                      variant="ghost" 
                      className="text-white hover:bg-white/10 rounded-full px-8 h-12 font-bold flex items-center gap-2"
                    >
                         View Source <Code2 className="w-4 h-4" />
                    </Button>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="hidden sm:block">
                     <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-primary text-white">
                       PRO
                     </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 flex-1 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
                    <div className="flex -space-x-3 overflow-hidden">
                       {[1, 2, 3].map((_, idx) => (
                         <div key={idx} className="inline-block h-8 w-8 rounded-full ring-4 ring-white dark:ring-[#0f172a] bg-slate-200 dark:bg-slate-800" />
                       ))}
                       <div className="flex items-center justify-center h-8 px-2 rounded-full ring-4 ring-white dark:ring-[#0f172a] bg-primary/20 text-[10px] font-bold text-primary">
                         +24
                       </div>
                    </div>
                    
                    <button className="flex items-center gap-2 text-sm font-black text-primary hover:gap-3 transition-all">
                      GET TEMPLATE <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={sourceModalOpen} onOpenChange={setSourceModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col p-0 border-none bg-slate-900 rounded-[2rem]">
          <DialogHeader className="p-8 border-b border-white/5 bg-slate-950/50">
            <DialogTitle className="text-2xl font-black text-white flex items-center gap-3">
               <div className="p-2 rounded-xl bg-primary/20 text-primary">
                  <Code2 className="w-6 h-6" />
               </div>
               {currentSource?.title} Source Code
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto p-8 font-mono text-sm text-slate-300 bg-slate-900 leading-relaxed">
             <div className="flex items-center justify-between mb-6 p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">template.tsx</span>
                <Button 
                   size="sm" 
                   className="h-8 rounded-lg font-bold"
                   onClick={() => {
                      navigator.clipboard.writeText(currentSource?.code || "");
                   }}
                >
                   Copy Code
                </Button>
             </div>
             <pre className="whitespace-pre-wrap">
                {currentSource?.code}
             </pre>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Templates;
