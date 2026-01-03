import { ComponentPreview } from "@/components/component-preview";
import { MagicCard } from "@/components/ui/magic-card";

const DocsMagicCard = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Magic Card
        </h1>
        <p className="text-lg text-muted-foreground">
          A card with a spotlight effect that follows the mouse cursor.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Magic Card"
          code={`import { MagicCard } from "@bodyhc/blazeui";

<div className="flex flex-col gap-4 lg:flex-row">
  <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
    <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
      Magic
    </p>
    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  </MagicCard>
  <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
    <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
      Card
    </p>
    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  </MagicCard>
</div>`}
        >
          <div className="flex flex-col gap-4 lg:flex-row">
            <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
              <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
                Magic
              </p>
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </MagicCard>
            <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
              <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
                Card
              </p>
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </MagicCard>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsMagicCard;
