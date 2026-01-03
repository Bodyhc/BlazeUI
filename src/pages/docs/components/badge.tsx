import { ComponentPreview } from "@/components/component-preview";
import { Badge } from "@/components/ui/badge";

const DocsBadge = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Badge
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a badge or a component that looks like a badge.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Badge"
          code={`import { Badge } from "@bodyhc/blazeui";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
        >
          <div className="flex flex-col gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsBadge;
