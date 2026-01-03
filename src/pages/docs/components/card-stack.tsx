import { CardStack } from "@/components/ui/card-stack";
import { ComponentPreview } from "@/components/component-preview";


export default function DocsCardStack() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Card Stack</h1>
        <p className="text-lg text-muted-foreground">
          A stack of cards that can be cycled through with animations.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { CardStack } from "@bodyhc/blazeui";

<CardStack items={CARDS} />`}
      >
        <div className="h-[20rem] flex items-center justify-center w-full">
          <CardStack items={CARDS} />
        </div>
      </ComponentPreview>


    </div>
  );
}

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Software Engineer",
    content: (
      <p>
        These cards are amazing, <span className="font-bold bg-emerald-100 text-emerald-700 px-1 py-0.5 rounded-sm">I love them!</span>
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Hell Builder",
    content: (
      <p>
        I dont like this component, <span className="font-bold bg-emerald-100 text-emerald-700 px-1 py-0.5 rounded-sm">delete it.</span>
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of project mayhem is, <span className="font-bold bg-emerald-100 text-emerald-700 px-1 py-0.5 rounded-sm">you do not talk about project mayhem.</span>
      </p>
    ),
  },
];
