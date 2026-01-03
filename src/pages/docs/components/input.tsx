import { ComponentPreview } from "@/components/component-preview";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DocsInput = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Input
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a form input field or a component that looks like an input.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Input"
          code={`import { Input, Label } from "@bodyhc/blazeui";

<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsInput;
