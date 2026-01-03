import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { GlitchText } from "@/components/ui/glitch-text";
import { PixelCard } from "@/components/ui/pixel-card";
import { MagnetButton } from "@/components/ui/magnet-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Vortex } from "@/components/ui/vortex";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Lens } from "@/components/ui/lens";
import { SparklesCore as Sparkles } from "@/components/ui/sparkles";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Tabs as AnimatedTabs } from "@/components/ui/animated-tabs";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { WavyBackground } from "@/components/ui/wavy-background";
import { BoxesCore as Boxes } from "@/components/ui/background-boxes";
import { ComponentPreview } from "@/components/component-preview";
import { IntersectionRender } from "@/components/intersection-render";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/theme-context";

const AceternityIcon = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
      </svg>
    );
};

const CanvasCard = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.1] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const PremiumSection = () => {
  const { theme } = useTheme();
  const tracingBeamContainerRef = React.useRef<HTMLDivElement>(null);
  
  const PEOPLE = [
    { id: 1, name: "John Doe", designation: "Software Engineer", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    { id: 2, name: "Robert Johnson", designation: "Product Manager", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    { id: 3, name: "Jane Smith", designation: "UX Designer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
  ];

  const dummyContent = [
    { title: "BlazeUI Components", description: <p>Explore our library of premium UI components.</p>, badge: "React", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600" },
    { title: "Built for Speed", description: <p>Optimized for performance.</p>, badge: "Fast", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600" },
  ];

  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Magic Card */}
        <ComponentPreview title="Magic Card" code={`<MagicCard>...</MagicCard>`}>
          <MagicCard className="flex-col items-center justify-center shadow-2xl h-40">
            <p className="z-10 text-xl font-medium">Magic Card</p>
          </MagicCard>
        </ComponentPreview>

        {/* Animated Number */}
        <ComponentPreview title="Animated Number" code={`<AnimatedNumber value={100} />`}>
          <div className="flex items-center justify-center h-40">
            <AnimatedNumber value={1234} className="text-4xl font-bold" />
          </div>
        </ComponentPreview>

        {/* Magnet Button */}
        <IntersectionRender>
        <ComponentPreview title="Magnet Button" code={`<MagnetButton>Magnet</MagnetButton>`}>
          <div className="flex items-center justify-center h-40">
            <MagnetButton>
               <div className="px-6 py-2 bg-primary text-white rounded-full font-bold">Magnet</div>
            </MagnetButton>
          </div>
        </ComponentPreview>
        </IntersectionRender>

        {/* Glitch Text */}
        <ComponentPreview title="Glitch Text" code={`<GlitchText text="BLAZE UI" />`}>
          <div className="flex items-center justify-center h-40 bg-zinc-50 dark:bg-black rounded-xl border border-zinc-200 dark:border-white/10">
             <GlitchText text="BLAZE UI" className="text-4xl font-black text-black dark:text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
          </div>
        </ComponentPreview>

        {/* Pixel Card */}
        <ComponentPreview title="Pixel Card" code={`<PixelCard>...</PixelCard>`}>
          <PixelCard className="h-40 flex items-center justify-center">
            <p className="text-xl font-bold font-mono">Pixel Effect</p>
          </PixelCard>
        </ComponentPreview>

        {/* Lens - Interactive Zoom */}
        <IntersectionRender>
        <ComponentPreview title="Lens (Zoom)" code={`<Lens zoomFactor={2}>...</Lens>`}>
          <div className="flex items-center justify-center h-40 overflow-hidden rounded-xl border">
            <Lens zoomFactor={2} lensSize={120}>
               <img 
                 src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800" 
                 className="w-full h-full object-cover" 
                 alt="Space"
                 loading="lazy"
                 decoding="async"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-bold text-lg bg-black/40 px-2 py-1 rounded">Interactive Zoom</p>
               </div>
            </Lens>
          </div>
        </ComponentPreview>
        </IntersectionRender>

        {/* Spotlight Card */}
        <IntersectionRender>
          <ComponentPreview title="Spotlight Card" code={`<SpotlightCard>...</SpotlightCard>`}>
            <SpotlightCard className="h-40 flex items-center justify-center bg-zinc-50 dark:bg-slate-900 border-zinc-200 dark:border-slate-800 shadow-sm">
               <p className="text-black dark:text-white font-medium">Spotlight Effect</p>
            </SpotlightCard>
          </ComponentPreview>
        </IntersectionRender>

        {/* Evervault Card */}
        <ComponentPreview title="Evervault Card" code={`<EvervaultCard text="hover" />`}>
           <div className="border border-black/[0.1] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-40 w-full overflow-hidden rounded-xl">
              <EvervaultCard text="hover" />
           </div>
        </ComponentPreview>

        {/* Sparkles */}
        <IntersectionRender>
        <ComponentPreview title="Sparkles" code={`<Sparkles id="demo" />`}>
           <div className="h-40 w-full bg-slate-100 dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-200 dark:border-none relative group">
              <div className="absolute inset-0 z-0">
                <Sparkles
                  id="sparkles-demo"
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor={theme === "light" ? "#3b82f6" : "#FFFFFF"}
                />
              </div>
              <h1 className="md:text-2xl text-xl font-black text-center text-slate-800 dark:text-white relative z-10 transition-transform duration-500 group-hover:scale-110">
                Magical Sparkles
              </h1>
           </div>
        </ComponentPreview>
        </IntersectionRender>


      </div>

      {/* Large Featured Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Flip Words */}
        <ComponentPreview title="Flip Words" code={`<FlipWords words={words} />`}>
          <div className="h-60 flex justify-center items-center px-4">
             <div className="text-3xl font-normal text-neutral-600 dark:text-neutral-400">
               Build <FlipWords words={words} /> <br /> websites with BlazeUI
             </div>
          </div>
        </ComponentPreview>

        {/* Animated Tooltip */}
        <ComponentPreview title="Animated Tooltip" code={`<AnimatedTooltip items={PEOPLE} />`}>
          <div className="flex flex-row items-center justify-center mb-10 w-full h-60">
             <AnimatedTooltip items={PEOPLE} />
          </div>
        </ComponentPreview>

        {/* Animated Tabs */}
        <div className="col-span-1 md:col-span-2">
            <ComponentPreview title="Animated Tabs" code={`<Tabs tabs={tabs} />`}>
            <div className="h-[25rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10 border rounded-xl p-4">
                <AnimatedTabs tabs={[
                { title: "Product", value: "product", content: <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">Product Tab Content</div> },
                { title: "Services", value: "services", content: <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-indigo-900">Services Tab Content</div> },
                { title: "About", value: "about", content: <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-700 to-teal-900">About Tab Content</div> },
                ]} />
            </div>
            </ComponentPreview>
        </div>
      </div>

      <div className="space-y-12">
        {/* Infinite Moving Cards */}
        <IntersectionRender>
           <ComponentPreview title="Infinite Moving Cards" code={`<InfiniteMovingCards items={items} />`}>
             <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden border">
               <InfiniteMovingCards
                 items={[
                   { quote: "BlazeUI is life-changing for my workflow.", name: "Alex Rivera", title: "Senior Designer" },
                   { quote: "The performance overhead is zero.", name: "Sarah Chen", title: "Lead Developer" },
                   { quote: "Stunning components that just work.", name: "Mark Wilson", title: "Founder" },
                   { quote: "I can't imagine building without it.", name: "Elena Gilbert", title: "Frontend Engineer" },
                 ]}
                 direction="right"
                 speed="slow"
               />
             </div>
           </ComponentPreview>
        </IntersectionRender>

        {/* Background Boxes */}
        <IntersectionRender>
           <ComponentPreview title="Background Boxes" code={`<Boxes />`}>
              <div className="h-96 relative w-full overflow-hidden bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center rounded-lg border dark:border-none">
                <div className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <Boxes />
                <h1 className={cn("md:text-4xl text-xl text-black dark:text-white relative z-20")}>
                    Interactive Grid Boxes
                </h1>
                <p className="text-center mt-2 text-neutral-600 dark:text-neutral-300 relative z-20">
                    Hover over the grid to see the magic happen
                </p>
              </div>
           </ComponentPreview>
        </IntersectionRender>

        {/* Wavy Background */}
         <IntersectionRender>
            <ComponentPreview title="Wavy Background" code={`<WavyBackground />`}>
                <div className="h-[30rem] w-full relative overflow-hidden rounded-xl border">
                    <WavyBackground className="max-w-4xl mx-auto pb-40" containerClassName="h-full">
                        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center drop-shadow-md">
                            Wavy Background
                        </p>
                        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center drop-shadow-md">
                            Leverage the power of simplex noise for smooth waves
                        </p>
                    </WavyBackground>
                </div>
            </ComponentPreview>
         </IntersectionRender>

        <IntersectionRender>
          <ComponentPreview title="Text Reveal" code={`<TextReveal text="Reveal your story..." />`}>
            <div className="h-[20rem] flex items-center justify-center bg-zinc-50 dark:bg-black rounded-2xl overflow-hidden p-6 relative border dark:border-none shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 dark:from-black via-zinc-50/50 dark:via-black/50 to-transparent z-10 pointer-events-none h-20 top-0" />
              <TextReveal 
                text="Experience the power of BlazeUI components today. Beautiful, fast, and accessible components for your next project." 
                className="relative z-20 max-w-lg text-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 dark:from-black via-zinc-50/50 dark:via-black/50 to-transparent z-10 pointer-events-none h-20 bottom-0" />
            </div>
          </ComponentPreview>
        </IntersectionRender>

        {/* 3D Card */}
        <IntersectionRender>
          <ComponentPreview title="3D Card Effect" code={`<CardContainer>...</CardContainer>`}>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">Make things float</CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">Hover over this card to see the 3D effect</CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" loading="lazy" decoding="async" />
                </CardItem>
              </CardBody>
            </CardContainer>
          </ComponentPreview>
        </IntersectionRender>

        {/* Tracing Beam */}
        <IntersectionRender>
          <ComponentPreview title="Tracing Beam" code={`<TracingBeam>...</TracingBeam>`}>
            <div ref={tracingBeamContainerRef} className="h-[30rem] relative w-full bg-zinc-50 dark:bg-slate-950 overflow-y-auto rounded-xl border border-zinc-200 dark:border-white/10">
               <TracingBeam container={tracingBeamContainerRef} className="px-6">
                  <div className="max-w-xl mx-auto antialiased pt-4 pb-10">
                     {dummyContent.map((item, i) => (
                       <div key={i} className="mb-10">
                         <h2 className="bg-primary text-white rounded-full text-xs w-fit px-3 py-1 mb-4">{item.badge}</h2>
                         <p className="text-xl font-bold text-black dark:text-white mb-4">{item.title}</p>
                         <div className="text-sm text-neutral-600 dark:text-neutral-400">{item.description}</div>
                         {item.image && <img src={item.image} className="mt-4 rounded-lg h-40 w-full object-cover" />}
                       </div>
                     ))}
                  </div>
               </TracingBeam>
            </div>
          </ComponentPreview>
        </IntersectionRender>

        {/* Vortex Background */}
        <IntersectionRender>
          <ComponentPreview title="Vortex Background" code={`<Vortex>...</Vortex>`}>
            <div className="w-full mx-auto rounded-md h-[40rem] overflow-hidden shadow-inner bg-slate-900 border border-slate-800">
              <Vortex backgroundColor="black" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center italic drop-shadow-lg">Modern Vortex Effect</h2>
                <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center drop-shadow-md">Seamlessly integrated particle animations for immersive headers.</p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                  <MovingBorderButton borderRadius="1.75rem" className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                     Get Started
                  </MovingBorderButton>
                </div>
              </Vortex>
            </div>
          </ComponentPreview>
        </IntersectionRender>

        {/* Canvas Reveal */}
        <IntersectionRender>
          <ComponentPreview title="Canvas Reveal" code={`<CanvasRevealEffect />`}>
            <div className="py-20 flex bg-white dark:bg-black w-full gap-4 mx-auto px-8 justify-center rounded-xl border overflow-hidden">
                  <CanvasCard title="Hover me" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                  </CanvasCard>
                  <CanvasCard title="Neon" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-emerald-900"
                        colors={[[16, 185, 129]]}
                        dotSize={2}
                    />
                  </CanvasCard>
              </div>
          </ComponentPreview>
        </IntersectionRender>
      </div>
    </div>
  );
};

export default PremiumSection;
