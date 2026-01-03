import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DocsIntroduction = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Introduction
        </h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the BlazeUI documentation.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <div className="md:max-w-lg">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BlazeUI is a collection of re-usable components that you can copy and
            paste into your apps. It's built with Radix UI and Tailwind CSS.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This is NOT a component library. It's a collection of re-usable
            components that you can copy and paste into your apps.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Button asChild>
                <Link to="/docs/installation">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
                <Link to="/components">Browse Components</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsIntroduction;
