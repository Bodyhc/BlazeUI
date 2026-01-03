import { TextReveal } from "@/components/ui/text-reveal";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsTextReveal() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Text Reveal</h1>
        <p className="text-lg text-muted-foreground">
          Animates text character by character or word by word when it comes into view.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { TextReveal } from "@bodyhc/blazeui";

<TextReveal text="BlazeUI is stunning." />`}
      >
        <div className="flex justify-center p-10">
          <TextReveal text="BlazeUI is stunning." />
        </div>
      </ComponentPreview>


      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Variations</h2>
        
        <ComponentPreview
          title="Custom Style"
          code={`<TextReveal 
  text="Build faster with BlazeUI." 
  className="text-2xl text-primary font-serif italic" 
/>`}
        >
          <div className="flex justify-center p-10">
              <TextReveal 
                  text="Build faster with BlazeUI." 
                  className="text-2xl text-primary font-serif italic" 
              />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
