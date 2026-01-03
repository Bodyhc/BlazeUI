import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsEvervaultCard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Evervault Card</h1>
        <p className="text-lg text-muted-foreground">
          A highly secured, encrypted card effect that reveals random text upon hover.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { EvervaultCard, Icon } from "@bodyhc/blazeui";

<div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
  <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
  <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

  <EvervaultCard text="hover" />

  <h2 className="dark:text-white text-black mt-4 text-sm font-light">
    Hover over this card to reveal an awesome effect. Running out of copy here.
  </h2>
  <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
    Watch me hover
  </p>
</div>`}
      >
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard text="hover" />

          <h2 className="dark:text-white text-black mt-4 text-sm font-light">
            Hover over this card to reveal an awesome effect. Running out of copy here.
          </h2>
          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
            Watch me hover
          </p>
        </div>
      </ComponentPreview>


    </div>
  );
}
