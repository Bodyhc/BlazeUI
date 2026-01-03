import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from "@/components/ui/sheet";

import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ComponentPreview } from "@/components/component-preview";
import { IntersectionRender } from "@/components/intersection-render";

const OverlaySection = () => {
  const { toast } = useToast();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Dropdown Menu Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Dropdown Menu"
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Item 3</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>Item 1</DropdownMenuItem>
              <DropdownMenuItem>Item 2</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Item 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
      </IntersectionRender>

      {/* Popover Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Popover"
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <p>Popover content</p>
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ComponentPreview>
      </IntersectionRender>

      {/* Dialog Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Dialog"
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="overlay-name" className="text-right">
                    Name
                  </Label>
                  <Input id="overlay-name" defaultValue="Pedro Duarte" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </IntersectionRender>

      {/* Sheet Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Sheet"
          code={`<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name-sheet" className="text-right">
                    Name
                  </Label>
                  <Input id="name-sheet" defaultValue="Pedro Duarte" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ComponentPreview>
      </IntersectionRender>

      {/* Toast Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Toast"
          code={`const { toast } = useToast();

<Button
  variant="outline"
  onClick={() => {
    toast({
      title: "Event Created",
      description: "Your event has been successfully created.",
    });
  }}
>
  Show Toast
</Button>`}
        >
          <div className="flex items-center justify-center h-20">
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Event Created",
                  description: "Your event has been successfully created.",
                });
              }}
            >
              Show Toast
            </Button>
          </div>
        </ComponentPreview>
      </IntersectionRender>

      {/* Tooltip Component */}
      <IntersectionRender>
        <ComponentPreview
          title="Tooltip"
          code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover Me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ComponentPreview>
      </IntersectionRender>
    </div>
  );
};

export default OverlaySection;
