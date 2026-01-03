import { ComponentPreview } from "@/components/component-preview";
import {
  Timeline,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline";

const DocsTimeline = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Timeline
        </h1>
        <p className="text-lg text-muted-foreground">
          A vertical timeline component to display a list of events or steps.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Timeline"
          code={`import {
  Timeline,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "@bodyhc/blazeui";

<Timeline>
  <TimelineItem>
    <TimelinePoint />
    <TimelineContent>
      <TimelineTime>February 2023</TimelineTime>
      <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
      <TimelineDescription>
        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
      </TimelineDescription>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelinePoint />
    <TimelineContent>
      <TimelineTime>March 2023</TimelineTime>
      <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
      <TimelineDescription>
        All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
      </TimelineDescription>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelinePoint />
    <TimelineContent>
      <TimelineTime>April 2023</TimelineTime>
      <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
      <TimelineDescription>
        Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
      </TimelineDescription>
    </TimelineContent>
  </TimelineItem>
</Timeline>`}
        >
          <Timeline>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>February 2023</TimelineTime>
                <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
                <TimelineDescription>
                  Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>March 2023</TimelineTime>
                <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
                <TimelineDescription>
                  All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>April 2023</TimelineTime>
                <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
                <TimelineDescription>
                  Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsTimeline;
