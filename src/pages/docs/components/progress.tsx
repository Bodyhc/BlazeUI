import { ComponentPreview } from "@/components/component-preview";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const DocsProgress = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Progress
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays an indicator showing the completion progress of a task,
          typically displayed as a progress bar.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Progress"
          code={`import { Progress } from "@bodyhc/blazeui";

<Progress value={33} />`}
        >
          <Progress value={progress} className="w-[60%]" />
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsProgress;
