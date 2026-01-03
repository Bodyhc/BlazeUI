import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Chrome, 
  ArrowLeft, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Terminal,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { Link } from "react-router-dom";

const AuthTemplate = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[#020617] overflow-hidden selection:bg-primary/30">
      {/* Left Side - Visual */}
      <div className="hidden lg:block relative bg-slate-900 overflow-hidden">
         <Vortex
           backgroundColor="black"
           rangeY={400}
           particleCount={500}
           baseHue={220}
           className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
         >
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="text-center space-y-8 relative z-10"
           >
              <div className="w-20 h-20 rounded-3xl bg-primary/20 backdrop-blur-3xl border border-white/10 flex items-center justify-center text-primary mx-auto shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                 <Terminal className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-black text-white tracking-widest italic">BLAZE ENGINE</h1>
              <p className="text-slate-400 max-w-md mx-auto font-medium text-lg leading-relaxed">
                 The most advanced development environment for building and scaling 
                 the next generation of web applications.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-10">
                 <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-xl space-y-3 text-left">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    <div className="text-white font-bold text-sm">Enterprise Grade</div>
                    <div className="text-slate-500 text-xs">Military-grade protection for your data and infra.</div>
                 </div>
                 <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-xl space-y-3 text-left">
                    <Zap className="w-6 h-6 text-amber-500" />
                    <div className="text-white font-bold text-sm">Instant Deploy</div>
                    <div className="text-slate-500 text-xs">Zero-config deployments to the global edge.</div>
                 </div>
              </div>
           </motion.div>
         </Vortex>
      </div>

      {/* Right Side - Form */}
      <div className="relative flex flex-col justify-center px-8 md:px-24 py-12">
         {/* Top Actions */}
         <div className="absolute top-8 left-8 lg:left-24">
            <Link to="/templates" className="p-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2 group">
               <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
         </div>

         <div className="max-w-md w-full mx-auto space-y-10">
            <div className="space-y-4">
               <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white">Welcome back</h2>
               <p className="text-slate-500 font-medium">Please enter your details to sign in to your dashboard.</p>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
               <Button variant="outline" className="h-14 rounded-2xl border-2 flex items-center gap-3 font-bold hover:bg-slate-50 dark:hover:bg-white/5">
                  <Chrome className="w-5 h-5" /> Google
               </Button>
               <Button variant="outline" className="h-14 rounded-2xl border-2 flex items-center gap-3 font-bold hover:bg-slate-50 dark:hover:bg-white/5">
                  <Github className="w-5 h-5" /> GitHub
               </Button>
            </div>

            <div className="relative">
               <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200 dark:border-white/10" />
               </div>
               <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-[#020617] px-4 text-slate-400 font-black tracking-widest">or continue with</span>
               </div>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <div className="relative group">
                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                     <input 
                        type="email" 
                        placeholder="name@company.com" 
                        className="w-full h-14 pl-12 pr-4 rounded-2xl bg-slate-50 dark:bg-white/5 border-2 border-transparent focus:border-primary/50 outline-none transition-all font-medium"
                     />
                  </div>
               </div>

               <div className="space-y-2">
                  <div className="flex items-center justify-between">
                     <label className="text-xs font-black uppercase tracking-widest text-slate-400">Password</label>
                     <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
                  </div>
                  <div className="relative group">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                     <input 
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••" 
                        className="w-full h-14 pl-12 pr-12 rounded-2xl bg-slate-50 dark:bg-white/5 border-2 border-transparent focus:border-primary/50 outline-none transition-all font-medium"
                     />
                     <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                     >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                     </button>
                  </div>
               </div>

               <Button className="w-full h-14 rounded-2xl text-lg font-black tracking-tight shadow-xl shadow-primary/20">
                  Sign In to Dashboard
               </Button>
            </form>

            <p className="text-center text-sm font-medium text-slate-500">
               Don't have an account? <a href="#" className="text-primary font-bold hover:underline">Create an account</a>
            </p>
         </div>

         {/* Footer Links */}
         <div className="mt-20 flex gap-6 justify-center text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-slate-600 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 dark:hover:text-white transition-colors">Help Center</a>
         </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
