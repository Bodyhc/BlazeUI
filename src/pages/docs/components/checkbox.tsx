import { ComponentPreview } from "@/components/component-preview";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const DocsCheckbox = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Checkbox
        </h1>
        <p className="text-lg text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Checkbox"
          code={`import { Checkbox } from "@bodyhc/blazeui";
import { Label } from "@bodyhc/blazeui";

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsCheckbox;
