import { WavyBackground } from "@/components/ui/wavy-background";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsWavyBackground() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Wavy Background</h1>
        <p className="text-lg text-muted-foreground">
          A cool background effect with dancing waves.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { WavyBackground } from "@bodyhc/blazeui";

<WavyBackground className="max-w-4xl mx-auto pb-40">
  <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
    Hero waves are cool
  </p>
</WavyBackground>`}
      >
        <div className="relative h-[24rem] overflow-hidden rounded-md border">
            <WavyBackground className="max-w-4xl mx-auto pb-40" containerClassName="h-full">
            <p className="text-2xl md:text-4xl lg:text-5xl text-white font-bold inter-var text-center">
                Hero waves are cool
            </p>
            </WavyBackground>
        </div>
      </ComponentPreview>


    </div>
  );
}
