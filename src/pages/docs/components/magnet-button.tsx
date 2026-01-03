import { MagnetButton } from "@/components/ui/magnet-button";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsMagnetButton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Magnet Button</h1>
        <p className="text-lg text-muted-foreground">
          A button that magnetically attracts to the cursor movement, providing a premium feel.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { MagnetButton } from "@bodyhc/blazeui";

<MagnetButton>
  Hover Me
</MagnetButton>`}
      >
        <div className="flex justify-center p-10">
          <MagnetButton>
            Hover Me
          </MagnetButton>
        </div>
      </ComponentPreview>
      


      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Notes</h2>
        <p className="text-sm text-muted-foreground">
            Ensure you have <code>framer-motion</code> installed for the magnet effect to work smoothly.
        </p>
      </div>
    </div>
  );
}
