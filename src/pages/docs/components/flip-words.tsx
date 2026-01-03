import { FlipWords } from "@/components/ui/flip-words";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsFlipWords() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Flip Words</h1>
        <p className="text-lg text-muted-foreground">
          A text effect that flips through a list of words.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { FlipWords } from "@bodyhc/blazeui";

const words = ["better", "cute", "beautiful", "modern"];

<div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
  Build
  <FlipWords words={words} /> <br />
  websites with BlazeUI
</div>`}
      >
        <div className="h-[20rem] flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Build
            <FlipWords words={words} /> <br />
            websites with BlazeUI
          </div>
        </div>
      </ComponentPreview>


    </div>
  );
}
