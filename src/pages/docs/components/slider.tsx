import { ComponentPreview } from "@/components/component-preview";
import { Slider } from "@/components/ui/slider";

const DocsSlider = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Slider
        </h1>
        <p className="text-lg text-muted-foreground">
          An input where the user selects a value from within a given range.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Slider"
          code={`import { Slider } from "@bodyhc/blazeui";

<Slider defaultValue={[33]} max={100} step={1} />`}
        >
          <Slider defaultValue={[33]} max={100} step={1} className="w-[60%]" />
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsSlider;
