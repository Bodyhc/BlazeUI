import { InteractiveGrid } from "@/components/ui/interactive-grid";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsInteractiveGrid() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Interactive Grid</h1>
        <p className="text-lg text-muted-foreground">
          A grid background that responds to mouse movement, perfect for hero sections or feature cards.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { InteractiveGrid } from "@bodyhc/blazeui";

<InteractiveGrid className="h-64 w-full" />`}
      >
        <div className="relative w-full h-64 overflow-hidden rounded-md border">
          <InteractiveGrid className="absolute inset-0 w-full h-full" squares={[10, 20]} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <h2 className="text-4xl font-bold text-foreground opacity-80">Grid Background</h2>
          </div>
        </div>
      </ComponentPreview>


    </div>
  );
}
