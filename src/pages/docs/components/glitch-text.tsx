import { ComponentPreview } from "@/components/component-preview";
import { GlitchText } from "@/components/ui/glitch-text";


export default function DocsGlitchText() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Glitch Text</h1>
        <p className="text-lg text-muted-foreground">
          A text component with a cyberpunk-style glitch animation.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { GlitchText } from "@bodyhc/blazeui";

<div className="text-4xl font-bold">
  <GlitchText text="CYBERPUNK" />
</div>`}
      >
        <div className="flex items-center justify-center h-40">
          <div className="text-4xl font-bold">
            <GlitchText text="CYBERPUNK" />
          </div>
        </div>
      </ComponentPreview>


    </div>
  );
}
