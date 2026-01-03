import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ComponentPreview } from "@/components/component-preview";
import { IntersectionRender } from "@/components/intersection-render";

const BasicSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Button Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Button"
          code={`<Button>Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
        >
          <div className="flex flex-col gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </ComponentPreview>
      </IntersectionRender>

      {/* Badge Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Badge"
          code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
        >
          <div className="flex flex-col gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </ComponentPreview>
      </IntersectionRender>

      {/* Input Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Input"
          code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-preview">Email</Label>
            <Input type="email" id="email-preview" placeholder="Email" />
          </div>
        </ComponentPreview>
      </IntersectionRender>

      {/* Checkbox Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Checkbox"
          code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Checkbox id="terms-preview" />
            <Label htmlFor="terms-preview">Accept terms and conditions</Label>
          </div>
        </ComponentPreview>
      </IntersectionRender>

      {/* Avatar Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Avatar"
          code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </IntersectionRender>

      {/* Skeleton Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Skeleton"
          code={`<div className="flex items-center space-x-4">
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
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        </ComponentPreview>
      </IntersectionRender>

      {/* Textarea Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Textarea"
          code={`<Textarea placeholder="Type your message here." />`}
        >
          <Textarea placeholder="Type your message here." />
        </ComponentPreview>
      </IntersectionRender>

      {/* Separator Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Separator"
          code={`<div>
  <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
  <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
  <Separator className="my-4" />
</div>`}
        >
          <div className="w-full p-4 border rounded-lg bg-card/50">
              <h4 className="text-sm font-medium leading-none">BlazeUI Primitives</h4>
              <p className="text-sm text-muted-foreground mt-1">Premium React components.</p>
              <Separator className="my-4 bg-primary/40" />
              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
              </div>
          </div>
        </ComponentPreview>
      </IntersectionRender>
    </div>
  );
};

export default BasicSection;
