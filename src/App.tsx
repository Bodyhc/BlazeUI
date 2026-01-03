import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import { Loader } from "./components/ui/loader";
import { Toaster } from "./components/ui/toaster";
import ScrollToTop from "./components/scroll-to-top";
import NotFound from "./pages/NotFound";

// Main Pages
const Home = lazy(() => import("./pages/Home"));
const Components = lazy(() => import("./pages/Components"));
const Templates = lazy(() => import("./pages/Templates"));
const About = lazy(() => import("./pages/About"));

// Templates
const SaaSDashboard = lazy(() => import("./pages/templates/SaaSDashboard"));
const LandingPage = lazy(() => import("./pages/templates/LandingPage"));
const DocsTemplate = lazy(() => import("./pages/templates/DocsTemplate"));
const PortfolioTemplate = lazy(() => import("./pages/templates/PortfolioTemplate"));
const BlogTemplate = lazy(() => import("./pages/templates/BlogTemplate"));
const AuthTemplate = lazy(() => import("./pages/templates/AuthTemplate"));
const EcommerceTemplate = lazy(() => import("./pages/templates/EcommerceTemplate"));
const SettingsTemplate = lazy(() => import("./pages/templates/SettingsTemplate"));

// Docs Layout
const DocsLayout = lazy(() => import("./components/layout/docs-layout"));

// Docs Pages
const DocsIntroduction = lazy(() => import("./pages/docs/index"));
const DocsInstallation = lazy(() => import("./pages/docs/installation"));
const DocsTheming = lazy(() => import("./pages/docs/theming"));

