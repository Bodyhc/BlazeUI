import { ComponentPreview } from "@/components/component-preview";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const DocsScrollArea = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          ScrollArea
        </h1>
        <p className="text-lg text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styling.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="ScrollArea"
          code={`import { ScrollArea, Separator } from "@bodyhc/blazeui";

<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <>
        <div key={tag} className="text-sm">
          {tag}
        </div>
        <Separator className="my-2" />
      </>
    ))}
  </div>
</ScrollArea>`}
        >
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="text-sm">
                    {tag}
                  </div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsScrollArea;
