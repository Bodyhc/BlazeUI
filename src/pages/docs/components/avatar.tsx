import { ComponentPreview } from "@/components/component-preview";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DocsAvatar = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Avatar
        </h1>
        <p className="text-lg text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Avatar"
          code={`import { Avatar, AvatarFallback, AvatarImage } from "@bodyhc/blazeui";

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsAvatar;
