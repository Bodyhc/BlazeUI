import { CodeBlock } from "@/components/ui/code-block";

const DocsTheming = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Theming
        </h1>
        <p className="text-lg text-muted-foreground">
          How to customize the look and feel of BlazeUI.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <div className="md:max-w-lg">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BlazeUI uses CSS variables for theming. This makes it easy to customize the look and feel of your app.
          </p>
          <div className="mt-6">
            <CodeBlock 
              code={`module.exports = {
  darkMode: ["class"],
  // ...
}`} 
              language="javascript" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsTheming;
