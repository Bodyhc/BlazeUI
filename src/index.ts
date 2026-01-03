// Public entry point for the BlazeUI component library
import "./index.css";
// Export primitives, utilities, and providers that consumers will use.

// Utilities
export * from "./lib/utils";

// Theme
export * from "./components/theme-provider";
export * from "./contexts/theme-context";

// Basic UI primitives
export * from "./components/ui/button";
export * from "./components/ui/input";
export * from "./components/ui/textarea";
export * from "./components/ui/label";
export * from "./components/ui/checkbox";
export * from "./components/ui/radio-group";
export * from "./components/ui/switch";
export * from "./components/ui/select";
export * from "./components/ui/slider";

// Feedback & overlays
export * from "./components/ui/alert";
export * from "./components/ui/dialog";
export * from "./components/ui/dropdown-menu";
export * from "./components/ui/popover";
export * from "./components/ui/tooltip";
export * from "./components/ui/toast";
export * from "./components/ui/use-toast";
export * from "./components/ui/skeleton";
export * from "./components/ui/progress";
export * from "./components/ui/sheet";

// Layout & navigation
export * from "./components/ui/card";
export * from "./components/ui/accordion";
export * from "./components/ui/scroll-area";
export * from "./components/ui/separator";
export * from "./components/ui/breadcrumb";
export * from "./components/ui/pagination";
export * from "./components/ui/tabs";
export * from "./components/ui/command";
export * from "./components/ui/timeline";

// Data display
export * from "./components/ui/avatar";
export * from "./components/ui/badge";

// Loaders
export * from "./components/ui/loader";

// Fancy / animated components
export * from "./components/ui/animated-number";
// Avoid name clashes with Radix Tabs by aliasing animated tabs exports
export { Tabs as AnimatedTabs, FadeInDiv as AnimatedTabsContent } from "./components/ui/animated-tabs";
export * from "./components/ui/animated-tooltip";
export * from "./components/ui/background-boxes";
// Avoid Icon name clashes by exporting a named set from the canvas reveal module
export {
  CanvasRevealEffect,
  CanvasCard,
  Icon as CanvasRevealIcon,
} from "./components/ui/canvas-reveal-effect";
export * from "./components/ui/card-stack";
export * from "./components/ui/evervault-card";
export * from "./components/ui/flip-words";
export * from "./components/ui/glitch-text";
export * from "./components/ui/hover-card";
export * from "./components/ui/infinite-moving-cards";
export * from "./components/ui/interactive-grid";
export * from "./components/ui/lamp";
export * from "./components/ui/lens";
export * from "./components/ui/magic-card";
export * from "./components/ui/magnet-button";
export * from "./components/ui/marquee";
// Avoid Button name clashes by aliasing the moving-border button
export {
  Button as MovingBorderButton,
  MovingBorder,
} from "./components/ui/moving-border";
export * from "./components/ui/neon-gradient-card";
export * from "./components/ui/particle-background";
export * from "./components/ui/pixel-card";
export * from "./components/ui/sparkles";
export * from "./components/ui/spotlight-card";
export * from "./components/ui/sticky-scroll-reveal";
export * from "./components/ui/text-generate-effect";
export * from "./components/ui/text-reveal";
export * from "./components/ui/tracing-beam";
export * from "./components/ui/vortex";
export * from "./components/ui/wavy-background";
export * from "./components/ui/3d-card";
export * from "./components/ui/aurora-background";


