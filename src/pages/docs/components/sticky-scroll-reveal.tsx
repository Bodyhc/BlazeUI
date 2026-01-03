import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ComponentPreview } from "@/components/component-preview";


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real-time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Real time changes
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
];

export default function DocsStickyScroll() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Sticky Scroll Reveal</h1>
        <p className="text-lg text-muted-foreground">
          A scroll effect that sticks content to the viewport while scrolling active sections.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { StickyScroll } from "@bodyhc/blazeui";

<StickyScroll content={content} />`}
      >
        <div className="h-[30rem] overflow-hidden border rounded-xl">
          <StickyScroll content={content} />
        </div>
      </ComponentPreview>


    </div>
  );
}
