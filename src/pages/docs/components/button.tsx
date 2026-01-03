import { ComponentPreview } from "@/components/component-preview";
import { Button } from "@/components/ui/button";

const DocsButton = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Button
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Button"
          code={`import { Button } from "@bodyhc/blazeui";

<Button>Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
        >
          <div className="flex flex-col gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsButton;
