import { ScrollArea } from "@/components/ui/scroll-area";
import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Search, ChevronRight, Hash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const sidebarNavItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "Theming",
        href: "/docs/theming",
      },
    ],
  },
  {
    title: "Components",
    items: [
       {
        title: "3D Card",
        href: "/docs/3d-card",
      },

      {
        title: "Accordion",
        href: "/docs/accordion",
      },
      {
        title: "Animated Tooltip",
        href: "/docs/animated-tooltip",
      },
      {
        title: "Alert",
        href: "/docs/alert",
      },
      {
        title: "Animated Number",
        href: "/docs/animated-number",
      },
      {
        title: "Avatar",
        href: "/docs/avatar",
      },
      {
        title: "Badge",
        href: "/docs/badge",
      },
       {
        title: "Aurora Background",
        href: "/docs/aurora-background",
      },
      {
        title: "Button",
        href: "/docs/button",
      },
      {
        title: "Moving Border",
        href: "/docs/moving-border",
      },
      {
        title: "Breadcrumb",
        href: "/docs/breadcrumb",
      },
      {
        title: "Pagination",
        href: "/docs/pagination",
      },
      {
        title: "Card",
        href: "/docs/card",
      },
      {
        title: "Checkbox",
        href: "/docs/checkbox",
      },
      {
        title: "Command",
        href: "/docs/command",
      },
      {
        title: "Dialog",
        href: "/docs/dialog",
      },
      {
        title: "Dropdown Menu",
        href: "/docs/dropdown-menu",
      },
      {
        title: "Glitch Text",
        href: "/docs/glitch-text",
      },
      {
        title: "Hover Card",
        href: "/docs/hover-card",
      },
      {
        title: "Interactive Grid",
        href: "/docs/interactive-grid",
      },
      {
        title: "Input",
        href: "/docs/input",
      },
      {
        title: "Panel",
        href: "/docs/panel",
      },
      {
        title: "Particle Background",
        href: "/docs/particle-background",
      },
      {
        title: "Pixel Card",
        href: "/docs/pixel-card",
      },
       {
        title: "Magnet Button",
        href: "/docs/magnet-button",
      },
      {
        title: "Label",
        href: "/docs/label",
      },
      {
        title: "Magic Card",
        href: "/docs/magic-card",
      },
      {
        title: "Neon Gradient Card",
        href: "/docs/neon-gradient-card",
      },

      {
        title: "Popover",
        href: "/docs/popover",
      },
      {
        title: "Progress",
        href: "/docs/progress",
      },
      {
        title: "Radio Group",
        href: "/docs/radio-group",
      },
      {
        title: "Scroll Area",
        href: "/docs/scroll-area",
      },
       {
        title: "Select",
        href: "/docs/select",
      },
      {
        title: "Separator",
        href: "/docs/separator",
      },
      {
        title: "Sheet",
        href: "/docs/sheet",
      },
      {
        title: "Skeleton",
        href: "/docs/skeleton",
      },

       {
        title: "Slider",
        href: "/docs/slider",
      },

      {
        title: "Evervault Card",
        href: "/docs/evervault-card",
      },
      {
        title: "Spotlight Card",
        href: "/docs/spotlight-card",
      },
      {
        title: "Switch",
        href: "/docs/switch",
      },
      {
        title: "Animated Tabs",
        href: "/docs/animated-tabs",
      },
      {
        title: "Text Reveal",
        href: "/docs/text-reveal",
      },
      {
        title: "Textarea",
        href: "/docs/textarea",
      },
      {
        title: "Timeline",
        href: "/docs/timeline",
      },
      {
        title: "Toast",
        href: "/docs/toast",
      },
      {
        title: "Lens",
        href: "/docs/lens",
      },
      {
        title: "Tracing Beam",
        href: "/docs/tracing-beam",
      },
      {
        title: "Background Boxes",
        href: "/docs/background-boxes",
      },
      {
        title: "Vortex",
        href: "/docs/vortex",
      },
      {
        title: "Wavy Background",
        href: "/docs/wavy-background",
      },
      {
        title: "Sparkles",
        href: "/docs/sparkles",
      },
      {
        title: "Text Generate Effect",
        href: "/docs/text-generate-effect",
      },
      {
        title: "Lamp",
        href: "/docs/lamp",
      },
      {
        title: "Card Stack",
        href: "/docs/card-stack",
      },
      {
        title: "Flip Words",
        href: "/docs/flip-words",
      },
      {
        title: "Canvas Reveal Effect",
        href: "/docs/canvas-reveal-effect",
      },

      {
        title: "Tooltip",
        href: "/docs/tooltip",
      },
      {
        title: "Marquee",
        href: "/docs/marquee",
      },
      {
        title: "Infinite Moving Cards",
        href: "/docs/infinite-moving-cards",
      },
    ],
  },
];

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const DocsLayout = () => {
  const location = useLocation();
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    // Generate TOC from headings
    const headings = Array.from(document.querySelectorAll("h2, h3"));
    const tocItems = headings.map((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      }
      return {
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.replace("H", "")),
      };
    });
    setToc(tocItems);
  }, [location.pathname]);

  const breadcrumbs = location.pathname
    .split("/")
    .filter(Boolean)
    .map((path) => path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "));

  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 py-10 relative">
      <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block">
        <div className="relative mb-6 pr-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search documentation..."
              className="w-full bg-background pl-9 h-10 ring-offset-background placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary/40 border-primary/10 rounded-xl"
            />
            <kbd className="pointer-events-none absolute right-2.5 top-2.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>
        
        <ScrollArea className="h-[calc(100vh-12rem)] py-2 pr-6 border-r border-primary/5">
          <div className="w-full space-y-6">
            {sidebarNavItems.map((item, index) => (
              <div key={index} className="space-y-3">
                <h4 className="px-2 text-xs font-bold uppercase tracking-widest text-primary/60">
                  {item.title}
                </h4>
                {item.items?.length && (
                  <div className="grid grid-flow-row auto-rows-max text-sm gap-1">
                    {item.items.map((subItem) => {
                      const isActive = location.pathname === subItem.href;
                      return (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className={cn(
                            "relative group flex w-full items-center rounded-lg px-3 py-2 transition-all duration-200",
                            isActive
                              ? "bg-primary/5 text-primary font-semibold"
                              : "text-muted-foreground hover:bg-primary/[0.03] hover:text-foreground"
                          )}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="active-sidebar-pill"
                              className="absolute left-0 w-1 h-4 bg-primary rounded-full transition-opacity"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                          {subItem.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_250px] transition-all duration-300">
        <div className="mx-auto w-full min-w-0 pr-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="w-3 h-3 opacity-40" />
                <span className={cn(i === breadcrumbs.length - 1 && "text-foreground font-bold")}>
                  {crumb}
                </span>
              </React.Fragment>
            ))}
          </nav>

          <Outlet />
        </div>
        
        <aside className="hidden text-sm xl:block sticky top-24 h-fit border-l border-primary/5 pl-8 space-y-8">
          <div className="space-y-4">
            <p className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary/60">On this page</p>
            <nav className="space-y-2.5">
              <AnimatePresence mode="popLayout">
                {toc.length > 0 ? (
                  toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={cn(
                        "block transition-all hover:text-primary cursor-pointer leading-tight",
                        item.level === 3 ? "pl-4 text-[13px] text-muted-foreground/70" : "text-[13px] font-medium text-muted-foreground"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item.text}
                    </a>
                  ))
                ) : (
                  <p className="text-[13px] text-muted-foreground/40 italic">No sections found</p>
                )}
              </AnimatePresence>
            </nav>
          </div>

          <div className="pt-8 border-t border-primary/5 space-y-4">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10 text-primary text-xs font-bold ring-1 ring-primary/5">
              <Hash className="w-4 h-4" />
              v1.0.4 Released
            </div>
            
            <div className="space-y-3">
               <p className="text-[11px] font-bold text-muted-foreground/50 uppercase tracking-widest">Community</p>
               <div className="space-y-2">
                  <p className="text-[13px] text-primary/70 hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                    Edit this page on GitHub
                  </p>
                  <p className="text-[13px] text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer">
                    Chat on Discord
                  </p>
               </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default DocsLayout;
