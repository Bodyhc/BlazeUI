import { ComponentPreview } from "@/components/component-preview";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const DocsSwitch = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Switch
        </h1>
        <p className="text-lg text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Switch"
          code={`import { Switch, Label } from "@bodyhc/blazeui";

<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsSwitch;
