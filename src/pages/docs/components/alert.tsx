import { ComponentPreview } from "@/components/component-preview";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, AlertCircle } from "lucide-react";

const DocsAlert = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Alert
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a callout for user attention.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Alert"
          code={`import { Alert, AlertDescription, AlertTitle } from "@bodyhc/blazeui";
import { Terminal } from "lucide-react";

<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
        >
          <div className="flex flex-col gap-4 w-full">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsAlert;
