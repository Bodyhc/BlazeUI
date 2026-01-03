import { Vortex } from "@/components/ui/vortex";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsVortex() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Vortex</h1>
        <p className="text-lg text-muted-foreground">
          A captivating, liquid-like particle vortex background.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { Vortex } from "@bodyhc/blazeui";

<div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
  <Vortex
    backgroundColor="black"
    rangeY={800}
    particleCount={500}
    baseHue={120}
    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
  >
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        The hell is this?
      </h2>
      <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
        burned and you&apos;ll have a scar.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
          Order now
        </button>
        <button className="px-4 py-2  text-white ">Watch trailer</button>
      </div>
    </div>
  </Vortex>
</div>`}
      >
        <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
          <Vortex
            backgroundColor="black"
            rangeY={800}
            particleCount={500}
            baseHue={120}
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                The hell is this?
              </h2>
              <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
                burned and you&apos;ll have a scar.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                  Order now
                </button>
                <button className="px-4 py-2  text-white ">Watch trailer</button>
              </div>
            </div>
          </Vortex>
        </div>
      </ComponentPreview>


       <div className="space-y-4">
        <h2 className="text-2xl font-bold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="pb-2 font-medium">Prop</th>
                <th className="pb-2 font-medium">Type</th>
                <th className="pb-2 font-medium">Default</th>
                <th className="pb-2 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y text-muted-foreground">
              <tr>
                <td className="py-2 text-foreground font-mono">particleCount</td>
                <td className="py-2">number</td>
                <td className="py-2">700</td>
                <td className="py-2">Number of particles in the vortex.</td>
              </tr>
              <tr>
                <td className="py-2 text-foreground font-mono">baseHue</td>
                <td className="py-2">number</td>
                <td className="py-2">220</td>
                <td className="py-2">Base hue for particle colors.</td>
              </tr>
              <tr>
                <td className="py-2 text-foreground font-mono">backgroundColor</td>
                <td className="py-2">string</td>
                <td className="py-2">"black"</td>
                <td className="py-2">Background color behind the vortex.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
