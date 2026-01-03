import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="bg-secondary">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Ready to dive in?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-secondary-foreground">
            Start building your next project with BlazeUI today. Explore the
            components and see what you can create.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link to="/components">Get started</Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/docs">Read documentation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
