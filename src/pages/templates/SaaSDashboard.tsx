import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Activity,
  CreditCard,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SaaSDashboard = () => {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-white/10 bg-white dark:bg-[#020617] h-full flex flex-col pt-8 pb-4">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">B</div>
          <span className="text-xl font-black tracking-tight">Blaze<span className="text-primary">Dash</span></span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <SidebarItem icon={LayoutDashboard} label="Overview" active />
          <SidebarItem icon={Activity} label="Analytics" />
          <SidebarItem icon={Users} label="Customers" />
          <SidebarItem icon={CreditCard} label="Transactions" />
          <SidebarItem icon={Target} label="Goals" />
        </nav>

        <div className="px-4 mt-auto">
          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
             <p className="text-xs font-bold text-slate-500 mb-2">PRO PLAN</p>
             <p className="text-sm font-medium mb-4">You're hitting your limits. Upgrade for more.</p>
             <Button className="w-full h-9 text-xs font-bold" variant="default">Upgrade Now</Button>
          </div>
          <SidebarItem icon={Settings} label="Settings" className="mt-4" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto pt-8 px-10 pb-20">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-black mb-1">Welcome back, Alex</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Here's what's happening with your projects today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input className="pl-10 h-10 w-64 bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 rounded-xl" placeholder="Search..." />
            </div>
            <Button size="icon" variant="outline" className="rounded-xl border-slate-200 dark:border-white/10">
              <Bell className="w-4 h-4" />
            </Button>
            <Avatar className="h-10 w-10 border-2 border-primary/20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           <StatCard title="Total Revenue" value="$128,430" change="+12.5%" icon={BarChart3} trend="up" />
           <StatCard title="Active Users" value="2,420" change="+18.2%" icon={Users} trend="up" />
           <StatCard title="Conversion Rate" value="3.2%" change="-0.4%" icon={Target} trend="down" />
           <StatCard title="Active Sessions" value="1,210" change="+5.7%" icon={Activity} trend="up" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Main Activity Chart Area - Placeholder */}
           <Card className="lg:col-span-2 rounded-[2rem] border-slate-200 dark:border-white/10 shadow-none bg-white dark:bg-white/5 overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between px-8 pt-8">
                 <CardTitle className="text-xl font-bold">Revenue Growth</CardTitle>
                 <Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4"/></Button>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                 <div className="h-64 w-full bg-slate-50 dark:bg-[#020617] rounded-3xl border border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center">
                    <p className="text-slate-400 font-medium">Chart visualization would go here</p>
                 </div>
              </CardContent>
           </Card>

           {/* Recent Activity */}
           <Card className="rounded-[2rem] border-slate-200 dark:border-white/10 shadow-none bg-white dark:bg-white/5">
              <CardHeader className="px-8 pt-8">
                 <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 space-y-6">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                         <Plus className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                         <p className="text-sm font-bold">New user registered</p>
                         <p className="text-xs text-slate-500 font-medium">2 minutes ago</p>
                      </div>
                   </div>
                 ))}
                 <Button variant="link" className="w-full text-primary font-bold">View All Activity</Button>
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  className?: string;
}

const SidebarItem = ({ icon: Icon, label, active, className }: SidebarItemProps) => (
  <div className={cn(
    "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all font-bold text-sm",
    active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white",
    className
  )}>
    <Icon className="w-5 h-5" />
    {label}
  </div>
);

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  trend: "up" | "down";
}

const StatCard = ({ title, value, change, icon: Icon, trend }: StatCardProps) => (
  <Card className="rounded-3xl border-slate-200 dark:border-white/10 shadow-none bg-white dark:bg-white/5 hover:border-primary/20 transition-all">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 rounded-xl bg-slate-100 dark:bg-[#020617] text-slate-600 dark:text-slate-400">
           <Icon className="w-5 h-5" />
        </div>
        <div className={cn(
          "flex items-center gap-1 text-xs font-black rounded-full px-2 py-0.5",
          trend === "up" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
        )}>
          {trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {change}
        </div>
      </div>
      <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">{title}</p>
      <h3 className="text-2xl font-black">{value}</h3>
    </CardContent>
  </Card>
);

export default SaaSDashboard;
