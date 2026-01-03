import { useState } from "react";
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Fingerprint, 
  Globe, 
  Moon, 
  LogOut,
  Camera,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const SettingsTemplate = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "billing", label: "Billing", icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500/30">
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
           <div>
              <Link to="/templates" className="text-xs font-bold text-slate-500 hover:text-indigo-500 transition-colors uppercase tracking-widest mb-2 block">
                 Back to Dashboard
              </Link>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Settings</h1>
              <p className="text-slate-500 font-medium">Manage your account preferences and team settings.</p>
           </div>
           <div className="flex items-center gap-4">
              <Button variant="outline" className="h-10 border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/5">
                 Cancel
              </Button>
              <Button className="h-10 bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
                 Save Changes
              </Button>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
           {/* Sidebar */}
           <aside className="w-full lg:w-64 space-y-2">
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-2 border border-slate-200 dark:border-white/5 shadow-sm">
                 {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                        activeTab === tab.id 
                          ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" 
                          : "text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200"
                      )}
                    >
                       <tab.icon className={cn("w-5 h-5", activeTab === tab.id && "fill-current")} />
                       {tab.label}
                    </button>
                 ))}
                 
                 <div className="my-2 border-t border-slate-100 dark:border-white/5" />
                 
                 <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
                    <LogOut className="w-5 h-5" />
                    Sign Out
                 </button>
              </div>
           </aside>

           {/* Content */}
           <main className="flex-1 space-y-6">
              <div className="bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-slate-200 dark:border-white/5 shadow-sm space-y-8">
                 <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="relative group cursor-pointer">
                       <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-[#1e293b] shadow-xl overflow-hidden">
                          <img 
                             src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200" 
                             className="w-full h-full object-cover"
                             alt="Avatar"
                          />
                       </div>
                       <div className="absolute bottom-0 right-0 p-2 rounded-full bg-indigo-500 text-white shadow-lg border-2 border-white dark:border-[#1e293b]">
                          <Camera className="w-4 h-4" />
                       </div>
                    </div>
                    <div className="space-y-1">
                       <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                          Johnathan Doe
                       </h2>
                       <p className="text-sm font-medium text-slate-500">Senior Product Designer</p>
                       <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest pt-1">
                          San Francisco, CA <Globe className="w-3 h-3" />
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                       <input 
                         type="text" 
                         defaultValue="Johnathan" 
                         className="w-full h-12 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 px-4 font-bold outline-none focus:border-indigo-500 transition-colors"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                       <input 
                         type="text" 
                         defaultValue="Doe" 
                         className="w-full h-12 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 px-4 font-bold outline-none focus:border-indigo-500 transition-colors"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                       <div className="relative">
                          <input 
                            type="email" 
                            defaultValue="john@blaze.ui" 
                            className="w-full h-12 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 px-4 font-bold outline-none focus:border-indigo-500 transition-colors"
                          />
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 flex items-center gap-1 text-xs font-bold">
                             <Check className="w-3 h-3" /> Verified
                          </div>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Username</label>
                       <div className="flex items-center h-12 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 px-4 font-bold text-slate-400">
                          blaze.bg/
                          <input 
                            type="text" 
                            defaultValue="johndoe" 
                            className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-slate-100 ml-1"
                          />
                       </div>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Bio</label>
                    <textarea 
                      className="w-full h-32 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 p-4 font-medium outline-none focus:border-indigo-500 transition-colors resize-none"
                      defaultValue="A passionate product designer focused on building accessible and delightful digital experiences."
                    />
                 </div>
              </div>

              {/* Preferences */}
              <div className="bg-white dark:bg-[#1e293b] rounded-3xl p-8 border border-slate-200 dark:border-white/5 shadow-sm space-y-6">
                 <h2 className="text-lg font-bold">Preferences</h2>
                 
                 <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-black/20">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                          <Fingerprint className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="font-bold">Two-Factor Auth</div>
                          <div className="text-xs font-medium text-slate-500">Add an extra layer of security to your account</div>
                       </div>
                    </div>
                    <Switch />
                 </div>

                 <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-black/20">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                          <Moon className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="font-bold">Dark Mode</div>
                          <div className="text-xs font-medium text-slate-500">Adjust the appearance of the application</div>
                       </div>
                    </div>
                    <Switch defaultChecked />
                 </div>
              </div>
           </main>
        </div>
      </div>
    </div>
  );
};

export default SettingsTemplate;
