import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const onCopy = () => {
    copyToClipboard(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className={cn("relative group rounded-2xl border border-primary/10 bg-slate-950 overflow-hidden my-6", className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
          {language && (
            <span className="ml-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
              {language}
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
          onClick={onCopy}
        >
          {hasCopied ? (
            <Check className="h-3 w-3" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
          <span className="sr-only">Copy Code</span>
        </Button>
      </div>
      <div className="p-4 overflow-x-auto scrollbar-hide">
        <pre className="font-mono text-sm leading-relaxed text-slate-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
