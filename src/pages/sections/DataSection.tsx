import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Timeline, TimelineContent, TimelineDescription, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "@/components/ui/timeline";
import { Label } from "@/components/ui/label";
import { Terminal, Calculator, Smile } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";
import { IntersectionRender } from "@/components/intersection-render";

const DataSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Accordion Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Accordion"
          code={`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </IntersectionRender>

      {/* Alert Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Alert"
          code={`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
        >
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </ComponentPreview>
      </IntersectionRender>

      {/* Progress Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Progress"
          code={`<Progress value={66} />`}
        >
          <Progress value={66} className="w-[80%]" />
        </ComponentPreview>
      </IntersectionRender>

      {/* Slider Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Slider"
          code={`<Slider defaultValue={[50]} max={100} step={1} />`}
        >
          <Slider defaultValue={[50]} max={100} step={1} />
        </ComponentPreview>
      </IntersectionRender>

      {/* Select Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Select"
          code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </ComponentPreview>
      </IntersectionRender>

      {/* RadioGroup Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Radio Group"
          code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="r1" />
    <Label htmlFor="r1">Option One</Label>
  </div>
</RadioGroup>`}
        >
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="r1-preview" />
              <Label htmlFor="r1-preview">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="r2-preview" />
              <Label htmlFor="r2-preview">Option Two</Label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </IntersectionRender>

      {/* Tabs Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Tabs"
          code={`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Account settings content.</TabsContent>
            <TabsContent value="password">Password reset content.</TabsContent>
          </Tabs>
        </ComponentPreview>
      </IntersectionRender>

      {/* Command Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Command"
          code={`<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
        >
          <Command className="rounded-lg border shadow-md h-40">
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </CommandItem>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Emoji</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </ComponentPreview>
      </IntersectionRender>

      {/* Timeline Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Timeline"
          code={`<Timeline>
  <TimelineItem>
    <TimelinePoint />
    <TimelineContent>
      <TimelineTime>Just now</TimelineTime>
      <TimelineTitle>Created project</TimelineTitle>
    </TimelineContent>
  </TimelineItem>
</Timeline>`}
        >
          <Timeline>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>2 hours ago</TimelineTime>
                <TimelineTitle>V1.0 Released</TimelineTitle>
                <TimelineDescription>Initial version of BlazeUI is live.</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               <TimelinePoint />
               <TimelineContent>
                 <TimelineTime>Yesterday</TimelineTime>
                 <TimelineTitle>Beta Testing</TimelineTitle>
                 <TimelineDescription>Final polish before launch.</TimelineDescription>
               </TimelineContent>
            </TimelineItem>
          </Timeline>
        </ComponentPreview>
      </IntersectionRender>
    </div>
  );
};

export default DataSection;
