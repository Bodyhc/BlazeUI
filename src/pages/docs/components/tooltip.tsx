import { ComponentPreview } from "@/components/component-preview";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DocsTooltip = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Tooltip
        </h1>
        <p className="text-lg text-muted-foreground">
          A popup that displays information related to an element when the element
          receives keyboard focus or the mouse hovers over it.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Tooltip"
          code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button
} from "@bodyhc/blazeui";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsTooltip;
