import { Boxes } from "@/components/ui/background-boxes";
import { ComponentPreview } from "@/components/component-preview";

import { cn } from "@/lib/utils";

export default function DocsBackgroundBoxes() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Background Boxes</h1>
        <p className="text-lg text-muted-foreground">
          A grid of animated boxes that move on hover.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { Boxes, cn } from "@bodyhc/blazeui";

<div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
  <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
  <Boxes />
  <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
    Tailwind is Awesome
  </h1>
</div>`}
      >
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Tailwind is Awesome
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Framer motion is the best animation library ngl
          </p>
        </div>
      </ComponentPreview>


    </div>
  );
}
