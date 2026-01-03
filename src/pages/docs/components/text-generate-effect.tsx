import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ComponentPreview } from "@/components/component-preview";


const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows.`;

export default function DocsTextGenerateEffect() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Text Generate Effect</h1>
        <p className="text-lg text-muted-foreground">
          A cool text effect that fades in words one by one.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { TextGenerateEffect } from "@bodyhc/blazeui";

const words = "Oxygen gets you high...";

<TextGenerateEffect words={words} />`}
      >
        <div className="p-4">
            <TextGenerateEffect words={words} />
        </div>
      </ComponentPreview>


    </div>
  );
}
