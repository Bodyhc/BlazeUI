import Marquee from "@/components/ui/marquee";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsMarquee() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Marquee</h1>
        <p className="text-lg text-muted-foreground">
          A seamless infinite scrolling component.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { Marquee } from "@bodyhc/blazeui";

<Marquee className="[--duration:20s]">
  {Array.from({ length: 5 }).map((_, i) => (
    <div key={i} className="flex h-40 w-60 items-center justify-center rounded-xl bg-muted border">
      Item {i + 1}
    </div>
  ))}
</Marquee>`}
      >
        <Marquee className="[--duration:20s]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex h-24 w-40 items-center justify-center rounded-xl bg-muted border">
              Item {i + 1}
            </div>
          ))}
        </Marquee>
      </ComponentPreview>



      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Variations</h2>
        
        <ComponentPreview
          title="Vertical"
          code={`<Marquee vertical className="[--duration:20s] h-80">
  {Array.from({ length: 5 }).map((_, i) => (
    <div key={i} className="flex h-24 w-40 items-center justify-center rounded-xl bg-muted border">
      Item {i + 1}
    </div>
  ))}
</Marquee>`}
        >
          <div className="h-80 border rounded-lg overflow-hidden w-full flex justify-center">
              <Marquee vertical className="[--duration:20s]">
              {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex h-24 w-40 items-center justify-center rounded-xl bg-muted border my-2">
                  Item {i + 1}
                  </div>
              ))}
              </Marquee>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Reverse"
          code={`<Marquee reverse className="[--duration:20s]">
  {Array.from({ length: 5 }).map((_, i) => (
    <div key={i} className="flex h-24 w-40 items-center justify-center rounded-xl bg-muted border">
      Item {i + 1}
    </div>
  ))}
</Marquee>`}
        >
          <Marquee reverse className="[--duration:20s]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex h-24 w-40 items-center justify-center rounded-xl bg-muted border">
                Item {i + 1}
              </div>
            ))}
          </Marquee>
        </ComponentPreview>
      </div>
    </div>
  );
}
