import { ComponentPreview } from "@/components/component-preview";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DocsAnimatedNumber = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Animated Number
        </h1>
        <p className="text-lg text-muted-foreground">
          A component that animates a number from one value to another.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Animated Number"
          code={`import { AnimatedNumber, Button } from "@bodyhc/blazeui";
import { useState } from "react";

const [value, setValue] = useState(1000);

<div className="flex flex-col items-center gap-4">
  <AnimatedNumber value={value} className="text-4xl font-bold" />
  <Button onClick={() => setValue(value + 100)}>Add 100</Button>
</div>`}
        >
          <div className="flex flex-col items-center gap-4">
            <AnimatedNumber value={value} className="text-4xl font-bold" />
            <Button onClick={() => setValue(value + 100)}>Add 100</Button>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsAnimatedNumber;
