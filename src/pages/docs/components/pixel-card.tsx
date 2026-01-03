import { PixelCard } from "@/components/ui/pixel-card";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsPixelCard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Pixel Card</h1>
        <p className="text-lg text-muted-foreground">
          A card with a retro-futuristic pixelated background effect that activates on hover.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { PixelCard } from "@bodyhc/blazeui";

<PixelCard className="h-64 flex items-center justify-center">
  <h2 className="text-2xl font-bold text-white">Default Card</h2>
</PixelCard>`}
      >
        <div className="flex justify-center p-4">
            <PixelCard className="h-64 w-full max-w-sm flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">Default Card</h2>
            </PixelCard>
        </div>
      </ComponentPreview>



      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Variations</h2>
        
        <ComponentPreview
          title="Variants"
          code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <PixelCard variant="blue" className="h-48">
    <h3 className="text-xl font-bold text-blue-100">Blue Variant</h3>
  </PixelCard>

  <PixelCard variant="pink" className="h-48">
    <h3 className="text-xl font-bold text-pink-100">Pink Variant</h3>
  </PixelCard>
</div>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <PixelCard variant="blue" className="h-48 flex flex-col justify-center p-6">
              <h3 className="text-xl font-bold text-blue-100">Blue Variant</h3>
              <p className="text-blue-200/70 text-sm">Perfect for tech-focused content.</p>
            </PixelCard>

            <PixelCard variant="pink" className="h-48 flex flex-col justify-center p-6">
              <h3 className="text-xl font-bold text-pink-100">Pink Variant</h3>
              <p className="text-pink-200/70 text-sm">Adds a vibrant pop of color.</p>
            </PixelCard>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
