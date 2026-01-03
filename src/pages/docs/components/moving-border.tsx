import { Button } from "@/components/ui/moving-border";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsMovingBorder() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Moving Border</h1>
        <p className="text-lg text-muted-foreground">
          A button with a continuously moving gradient border.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { MovingBorderButton } from "@bodyhc/blazeui";

<MovingBorderButton
  borderRadius="1.75rem"
  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
>
  Borders are cool
</MovingBorderButton>`}
      >
        <div className="h-[20rem] flex justify-center items-center w-full">
            <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                Borders are cool
            </Button>
        </div>
      </ComponentPreview>


    </div>
  );
}
