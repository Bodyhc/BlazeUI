import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ComponentPreview } from "@/components/component-preview";

export default function DocsInfiniteMovingCards() {
  const items = [
    {
      quote: "The best way to predict the future is to create it.",
      name: "Peter Drucker",
      title: "Management Consultant",
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      name: "Steve Jobs",
      title: "Apple Inc.",
    },
    {
      quote: "Stay hungry, stay foolish.",
      name: "Steve Jobs",
      title: "Apple Inc.",
    },
    {
      quote: "Quality is not an act, it is a habit.",
      name: "Aristotle",
      title: "Philosopher",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Infinite Moving Cards</h1>
        <p className="text-lg text-muted-foreground">
          A directed carousel that moves infinitely.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { InfiniteMovingCards } from "@bodyhc/blazeui";

const items = [
  {
    quote: "The best way to predict the future is to create it.",
    name: "Peter Drucker",
    title: "Management Consultant",
  },
  // ... more items
];

<InfiniteMovingCards items={items} speed="normal" />`}
      >
        <div className="w-full">
            <InfiniteMovingCards items={items} speed="normal" />
        </div>
      </ComponentPreview>

       <div className="space-y-4">
        <h2 className="text-2xl font-bold">Variations</h2>
        
        <ComponentPreview
          title="Fast Speed"
          code={`import { InfiniteMovingCards } from "@bodyhc/blazeui";

<InfiniteMovingCards items={items} speed="fast" />`}
        >
           <div className="w-full">
              <InfiniteMovingCards items={items} speed="fast" />
          </div>
        </ComponentPreview>

         <ComponentPreview
          title="Slow Speed"
          code={`import { InfiniteMovingCards } from "@bodyhc/blazeui";

<InfiniteMovingCards items={items} speed="slow" />`}
        >
           <div className="w-full">
              <InfiniteMovingCards items={items} speed="slow" />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Right Direction"
          code={`import { InfiniteMovingCards } from "@bodyhc/blazeui";

<InfiniteMovingCards items={items} direction="right" speed="normal" />`}
        >
           <div className="w-full">
              <InfiniteMovingCards items={items} direction="right" speed="normal" />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
