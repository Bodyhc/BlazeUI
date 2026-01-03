import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {  Rocket, Component, PenTool, Layout as LayoutIcon } from "lucide-react";

const About = () => {
  return (
    <div className="container py-24 space-y-20">
      {/* Hero Section */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
          About BlazeUI
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          BlazeUI is a modern, accessible, and high-performance React component library designed to help developers build beautiful web applications with speed and confidence.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We believe that building great UI shouldn't be a struggle. Our mission is to provide a comprehensive set of polished, production-ready components that just work, allowing you to focus on your product's unique logic and value.
              </p>
              <Button asChild>
                <Link to="/docs">Read the Docs</Link>
              </Button>
           </div>
           <div className="bg-muted p-8 rounded-2xl flex items-center justify-center min-h-[300px]">
               <div className="text-center">
                   <div className="text-6xl font-bold text-primary mb-2">100+</div>
                   <div className="text-xl">Components & Templates</div>
               </div>
           </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-5xl">
         <h2 className="text-3xl font-bold text-center mb-12">Why Choose BlazeUI?</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card border rounded-xl p-6">
                <Rocket className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Performance First</h3>
                <p className="text-sm text-muted-foreground">Optimized for speed with minimal bundle size impact.</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
                <Component className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Accessible</h3>
                <p className="text-sm text-muted-foreground">Built on Radix UI primitives for WAI-ARIA compliance.</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
                <PenTool className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Customizable</h3>
                <p className="text-sm text-muted-foreground">Fully styled with Tailwind CSS, easy to theme and extend.</p>
            </div>
             <div className="bg-card border rounded-xl p-6">
                <LayoutIcon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Ready Templates</h3>
                <p className="text-sm text-muted-foreground">Jumpstart your project with our pre-built page templates.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;
