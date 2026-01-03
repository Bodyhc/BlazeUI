import { TracingBeam } from "@/components/ui/tracing-beam";
import { ComponentPreview } from "@/components/component-preview";
import { twMerge } from "tailwind-merge";


export default function DocsTracingBeam() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Tracing Beam</h1>
        <p className="text-lg text-muted-foreground">
          A beam of light that follows your scroll position, guiding you through the content.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { TracingBeam } from "@bodyhc/blazeui";

<TracingBeam className="px-6">
  <div className="max-w-2xl mx-auto antialiased pt-4 relative">
    {content.map((item, index) => (
      <div key={index} className="mb-10">
        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
          {item.badge}
        </h2>
        <p className="text-xl font-bold mb-4">{item.title}</p>
        <div className="text-sm prose prose-sm dark:prose-invert">
          {item.description}
        </div>
      </div>
    ))}
  </div>
</TracingBeam>`}
      >
        <div className="h-[40rem] overflow-y-auto border rounded-xl bg-white dark:bg-black/50 p-4">
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2>
                            <p className={twMerge("text-xl mb-4 text-foreground font-bold font-sans")}>
                                {item.title}
                            </p>
                            <div className="text-sm prose prose-sm dark:prose-invert">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </div>
      </ComponentPreview>


    </div>
  );
}

const dummyContent = [
    {
      title: "BlazeUI Components",
      description: (
        <p>
          Explore our library of premium UI components. Optimized for performance and user experience.
        </p>
      ),
      badge: "React",
    },
    {
      title: "Built for Speed",
      description: (
        <p>
          Leverage the power of React and Framer Motion to build fast, beautiful websites.
        </p>
      ),
      badge: "Performance",
    },
  ];
