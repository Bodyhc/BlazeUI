import { useState } from "react";
import { Lens } from "@/components/ui/lens";
import { ComponentPreview } from "@/components/component-preview";

export default function DocsLens() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Lens</h1>
        <p className="text-lg text-muted-foreground">
          A magnifying lens effect for images or content.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { Lens } from "@bodyhc/blazeui";

<Lens>
  <img
    src="https://images.unsplash.com/photo-1765890053666-c10bc389e97c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Detailed Image"
    className="rounded-2xl w-full h-auto"
  />
</Lens>`}
      >
        <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-10 my-10">
          <Lens hovering={hovering} setHovering={setHovering}>
            <div className="relative rounded-2xl overflow-hidden">
                <img
                src="https://images.unsplash.com/photo-1765890053666-c10bc389e97c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                className="w-full h-auto rounded-2xl"
                />
            </div>
          </Lens>
        </div>
      </ComponentPreview>
    </div>
  );
}
