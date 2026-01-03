import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground space-y-8 p-4 text-center">
      <div className="space-y-2">
        <h1 className="text-9xl font-black text-primary/20">404</h1>
        <h2 className="text-4xl font-bold tracking-tight">Page not found</h2>
        <p className="text-lg text-muted-foreground max-w-[500px]">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
      </div>

      <Button asChild size="lg" className="rounded-full">
        <Link to="/">
          <MoveLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
