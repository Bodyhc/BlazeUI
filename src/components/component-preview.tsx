import * as React from "react";
import { Copy, Check, Code, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  title: string;
  code: string;
  children: React.ReactNode;
  className?: string;
  hidePreview?: boolean;
}

export function ComponentPreview({
  title,
  code,
  children,
  className,
  hidePreview = false,
}: ComponentPreviewProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const onCopy = () => {
    copyToClipboard(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 border border-primary/10 rounded-3xl overflow-hidden bg-white dark:bg-[#020617]/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5",
        className
      )}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-primary/5 bg-slate-50/50 dark:bg-white/[0.02]">
        <h3 className="text-sm font-bold tracking-tight text-foreground/80 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {title}
        </h3>
        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-xl hover:bg-primary/10 hover:text-primary transition-all"
            onClick={onCopy}
          >
            {hasCopied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            <span className="sr-only">Copy Code</span>
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                <Code className="h-3.5 w-3.5" />
                <span className="sr-only">View Code</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] border-none bg-slate-900 rounded-[2rem] p-0 overflow-hidden">
              <DialogHeader className="p-8 border-b border-white/5 bg-slate-950/50">
                <DialogTitle className="text-xl font-black text-white flex items-center gap-3">
                   <div className="p-2 rounded-xl bg-primary/20 text-primary">
                      <Code className="w-5 h-5" />
                   </div>
                   {title} Source
                </DialogTitle>
              </DialogHeader>
              <div className="relative p-6">
                <Button
                  size="sm"
                  className="absolute right-10 top-10 h-8 rounded-lg font-bold z-20"
                  onClick={onCopy}
                >
                  {hasCopied ? "Copied!" : "Copy Code"}
                </Button>
                <div className="rounded-2xl bg-black/50 border border-white/5 p-6 overflow-hidden">
                   <pre className="max-h-[500px] overflow-y-auto font-mono text-sm leading-relaxed text-slate-300">
                      <code>{code}</code>
                   </pre>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                <Maximize2 className="h-3.5 w-3.5" />
                <span className="sr-only">Fullscreen Preview</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-[1200px] h-[85vh] border-none bg-white dark:bg-[#020617] rounded-[2.5rem] p-0 overflow-hidden">
               <div className="w-full h-full flex items-center justify-center p-12 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent)]" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center bg-muted/20 rounded-3xl border border-primary/5 overflow-hidden">
                     {children}
                  </div>
               </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      {!hidePreview && (
        <div className="flex min-h-[350px] items-center justify-center p-12 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03),transparent)]">
          <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.01]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
