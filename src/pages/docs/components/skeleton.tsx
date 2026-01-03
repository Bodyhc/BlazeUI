import { ComponentPreview } from "@/components/component-preview";
import { Skeleton } from "@/components/ui/skeleton";

const DocsSkeleton = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Skeleton
        </h1>
        <p className="text-lg text-muted-foreground">
          Use to show a placeholder while content is loading.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Skeleton"
          code={`import { Skeleton } from "@bodyhc/blazeui";

<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
        >
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsSkeleton;
