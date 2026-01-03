import { Suspense, lazy } from "react";
import { Loader } from "@/components/ui/loader";

// Lazy load sections for better performance
const BasicSection = lazy(() => import("./sections/BasicSection"));
const OverlaySection = lazy(() => import("./sections/OverlaySection"));
const DataSection = lazy(() => import("./sections/DataSection"));
const PremiumSection = lazy(() => import("./sections/PremiumSection"));

const Components = () => {
  return (
    <div className="container py-12 space-y-20">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Components
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Beautifully crafted components built with Radix UI and Tailwind CSS. 
          Each component is modular, accessible, and optimized for performance.
        </p>
      </div>

      <Suspense fallback={
        <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500">
          <Loader />
          <p className="text-sm text-muted-foreground mt-4">Assembling interface...</p>
        </div>
      }>
        <div className="space-y-32">
          {/* Basic Components Section */}
          <section className="space-y-8">
            <div className="space-y-2 border-l-4 border-primary/20 pl-6 py-2">
              <h2 className="text-3xl font-bold tracking-tight">Basic Components</h2>
              <p className="text-muted-foreground">The building blocks for any modern interface.</p>
            </div>
            <BasicSection />
          </section>

          {/* Overlays Section */}
          <section className="space-y-8">
            <div className="space-y-2 border-l-4 border-primary/20 pl-6 py-2">
              <h2 className="text-3xl font-bold tracking-tight">Overlays & Feedback</h2>
              <p className="text-muted-foreground">Interactive elements for focus and notifications.</p>
            </div>
            <OverlaySection />
          </section>

          {/* Data Section */}
          <section className="space-y-8">
            <div className="space-y-2 border-l-4 border-primary/20 pl-6 py-2">
              <h2 className="text-3xl font-bold tracking-tight">Data Display</h2>
              <p className="text-muted-foreground">Techniques for organizing and presenting information.</p>
            </div>
            <DataSection />
          </section>

          {/* Premium Section */}
          <section className="space-y-8 pb-20">
            <div className="space-y-2 border-l-4 border-primary/20 pl-6 py-2">
              <h2 className="text-3xl font-bold tracking-tight">Premium Animations</h2>
              <p className="text-muted-foreground">Advanced effects for a premium user experience.</p>
            </div>
            <PremiumSection />
          </section>
        </div>
      </Suspense>
    </div>
  );
};

export default Components;
