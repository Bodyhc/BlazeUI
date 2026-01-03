import { SparklesCore } from "@/components/ui/sparkles";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsSparkles() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Sparkles</h1>
        <p className="text-lg text-muted-foreground">
          A customizable background component with floating particles.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { SparklesCore } from "@bodyhc/blazeui";

<div className="h-[20rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
  <div className="w-full absolute inset-0 h-screen">
    <SparklesCore
      id="tsparticlesfullpage"
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={100}
      className="w-full h-full"
      particleColor="#FFFFFF"
    />
  </div>
  <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
    BlazeUI
  </h1>
</div>`}
      >
        <div className="h-[20rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <h1 className="md:text-7xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
            BlazeUI
          </h1>
        </div>
      </ComponentPreview>


    </div>
  );
}