// Component Docs
const DocsButton = lazy(() => import("./pages/docs/components/button"));
const DocsAccordion = lazy(() => import("./pages/docs/components/accordion"));
const DocsBadge = lazy(() => import("./pages/docs/components/badge"));
const DocsCard = lazy(() => import("./pages/docs/components/card"));
const DocsInput = lazy(() => import("./pages/docs/components/input"));
const DocsAvatar = lazy(() => import("./pages/docs/components/avatar"));
const DocsAlert = lazy(() => import("./pages/docs/components/alert"));
const DocsCheckbox = lazy(() => import("./pages/docs/components/checkbox"));
const DocsSwitch = lazy(() => import("./pages/docs/components/switch"));
const DocsTextarea = lazy(() => import("./pages/docs/components/textarea"));
const DocsSkeleton = lazy(() => import("./pages/docs/components/skeleton"));
const DocsDropdownMenu = lazy(() => import("./pages/docs/components/dropdown-menu"));
const DocsPopover = lazy(() => import("./pages/docs/components/popover"));
const DocsProgress = lazy(() => import("./pages/docs/components/progress"));
const DocsSlider = lazy(() => import("./pages/docs/components/slider"));
const DocsToast = lazy(() => import("./pages/docs/components/toast"));
const DocsTooltip = lazy(() => import("./pages/docs/components/tooltip"));
const DocsDialog = lazy(() => import("./pages/docs/components/dialog"));
const DocsLabel = lazy(() => import("./pages/docs/components/label"));
const DocsScrollArea = lazy(() => import("./pages/docs/components/scroll-area"));
const DocsSeparator = lazy(() => import("./pages/docs/components/separator"));
const DocsBreadcrumb = lazy(() => import("./pages/docs/components/breadcrumb"));
const DocsPagination = lazy(() => import("./pages/docs/components/pagination"));
const DocsSelect = lazy(() => import("./pages/docs/components/select"));
const DocsRadioGroup = lazy(() => import("./pages/docs/components/radio-group"));
const DocsSheet = lazy(() => import("./pages/docs/components/sheet"));
const DocsCommand = lazy(() => import("./pages/docs/components/command"));
const DocsTimeline = lazy(() => import("./pages/docs/components/timeline"));
const DocsMagicCard = lazy(() => import("./pages/docs/components/magic-card"));
const DocsAnimatedNumber = lazy(() => import("./pages/docs/components/animated-number"));
const DocsHoverCard = lazy(() => import("./pages/docs/components/hover-card"));
const DocsGlitchText = lazy(() => import("./pages/docs/components/glitch-text"));
const DocsPixelCard = lazy(() => import("./pages/docs/components/pixel-card"));
const DocsMagnetButton = lazy(() => import("./pages/docs/components/magnet-button"));
const DocsTextReveal = lazy(() => import("./pages/docs/components/text-reveal"));
const DocsNeonGradientCard = lazy(() => import("./pages/docs/components/neon-gradient-card"));
const DocsInteractiveGrid = lazy(() => import("./pages/docs/components/interactive-grid"));
const DocsSpotlightCard = lazy(() => import("./pages/docs/components/spotlight-card"));
const DocsParticleBackground = lazy(() => import("./pages/docs/components/particle-background"));
const Docs3DCard = lazy(() => import("./pages/docs/components/3d-card"));
const DocsAuroraBackground = lazy(() => import("./pages/docs/components/aurora-background"));
const DocsAnimatedTooltip = lazy(() => import("./pages/docs/components/animated-tooltip"));
const DocsMovingBorder = lazy(() => import("./pages/docs/components/moving-border"));
const DocsEvervaultCard = lazy(() => import("./pages/docs/components/evervault-card"));
const DocsWavyBackground = lazy(() => import("./pages/docs/components/wavy-background"));
const DocsSparkles = lazy(() => import("./pages/docs/components/sparkles"));
const DocsTextGenerateEffect = lazy(() => import("./pages/docs/components/text-generate-effect"));
const DocsLamp = lazy(() => import("./pages/docs/components/lamp"));
const DocsCardStack = lazy(() => import("./pages/docs/components/card-stack"));
const DocsFlipWords = lazy(() => import("./pages/docs/components/flip-words"));
const DocsCanvasRevealEffect = lazy(() => import("./pages/docs/components/canvas-reveal-effect"));
const DocsLens = lazy(() => import("./pages/docs/components/lens"));
const DocsTracingBeam = lazy(() => import("./pages/docs/components/tracing-beam"));
const DocsBackgroundBoxes = lazy(() => import("./pages/docs/components/background-boxes"));
const DocsVortex = lazy(() => import("./pages/docs/components/vortex"));
const DocsTabs = lazy(() => import("./pages/docs/components/animated-tabs"));
const DocsMarquee = lazy(() => import("./pages/docs/components/marquee"));
const DocsInfiniteMovingCards = lazy(() => import("./pages/docs/components/infinite-moving-cards"));

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* ... other routes ... */}
            <Route path="components" element={<Components />} />
            <Route path="templates" element={<Templates />} />
            <Route path="about" element={<About />} />
            
            {/* Template Preview Routes */}
            <Route path="templates/saas-dashboard" element={<SaaSDashboard />} />
            <Route path="templates/landing-page" element={<LandingPage />} />
            <Route path="templates/docs-site" element={<DocsTemplate />} />
            <Route path="templates/portfolio" element={<PortfolioTemplate />} />
            <Route path="templates/blog" element={<BlogTemplate />} />
            <Route path="templates/auth" element={<AuthTemplate />} />
            <Route path="templates/ecommerce" element={<EcommerceTemplate />} />
            <Route path="templates/settings" element={<SettingsTemplate />} />
            <Route path="docs" element={<DocsLayout />}>
              <Route index element={<DocsIntroduction />} />
              <Route path="installation" element={<DocsInstallation />} />
              <Route path="theming" element={<DocsTheming />} />
              <Route path="button" element={<DocsButton />} />
              <Route path="accordion" element={<DocsAccordion />} />
              <Route path="badge" element={<DocsBadge />} />
              <Route path="card" element={<DocsCard />} />
              <Route path="input" element={<DocsInput />} />
              <Route path="avatar" element={<DocsAvatar />} />
              <Route path="alert" element={<DocsAlert />} />
              <Route path="checkbox" element={<DocsCheckbox />} />
              <Route path="switch" element={<DocsSwitch />} />
              <Route path="textarea" element={<DocsTextarea />} />
              <Route path="skeleton" element={<DocsSkeleton />} />
              <Route path="dropdown-menu" element={<DocsDropdownMenu />} />
              <Route path="popover" element={<DocsPopover />} />
              <Route path="progress" element={<DocsProgress />} />
              <Route path="slider" element={<DocsSlider />} />
              <Route path="toast" element={<DocsToast />} />
              <Route path="tooltip" element={<DocsTooltip />} />
              <Route path="dialog" element={<DocsDialog />} />
              <Route path="label" element={<DocsLabel />} />
              <Route path="scroll-area" element={<DocsScrollArea />} />
              <Route path="separator" element={<DocsSeparator />} />
              <Route path="breadcrumb" element={<DocsBreadcrumb />} />
              <Route path="pagination" element={<DocsPagination />} />
              <Route path="tabs" element={<DocsTabs />} />
              <Route path="select" element={<DocsSelect />} />
              <Route path="radio-group" element={<DocsRadioGroup />} />
              <Route path="sheet" element={<DocsSheet />} />
              <Route path="command" element={<DocsCommand />} />
              <Route path="timeline" element={<DocsTimeline />} />
              <Route path="magic-card" element={<DocsMagicCard />} />
              <Route path="animated-number" element={<DocsAnimatedNumber />} />
              <Route path="hover-card" element={<DocsHoverCard />} />

              <Route path="sparkles" element={<DocsSparkles />} />
              <Route path="3d-card" element={<Docs3DCard />} />
              <Route path="glitch-text" element={<DocsGlitchText />} />
              <Route path="pixel-card" element={<DocsPixelCard />} />
              <Route path="magnet-button" element={<DocsMagnetButton />} />
              <Route path="text-reveal" element={<DocsTextReveal />} />
              <Route path="neon-gradient-card" element={<DocsNeonGradientCard />} />
              <Route path="interactive-grid" element={<DocsInteractiveGrid />} />
              <Route path="spotlight-card" element={<DocsSpotlightCard />} />
              <Route path="particle-background" element={<DocsParticleBackground />} />
              <Route path="aurora-background" element={<DocsAuroraBackground />} />
              <Route path="animated-tooltip" element={<DocsAnimatedTooltip />} />

              <Route path="moving-border" element={<DocsMovingBorder />} />
              <Route path="evervault-card" element={<DocsEvervaultCard />} />

              <Route path="wavy-background" element={<DocsWavyBackground />} />
              <Route path="text-generate-effect" element={<DocsTextGenerateEffect />} />
              <Route path="lamp" element={<DocsLamp />} />
              <Route path="card-stack" element={<DocsCardStack />} />
              <Route path="flip-words" element={<DocsFlipWords />} />
              <Route path="canvas-reveal-effect" element={<DocsCanvasRevealEffect />} />

              <Route path="lens" element={<DocsLens />} />
              <Route path="tracing-beam" element={<DocsTracingBeam />} />

              <Route path="background-boxes" element={<DocsBackgroundBoxes />} />
              <Route path="vortex" element={<DocsVortex />} />
              <Route path="marquee" element={<DocsMarquee />} />
              <Route path="infinite-moving-cards" element={<DocsInfiniteMovingCards />} />
            </Route>
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </Router>
  );
}

export default App;
