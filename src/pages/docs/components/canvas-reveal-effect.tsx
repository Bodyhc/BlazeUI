import { CanvasRevealEffect, CanvasCard } from "@/components/ui/canvas-reveal-effect";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsCanvasRevealEffect() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Canvas Reveal Effect</h1>
        <p className="text-lg text-muted-foreground">
          A beautiful canvas-based reveal effect that follows the mouse cursor.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { CanvasRevealEffect, CanvasCard } from "@bodyhc/blazeui";

<div className="h-[20rem] flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
  <CanvasCard title="Sheetal" icon={<div className="h-4 w-4 rounded-full bg-blue-500" />}>
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-emerald-900"
      colors={[
        [0, 255, 255],
        [232, 121, 249],
      ]}
      dotSize={3}
    />
  </CanvasCard>
</div>`}
      >
        <div className="h-[20rem] flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
          <CanvasCard title="Sheetal" icon={<div className="h-4 w-4 rounded-full bg-blue-500" />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-emerald-900"
              colors={[
                [0, 255, 255],
                [232, 121, 249],
              ]}
              dotSize={3}
            />
          </CanvasCard>
        </div>
      </ComponentPreview>


    </div>
  );
}
