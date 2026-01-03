import { ComponentPreview } from "@/components/component-preview";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const DocsTextarea = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Textarea
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a form textarea or a component that looks like a textarea.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Textarea"
          code={`import { Textarea, Label } from "@bodyhc/blazeui";

<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`}
        >
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsTextarea;
