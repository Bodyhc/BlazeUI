import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsNeonGradientCard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Neon Gradient Card</h1>
        <p className="text-lg text-muted-foreground">
          A card component with a glowing, animated neon gradient border.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { NeonGradientCard } from "@bodyhc/blazeui";

<NeonGradientCard className="w-80 h-48 flex items-center justify-center p-6">
  <span className="text-xl font-bold">Neon Card</span>
</NeonGradientCard>`}
      >
        <div className="flex justify-center p-10">
          <NeonGradientCard className="w-80 h-48 flex items-center justify-center p-6">
            <span className="text-xl font-bold">Neon Card</span>
          </NeonGradientCard>
        </div>
      </ComponentPreview>


      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Variations</h2>
        
        <ComponentPreview
          title="Custom Colors"
          code={`<NeonGradientCard 
  className="w-80 h-48 flex items-center justify-center p-6"
  neonColors={{ firstColor: "#ffaa00", secondColor: "#00ff00" }}
>
  <span className="text-xl font-bold">Custom Neon</span>
</NeonGradientCard>`}
        >
          <div className="flex justify-center p-10">
            <NeonGradientCard 
              className="w-80 h-48 flex items-center justify-center p-6"
              neonColors={{ firstColor: "#ffaa00", secondColor: "#00ff00" }}
             >
              <span className="text-xl font-bold">Custom Neon</span>
            </NeonGradientCard>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
