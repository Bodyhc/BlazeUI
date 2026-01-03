import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsSpotlightCard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Spotlight Card</h1>
        <p className="text-lg text-muted-foreground">
          A card that highlights borders and content with a spotlight effect on hover.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { SpotlightCard } from "@bodyhc/blazeui";

<SpotlightCard className="p-6 w-80 h-48 flex flex-col justify-center">
  <h3 className="text-xl font-bold mb-2">Hover me</h3>
  <p className="text-muted-foreground">
    I will reveal a spotlight effect following your cursor.
  </p>
</SpotlightCard>`}
      >
        <div className="flex justify-center p-10">
          <SpotlightCard className="p-6 w-80 h-48 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">Hover me</h3>
            <p className="text-muted-foreground text-sm">
              I will reveal a spotlight effect following your cursor.
            </p>
          </SpotlightCard>
        </div>
      </ComponentPreview>


      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Variations</h2>
        
        <ComponentPreview
          title="Custom Color"
          code={`<SpotlightCard 
  className="p-6 w-80 h-48 flex flex-col justify-center bg-zinc-950 border-zinc-900" 
  spotlightColor="rgba(168, 85, 247, 0.4)"
>
  <h3 className="text-xl font-bold mb-2 text-white">Purple Spotlight</h3>
</SpotlightCard>`}
        >
          <div className="flex justify-center p-10">
             <SpotlightCard 
              className="p-6 w-80 h-48 flex flex-col justify-center bg-zinc-950 border-zinc-900" 
              spotlightColor="rgba(168, 85, 247, 0.4)"
              >
              <h3 className="text-xl font-bold mb-2 text-white">Purple Spotlight</h3>
              <p className="text-zinc-400 text-sm">
                  Custom colors can create unique glow effects.
              </p>
            </SpotlightCard>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
