import { ParticleBackground } from "@/components/ui/particle-background";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsParticleBackground() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Particle Background</h1>
        <p className="text-lg text-muted-foreground">
          A canvas-based particle system that creates a connecting network effect.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { ParticleBackground } from "@bodyhc/blazeui";

<div className="relative h-64 w-full bg-slate-950 overflow-hidden rounded-lg">
  <ParticleBackground className="absolute inset-0" particleCount={40} />
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
     <h2 className="text-2xl font-bold text-white">Particles</h2>
  </div>
</div>`}
      >
        <div className="relative h-64 w-full bg-slate-950 overflow-hidden rounded-lg border">
          <ParticleBackground className="absolute inset-0" particleCount={40} />
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <h2 className="text-2xl font-bold text-white">Particles</h2>
          </div>
        </div>
      </ComponentPreview>


    </div>
  );
}
