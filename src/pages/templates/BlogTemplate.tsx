import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Search, 
  Menu, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  ChevronRight, 
  Hash,
  Twitter,
  Github,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const BlogTemplate = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-serif">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-[#fafafa]/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 h-16 flex items-center justify-between px-6 md:px-24 font-sans">
        <Link to="/templates" className="flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">
           <ArrowLeft className="w-4 h-4" />
           BACK TO TEMPLATES
        </Link>
        <div className="text-2xl font-black tracking-tighter">
           BLAZE<span className="text-primary">.LOG</span>
        </div>
        <div className="flex items-center gap-4">
           <Search className="w-5 h-5 text-slate-400 cursor-pointer" />
           <Menu className="w-5 h-5 text-slate-400 cursor-pointer" />
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        {/* Header */}
        <header className="space-y-8 mb-16">
           <div className="flex items-center gap-4 text-primary font-sans text-xs font-black tracking-widest uppercase">
              <span className="px-2 py-0.5 bg-primary/10 rounded">ENGINEERING</span>
              <span>OCTOBER 24, 2024</span>
           </div>
           <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] font-sans italic">
             The Future of Reactive <br /> Motion in Modern Web Apps
           </h1>
           <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10 font-sans">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800" />
                 <div>
                    <div className="text-sm font-black uppercase tracking-tight">Alex Rivera</div>
                    <div className="text-xs text-slate-500 font-medium">Lead Frontend Engineer</div>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer transition-colors">
                    <Share2 className="w-4 h-4 text-slate-400" />
                 </div>
                 <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer transition-colors">
                    <Bookmark className="w-4 h-4 text-slate-400" />
                 </div>
              </div>
           </div>
        </header>

        {/* Hero Image */}
        <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-16 relative group cursor-pointer shadow-2xl">
           <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              alt="Code Editor Screen"
              fetchPriority="high"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Content */}
        <article className="prose prose-slate dark:prose-invert max-w-none text-xl leading-relaxed space-y-8">
           <p className="first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
             Designing for rotation and scale in the browser is no longer a privilege of the few. 
             Modern web standard APIs combined with high-performance libraries like Framer Motion 
             have leveled the playing field, allowing developers to craft experiences that were previously 
             the domain of native application developers.
           </p>
           <h2 className="text-3xl font-black font-sans tracking-tight pt-10">The Philosophy of Motion</h2>
           <p>
             Web animation should be semantic. It shouldn't just exist for the sake of flair, 
             but rather to guide the user's focus and provide feedback for their interactions. 
             When we talk about reactive motion, we mean animations that respond not just to events, 
             but to state changes in a holistic manner.
           </p>
           <blockquote className="p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border-l-[6px] border-primary font-medium italic">
             "The best interface is one that feels invisible. Motion is the grease that 
             allows the gears of your UI to transition seamlessly from one state to another."
           </blockquote>
           <p>
             As we look toward the future, the integration of AI-driven animation predictors and 
             further optimizations in GPU-accelerated rendering will push the boundaries of 
             what we expect from our digital environments.
           </p>
        </article>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mt-16 font-sans">
           {["React", "Motion", "UX", "UI", "Engineering", "WebDesign"].map(tag => (
             <div key={tag} className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-500 hover:text-primary hover:border-primary/40 cursor-pointer transition-all flex items-center gap-1.5">
                <Hash className="w-3 h-3" /> {tag}
             </div>
           ))}
        </div>

        <Separator className="my-24" />

        {/* Recommended Reading */}
        <section className="space-y-12 font-sans">
           <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black tracking-tighter italic">Keep Reading</h3>
              <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer group">
                 ALL POSTS <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map(i => (
                <div key={i} className="group cursor-pointer">
                   <div className="aspect-video rounded-2xl overflow-hidden mb-4 border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5">
                       <img 
                         src={`https://images.unsplash.com/photo-${1550000000000 + i * 100000}?auto=format&fit=crop&q=60&w=500`} 
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                         alt="Article Thumbnail"
                         loading="lazy"
                         decoding="async"
                       />
                   </div>
                   <div className="space-y-2">
                      <span className="text-[10px] font-black text-primary tracking-widest uppercase">INSIGHTS</span>
                      <h4 className="text-xl font-black leading-tight group-hover:text-primary transition-colors">
                        Architecting for Scale: A 10-Year journey into the Cloud.
                      </h4>
                      <p className="text-sm text-slate-500 font-medium line-clamp-2">Lessons learned while building one of the world's largest payment gateways.</p>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </main>

      {/* Newsletter */}
      <section className="bg-slate-900 text-white py-24 px-6 md:px-24 text-center space-y-8 font-sans">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold tracking-widest">
            JOIN 40,000+ READERS
         </div>
         <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">Stay Ahead of the Curve</h2>
         <p className="text-slate-400 max-w-xl mx-auto font-medium">
            Get the latest insights on engineering, design, and product directly in your inbox. No spam, ever.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
            <input 
               type="email" 
               placeholder="your@email.com" 
               className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 h-14 outline-none focus:border-primary/50 transition-colors font-medium"
            />
            <Button className="rounded-2xl h-14 px-8 font-bold">Subscribe</Button>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 px-6 md:px-24 font-sans flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="text-2xl font-black tracking-tighter">
           BLAZE<span className="text-primary">.LOG</span>
         </div>
         <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2024 BlazeUI Labs. Crafted with Passion.
         </div>
         <div className="flex gap-6 text-slate-400">
            <Twitter className="w-5 h-5 cursor-pointer hover:text-primary" />
            <Github className="w-5 h-5 cursor-pointer hover:text-primary" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary" />
         </div>
      </footer>
    </div>
  );
};

export default BlogTemplate;
