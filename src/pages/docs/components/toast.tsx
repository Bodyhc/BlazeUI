import { ComponentPreview } from "@/components/component-preview";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const DocsToast = () => {
  const { toast } = useToast();

  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Toast
        </h1>
        <p className="text-lg text-muted-foreground">
          A succinct message that is displayed temporarily.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Toast"
          code={`import { Button, ToastAction, useToast } from "@bodyhc/blazeui";

<Button
  variant="outline"
  onClick={() => {
    toast({
      title: "Scheduled: Catch up ",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: (
        <ToastAction altText="Goto schedule">Undo</ToastAction>
      ),
    })
  }}
>
  Add to calendar
</Button>`}
        >
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <ToastAction altText="Goto schedule">Undo</ToastAction>
                ),
              });
            }}
          >
            Add to calendar
          </Button>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsToast;
