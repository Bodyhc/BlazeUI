import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Pricing = () => {
  return (
    <div className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base font-semibold leading-7 text-primary"
          >
            Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Growth</span> Plan
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl leading-8 text-muted-foreground"
          >
            Start for free and scale as you grow. No hidden fees, just pure productivity.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              <Card className={cn(
                "h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-black/[0.08] dark:border-white/[0.08] bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden group",
                plan.featured && "border-primary/50 shadow-xl shadow-primary/10 bg-white dark:bg-zinc-900"
              )}>
                {plan.featured && (
                  <div className="absolute top-4 right-4 animate-bounce">
                    <Badge className="bg-primary text-white border-0 shadow-lg shadow-primary/30">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="p-8 pb-4">
                  <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <plan.icon className="size-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tighter text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-lg font-medium text-muted-foreground">/month</span>
                  </div>
                </CardHeader>

                <CardContent className="p-8 pt-6 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                        <div className="size-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                          <Check className="size-3 stroke-[3]" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-8 pt-0">
                  <Button 
                    variant={plan.featured ? "default" : "outline"} 
                    className={cn(
                      "w-full h-12 rounded-xl text-base font-bold transition-all",
                      plan.featured ? "shadow-lg shadow-primary/25" : "hover:bg-primary/5"
                    )}
                  >
                    Get Started <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const plans = [
  {
    name: "Starter",
    description: "Perfect for students and hobbyists just getting started.",
    price: "0",
    features: [
      "Access to basic components",
      "Community support",
      "2 active projects",
      "Standard exports"
    ],
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    featured: false
  },
  {
    name: "Pro",
    description: "The dream setup for professional developers and startups.",
    price: "29",
    features: [
      "All premium components",
      "Priority Discord support",
      "Unlimited projects",
      "Figma design files",
      "Advanced animations"
    ],
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    featured: true
  },
  {
    name: "Team",
    description: "Scale your design system across your entire organization.",
    price: "99",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom component requests",
      "Team-wide library",
      "SSO & Security"
    ],
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    featured: false
  }
];

export default Pricing;
